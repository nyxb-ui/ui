import { describe, it, expect, vi, beforeEach } from 'vitest'
import { readFile, readdir, writeFile, FileHandle } from 'node:fs/promises'
import { PathLike } from 'node:fs'
import { downloadTemplate, type DownloadTemplateResult } from 'giget'
import { execaCommand } from 'execa'
import { installDependencies } from 'nypm'
import prompts, { type PromptObject } from 'prompts'
import { template } from '../../src/commands/template'
import { logger } from '../../src/utils/logger'

// Mocking the dependencies
vi.mock('node:fs/promises')
vi.mock('giget')
vi.mock('execa')
vi.mock('nypm')
vi.mock('prompts')
vi.mock('~/src/utils/logger')

describe('template command', () => {
   beforeEach(() => {
      vi.clearAllMocks()
   })

   it('should read templates from local directory', async () => {
      const mockTemplates = [
         { name: 'starter-npm', defaultDir: 'src', url: 'https://nyxb.nexus', tar: 'https://codeload.github.com/nyxb/starter-npm/tar.gz/refs/heads/main' },
         { name: 'starter-vscode', defaultDir: 'src', url: 'https://nyxb.nexus', tar: 'https://codeload.github.com/nyxb/starter-vscode/tar.gz/refs/heads/main' },
      ]

      // Mock readdir and readFile
      vi.mocked(readdir).mockResolvedValue(['starter-npm.json', 'starter-vscode.json'] as any)
      vi.mocked(readFile).mockImplementation(async (path: PathLike | FileHandle) => {
         if (typeof path === 'string' && path.includes('starter-npm.json')) {
            return JSON.stringify(mockTemplates[0])
         } else if (typeof path === 'string' && path.includes('starter-vscode.json')) {
            return JSON.stringify(mockTemplates[1])
         }
         return ''
      })

      // Mock prompts for package manager selection
      vi.mocked(prompts).mockImplementation(async (questions: PromptObject<string> | PromptObject<string>[]) => {
         if (!Array.isArray(questions) && questions.name === 'templateName') {
            return { templateName: mockTemplates[0] }
         } else if (!Array.isArray(questions) && questions.name === 'packageManager') {
            return { packageManager: 'npm' }
         }
         return {}
      })

      // Mock writeFile for .npmrc
      vi.mocked(writeFile).mockResolvedValue(undefined)

      // Mock downloadTemplate
      vi.mocked(downloadTemplate).mockResolvedValue({ dir: 'project-dir' } as DownloadTemplateResult)

      // Mock installDependencies
      vi.mocked(installDependencies).mockResolvedValue(undefined)

      // Mock execaCommand
      vi.mocked(execaCommand).mockResolvedValue({} as any)

      // Mock logger
      vi.mocked(logger.info).mockImplementation(() => {})
      vi.mocked(logger.error).mockImplementation(() => {})
      vi.mocked(logger.warn).mockImplementation(() => {})

      // Execute the command
      await template.parseAsync(['node', 'template', 'project-dir', '--install', '--git-init'])

      // Assertions
      expect(readdir).toHaveBeenCalledWith('templates')
      expect(readFile).toHaveBeenCalledTimes(2)
      expect(prompts).toHaveBeenCalled()
      expect(downloadTemplate).toHaveBeenCalledWith(mockTemplates[0].tar, expect.any(Object))
      expect(installDependencies).toHaveBeenCalled()
      expect(execaCommand).toHaveBeenCalled()
      expect(logger.info).toHaveBeenCalled()
   })

   it('should handle errors when reading templates', async () => {
      // Mock readdir to throw an error
      vi.mocked(readdir).mockRejectedValue(new Error('Failed to read directory'))

      // Mock logger
      vi.mocked(logger.error).mockImplementation(() => {})

      // Execute the command and expect it to exit with an error
      await expect(template.parseAsync(['node', 'template', 'project-dir'])).rejects.toThrow()

      // Assertions
      expect(logger.error).toHaveBeenCalledWith('Failed to read templates from local directory')
   })
})
