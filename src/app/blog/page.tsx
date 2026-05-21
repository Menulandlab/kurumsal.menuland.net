import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MotionDiv } from '@/components/MotionDiv';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        {/* Blog Hero */}
        <section className="bg-slate-50 py-20 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                Menuland Akademi
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Restoran Başarı Rehberi</h1>
              <p className="text-xl text-gray-600">
                Sektörel trendler, teknolojik ipuçları ve işletmenizi büyütecek stratejiler.
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post, index) => (
                <MotionDiv
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl mb-6 aspect-video relative bg-gray-100">
                    {/* Görsel placeholder - Gerçek projede Image bileşeni kullanılacak */}
                    <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-gray-400 font-bold">
                        {post.category}
                    </div>
                  </Link>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-tighter bg-orange-50 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime} okuma</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors leading-tight">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                    <span className="text-xs font-semibold text-gray-500">{post.author}</span>
                    <span className="text-xs text-gray-400">
                        {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gray-900 py-20">
            <div className="container mx-auto px-6 text-center text-white max-w-2xl">
                <h3 className="text-3xl font-bold mb-4">Sektörden Geri Kalmayın</h3>
                <p className="text-gray-400 mb-8">En yeni restoran teknolojileri ve başarı hikayeleri her hafta e-posta kutunuzda.</p>
                <form className="flex flex-col sm:flex-row gap-3">
                    <input 
                        type="email" 
                        placeholder="E-posta adresiniz" 
                        className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition-colors"
                    />
                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all">
                        Abone Ol
                    </button>
                </form>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
