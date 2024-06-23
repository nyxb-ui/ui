import nyxb from '@nyxb/eslint-config'

export default nyxb(
   {
      formatters: true,
      react: true,
   },
   {
      rules: {
         'react/no-useless-fragment': 0,
         'react/no-array-index-key': 0,
         'react-refresh/only-export-components': 0,
         'node/prefer-global/process': 0,
      },
   },
   {
      ignores: ['**/node_modules/**'],
   },
)
