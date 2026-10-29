import Image from "next/image";
import { Star } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Reveal } from "@/components/site/section";
import { stats } from "@/lib/site";

// Yalnızca doğrulanabilir sayılar. Kaynaklar src/lib/site.ts içinde.
const items = [
  {
    value: stats.appStoreRating,
    decimals: 1,
    suffix: "",
    label: "App Store puanı",
    icon: true,
    static: true,
  },
  {
    value: stats.orduVenues,
    decimals: 0,
    suffix: "+",
    label: "Ordu'da Menuland'de listelenen mekan",
  },
  {
    value: stats.qrMenuViews,
    decimals: 0,
    suffix: "+",
    label: "QR menü görüntüleme (1 Eylül'den beri)",
  },
];

export default function ProofBar() {
  return (
    <section aria-label="Menuland'i destekleyenler ve rakamlar" className="border-y border-stone-200 bg-stone-50/60">
      <div className="container-page grid items-center gap-10 py-10 lg:grid-cols-[auto_1fr] lg:gap-16">
        <Reveal className="flex flex-col items-center gap-4 lg:items-start">
          <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase">Destekleyenler</p>
          <div className="flex items-center gap-8">
            <Image
              src="/img/itucekirdek-menuland.png"
              alt="İTÜ Çekirdek"
              width={1773}
              height={1300}
              sizes="96px"
              className="h-14 w-auto object-contain"
            />
            <Image
              src="/img/orduticaretodasi.png"
              alt="Ordu Ticaret ve Sanayi Odası"
              width={1471}
              height={315}
              sizes="180px"
              className="h-9 w-auto object-contain"
            />
          </div>
        </Reveal>

        <dl className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3 lg:text-left">
          {items.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 0.08}
              className="flex flex-col-reverse gap-1 lg:border-l lg:border-stone-200 lg:pl-8"
            >
              <dt className="text-sm text-stone-600">{item.label}</dt>
              <dd className="flex items-center justify-center gap-1.5 text-4xl font-extrabold tracking-tight text-stone-900 lg:justify-start">
                {item.static ? (
                  item.value.toLocaleString("tr-TR", { minimumFractionDigits: item.decimals })
                ) : (
                  <NumberTicker value={item.value} decimalPlaces={item.decimals} />
                )}
                {item.suffix}
                {item.icon && <Star className="size-7 fill-amber-400 text-amber-400" aria-hidden />}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
