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
      rules: {},
   },
   {
      ignores: ['**/dist/**', '**/node_modules/**', 'packages/cli/test/**'],
   },
)
