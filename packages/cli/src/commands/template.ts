import { readFile, writeFile } from 'node:fs/promises'
import { downloadTemplate } from 'giget'
import type { DownloadTemplateResult } from 'giget'
import { relative, resolve } from 'pathe'
import { Command } from 'commander'
import { execaCommand } from 'execa'
import { installDependencies } from 'nypm'
import type { PackageManagerName } from 'nypm'
import prompts from 'prompts'
import fetch from 'node-fetch'
import { logger } from '~/src/utils/logger'

interface Template {
   name: string
   defaultDir: string
   url: string
   tar: string
}

interface Options {
   force?: boolean
   offline?: boolean
   preferOffline?: boolean
   cwd?: string
   install?: boolean
   gitInit?: boolean
}

interface File {
   name: string
   download_url: string
}

export const template = new Command()
   .name('template')
   .description('Initialize a fresh project')
   .argument('[dir]', 'Project directory', './') // Set default directory to './'
   .option('--install', 'Install dependencies after setup')
   .option('--git-init', 'Initialize a git repository')
   .action(async (dir: string, opts: Options) => {
      const cwd = resolve(opts.cwd || '.')

      // Fetch templates from remote repository
      const templates: Template[] = []
      try {
         const response = await fetch('https://api.github.com/repos/nyxb-ui/templates/contents/templates?ref=main', {
            headers: {
               Accept: 'application/vnd.github.v3+json',
            },
         })
         if (!response.ok) {
            throw new Error('Failed to fetch templates from remote repository')
         }
         const files: File[] = await response.json() as File[]
         for (const file of files) {
            if (file.name.endsWith('.json')) {
               const fileResponse = await fetch(file.download_url)
               if (!fileResponse.ok) {
                  throw new Error(`Failed to download template file: ${file.name}`)
               }
               const content = await fileResponse.text()
               const template = JSON.parse(content) as Template
               templates.push(template)
            }
         }
      }
      catch (error) {
         logger.error((error as Error).toString())
         process.exit(1)
      }

      // Select template
      const { templateName } = await prompts({
         type: 'select',
         name: 'templateName',
         message: 'Which template would you like to use?',
         choices: templates.map(template => ({ title: template.name, value: template.name })),
      })

      // Find the selected template
      const selectedTemplate = templates.find(t => t.name === templateName)
      if (!selectedTemplate) {
         logger.error('Selected template not found')
         process.exit(1)
      }

      // Download template
      let template: DownloadTemplateResult
      try {
         template = await downloadTemplate(selectedTemplate.tar, {
            dir,
            cwd,
            force: Boolean(opts.force),
            offline: Boolean(opts.offline),
            preferOffline: Boolean(opts.preferOffline),
         })
      }
      catch (error) {
         logger.error((error as Error).toString())
         process.exit(1)
      }

      // Resolve package manager
      const packageManagerOptions: PackageManagerName[] = ['npm', 'pnpm', 'yarn', 'bun']
      const { packageManager } = await prompts({
         type: 'select',
         name: 'packageManager',
         message: 'Which package manager would you like to use?',
         choices: packageManagerOptions.map(pm => ({ title: pm, value: pm })),
      })

      // Get relative project path
      const relativeProjectPath = relative(process.cwd(), template.dir)

      // Write .npmrc with `shamefully-hoist=true` for pnpm
      if (packageManager === 'pnpm')
         await writeFile(`${relativeProjectPath}/.npmrc`, 'shamefully-hoist=true')

      // Install project dependencies
      if (opts.install) {
         logger.info('Installing dependencies...')
         try {
            await installDependencies({
               cwd: relativeProjectPath,
               packageManager: {
                  name: packageManager,
                  command: packageManager,
               },
            })
            logger.info('Installation completed.')
         }
         catch (error) {
            logger.error((error as Error).toString())
            process.exit(1)
         }
      }

      // Initialize git repository if selected
      if (opts.gitInit) {
         logger.info('Initializing git repository...')
         try {
            await execaCommand(`
               git init --quiet ${template.dir} &&
               git --git-dir=${template.dir}/.git --work-tree=${template.dir} add . &&
               git --git-dir=${template.dir}/.git --work-tree=${template.dir} commit --quiet -m "🔰 This is where it all begins..."
            `, {
               stdio: 'inherit',
               shell: true,
            })
         }
         catch (error) {
            logger.warn(`Failed to initialize git repository: ${error}`)
         }
      }

      // Display next steps
      logger.info(`\n✨ Nyxb project has been created with the \`${template.name}\` template. Next steps:`)
      const nextSteps = [
         `cd ${relativeProjectPath}`,
         `Start development server with \`${packageManager} run dev\``,
      ]

      for (const step of nextSteps)
         logger.info(` › ${step}`)
   })
