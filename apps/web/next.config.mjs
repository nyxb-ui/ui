import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
   output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
   reactStrictMode: true,
   productionBrowserSourceMaps: true,
   experimental: {
      optimizeCss: true,
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
      ],
      domains: ['localhost', 'cdn.nyxui.design'],
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
            destination: 'https://discord.gg/X4BBMBjHNf',
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
}

export default withContentlayer(nextConfig)
