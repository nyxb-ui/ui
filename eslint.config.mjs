import nyxb from '@nyxb/eslint-config'

export default nyxb(
   {
      formatters: true,
      react: true,
      tailwindcss: {
         settings: {
            callees: ['classnames', 'ny'],
            config: './apps/web/tailwind.config.ts',
         },
      },
   },
   {
      rules: {
         'ts/no-unused-expressions': 0,
         'unused-imports/no-unused-vars': 0,
         'unused-imports/no-unused-imports': 0,
         'no-template-curly-in-string': 0,
         'import/no-duplicates': 0,
      },
   },
   {
      ignores: [
         '**/dist/**',
         '**/node_modules/**',
         'packages/cli/test/**',
         'packages/nyxb/test/**',
         '**/__registry__/**',
         '.content-collections/**',
      ],
   },
)
