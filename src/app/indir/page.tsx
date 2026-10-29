import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/section";
import { cn } from "@/lib/utils";
import { links, stats } from "@/lib/site";
import DownloadFeatures, { StoreRedirect } from "./DownloadFeatures";

export const metadata: Metadata = {
  title: "Menuland Uygulamasını İndirin",
  description:
    "Menuland mobil uygulamasıyla restoran ve kafeleri keşfedin, menülere göz atın, Gel-Al sipariş verin ve PuanLand ile puan kazanın. iPhone ve Android için ücretsiz.",
  alternates: { canonical: "/indir" },
};

const rating = stats.appStoreRating.toLocaleString("tr-TR", { minimumFractionDigits: 1 });

// Rozetlerin zemini siyah; koyu bölümde kenarı görünsün diye ince bir çerçeve eklenir.
function StoreBadges({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  const linkClass = cn(
    "rounded-[7px] transition-transform hover:-translate-y-0.5",
    onDark && "ring-1 ring-white/30"
  );
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a
        href={links.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <Image src="/img/app-store-badge.svg" alt="App Store'dan indirin" width={132} height={48} className="h-12 w-auto" />
      </a>
      <a
        href={links.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <Image src="/img/google-play-badge.svg" alt="Google Play'den indirin" width={129} height={48} className="h-12 w-auto" />
      </a>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <>
      <StoreRedirect />

      <PageHeader
        eyebrow="Menuland mobil uygulaması"
        title="Şehrin lezzet haritası cebinizde"
        description="Menuland'deki restoran ve kafeleri keşfedin, menülere göz atın, Gel-Al sipariş verin ve PuanLand ile puan kazanın. iPhone ve Android için ücretsiz."
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
          <div>
            <StoreBadges />
            <p className="mt-4 flex items-center gap-1.5 text-sm text-stone-600">
              <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden />
              App Store'da {rating} puan
            </p>
          </div>

          {/* Karekod masaüstünde anlamlı: telefonla okutulunca bu sayfa açılır ve cihaza uygun mağazaya yönlendirir. */}
          <div className="hidden items-center gap-4 rounded-2xl border border-stone-200 bg-white p-3 pr-5 shadow-sm md:flex">
            <Image
              src="/img/qr-download.svg"
              alt="Menuland uygulamasının indirme sayfasını açan karekod"
              width={112}
              height={112}
              className="size-28 rounded-lg"
            />
            <p className="max-w-[11rem] text-sm leading-snug text-stone-600">
              <span className="block font-semibold text-stone-900">Telefonunuzla okutun</span>
              Kamerayı karekoda tutun; telefonunuza uygun mağaza açılır.
            </p>
          </div>
        </div>
      </PageHeader>

      <DownloadFeatures />

      <section aria-labelledby="indir-cta-baslik" className="px-4 pb-20 sm:px-6 sm:pb-28">
        <Reveal className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-stone-950 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_30%,transparent_100%)]"
          />
          <div aria-hidden className="absolute -bottom-24 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
          <h2 id="indir-cta-baslik" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Menuland'i ücretsiz indirin
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-stone-300">
            iPhone'da App Store'dan, Android telefonlarda Google Play'den indirebilirsiniz.
          </p>
          <StoreBadges onDark className="mt-8 justify-center" />
          <p className="mt-10 text-sm text-stone-300">
            İşletme sahibi misiniz?{" "}
            <Link
              href="/"
              className="inline-flex min-h-11 items-center font-semibold text-white underline decoration-brand-400 underline-offset-4 hover:decoration-white"
            >
              İşletmenizi Menuland'e ekleyin
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
