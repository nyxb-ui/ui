import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { withContentlayer } from 'next-contentlayer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
   output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
   reactStrictMode: true,
   productionBrowserSourceMaps: true,
   experimental: {
      optimizeCss: true,
      turbo: {
         resolveExtensions: [
            '.mdx',
            '.tsx',
            '.ts',
            '.jsx',
            '.js',
            '.mjs',
            '.json',
         ],
      },
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
         },
         {
            protocol: 'https',
            hostname: 'images.unsplash.com',
         },
         {
            protocol: 'https',
            hostname: 'cdn.nyxbui.design',
         },
         {
            protocol: 'http',
            hostname: 'localhost',
         },
      ],
   },
   env: {
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
   },
   compiler: {
      // Remove console.log from production except for error logs
      removeConsole:
         process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
   },
   async redirects() {
      return [
         {
            source: '/discord',
            destination: 'https://discord.gg/aBxNpG7fMP',
            permanent: true,
         },
         {
            source: '/components',
            destination: '/docs/components/accordion',
            permanent: true,
         },
         {
            source: '/docs/components',
            destination: '/docs/components/accordion',
            permanent: true,
         },
         {
            source: '/examples',
            destination: '/examples/mail',
            permanent: false,
         },
         {
            source: '/components/:path*',
            destination: '/docs/components/:path*',
            permanent: true,
         },
         {
            source: '/docs/primitives/:path*',
            destination: '/docs/components/:path*',
            permanent: true,
         },
         {
            source: '/figma',
            destination: '/docs/figma',
            permanent: true,
         },
         {
            source: '/docs/forms',
            destination: '/docs/components/form',
            permanent: false,
         },
         {
            source: '/docs/forms/react-hook-form',
            destination: '/docs/components/form',
            permanent: false,
         },
      ]
   },
   webpack: (config) => {
      config.resolve.alias.jotai = path.resolve(__dirname, 'node_modules/jotai')

      return config
   },
}

export default withContentlayer(nextConfig)
