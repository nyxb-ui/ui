/** @type {import('postcss-load-config').Config} */
const config = {
   plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      'tailwindcss': {},
      'autoprefixer': {},
   },
}

export default config
