#!/usr/bin/env node
import { Command } from 'commander'
import { getPackageInfo } from './utils/get-package-info'
import { add } from '~/src/commands/add'
import { diff } from '~/src/commands/diff'
import { init } from '~/src/commands/init'
import { createRemoveCommand } from '~/src/commands/remove'

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

async function main() {
   const packageInfo = await getPackageInfo()

   const program = new Command()
      .name('nyxbui')
      .description('Manage nyxbui components and dependencies to your project')
      .version(
         packageInfo.version || '1.0.0',
         '-v, --version',
         'display the version number',
      )

   program
      .addCommand(init)
      .addCommand(add)
      .addCommand(diff)
      .addCommand(createRemoveCommand())

   program.parse()
}

main()
