// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config.ts';

/** rehype plugin: add loading="lazy" and decoding="async" to every img tag rendered from Markdown */
function rehypeLazyImages() {
  return function(tree) {
    (function visit(node) {
      if (node.tagName === 'img' && node.properties) {
        node.properties.loading = node.properties.loading || 'lazy';
        node.properties.decoding = 'async';
      }
      if (node.children) node.children.forEach(visit);
    })(tree);
  };
}

export default defineConfig({
  compressHTML: true,
  integrations: [tailwind(), mdx(), sitemap()],
  site: siteConfig.url,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  markdown: {
    rehypePlugins: [rehypeLazyImages],
  },
});
