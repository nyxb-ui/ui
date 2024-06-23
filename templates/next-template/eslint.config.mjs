import nyxb from '@nyxb/eslint-config'

export default nyxb(
   {
      formatters: true,
      react: true,
   },
   {
      rules: {},
   },
   {
      ignores: ['**/node_modules/**'],
   },
)
