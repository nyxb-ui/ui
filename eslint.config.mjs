import nyxb from '@nyxb/eslint-config'

export default nyxb(
   {
      formatters: true,
      react: true,
      tailwindcss: {
         settings: {
            callees: ['classnames', 'ny', 'cn'],
            config: './apps/web/tailwind.config.ts',
         },
      },
   },
   {
      rules: {
         'ts/no-unused-expressions': 0,
         'unused-imports/no-unused-vars': 0,
         'unused-imports/no-unused-imports': 0,
      },
   },
   {
      ignores: ['**/dist/**', '**/node_modules/**', 'packages/cli/test/**', '**/__registry__/**'],
   },
)
