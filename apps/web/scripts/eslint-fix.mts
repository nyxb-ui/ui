import { exec } from 'node:child_process'
import path from 'node:path'
import cliProgress from 'cli-progress'

const REGISTRY_PATHS = [
   path.join(process.cwd(), 'public/registry'),
   path.join(process.cwd(), '__registry__'),
   path.join(process.cwd(), 'registry/miami/block'),
   path.join(process.cwd(), 'registry/default/block'),
]

function runEslintFix() {
   return new Promise<void>((resolve, reject) => {
      exec(`eslint ${REGISTRY_PATHS.join(' ')} --fix`, (error) => {
         if (error) {
            // need empty
         }
         else {
            // need empty
         }
         resolve()
      })
   })
}

async function main() {
   const progressBar = new cliProgress.SingleBar({
      format: 'progress [{bar}] {percentage}% | {value}/{total}',
   })

   progressBar.start(2, 0)

   await runEslintFix()
   progressBar.update(1)

   await runEslintFix()
   progressBar.update(2)

   progressBar.stop()
   // eslint-disable-next-line no-console
   console.log('\n ✔︎ All runs completed')
}

main().catch((error) => {
   console.error(`Script error: ${error}`)
   process.exit(1)
})
