import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Building2,
  CalendarCheck,
  Check,
  EyeOff,
  Flame,
  Gift,
  Globe,
  ImageIcon,
  Languages,
  Layers,
  Megaphone,
  MessageCircle,
  MessageSquareText,
  MonitorSmartphone,
  Palette,
  Percent,
  Printer,
  QrCode,
  Scale,
  Search,
  ShoppingBag,
  Smartphone,
  Tag,
  Ticket,
  Wheat,
} from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal, SectionHeading } from "@/components/site/section";
import { CtaLink } from "@/components/site/cta-link";
import { formatTRY, links, plans, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Özellikler",
  description:
    "QR menü, masaya özel QR kodlar, 14 alerjen ve gramaj bilgisi, Gel-Al sipariş, rezervasyon, garson çağırma, kampanyalar, PuanLand ve çok şubeli yönetim: Menuland işletme panelinin tüm özellikleri.",
  alternates: { canonical: "/ozellikler" },
};

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
  premium?: boolean;
};

type FeatureGroup = {
  id: string;
  label: string;
  title: string;
  description: string;
  items: Feature[];
};

// Paket etiketleri src/lib/site.ts içindeki premiumFeatures listesiyle uyumludur.
const groups: FeatureGroup[] = [
  {
    id: "dijital-menu",
    label: "Dijital menü",
    title: "Menünüz her masada, her zaman güncel",
    description:
      "Menünüzü panele bir kez girin. QR kodu okutan her müşteri, yaptığınız son değişikliği görür.",
    items: [
      {
        icon: QrCode,
        title: "Uygulama gerektirmeyen QR menü",
        text: "Müşteri masadaki kodu telefon kamerasıyla okutur, menünüz tarayıcıda açılır. İndirme ya da üyelik gerekmez.",
      },
      {
        icon: Printer,
        title: "Masaya özel QR kodlar",
        text: "Masa 1, Teras 4, Bahçe 12 gibi her masa için ayrı kod üretin; PDF veya PNG olarak indirip dilediğiniz matbaada bastırın.",
      },
      {
        icon: ImageIcon,
        title: "Fotoğraf, açıklama ve içerik",
        text: "Her ürüne fotoğraf, açıklama ve içindekiler bilgisi ekleyin. Kategori ve ürün sayısında sınır yoktur.",
      },
      {
        icon: Layers,
        title: "Porsiyon ve seçenekler",
        text: "Küçük, orta, büyük gibi seçenekleri kendi fiyatlarıyla tek ürün altında toplayın.",
      },
      {
        icon: Percent,
        title: "Anında ve toplu fiyat güncelleme",
        text: "Fiyatları tek tek ya da yüzde artış/indirimle toplu değiştirin. Yeni fiyat tüm masalarda hemen görünür.",
      },
      {
        icon: EyeOff,
        title: "Tükenen ürünü gizleme",
        text: "Biten ürünü tek tıkla menüden kaldırın, yeniden geldiğinde aynı şekilde açın.",
      },
      {
        icon: Search,
        title: "Menü içi arama",
        text: "Uzun menülerde müşterileriniz aradığı ürünü adıyla kolayca bulur.",
      },
      {
        icon: Palette,
        title: "Markanıza uygun görünüm",
        text: "Menü başlığını ve ana rengini işletmenizin kimliğine göre ayarlayın.",
      },
      {
        icon: Languages,
        title: "Yabancı dilde ürün bilgisi",
        text: "Ürün ve kategori bilgilerini İngilizce gibi farklı dillerde de girin; yabancı misafirleriniz menünüzü rahatça okusun.",
      },
    ],
  },
  {
    id: "siparis",
    label: "Sipariş ve servis",
    title: "Sipariş, rezervasyon ve masada servis",
    description: "Gelen talepleri tek panelden görün; ekibiniz neyin, nerede beklediğini bilsin.",
    items: [
      {
        icon: ShoppingBag,
        title: "Gel-Al sipariş",
        text: "Müşteri Menuland uygulamasından sipariş verir, açık panelinizde sesli bildirim çalar. Siparişi onaylar, hazırlık süresini belirlersiniz. Sipariş başına komisyon alınmaz.",
      },
      {
        icon: CalendarCheck,
        title: "Rezervasyon yönetimi",
        text: "Online masa taleplerini panelden onaylayın ya da iptal edin; günün rezervasyonlarını tek listede görün.",
        premium: true,
      },
      {
        icon: BellRing,
        title: "Garson çağırma ve hesap isteme",
        text: "Müşteri QR menüdeki düğmeyle garson çağırır ya da hesabı ister, bildirim panelinize düşer. Düğmeleri menü ayarlarından açıp kapatabilirsiniz.",
        premium: true,
      },
    ],
  },
  {
    id: "pazarlama",
    label: "Pazarlama ve sadakat",
    title: "Yeni müşteri kazanın, gelenleri geri getirin",
    description:
      "Menuland'e eklenen işletmeler iOS ve Android'deki Menuland uygulamasında da yer alır. Kampanyalarınız orada müşterilerle buluşur.",
    items: [
      {
        icon: Megaphone,
        title: "Kampanyalar",
        text: "İndirim ve kampanyalarınızı panelden oluşturun, Menuland uygulamasında müşterilere duyurun.",
        premium: true,
      },
      {
        icon: Ticket,
        title: "Etkinlik duyuruları",
        text: "Canlı müzik, maç yayını ya da tadım akşamı gibi etkinliklerinizi uygulamada yayınlayın.",
        premium: true,
      },
      {
        icon: Gift,
        title: "PuanLand sadakat puanı",
        text: "Müşteriler yorum ve rezervasyonla PuanLand puanı kazanır, puanlarını sizin kampanyalarınızda harcar.",
      },
      {
        icon: Smartphone,
        title: "Uygulamada listelenme",
        text: "İşletmeniz menüsüyle birlikte Menuland uygulamasında, şehir ve ilçe aramalarında ve haritada görünür.",
      },
    ],
  },
  {
    id: "yonetim",
    label: "Yönetim ve raporlama",
    title: "İşletmenizi tek yerden yönetin",
    description: "Hangi ürünün ilgi gördüğünü izleyin, şubelerinizi ve müşteri geri bildirimlerini aynı panelden takip edin.",
    items: [
      {
        icon: BarChart3,
        title: "İstatistikler",
        text: "Menünüzün kaç kez görüntülendiğini ve hangi ürünlerin ilgi gördüğünü takip edin. Premium pakette raporlar daha ayrıntılıdır.",
      },
      {
        icon: MessageSquareText,
        title: "Müşteri yorumları",
        text: "Uygulamada işletmeniz için yazılan yorumları ve puanları panelden takip edin.",
        premium: true,
      },
      {
        icon: Building2,
        title: "Çok şubeli yönetim",
        text: "Her şube kendi aboneliğini alır, hepsini tek merkezden yönetirsiniz. 2–5 şubeli işletmelere şube başı indirim uygulanır.",
      },
      {
        icon: Globe,
        title: "Size özel menü adresi",
        text: "Menünüz işletmeniz.menuland.net biçiminde kendi adresinizde yayınlanır.",
      },
      {
        icon: MonitorSmartphone,
        title: "Her cihazdan erişim",
        text: "Panel tarayıcıda çalışır. Bilgisayardan, tabletten ya da telefondan girebilirsiniz; program kurmanız gerekmez.",
      },
    ],
  },
];

const allergens = [
  "Gluten",
  "Süt",
  "Yumurta",
  "Fıstık",
  "Kabuklu yemiş",
  "Soya",
  "Susam",
  "Balık",
  "Kabuklular",
  "Hardal",
  "Kereviz",
  "Sülfit",
  "Acı bakla",
  "Yumuşakçalar",
];

const productFields = [
  { icon: Tag, label: "Fiyat" },
  { icon: Wheat, label: "14 alerjen uyarısı" },
  { icon: Flame, label: "Kalori (kcal)" },
  { icon: Scale, label: "Porsiyon gramajı" },
];

// Sayfadaki sırayla: ilk gruptan sonra alerjen bölümü gelir.
const jumpLinks = [
  { href: `#${groups[0].id}`, label: groups[0].label },
  { href: "#alerjen", label: "Alerjen ve gramaj" },
  ...groups.slice(1).map((g) => ({ href: `#${g.id}`, label: g.label })),
  { href: "#paketler", label: "Paketler" },
];

function PremiumBadge() {
  return (
    <span className="inline-flex shrink-0 items-center rounded-md bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-800 ring-1 ring-brand-200">
      Premium
    </span>
  );
}

function FeatureList({ items }: { items: Feature[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
      {items.map(({ icon: Icon, title, text, premium }) => (
        <li key={title} className="flex gap-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
            <Icon className="size-5" aria-hidden />
          </span>
          <div>
            <h3 className="flex flex-wrap items-center gap-2 text-base font-bold text-stone-900">
              {title}
              {premium && <PremiumBadge />}
            </h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function GroupIntro({ group, index }: { group: FeatureGroup; index: number }) {
  return (
    <>
      <p className="text-sm font-semibold tracking-wide text-brand-600">
        {String(index + 1).padStart(2, "0")} · {group.label}
      </p>
      <h2
        id={`${group.id}-baslik`}
        className="mt-2 text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl"
      >
        {group.title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-stone-600">{group.description}</p>
    </>
  );
}

function FeatureGroupSection({ group, index }: { group: FeatureGroup; index: number }) {
  // İlk grup sayfa başlığının hemen altında, ilk ekranda görünebilir: animasyonsuz basılır.
  const first = index === 0;
  return (
    <section
      id={group.id}
      aria-labelledby={`${group.id}-baslik`}
      className={cn("scroll-mt-20 py-16 sm:py-20", !first && "border-t border-stone-200")}
    >
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          {first ? (
            <GroupIntro group={group} index={index} />
          ) : (
            <Reveal>
              <GroupIntro group={group} index={index} />
            </Reveal>
          )}
        </div>
        {first ? (
          <FeatureList items={group.items} />
        ) : (
          <Reveal delay={0.05}>
            <FeatureList items={group.items} />
          </Reveal>
        )}
      </div>
    </section>
  );
}

function AllergenSection() {
  return (
    <section id="alerjen" aria-labelledby="alerjen-baslik" className="scroll-mt-20 bg-stone-50 py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="grid gap-10 rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_1px_2px_rgba(28,25,23,0.04),0_8px_24px_-12px_rgba(28,25,23,0.12)] sm:p-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand-600">Ürün bilgileri</p>
            <h2
              id="alerjen-baslik"
              className="mt-2 text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl"
            >
              Fiyat, alerjen, kalori ve gramaj aynı kartta
            </h2>
            <p className="mt-3 text-base leading-relaxed text-stone-600">
              Menuland menüsünde her ürün için fiyat, 14 alerjen, kalori ve porsiyon gramajı alanları bulunur. Bu
              bilgileri girdiğinizde müşteriniz masada QR kodu okutarak hepsini görür.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-3">
              {productFields.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-stone-200 px-3.5 py-3 text-sm font-semibold text-stone-800"
                >
                  <Icon className="size-4 shrink-0 text-brand-600" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-stone-900">İşaretleyebileceğiniz 14 alerjen</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {allergens.map((a) => (
                <li
                  key={a}
                  className="rounded-lg bg-amber-50 px-2.5 py-1.5 text-sm font-medium text-amber-900 ring-1 ring-amber-200/80"
                >
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-stone-600">
              Bilgilerin doğruluğu ve güncelliği işletmenin sorumluluğundadır; Menuland bu bilgileri girip
              müşterinize göstermeniz için gereken alanları sağlar.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PlansSection() {
  return (
    <section id="paketler" aria-labelledby="paketler-baslik" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          id="paketler-baslik"
          eyebrow="Paketler"
          title="Hangi özellik hangi pakette?"
          description="Masa sayınıza göre artmayan sabit aylık fiyat. Taahhüt yok; yıllık ödemede %20 indirim."
        />
        <Reveal className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "flex flex-col rounded-3xl border bg-white p-7 sm:p-8",
                plan.highlighted
                  ? "border-brand-200 shadow-[0_30px_60px_-30px_rgba(214,63,0,0.35)]"
                  : "border-stone-200 shadow-[0_20px_50px_-30px_rgba(28,25,23,0.2)]"
              )}
            >
              <h3 className="text-xl font-bold text-stone-900">{plan.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{plan.description}</p>
              <p className="mt-5 flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold tracking-tight text-stone-900 tabular-nums">
                  {formatTRY(plan.monthly)}
                </span>
                <span className="text-stone-600">/ay</span>
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Yıllık ödemede {formatTRY(plan.yearlyTotal)} (aylık {formatTRY(plan.yearly)})
              </p>
              <ul className="mt-6 space-y-3 border-t border-stone-100 pt-6 text-[15px] text-stone-700">
                {plan.features.map((f, i) => (
                  <li
                    key={f}
                    className={cn("flex gap-3", i === 0 && plan.id === "premium" && "font-semibold text-stone-900")}
                  >
                    <Check className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
        <Reveal className="mt-8 text-center">
          <Link
            href="/#fiyatlar"
            className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline"
          >
            Fiyatları ve zincir indirimlerini inceleyin
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function PageCta() {
  return (
    <section aria-labelledby="ozellikler-cta-baslik" className="pb-20 sm:pb-28">
      <div className="container-page">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-stone-950 p-6 text-white sm:p-8 lg:flex-row lg:items-center">
          <div>
            <h2 id="ozellikler-cta-baslik" className="text-xl font-bold sm:text-2xl">
              Bu özellikleri kendi menünüzde deneyin
            </h2>
            <p className="mt-1.5 text-[15px] text-stone-300">
              Hesabınızı açın, menünüzü girin, QR kodları masalara koyun. Takıldığınız yerde WhatsApp'tan yardımcı
              oluyoruz.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:shrink-0">
            <CtaLink href={links.panel} size="lg">
              Hemen başlayın
              <ArrowRight />
            </CtaLink>
            <CtaLink href={whatsappLink("KRM-OZELLIK")} variant="whatsapp" size="lg">
              <MessageCircle />
              WhatsApp'tan yazın
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function OzelliklerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Özellikler"
        title="Menüden siparişe, işletmenizin ihtiyaç duyduğu her şey"
        description="Menuland işletme paneli; QR menünüzü, Gel-Al siparişlerinizi, rezervasyonlarınızı ve kampanyalarınızı tek yerden yönetmenizi sağlar. Aşağıda tüm özellikleri ve hangi pakette yer aldıklarını bulabilirsiniz."
        breadcrumb={[{ label: "Özellikler" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={links.panel} size="lg">
            Hemen başlayın
            <ArrowRight />
          </CtaLink>
          <CtaLink href={links.demoMenu} variant="outline" size="lg">
            <QrCode />
            Örnek menüyü görün
          </CtaLink>
        </div>
        <nav aria-label="Bu sayfada" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {jumpLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-stone-200 bg-white/80 px-4 text-sm font-medium text-stone-700 transition-colors hover:border-stone-300 hover:text-stone-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <FeatureGroupSection group={groups[0]} index={0} />
      <AllergenSection />
      {groups.slice(1).map((g, i) => (
        <FeatureGroupSection key={g.id} group={g} index={i + 1} />
      ))}
      <PlansSection />
      <PageCta />
    </>
  );
}
