import Image from "next/image";
import { Compass, Gift, MapPin, Star } from "lucide-react";
import { Iphone } from "@/components/ui/iphone";
import { Reveal, SectionHeading } from "@/components/site/section";
import { links, stats } from "@/lib/site";

const points = [
  {
    icon: MapPin,
    title: "Şehrinizde keşfedilin",
    text: "İşletmeniz Menuland uygulamasında şehir ve ilçe bazlı aramalarda, haritada ve menüsüyle birlikte görünür.",
  },
  {
    icon: Gift,
    title: "PuanLand ile geri getirin",
    text: "Müşteriler yorum ve rezervasyonla puan kazanır, puanlarını sizin kampanyalarınızda harcar.",
  },
  {
    icon: Compass,
    title: "Kararsızlara önerilin",
    text: "“Ne Yesem?” çarkı ve hikâyeler, sizi henüz tanımayan müşterilerin karşısına çıkarır.",
  },
];

export default function AppReach() {
  return (
    <section aria-labelledby="uygulama-baslik" className="overflow-hidden bg-gradient-to-b from-white via-brand-50/50 to-white py-20 sm:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="uygulama-baslik"
            align="left"
            eyebrow="Menuland mobil uygulaması"
            title="Müşterileriniz sizi uygulamada bulur"
            description="Menuland'e eklenen işletmeler iOS ve Android'deki Menuland uygulamasında da listelenir. Ekstra bir iş yapmadan yeni müşterilerin önüne çıkarsınız."
          />
          <div className="mt-8 space-y-6">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 shadow-sm ring-1 ring-stone-200">
                  <p.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-bold text-stone-900">{p.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-stone-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex flex-wrap items-center gap-4">
            <a href={links.appStore} target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-0.5">
              <Image src="/img/app-store-badge.svg" alt="App Store'da Menuland" width={135} height={45} className="h-11 w-auto" />
            </a>
            <a href={links.googlePlay} target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-0.5">
              <Image src="/img/google-play-badge.svg" alt="Google Play'de Menuland" width={150} height={45} className="h-11 w-auto" />
            </a>
            <span className="flex items-center gap-1.5 text-sm text-stone-600">
              <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden />
              App Store'da {stats.appStoreRating.toLocaleString("tr-TR", { minimumFractionDigits: 1 })} puan
            </span>
          </Reveal>
        </div>

        <Reveal className="relative mx-auto flex w-full max-w-md justify-center gap-4 sm:gap-6">
          <div aria-hidden className="absolute inset-0 -z-10 m-auto size-80 rounded-full bg-brand-300/30 blur-3xl" />
          <div className="mt-12 w-1/2 max-w-[220px] -rotate-3">
            <Iphone src="/img/mobil-karar-carki.png" alt="Menuland uygulamasında Ne Yesem? çarkı" sizes="220px" />
          </div>
          <div className="w-1/2 max-w-[220px] rotate-3">
            <Iphone src="/img/mobil-puanland-cuzdan.png" alt="Menuland uygulamasında PuanLand puan cüzdanı" sizes="220px" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
