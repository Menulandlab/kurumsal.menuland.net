import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Building2,
  CalendarCheck,
  Check,
  Mail,
  Megaphone,
  MessageCircle,
  Phone,
  Printer,
  QrCode,
  RefreshCw,
  ShoppingBag,
  Smartphone,
  UserPlus,
} from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal, SectionHeading } from "@/components/site/section";
import { CtaLink } from "@/components/site/cta-link";
import { contact, formatTRY, links, plans } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Restoran, kafe ve barlar için dijital QR menü, Gel-Al sipariş, garson çağırma, rezervasyon, kampanya ve istatistik hizmetleri. Kurulumda WhatsApp'tan destek.",
  alternates: { canonical: "/hizmetler" },
};

type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
  points: string[];
  premium?: boolean;
};

// Paket etiketleri src/lib/site.ts içindeki premiumFeatures listesiyle uyumludur.
const services: Service[] = [
  {
    icon: QrCode,
    title: "Dijital QR menü",
    text: "Basılı menünüzü masadaki QR koda taşıyın. Menünüzü panele bir kez girersiniz; fiyat, ürün ya da fotoğraf değiştiğinde tüm masalarda hemen güncellenir.",
    points: [
      "Uygulama indirmeden, telefon kamerasıyla açılır",
      "Masaya özel QR kodlar, PDF veya PNG olarak",
      "Fiyat, 14 alerjen, kalori ve gramaj alanları",
      "Ürün bilgilerini yabancı dilde de girebilme",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Gel-Al sipariş",
    text: "Müşterileriniz Menuland uygulamasından sipariş verip gelip alır.",
    points: ["Panelde sesli sipariş bildirimi", "Onay ve hazırlık süresi belirleme", "Sipariş başına komisyon yok"],
  },
  {
    icon: BellRing,
    title: "Garson çağırma ve hesap isteme",
    text: "Müşteri QR menüdeki düğmeyle garson çağırır ya da hesabı ister; bildirim panelinize düşer.",
    points: ["Garson çağır ve hesap iste düğmeleri", "Düğmeleri menü ayarlarından açıp kapatma"],
    premium: true,
  },
  {
    icon: CalendarCheck,
    title: "Rezervasyon yönetimi",
    text: "Online masa taleplerini panelden yönetin, günün doluluğunu tek ekranda görün.",
    points: ["Online masa talepleri", "Panelden onaylama veya iptal", "Günün rezervasyonları tek listede"],
    premium: true,
  },
  {
    icon: Megaphone,
    title: "Kampanya, etkinlik ve PuanLand",
    text: "İndirimlerinizi, özel saatlerinizi ve etkinliklerinizi Menuland uygulamasında duyurun.",
    points: ["Kampanya duyuruları", "Etkinlik duyuruları", "PuanLand puanıyla kullanılabilen kampanyalar"],
    premium: true,
  },
  {
    icon: BarChart3,
    title: "İstatistik ve müşteri yorumları",
    text: "Menünüzün nasıl kullanıldığını görün, müşterilerinizin ne düşündüğünü takip edin.",
    points: ["Menü görüntülenme sayıları", "Ürün bazında ilgi", "Uygulamadaki yorum ve puanlar"],
  },
];

const supportItems = [
  {
    icon: UserPlus,
    title: "Kendi kendinize kurulum",
    text: "Panelden hesabınızı açın, menünüzü girin, QR kodları indirin. Teknik bilgi gerekmez; menünüzü aynı gün yayına alabilirsiniz.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp'tan kurulum yardımı",
    text: "Menünüzü girerken ya da QR kodları hazırlarken takıldığınız her adımda WhatsApp'tan bize yazabilirsiniz.",
  },
  {
    icon: Mail,
    title: "E-posta desteği",
    text: `${contact.supportEmail} adresine 7/24 yazabilirsiniz. Premium pakette talepleriniz önceliklendirilir.`,
  },
  {
    icon: Building2,
    title: "Zincir işletmelere özel plan",
    text: "6 ve üzeri şubeniz varsa size özel fiyat, entegrasyon ve destek planı hazırlıyoruz.",
  },
];

const reasons = [
  {
    icon: RefreshCw,
    title: "Menü bastırmadan güncelleyin",
    text: "Fiyat değiştiğinde ya da bir ürün tükendiğinde yeni baskı beklemezsiniz. Değişikliği panelde yaparsınız, QR menünüzde hemen görünür.",
  },
  {
    icon: BellRing,
    title: "Ekibiniz doğru masaya yönelir",
    text: "Garson çağırma ve hesap isteme bildirimleriyle servis ekibiniz, el kaldıran masayı aramak yerine panele düşen bildirime göre hareket eder.",
  },
  {
    icon: CalendarCheck,
    title: "Rezervasyonlar tek yerde toplanır",
    text: "Online gelen masa taleplerini panelden yönetirsiniz; kimin, kaç kişiyle, saat kaçta geleceği tek listede görünür.",
  },
  {
    icon: Smartphone,
    title: "Yeni müşterilere görünürsünüz",
    text: "Menuland uygulamasında listelenen işletmeniz, sizi henüz tanımayan müşterilerin şehir ve ilçe aramalarında karşısına çıkar.",
  },
];

function PremiumBadge() {
  return (
    <span className="inline-flex shrink-0 items-center rounded-md bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-800 ring-1 ring-brand-200">
      Premium
    </span>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const { icon: Icon, title, text, points, premium } = service;
  return (
    <li className="flex flex-col rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_1px_2px_rgba(28,25,23,0.04),0_8px_24px_-12px_rgba(28,25,23,0.12)] sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
          <Icon className="size-5" aria-hidden />
        </span>
        {premium && <PremiumBadge />}
      </div>
      <h3 className="mt-4 text-lg font-bold text-stone-900">{title}</h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{text}</p>
      <ul className="mt-5 space-y-2.5 border-t border-stone-100 pt-5 text-[15px] text-stone-700">
        {points.map((p) => (
          <li key={p} className="flex gap-2.5">
            <Check className="mt-0.5 size-4.5 shrink-0 text-brand-600" aria-hidden />
            {p}
          </li>
        ))}
      </ul>
    </li>
  );
}

function PageCta() {
  const temel = plans.find((p) => p.id === "temel") ?? plans[0];
  const premium = plans.find((p) => p.id === "premium") ?? plans[1];
  return (
    <section aria-labelledby="hizmetler-cta-baslik" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-stone-950 p-6 text-white sm:p-8 lg:flex-row lg:items-center">
          <div>
            <h2 id="hizmetler-cta-baslik" className="text-xl font-bold sm:text-2xl">
              İşletmenizi bugün dijitale taşıyın
            </h2>
            <p className="mt-1.5 text-[15px] text-stone-300">
              Temel paket {formatTRY(temel.monthly)}/ay, Premium paket {formatTRY(premium.monthly)}/ay. Taahhüt yok,
              istediğiniz zaman iptal edebilirsiniz.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:shrink-0">
            <CtaLink href={links.panel} size="lg">
              Hemen başlayın
              <ArrowRight />
            </CtaLink>
            <CtaLink href={links.whatsapp} variant="whatsapp" size="lg">
              <MessageCircle />
              WhatsApp'tan yazın
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HizmetlerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hizmetler"
        title="Restoran ve kafeniz için dijital hizmetler"
        description="QR menüden Gel-Al siparişe, rezervasyondan kampanyalara kadar işletmenizin dijital tarafını tek panelden yönetin. Kurulumda ve sonrasında yanınızdayız."
        breadcrumb={[{ label: "Hizmetler" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={links.panel} size="lg">
            Hemen başlayın
            <ArrowRight />
          </CtaLink>
          <CtaLink href="/ozellikler" variant="outline" size="lg">
            Tüm özellikleri görün
          </CtaLink>
        </div>
      </PageHeader>

      <section aria-labelledby="hizmetler-baslik" className="py-16 sm:py-20">
        <div className="container-page">
          {/* Sayfa başlığının hemen altında: ilk ekranda görünebileceği için animasyonsuz. */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-brand-600">Ne sunuyoruz</p>
            <h2
              id="hizmetler-baslik"
              className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl"
            >
              Tek panelde altı hizmet
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
              Ayrı ayrı uygulamalara abone olmanız gerekmez. Hepsi aynı hesapla, aynı panelden çalışır.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="destek-baslik" className="border-y border-stone-200 bg-stone-50 py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="destek-baslik"
              align="left"
              eyebrow="Kurulum ve destek"
              title="Kurulumda yalnız değilsiniz"
              description="Menünüzü kendiniz kurabilirsiniz; yardıma ihtiyacınız olduğunda bize ulaşmanın birkaç yolu var."
            />
            <Reveal className="mt-6 flex flex-col gap-1 text-[15px]">
              <a
                href={contact.phoneHref}
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-stone-900 hover:text-brand-700"
              >
                <Phone className="size-4 text-brand-600" aria-hidden />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.supportEmail}`}
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-stone-900 hover:text-brand-700"
              >
                <Mail className="size-4 text-brand-600" aria-hidden />
                {contact.supportEmail}
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.05}>
            <ul className="grid gap-5 sm:grid-cols-2">
              {supportItems.map(({ icon: Icon, title, text }) => (
                <li key={title} className="rounded-3xl border border-stone-200 bg-white p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-stone-900">{title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="neden-baslik" className="pt-20 sm:pt-28">
        <div className="container-page">
          <SectionHeading
            id="neden-baslik"
            eyebrow="Neden dijital menü?"
            title="Kâğıt menüden QR menüye geçince neler değişir?"
            description="Dijital menü yalnızca basılı menünün ekrandaki kopyası değildir. Menünüzü, servisinizi ve müşterinizle iletişiminizi aynı yerden yönetmenizi sağlar."
          />
          <Reveal className="mx-auto mt-12 max-w-5xl">
            <ul className="grid gap-x-10 gap-y-10 md:grid-cols-2">
              {reasons.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-stone-900 text-brand-300">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">{title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <PageCta />
    </>
  );
}
