import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Alt sayfaların üst bölümü. İlk ekranda olduğu için animasyonsuz ve sunucuda görünür basılır.
export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumb?: { href?: string; label: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-stone-200 bg-gradient-to-b from-brand-50/70 to-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(#d6d3d1_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,#000_30%,transparent_100%)] opacity-60"
      />
      <div className="container-page py-14 sm:py-20">
        {breadcrumb && (
          <nav aria-label="Konum" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-stone-600">
              <li>
                <Link href="/" className="hover:text-stone-900">
                  Ana sayfa
                </Link>
              </li>
              {breadcrumb.map((b) => (
                <li key={b.label} className="flex items-center gap-1">
                  <ChevronRight className="size-3.5" aria-hidden />
                  {b.href ? (
                    <Link href={b.href} className="hover:text-stone-900">
                      {b.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-stone-700">
                      {b.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="max-w-3xl">
          {eyebrow && <p className="text-sm font-semibold tracking-wide text-brand-600">{eyebrow}</p>}
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl sm:leading-[1.08]">
            {title}
          </h1>
          {description && <p className="mt-5 text-lg leading-relaxed text-stone-600">{description}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
