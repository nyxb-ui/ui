import { readFileSync } from 'node:fs'
import path from 'path'
import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { codeImport } from 'remark-code-import'
import remarkGfm from 'remark-gfm'
import { createHighlighter } from 'shiki'
import { visit } from 'unist-util-visit'

import { rehypeComponent } from './lib/rehype-component'
import { rehypeNpmCommand } from './lib/rehype-npm-command'

const prettyCodeOptions: Options = {
   theme: JSON.parse(
      readFileSync(path.join(process.cwd(), '/lib/highlighter-theme.json'), 'utf-8'),
   ),
   getHighlighter: options => createHighlighter({ ...options }),
   onVisitLine(node) {
      if (node.children.length === 0) {
         node.children = [{ type: 'text', value: ' ' }]
      }
   },
   onVisitHighlightedLine(node) {
      node.properties.className = [...(node.properties.className || []), 'line--highlighted']
   },
   onVisitHighlightedChars(node) {
      node.properties.className = ['word--highlighted']
   },
}

const showcase = defineCollection({
   name: 'Showcase',
   directory: 'content/showcase',
   include: '**/*.mdx',
   schema: z => ({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      href: z.string(),
      affiliation: z.string(),
      featured: z.boolean().optional().default(false),
   }),
   transform: async (document, context) => {
      const body = await compileMDX(context, document, {
         remarkPlugins: [codeImport, remarkGfm],
      })
      return {
         ...document,
         slug: `/showcase/${document._meta.path}`,
         slugAsParams: document._meta.path,
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
      description: z.string(),
   }),
   transform: async (document, context) => {
      const body = await compileMDX(context, document, {
         remarkPlugins: [codeImport, remarkGfm],
      })
      return {
         ...document,
         slug: `/${document._meta.path}`,
         slugAsParams: document._meta.path,
         body: {
            raw: document.content,
            code: body,
         },
      }
   },
})

const documents = defineCollection({
   name: 'Doc',
   directory: 'content',
   include: '**/*.mdx',
   schema: z => ({
      title: z.string(),
      description: z.string(),
      published: z.boolean().default(true),
      date: z.string().optional(),
      links: z
         .object({
            doc: z.string().optional(),
            api: z.string().optional(),
         })
         .optional(),
      featured: z.boolean().optional().default(false),
      component: z.boolean().optional().default(false),
      toc: z.boolean().optional().default(true),
      image: z.string().optional(),
   }),
   transform: async (document, context) => {
      const body = await compileMDX(context, document, {
         remarkPlugins: [codeImport, remarkGfm],
         rehypePlugins: [
            rehypeSlug,
            rehypeComponent,
            () => (tree) => {
               visit(tree, (node) => {
                  if (node?.type === 'element' && node?.tagName === 'pre') {
                     const [codeEl] = node.children
                     if (codeEl.tagName !== 'code')
                        return

                     if (codeEl.data?.meta) {
                        const regex = /event="([^"]*)"/
                        const match = codeEl.data.meta.match(regex)
                        if (match) {
                           node.__event__ = match[1]
                           codeEl.data.meta = codeEl.data.meta.replace(regex, '')
                        }
                     }

                     node.__rawString__ = String(codeEl.children?.[0].value || '')
                     node.__src__ = String(node.properties?.__src__ || '')
                     node.__style__ = String(node.properties?.__style__ || '')
                  }
               })
            },
            [rehypePrettyCode, prettyCodeOptions],
         ],
      })
      return {
         ...document,
         image: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURI(document.title)}`,
         slug: `/${document._meta.path}`,
         slugAsParams: document._meta.path.split('/').slice(1).join('/'),
         body: {
            raw: document.content,
            code: body,
         },
      }
   },
})

export default defineConfig({
   collections: [documents, pages, showcase],
})
