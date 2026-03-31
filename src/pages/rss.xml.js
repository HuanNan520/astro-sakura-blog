import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config';

export async function GET(context) {
  const posts = (await getCollection('blog')).filter(p => !p.data.hidden).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: `${siteConfig.name} — ${siteConfig.author.name}`,
    description: siteConfig.description,
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary || '',
      content: post.body || '',
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>${siteConfig.language}</language>`,
  });
}
