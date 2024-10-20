import chalk from 'chalk'

export const DEPRECATED_MESSAGE = chalk.yellow(
  `\nNote: The nyxb-ui CLI is going to be deprecated soon. Please use ${chalk.bold(
    'npx nyxb',
  )} instead.\n`,
)
