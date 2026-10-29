import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/section";
import BlogImage from "@/components/BlogImage";
import { blogPosts, type BlogPost } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "QR menü, restoran işletmeciliği ve dijital pazarlama üzerine pratik yazılar; Menuland ekibinden ipuçları ve şehir rehberleri.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  });

function PostCard({ post, priority }: { post: BlogPost; priority: boolean }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-stone-900/5 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-brand-500 has-[a:focus-visible]:ring-offset-2">
      <div className="relative aspect-video overflow-hidden bg-stone-100">
        {/* Başlık hemen altında okunduğu için görsel süs sayılır; alt boş bırakıldı. */}
        <BlogImage
          src={post.image}
          alt=""
          sizes="(min-width: 1024px) 352px, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          fallbackText={post.category}
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-stone-600">
          <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-800 ring-1 ring-brand-100">
            {post.category}
          </span>
          <span className="whitespace-nowrap">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden> · </span>
            {post.readTime} okuma
          </span>
        </div>

        <h2 className="mt-4 text-xl font-bold leading-snug tracking-tight text-stone-900 transition-colors group-hover:text-brand-700">
          {/* Kartın tamamı bu bağlantıyla tıklanır (after: katmanı). */}
          <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-none">
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-stone-600">{post.excerpt}</p>

        <span
          aria-hidden
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-700"
        >
          Devamını oku
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <PageHeader
        title="Menuland Blog"
        description="QR menü, restoran işletmeciliği ve dijital pazarlama üzerine pratik yazılar; arada şehir rehberleri ve sektörden notlar."
      />

      <section aria-label="Blog yazıları" className="py-16 sm:py-20">
        <div className="container-page">
          <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {posts.map((post, i) => (
              <li key={post.slug}>
                {/* İlk satır ilk ekranda görünebilir; animasyonsuz basılır. */}
                {i < 3 ? (
                  <PostCard post={post} priority={i === 0} />
                ) : (
                  <Reveal delay={(i % 3) * 0.06} className="h-full">
                    <PostCard post={post} priority={false} />
                  </Reveal>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
