const baseConfig = require('../../tailwind.config.ts')

/** @type {import('tailwindcss').Config} */
module.exports = {
   ...baseConfig,
   content: [
      ...baseConfig.content,
      'content/**/*.mdx',
      'registry/**/*.{ts,tsx}',
   ],
}
