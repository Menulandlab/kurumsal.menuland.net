import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/section";
import { CtaLink } from "@/components/site/cta-link";
import BlogImage from "@/components/BlogImage";
import { blogPosts } from "@/data/blog-posts";
import { SITE_URL, links } from "@/lib/site";

type Params = { params: { slug: string } };

const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};

  const path = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: path,
      siteName: "Menuland",
      locale: "tr_TR",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  });

export default function BlogPostPage({ params }: Params) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  const url = `${SITE_URL}/blog/${post.slug}`;
  const isTeam = post.author === "Menuland Ekibi";

  // Google News yapısal verisi (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? [`${SITE_URL}${post.image}`] : undefined,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: url,
    author: [
      {
        "@type": isTeam ? "Organization" : "Person",
        name: post.author,
        url: SITE_URL,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Menuland",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` },
    },
  };

  // Bazı yazılarda özet, ilk paragrafla aynı; o durumda başlıkta tekrar göstermiyoruz.
  const showExcerpt = !post.content.includes(post.excerpt);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <PageHeader
          eyebrow={post.category}
          title={post.title}
          description={showExcerpt ? post.excerpt : undefined}
          breadcrumb={[{ href: "/blog", label: "Blog" }, { label: post.title }]}
        >
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-stone-600">
            <span className="font-semibold text-stone-900">{post.author}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readTime} okuma</span>
          </p>
        </PageHeader>

        <div className="container-page py-12 sm:py-16">
          <div className="max-w-3xl">
            {post.image && (
              <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl bg-stone-100 ring-1 ring-stone-200 sm:mb-12">
                <BlogImage
                  src={post.image}
                  alt={post.title}
                  sizes="(min-width: 768px) 768px, 100vw"
                  priority
                  fallbackText={post.category}
                />
              </div>
            )}

            <div
              className="prose prose-stone prose-lg max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-stone-900 prose-a:font-semibold prose-a:text-brand-700 prose-strong:text-stone-900 prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      <aside aria-labelledby="yazi-cta-baslik" className="container-page pb-20 sm:pb-28">
        <Reveal className="max-w-3xl rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-white p-8 sm:p-10">
          <h2 id="yazi-cta-baslik" className="text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
            Menünüzü Menuland ile dijitale taşıyın
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
            QR menü, Gel-Al sipariş, rezervasyon ve kampanyaları tek panelden yönetin.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={links.panel}>
              Hemen başlayın
              <ArrowRight />
            </CtaLink>
            <CtaLink href="/blog" variant="outline">
              <ArrowLeft />
              Tüm yazılar
            </CtaLink>
          </div>
        </Reveal>
      </aside>
    </>
  );
}
