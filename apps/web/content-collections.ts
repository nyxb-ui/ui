import { readFileSync } from 'node:fs'
import path from 'path'
import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { createHighlighter } from 'shiki'
import { visit } from 'unist-util-visit'
import type { BlogPosting, WithContext } from 'schema-dts'

import { rehypeComponent } from './lib/rehype-component'
import { rehypeNpmCommand } from './lib/rehype-npm-command'

const prettyCodeOptions: Options = {
   theme: JSON.parse(
      String(readFileSync(path.join(process.cwd(), '/lib/themes/dark.json'))),
   ),
   getHighlighter: options =>
      createHighlighter({
         ...options,
      }),
   onVisitLine(node) {
      // Prevent lines from collapsing in `display: grid` mode, and allow empty
      // lines to be copy/pasted
      if (node.children.length === 0) {
         node.children = [{ type: 'text', value: ' ' }]
      }
   },
   onVisitHighlightedLine(node) {
      if (!node.properties.className) {
         node.properties.className = []
      }
      node.properties.className.push('line--highlighted')
   },
   onVisitHighlightedChars(node) {
      if (!node.properties.className) {
         node.properties.className = []
      }
      node.properties.className = ['word--highlighted']
   },
}

const computedFields = {
   url: {
      type: 'string',
      resolve: (post: any) => `/${post._meta.path}`,
   },
   image: {
      type: 'string',
      resolve: (post: any) =>
     `${process.env.NEXT_PUBLIC_APP_URL}/api/og?title=${encodeURI(post.title)}`,
   },
   slug: {
      type: 'string',
      resolve: (doc: any) => `/${doc._meta.path}`,
   },
   slugAsParams: {
      type: 'string',
      resolve: (doc: any) => doc._meta.path.split('/').slice(1).join('/'),
   },
   structuredData: {
      type: 'json',
      resolve: (doc: any) =>
         ({
            '@context': 'https://schema.org',
            '@type': `BlogPosting`,
            'headline': doc.title,
            'datePublished': doc.date,
            'dateModified': doc.date,
            'description': doc.summary,
            'image': doc.image,
            'url': `https://magicui.design/${doc._meta.path}`,
            'author': {
               '@type': 'Person',
               'name': doc.author,
               'url': `https://twitter.com/${doc.author}`,
            },
         }) as WithContext<BlogPosting>,
   },
}

const documents = defineCollection({
   name: 'Doc',
   directory: 'content/docs',
   include: '**/*.mdx',
   schema: z => ({
      title: z.string(),
      description: z.string(),
      date: z.string().optional(),
      published: z.boolean().default(true),
      links: z.object({
         doc: z.string().optional(),
         api: z.string().optional(),
      }).optional(),
      featured: z.boolean().optional().default(false),
      toc: z.boolean().optional().default(true),
      author: z.string().optional(),
      video: z.string().optional(),
      component: z.boolean().optional(),
      summary: z.string().optional(),
      image: z.string().optional(),
   }),
   transform: async (document, context) => {
      const body = await compileMDX(context, document, {
         remarkPlugins: [remarkGfm],
         rehypePlugins: [
            rehypeSlug,
            rehypeComponent,
            () => (tree) => {
               visit(tree, (node) => {
                  if (node?.type === 'element' && node?.tagName === 'pre') {
                     const [codeEl] = node.children
                     if (codeEl.tagName !== 'code') {
                        return
                     }

                     if (codeEl.data?.meta) {
                        // Extract event from meta and pass it down the tree.
                        const regex = /event="([^"]*)"/
                        const match = codeEl.data?.meta.match(regex)
                        if (match) {
                           node.__event__ = match ? match[1] : null
                           codeEl.data.meta = codeEl.data.meta.replace(regex, '')
                        }
                     }
                     node.__rawString__ = codeEl.children?.[0].value
                     node.__src__ = node.properties?.__src__
                     node.__style__ = node.properties?.__style__
                  }
               })
            },
            [rehypePrettyCode, prettyCodeOptions],
            () => (tree) => {
               visit(tree, (node) => {
                  if (node?.type === 'element' && node?.tagName === 'figure') {
                     if (!('data-rehype-pretty-code-figure' in node.properties)) {
                        return
                     }

                     const preElement = node.children.at(-1)
                     if (preElement.tagName !== 'pre') {
                        return
                     }

                     preElement.properties.__withMeta__
                = node.children.at(0).tagName === 'div'
                     preElement.properties.__rawString__ = node.__rawString__

                     if (node.__src__) {
                        preElement.properties.__src__ = node.__src__
                     }

                     if (node.__event__) {
                        preElement.properties.__event__ = node.__event__
                     }

                     if (node.__style__) {
                        preElement.properties.__style__ = node.__style__
                     }
                  }
               })
            },
            rehypeNpmCommand,
            [
               rehypeAutolinkHeadings,
               {
                  properties: {
                     className: ['subheading-anchor'],
                     ariaLabel: 'Link to section',
                  },
               },
            ],
         ],
      })
      return {
         ...document,
         slug: `/${document._meta.path}`,
         slugAsParams: document._meta.path.split('/').slice(1).join('/'),
         structuredData: {
            '@context': 'https://schema.org',
            '@type': `BlogPosting`,
            'headline': document.title,
            ...(document.date && { datePublished: document.date }),
            ...(document.date && { dateModified: document.date }),
            ...(document.description && { description: document.description }),
            ...(document.image && { image: document.image }),
            'url': `https://magicui.design/${document._meta.path}`,
            'author': {
               '@type': 'Person',
               'name': document.author,
               'url': `https://twitter.com/${document.author}`,
            },
         },
         body: {
            raw: document.content,
            code: body,
         },
      }
   },
})

const pages = defineCollection({
   name: 'Page',
   directory: 'content/pages',
   include: '**/*.mdx',
   schema: z => ({
      title: z.string(),
      description: z.string().optional(),
   }),
   transform: async (document, context) => {
      const body = await compileMDX(context, document, {
         remarkPlugins: [remarkGfm],
         rehypePlugins: [
            rehypeSlug,
            rehypeComponent,
            () => (tree) => {
               visit(tree, (node) => {
                  if (node?.type === 'element' && node?.tagName === 'pre') {
                     const [codeEl] = node.children
                     if (codeEl.tagName !== 'code') {
                        return
                     }

                     if (codeEl.data?.meta) {
                        // Extract event from meta and pass it down the tree.
                        const regex = /event="([^"]*)"/
                        const match = codeEl.data?.meta.match(regex)
                        if (match) {
                           node.__event__ = match ? match[1] : null
                           codeEl.data.meta = codeEl.data.meta.replace(regex, '')
                        }
                     }
                     node.__rawString__ = codeEl.children?.[0].value
                     node.__src__ = node.properties?.__src__
                     node.__style__ = node.properties?.__style__
                  }
               })
            },
            [rehypePrettyCode, prettyCodeOptions],
            () => (tree) => {
               visit(tree, (node) => {
                  if (node?.type === 'element' && node?.tagName === 'figure') {
                     if (!('data-rehype-pretty-code-figure' in node.properties)) {
                        return
                     }

                     const preElement = node.children.at(-1)
                     if (preElement.tagName !== 'pre') {
                        return
                     }

                     preElement.properties.__withMeta__
                = node.children.at(0).tagName === 'div'
                     preElement.properties.__rawString__ = node.__rawString__

                     if (node.__src__) {
                        preElement.properties.__src__ = node.__src__
                     }

                     if (node.__event__) {
                        preElement.properties.__event__ = node.__event__
                     }

                     if (node.__style__) {
                        preElement.properties.__style__ = node.__style__
                     }
                  }
               })
            },
            rehypeNpmCommand,
            [
               rehypeAutolinkHeadings,
               {
                  properties: {
                     className: ['subheading-anchor'],
                     ariaLabel: 'Link to section',
                  },
               },
            ],
         ],
      })
      return {
         ...document,
         slug: `/${document._meta.path}`,
         slugAsParams: document._meta.path.split('/').slice(1).join('/'),
         body: {
            raw: document.content,
            code: body,
         },
      }
   },
})

const showcases = defineCollection({
   name: 'Showcase',
   directory: 'content/showcase',
   include: '**/*.mdx',
   schema: z => ({
      title: z.string(),
      author: z.string().optional(),
      description: z.string().optional(),
      image: z.string(),
      href: z.string(),
      affiliation: z.string().optional(),
      featured: z.boolean().optional().default(false),
      date: z.string().optional(),
      summary: z.string().optional(),
   }),
   transform: async (document, context) => {
      const body = await compileMDX(context, document, {
         remarkPlugins: [remarkGfm],
         rehypePlugins: [
            rehypeSlug,
            rehypeComponent,
            () => (tree) => {
               visit(tree, (node) => {
                  if (node?.type === 'element' && node?.tagName === 'pre') {
                     const [codeEl] = node.children
                     if (codeEl.tagName !== 'code') {
                        return
                     }

                     if (codeEl.data?.meta) {
                        // Extract event from meta and pass it down the tree.
                        const regex = /event="([^"]*)"/
                        const match = codeEl.data?.meta.match(regex)
                        if (match) {
                           node.__event__ = match ? match[1] : null
                           codeEl.data.meta = codeEl.data.meta.replace(regex, '')
                        }
                     }
                     node.__rawString__ = codeEl.children?.[0].value
                     node.__src__ = node.properties?.__src__
                     node.__style__ = node.properties?.__style__
                  }
               })
            },
            [rehypePrettyCode, prettyCodeOptions],
            () => (tree) => {
               visit(tree, (node) => {
                  if (node?.type === 'element' && node?.tagName === 'figure') {
                     if (!('data-rehype-pretty-code-figure' in node.properties)) {
                        return
                     }

                     const preElement = node.children.at(-1)
                     if (preElement.tagName !== 'pre') {
                        return
                     }

                     preElement.properties.__withMeta__
                = node.children.at(0).tagName === 'div'
                     preElement.properties.__rawString__ = node.__rawString__

                     if (node.__src__) {
                        preElement.properties.__src__ = node.__src__
                     }

                     if (node.__event__) {
                        preElement.properties.__event__ = node.__event__
                     }

                     if (node.__style__) {
                        preElement.properties.__style__ = node.__style__
                     }
                  }
               })
            },
            rehypeNpmCommand,
            [
               rehypeAutolinkHeadings,
               {
                  properties: {
                     className: ['subheading-anchor'],
                     ariaLabel: 'Link to section',
                  },
               },
            ],
         ],
      })
      return {
         ...document,
         slug: `/${document._meta.path}`,
         slugAsParams: document._meta.path.split('/').slice(1).join('/'),
         structuredData: {
            '@context': 'https://schema.org',
            '@type': `BlogPosting`,
            'headline': document.title,
            ...(document.date && { datePublished: document.date }),
            ...(document.date && { dateModified: document.date }),
            ...(document.summary && { description: document.summary }),
            'image': document.image,
            'url': `https://magicui.design/${document._meta.path}`,
            'author': {
               '@type': 'Person',
               'name': document.author,
               'url': `https://twitter.com/${document.author}`,
            },
         },
         body: {
            raw: document.content,
            code: body,
         },
      }
   },
})

export default defineConfig({
   collections: [documents, pages, showcases],
})
