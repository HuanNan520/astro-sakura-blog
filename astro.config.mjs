// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config.ts';

/** rehype 插件：为 Markdown 渲染的所有 img 标签添加 loading="lazy" 和 decoding="async" */
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
