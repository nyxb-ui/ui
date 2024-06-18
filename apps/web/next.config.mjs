import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
   output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
   reactStrictMode: true,
   productionBrowserSourceMaps: true,
   experimental: {
      optimizeCss: true,
   },
   compiler: {
      // Remove console.log from production except for error logs
      removeConsole:
       process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
   },
   images: {
      domains: ['localhost', 'cdn.nyxui.design'],
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
            destination: '/docs/components/marquee',
            permanent: true,
         },
         {
            source: '/components/:path*',
            destination: '/docs/components/:path*',
            permanent: true,
         },
         {
            source: '/docs/components',
            destination: '/docs/components/marquee',
            permanent: true,
         },
      ]
   },
}

export default withContentlayer(nextConfig)
