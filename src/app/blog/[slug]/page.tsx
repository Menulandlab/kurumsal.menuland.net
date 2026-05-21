import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog-posts';
import { notFound } from 'next/navigation';
import { MotionDiv } from '@/components/MotionDiv';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Google News Yapısal Verisi (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": post.title,
    "image": [
      `https://menuland.net${post.image}`
    ],
    "datePublished": post.date,
    "dateModified": post.date,
    "author": [{
        "@type": "Person",
        "name": post.author,
        "url": "https://menuland.net"
      }]
  };

  return (
    <>
      <Header />
      {/* Yapısal veriyi sayfaya gömüyoruz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-24 min-h-screen bg-white">
        <article className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Post Header */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <Link href="/blog" className="text-orange-600 font-bold text-sm mb-4 inline-block hover:underline">
                ← Blog'a Dön
              </Link>
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-bold uppercase text-[10px]">
                  {post.category}
                </span>
                <span>{new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span>•</span>
                <span>{post.readTime} okuma</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 border-b border-gray-100 pb-8">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400">
                    {post.author.charAt(0)}
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-900">{post.author}</p>
                    <p className="text-xs text-gray-500">Menuland Editörü</p>
                </div>
              </div>
            </MotionDiv>

            {/* Post Content */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg lg:prose-xl prose-orange max-w-none prose-headings:font-bold prose-a:text-orange-600 prose-img:rounded-3xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Post Footer / CTA */}
            <div className="mt-20 p-10 bg-slate-50 rounded-3xl border border-gray-100 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bu özellikleri işletmenizde denemek ister misiniz?</h3>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">Menuland ile saniyeler içinde kendi dijital menünüzü oluşturun, müşteri etkileşiminizi artırın.</p>
                <Link href="https://isletme.menuland.net" className="inline-block bg-orange-600 text-white font-bold px-10 py-4 rounded-2xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-100">
                    Hemen Ücretsiz Başla
                </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
