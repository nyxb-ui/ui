import nyxb from '@nyxb/eslint-config'

export default nyxb(
   {
      formatters: true,
      react: true,
   },
   {
      rules: {
         'node/prefer-global/process': 0,
         'react-refresh/only-export-components': 0,
         'ts/no-require-imports': 0,
         'ts/no-var-requires': 0,
         'array-callback-return': 0,
         'react-dom/no-dangerously-set-innerhtml': 0,
         'react/no-array-index-key': 0,
         'react/no-unstable-default-props': 0,
         'ts/no-use-before-define': 0,
         'react-hooks/exhaustive-deps': 0,
         'unused-imports/no-unused-vars': 0,
         'unicorn/no-new-array': 0,
         'react/no-clone-element': 0,
         'react/no-children-for-each': 0,
         'react/no-unstable-context-value': 0,
         'react-dom/no-missing-iframe-sandbox': 0,
         'react/no-nested-components': 0,
         'react/no-children-to-array': 0,
         'ts/no-redeclare': 0,
         'react/prefer-destructuring-assignment': 0,
         'react/no-children-map': 0,
         'jsdoc/check-param-names': 0,
         'no-unused-expressions': 0,
         'react/no-missing-key': 0,
         'ts/ban-ts-comment': 0,
         'react-dom/no-missing-button-type': 0,
         'eslint-comments/no-unlimited-disable': 0,
      },
   },
   {
      ignores: ['**/dist/**', '**/node_modules/**', 'packages/cli/test/**'],
   },
)
