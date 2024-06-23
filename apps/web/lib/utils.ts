import { type ClassValue, clsx } from 'clsx'
import type { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

// Funktion zum Kombinieren von Klassennamen
export function ny(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

// Funktion zum Formatieren von Datum
export function formatDate(input: string | number): string {
   const date = new Date(input)
   return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
   })
}

// Funktion zum Generieren einer absoluten URL
export function absoluteUrl(path: string) {
   return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

// Funktion zum Kürzen eines Strings
export function truncate(str: string | null, length: number) {
   if (!str || str.length <= length)
      return str
   return `${str.slice(0, length - 3)}...`
}

// Fetch-Wrapper zum Abrufen von JSON-Daten
export function fetcher(...args: Parameters<typeof fetch>) {
   return fetch(...args).then(res => res.json())
}

/**
 * Kapitalisiert die ersten Buchstaben der Wörter in einem String.
 * @param {string} str - Der zu modifizierende String
 * @param {boolean=false} lower - Ob alle anderen Buchstaben klein geschrieben werden sollen
 * @return {string}
 */
export function capitalize(str: string, lower = false) {
   return (lower ? str.toLowerCase() : str).replace(/(?:^|[\s"'([{])+\S/g, match =>
      match.toUpperCase())
}

// Funktion zum Konstruieren von Metadaten
export function constructMetadata({
   title = 'Nyxb UI - Modern React + Tailwind CSS components & Templates',
   description = 'Nyxb UI is a curated collection of the best landing page components built using React + Tailwind CSS + Framer Motion',
   image = absoluteUrl('/api/og'),
   ...props
}: {
   title?: string
   description?: string
   image?: string
   [key: string]: Metadata[keyof Metadata]
}): Metadata {
   return {
      title,
      description,
      keywords: [
         'React',
         'Tailwind CSS',
         'Framer Motion',
         'Landing Page',
         'Components',
         'Next.js',
      ],
      openGraph: {
         title,
         description,
         type: 'website',
         images: [
            {
               url: image,
               width: 1200,
               height: 630,
               alt: title,
            },
         ],
      },
      twitter: {
         card: 'summary_large_image',
         title,
         description,
         images: [image],
         creator: '@nyxb0',
      },
      icons: '/favicon.ico',
      metadataBase: new URL('https://nyxbui.design'),
      authors: [
         {
            name: 'nyxb',
            url: 'https://twitter.com/nyxb0',
         },
      ],
      creator: 'nyxb',
      ...props,
   }
}
