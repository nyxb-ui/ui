import { writeFile } from 'node:fs/promises'
import { downloadTemplate } from 'giget'
import type { DownloadTemplateResult } from 'giget'
import { relative, resolve } from 'pathe'
import { Command } from 'commander'
import { execaCommand } from 'execa'
import { installDependencies } from 'nypm'
import type { PackageManagerName } from 'nypm'
import prompts from 'prompts'
import { logger } from '~/src/utils/logger'

interface Options {
   force?: boolean
   offline?: boolean
   preferOffline?: boolean
   cwd?: string
   install?: boolean
   gitInit?: boolean
}

const DEFAULT_REGISTRY = 'https://raw.githubusercontent.com/nyxb-ui/templates/templates/templates'
const TEMPLATES = [
   { name: 'portfolio', source: 'portfolio' },
   { name: 'startup', source: 'startup' },
]

export const template = new Command()
   .name('template')
   .description('Initialize a fresh project')
   .option('--install', 'Install dependencies after setup')
   .option('--git-init', 'Initialize a git repository')
   .action(async (opts: Options) => {
      const cwd = resolve(opts.cwd || '.')

      // Prompt for project directory
      const { projectDir } = await prompts({
         type: 'text',
         name: 'projectDir',
         message: 'What is the name of your project directory?',
         initial: 'my-app',
      })

      // Select template
      const { templateName } = await prompts({
         type: 'select',
         name: 'templateName',
         message: 'Which template would you like to use?',
         choices: TEMPLATES.map(template => ({ title: template.name, value: template.source })),
      })

      // Download template
      let template: DownloadTemplateResult
      try {
         template = await downloadTemplate(templateName, {
            dir: projectDir,
            cwd,
            force: Boolean(opts.force),
            offline: Boolean(opts.offline),
            preferOffline: Boolean(opts.preferOffline),
            registry: DEFAULT_REGISTRY,
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
      logger.info(`\n✨ Nyxb project has been created with the \`${templateName}\` template. Next steps:`)
      const nextSteps = [
         `cd ${relativeProjectPath}`,
         `Start development server with \`${packageManager} run dev\``,
      ]

      for (const step of nextSteps)
         logger.info(` › ${step}`)
   })
