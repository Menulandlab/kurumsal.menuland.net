import {
  BarChart3,
  Bell,
  Building2,
  CalendarCheck,
  Globe,
  Megaphone,
  Percent,
  QrCode,
  ShoppingBag,
  Star,
  Ticket,
  Wheat,
} from "lucide-react";
import { Iphone } from "@/components/ui/iphone";
import { PriceUpdateDemo, ViewsChart } from "@/components/home/feature-demos";
import { Marquee } from "@/components/ui/marquee";
import { Reveal, SectionHeading } from "@/components/site/section";
import { cn } from "@/lib/utils";

function Card({
  className,
  icon: Icon,
  title,
  children,
  visual,
  delay = 0,
}: {
  className?: string;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  visual?: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_1px_2px_rgba(28,25,23,0.04),0_8px_24px_-12px_rgba(28,25,23,0.12)] transition-shadow duration-300 hover:shadow-[0_1px_2px_rgba(28,25,23,0.04),0_16px_40px_-16px_rgba(214,63,0,0.25)]",
        className
      )}
    >
      <div className="p-6 sm:p-7">
        <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
          <Icon className="size-5" aria-hidden />
        </span>
        <h3 className="mt-4 text-lg font-bold text-stone-900">{title}</h3>
        <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{children}</p>
      </div>
      {visual && <div className="relative mt-auto">{visual}</div>}
    </Reveal>
  );
}

const allergens = ["Gluten", "Süt", "Yumurta", "Fıstık", "Kabuklu yemiş", "Soya", "Susam", "Balık", "Kabuklular", "Hardal", "Kereviz", "Sülfit", "Acı bakla", "Yumuşakçalar"];

const extras = [
  { icon: Bell, label: "Garson çağırma bildirimi" },
  { icon: Building2, label: "Çok şubeli yönetim" },
  { icon: Ticket, label: "Etkinlik duyuruları" },
  { icon: Globe, label: "işletmeniz.menuland.net adresi" },
  { icon: QrCode, label: "Masaya özel QR kodlar" },
  { icon: Percent, label: "Toplu fiyat güncelleme" },
  { icon: Star, label: "Müşteri yorumlarını takip" },
];

export default function Features() {
  return (
    <section id="ozellikler" aria-labelledby="ozellikler-baslik" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="ozellikler-baslik"
          eyebrow="Özellikler"
          title="Menüden siparişe, her şey aynı yerde"
          description="Ayrı ayrı uygulamalarla uğraşmayın. Menuland paneli menünüzü, siparişlerinizi, rezervasyonlarınızı ve kampanyalarınızı birlikte yönetir."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <Card
            className="lg:col-span-2"
            icon={QrCode}
            title="QR menü, fiyat değişikliği anında"
            visual={<PriceUpdateDemo />}
          >
            Menünüzü bir kez girin, masalara QR kodunu koyun. Fiyat veya ürün değiştiğinde menü bastırmadan tüm
            masalarda anında güncellenir. Müşterinin uygulama indirmesine gerek yok.
          </Card>

          <Card
            icon={Wheat}
            title="14 alerjen, kalori ve gramaj"
            delay={0.05}
            visual={
              <div className="flex flex-wrap gap-1.5 px-6 pb-6 sm:px-7">
                {allergens.map((a) => (
                  <span
                    key={a}
                    className="rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-900 ring-1 ring-amber-200/80"
                  >
                    {a}
                  </span>
                ))}
              </div>
            }
          >
            Her ürüne alerjen, kalori ve porsiyon bilgisi ekleyin. Müşteriniz masada filtreleyerek güvenle seçsin.
          </Card>

          <Card
            className="lg:row-span-2"
            icon={ShoppingBag}
            title="Gel-Al sipariş"
            delay={0.05}
            visual={
              <div className="relative h-72 overflow-hidden lg:h-[26rem]">
                <div className="absolute inset-x-0 top-0 mx-auto w-56 translate-y-2 transition-transform duration-500 group-hover:-translate-y-2 lg:w-64">
                  <Iphone
                    src="/img/mobil-gel-al-siparis.png"
                    alt="Menuland uygulamasında Gel-Al sepeti ekranı"
                    sizes="256px"
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
              </div>
            }
          >
            Müşteri sipariş verir, panelinizde sesli bildirim çalar. Onaylayın, hazırlık süresini belirleyin; komisyon
            yok.
          </Card>

          <Card
            icon={CalendarCheck}
            title="Rezervasyon"
            delay={0.1}
            visual={
              <div className="space-y-2 px-6 pb-6 sm:px-7">
                {[
                  { time: "19:30", who: "4 kişi · Teras", state: "Onaylandı", tone: "text-emerald-700 bg-emerald-50 ring-emerald-200" },
                  { time: "20:15", who: "2 kişi · Salon", state: "Bekliyor", tone: "text-amber-800 bg-amber-50 ring-amber-200" },
                ].map((r) => (
                  <div key={r.time} className="flex items-center justify-between rounded-xl border border-stone-200 px-3 py-2.5 text-sm">
                    <span className="font-semibold tabular-nums text-stone-900">{r.time}</span>
                    <span className="text-stone-600">{r.who}</span>
                    <span className={cn("rounded-md px-2 py-0.5 text-xs font-semibold ring-1", r.tone)}>{r.state}</span>
                  </div>
                ))}
              </div>
            }
          >
            Online masa taleplerini panelden kabul edin, doluluğu tek ekranda görün.
          </Card>

          <Card
            icon={Megaphone}
            title="Kampanya ve PuanLand"
            delay={0.15}
            visual={
              <div className="px-6 pb-6 sm:px-7">
                <div className="flex items-center gap-3 rounded-xl border border-dashed border-brand-300 bg-brand-50 px-4 py-3">
                  <span className="text-2xl font-extrabold text-brand-700">%15</span>
                  <span className="text-sm leading-snug text-stone-700">
                    Hafta içi öğle menüsünde
                    <br />
                    <span className="font-semibold text-stone-900">PuanLand ile kullanılabilir</span>
                  </span>
                </div>
              </div>
            }
          >
            Kampanya ve etkinliklerinizi uygulamada duyurun; müşteriler PuanLand puanlarını sizin kampanyalarınızda
            harcasın.
          </Card>

          <Card
            className="lg:col-span-2"
            icon={BarChart3}
            title="İstatistik ve müşteri yorumları"
            delay={0.1}
            visual={
              <div className="grid gap-4 px-6 pb-6 sm:grid-cols-[1fr_auto] sm:px-7">
                <ViewsChart />
                <div className="flex items-center gap-3 rounded-xl border border-stone-200 px-4 py-3 sm:flex-col sm:justify-center sm:px-6">
                  <Star className="size-6 fill-amber-400 text-amber-400" aria-hidden />
                  <p className="text-sm text-stone-600">
                    Müşteri yorumları
                    <br className="hidden sm:block" /> tek ekranda
                  </p>
                </div>
              </div>
            }
          >
            Menünüzün kaç kez görüntülendiğini, hangi ürünlerin ilgi çektiğini ve müşterilerin ne yazdığını panelden takip edin.
          </Card>
        </div>

        <Reveal className="relative mt-10">
          <h3 className="sr-only">Diğer özellikler</h3>
          <ul className="sr-only">
            {extras.map(({ label }) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
          <Marquee aria-hidden pauseOnHover className="[--duration:45s] [--gap:0.75rem]">
            {extras.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700"
              >
                <Icon className="size-4 text-brand-600" aria-hidden />
                {label}
              </span>
            ))}
          </Marquee>
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white" />
        </Reveal>
      </div>
    </section>
  );
}
