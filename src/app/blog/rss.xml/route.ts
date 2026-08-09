import { blogPosts } from '@/data/blog-posts';

export async function GET() {
  const baseUrl = 'https://menuland.net';
  
  const items = blogPosts.map((post) => `
    <item>
      <title>${post.title}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <description>${post.excerpt}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <category>${post.category}</category>
      <dc:creator xmlns:dc="http://purl.org/dc/elements/1.1/">${post.author}</dc:creator>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Menuland Blog - Restoran Başarı Rehberi</title>
        <link>${baseUrl}/blog</link>
        <description>En yeni restoran teknolojileri ve başarı hikayeleri.</description>
        <language>tr</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
