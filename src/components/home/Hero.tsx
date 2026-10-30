import Image from "next/image";
import { ArrowRight, BellRing, Check, QrCode, ShieldCheck } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { CtaLink } from "@/components/site/cta-link";
import { links } from "@/lib/site";

// Hero sunucu bileşeni: tarayıcıya JavaScript göndermez.
// Metin ve ana görsel hemen görünür; süs amaçlı yüzen kartlar CSS animasyonuyla belirir (hydration beklemez).

export default function Hero() {
  return (
    <section aria-labelledby="hero-baslik" className="relative isolate overflow-hidden">
      {/* Arka plan: sıcak ışık ve nokta deseni */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/80 via-white to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(#d6d3d1_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_30%,#000_40%,transparent_100%)] opacity-70" />
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-400/20 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-20 lg:pb-24">
        <div className="max-w-xl">
          <div className="inline-flex items-center rounded-full border border-brand-200 bg-white/80 px-1 py-1 shadow-sm">
            <span className="rounded-full bg-brand-600 px-2 py-0.5 text-xs font-bold text-white">QR menü</span>
            <AnimatedShinyText className="mx-0 px-2.5 text-[13px] font-medium text-stone-700 [--shiny-width:120px]">
              Fiyat listesi ve 14 alerjen bilgisi tek yerde
            </AnimatedShinyText>
          </div>

          <h1
            id="hero-baslik"
            className="mt-6 text-[2.5rem] leading-[1.06] font-extrabold tracking-tight text-stone-900 sm:text-6xl lg:text-[4rem]"
          >
            Menünüz, siparişleriniz ve müşterileriniz{" "}
            <span className="relative whitespace-nowrap text-brand-600">
              tek panelde
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-brand-300"
              >
                <path d="M2 9C60 3 140 2 298 6" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Menünüzü QR koda taşıyın, fiyatları tek tıkla tüm masalarda güncelleyin; Gel-Al siparişlerini,
            rezervasyonları ve kampanyaları aynı ekrandan yönetin.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={links.panel} size="lg">
              Hemen başlayın
              <ArrowRight />
            </CtaLink>
            <CtaLink href={links.demoMenu} variant="outline" size="lg">
              <QrCode />
              Canlı menüyü görün
            </CtaLink>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600">
            {["Masa başına ücret yok", "Taahhüt yok", "Aynı gün kurulum"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="size-4 text-brand-600" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Ürün görseli */}
        <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
          <div aria-hidden className="absolute inset-x-[12%] top-[10%] bottom-[8%] -z-10 rounded-[3rem] bg-gradient-to-br from-brand-200/70 via-brand-100/40 to-transparent blur-2xl" />
          <Image
            src="/img/mockups/hero-qr-menu.png"
            alt="Menuland QR menüde bir ürün sayfası: fotoğraf, fiyat, kalori ve alerjen uyarıları"
            width={1320}
            height={2647}
            priority
            sizes="(min-width: 1024px) 290px, (min-width: 640px) 270px, 58vw"
            className="relative mx-auto h-auto w-[58%] max-w-[290px] drop-shadow-2xl"
          />

          <div
            className="animate-float-in absolute top-[18%] -left-2 w-56 rounded-2xl border border-stone-200 bg-white/95 p-3.5 shadow-xl backdrop-blur sm:-left-6"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <BellRing className="size-[18px]" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-stone-900">Yeni Gel-Al siparişi</p>
                <p className="text-xs text-stone-500">Teslim alma: en kısa sürede</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-stone-100 pt-2.5 text-sm">
              <span className="text-stone-600">3 ürün</span>
              <span className="font-bold text-stone-900">575,00 ₺</span>
            </div>
          </div>

          <div
            className="animate-float-in absolute right-0 bottom-[20%] [animation-delay:0.25s] w-52 rounded-2xl border border-stone-200 bg-white/95 p-3.5 shadow-xl backdrop-blur sm:-right-4"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <ShieldCheck className="size-[18px]" aria-hidden />
              </span>
              <p className="text-sm font-semibold text-stone-900">Alerjen uyarısı</p>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {["Gluten", "Yumurta", "Süt"].map((a) => (
                <span key={a} className="rounded-md bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-800 ring-1 ring-amber-200">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
