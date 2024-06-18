import fs from 'node:fs';
import path from 'node:path';
import type { UnistNode, UnistTree } from 'types/unist';
import { u } from 'unist-builder';
import { visit } from 'unist-util-visit';
import { Index } from '../__registry__';
import { styles } from '../registry/styles';

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      const { value: srcPath } = (getNodeAttributeByName(node, 'src') as {
        name: string;
        value?: string;
        type?: string;
      }) || {};

      if (node.name === 'ComponentSource') {
        const name = getNodeAttributeByName(node, 'name')?.value as string;
        const fileName = getNodeAttributeByName(node, 'fileName')?.value as string | undefined;

        if (!name && !srcPath) return null;

        try {
          const handledStyles = new Set<string>();
          const isSpecial = Object.keys(Index.special || {}).includes(name);
          const styleNames = isSpecial ? ['special'] : styles.map(style => style.name);

          console.log(`Processing ComponentSource: ${name}, isSpecial: ${isSpecial}, styleNames: ${styleNames}`);

          for (const styleName of styleNames) {
            if (handledStyles.has(styleName)) continue;
            handledStyles.add(styleName);

            let src: string;

            if (srcPath) {
              src = srcPath;
            } else {
              if (!Index[styleName][name]) {
                console.error(`Component ${name} not found in registry for style ${styleName}`);
                continue;
              }

              const component = Index[styleName][name];
              src = fileName
                ? component.files.find((file: string) => file.endsWith(`${fileName}.tsx`) || file.endsWith(`${fileName}.ts`)) || component.files[0]
                : component.files[0];
            }

            const filePath = path.join(process.cwd(), src);
            console.log(`Trying to read file: ${filePath}`);

            if (!fs.existsSync(filePath)) {
              console.error(`File not found: ${filePath}`);
              continue;
            }

            let source = fs.readFileSync(filePath, 'utf8');

            source = source.replaceAll(`~/registry/${styleName}/`, '~/components/');
            source = source.replaceAll('export default', 'export');

            node.children?.push(
              u('element', {
                tagName: 'pre',
                properties: {
                  __src__: src,
                  __style__: styleName,
                },
                attributes: [
                  {
                    name: 'styleName',
                    type: 'mdxJsxAttribute',
                    value: styleName,
                  },
                ],
                children: [
                  u('element', {
                    tagName: 'code',
                    properties: {
                      className: ['language-tsx'],
                    },
                    children: [
                      {
                        type: 'text',
                        value: source,
                      },
                    ],
                  }),
                ],
              }),
            );
          }
        } catch (error) {
          console.error(`Error processing ComponentSource for ${name}:`, error);
        }
      }

      if (node.name === "ComponentPreview" || node.name === "BlockPreview") {
        const name = getNodeAttributeByName(node, 'name')?.value as string;

        if (!name) return null;

        try {
          const handledStyles = new Set<string>();
          const isSpecial = Object.keys(Index.special || {}).includes(name);
          const styleNames = isSpecial ? ['special'] : styles.map(style => style.name);

          console.log(`Processing ComponentPreview: ${name}, isSpecial: ${isSpecial}, styleNames: ${styleNames}`);

          for (const styleName of styleNames) {
            if (handledStyles.has(styleName)) continue;
            handledStyles.add(styleName);

            if (!Index[styleName][name]) {
              console.error(`Component ${name} not found in registry for style ${styleName}`);
              continue;
            }

            const component = Index[styleName][name];
            const src = component.files[0];

            const filePath = path.join(process.cwd(), src);
            console.log(`Trying to read file: ${filePath}`);

            if (!fs.existsSync(filePath)) {
              console.error(`File not found: ${filePath}`);
              continue;
            }

            let source = fs.readFileSync(filePath, 'utf8');

            source = source.replaceAll(`~/registry/${styleName}/`, '~/components/');
            source = source.replaceAll('export default', 'export');

            node.children?.push(
              u('element', {
                tagName: 'pre',
                properties: {
                  __src__: src,
                },
                children: [
                  u('element', {
                    tagName: 'code',
                    properties: {
                      className: ['language-tsx'],
                    },
                    children: [
                      {
                        type: 'text',
                        value: source,
                      },
                    ],
                  }),
                ],
              }),
            );
          }
        } catch (error) {
          console.error(`Error processing ComponentPreview for ${name}:`, error);
        }
      }
    });
  };
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}
