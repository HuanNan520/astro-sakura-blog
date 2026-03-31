import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).filter(p => !p.data.hidden);
  const data = posts
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map(post => ({
      id: post.id,
      title: post.data.title,
      summary: post.data.summary || '',
      tags: post.data.tags || [],
      date: post.data.date.toISOString().slice(0, 10),
      cover: post.data.cover?.src || '',
    }));
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
};
