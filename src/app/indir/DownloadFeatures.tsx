"use client";

import { useEffect } from "react";
import { CalendarCheck, Gift, Heart, Landmark, MapPin, ShoppingBag, Sparkles } from "lucide-react";
import { Iphone } from "@/components/ui/iphone";
import { Reveal } from "@/components/site/section";
import { cn } from "@/lib/utils";
import { links } from "@/lib/site";

// Telefondan gelen ziyaretçiyi doğrudan uygun mağazaya gönderir.
// Masalardaki ve sitedeki karekod bu sayfayı (/indir) açar; yönlendirme o akışın parçası.
// Arama motoru ve ölçüm araçları (Googlebot, Lighthouse vb.) sayfada kalır.
export function StoreRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent || "";
    if (/bot|crawl|spider|lighthouse|headless/i.test(ua)) return;
    if (/iPad|iPhone|iPod/.test(ua)) {
      window.location.replace(links.appStore);
    } else if (/android/i.test(ua)) {
      window.location.replace(links.googlePlay);
    }
  }, []);
  return null;
}

const showcases = [
  {
    icon: Sparkles,
    label: "Ne Yesem?",
    title: "Kararsız kaldığınızda size öneri sunar",
    text: "Beğendiğiniz lezzetleri kaydırarak seçin ya da “Şaşırt Beni” deyin. Menuland'deki işletmelerin menülerinden size uygun lezzetleri önersin.",
    image: "/img/mobil-karar-carki.png",
    alt: "Menuland uygulamasında Ne Yesem? ekranı ve önerilen lezzetler",
  },
  {
    icon: ShoppingBag,
    label: "Gel-Al sipariş",
    title: "Siparişinizi verin, hazır olunca gidip alın",
    text: "Gel-Al siparişi açık işletmelerde menüden seçtiklerinizi sepete ekleyin, teslim alma zamanını belirleyin. Ödemeyi teslim alırken nakit ya da kartla yapın.",
    image: "/img/mobil-gel-al-siparis.png",
    alt: "Menuland uygulamasında Gel-Al sepeti ve teslim alma zamanı seçimi",
  },
  {
    icon: Gift,
    label: "PuanLand",
    title: "Puan kazanın, kampanyalarda harcayın",
    text: "Yorum yazarak, onaylanan rezervasyonlarla ve kısa sponsorlu videolar izleyerek puan toplayın. Puanlarınızı işletmelerin PuanLand kampanyalarında indirimli ürün ve hizmetler için kullanın.",
    image: "/img/mobil-puanland-cuzdan.png",
    alt: "Menuland uygulamasında PuanLand puan cüzdanı",
  },
];

const extras = [
  {
    icon: MapPin,
    title: "Haritada keşfedin",
    text: "Yakınınızdaki Menuland işletmelerini haritada görün, gitmeden menülerine göz atın.",
  },
  {
    icon: CalendarCheck,
    title: "Rezervasyon yapın",
    text: "Rezervasyon kabul eden işletmelerde masanızı uygulamadan ayırtın.",
  },
  {
    icon: Landmark,
    title: "Şehir rehberi",
    text: "Şehrinizdeki kültürel etkinlikleri, doğal ve tarihi mekanları keşfedin.",
  },
  {
    icon: Heart,
    title: "Favorileriniz bir arada",
    text: "Beğendiğiniz mekanları favorilere ekleyin, tekrar aradığınızda hemen bulun.",
  },
];

export default function DownloadFeatures() {
  return (
    <section aria-labelledby="uygulama-ozellikleri" className="overflow-hidden py-20 sm:py-28">
      <div className="container-page">
        {/* Başlık ilk ekrana yakın; animasyonsuz basılır. */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-600">Uygulamada neler var?</p>
          <h2
            id="uygulama-ozellikleri"
            className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
          >
            Ne yiyeceğinize karar vermekten siparişe kadar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
            Menülere göz atın, öneri alın, sipariş verin ve gittiğiniz yerlerden puan kazanın.
          </p>
        </div>

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {showcases.map((s, i) => (
            <Reveal key={s.label} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={cn("max-w-xl", i % 2 === 1 && "lg:order-2")}>
                <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-800 ring-1 ring-brand-100">
                  <s.icon className="size-4" aria-hidden />
                  {s.label}
                </p>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">{s.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-stone-600">{s.text}</p>
              </div>
              <div className={cn("relative isolate mx-auto w-full max-w-[220px] sm:max-w-[250px]", i % 2 === 1 && "lg:order-1")}>
                <div aria-hidden className="absolute inset-0 -z-10 m-auto size-72 rounded-full bg-brand-300/30 blur-3xl" />
                <Iphone src={s.image} alt={s.alt} sizes="250px" />
              </div>
            </Reveal>
          ))}
        </div>

        <ul role="list" className="mt-24 grid gap-5 sm:mt-28 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((e, i) => (
            <li key={e.title}>
              <Reveal delay={i * 0.06} className="h-full rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <e.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-bold text-stone-900">{e.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{e.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
