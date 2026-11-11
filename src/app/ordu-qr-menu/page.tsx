import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal, SectionHeading } from "@/components/site/section";
import { CtaLink } from "@/components/site/cta-link";
import { Disclosure } from "@/components/site/disclosure";
import { SITE_URL, contact, formatTRY, links, plans, stats, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

// Ordu açılış sayfası: "Ordu QR menü" arayan işletme sahipleri için.
// Sayfadaki iddialar sitedeki diğer sayfalarla ve canlıdaki özelliklerle aynıdır; sayılar yalnızca src/lib/site.ts'ten gelir.
// WhatsApp düğmeleri KRM-ORDU1 (üst) ve KRM-ORDU2 (alt) koduyla Ordu başvurularını ayrı saydırır.

const PATH = "/ordu-qr-menu";
const PAGE_URL = `${SITE_URL}${PATH}`;
const TITLE = "Ordu QR Menü ve Dijital Menü";
const DESCRIPTION =
  "Ordu'daki restoran ve kafelere QR menüyü yerinde kuruyoruz. İşletmeniz dijital menüsüyle birlikte Menuland uygulamasında Ordululara da görünür.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: `${TITLE} | Menuland İşletme`,
    description: DESCRIPTION,
    url: PATH,
    siteName: "Menuland",
    images: [{ url: "/img/og-image.png", width: 1200, height: 630, alt: "Menuland İşletme Paneli" }],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Menuland İşletme`,
    description: DESCRIPTION,
    images: ["/img/og-image.png"],
  },
};

// Panel ve uygulama birlikte: işletme Menuland'e girer, Ordulu onu uygulamada bulur, işletme sonucu panelde görür.
const steps = [
  {
    title: "Menünüzü panele bir kez girersiniz.",
    text: "Ürünleri, fiyatları, fotoğrafları ve alerjen bilgilerini girersiniz. Masadaki QR kod bu menüyü açar ve müşterinin uygulama indirmesi gerekmez.",
  },
  {
    title: "İşletmeniz uygulamada listelenir.",
    text: "Menuland uygulamasını kullanan Ordulular sizi menünüzle birlikte şehir ve ilçe aramalarında ve haritada görür. Menünüzdeki ürünler “Ne Yesem?” önerilerinde de çıkabilir.",
  },
  {
    title: "Müşteriler uygulamadan size ulaşır.",
    text: "Gel-Al siparişini ve rezervasyonu açtığınızda bu talepler uygulamadan gelir. Yorum yazan ve rezervasyonu onaylanan kullanıcılar PuanLand puanı kazanır.",
  },
  {
    title: "Hepsini panelinizde görürsünüz.",
    text: "Siparişler sesli bildirimle, rezervasyonlar tek listede gelir. Yorumları ve menünüzün kaç kez görüntülendiğini de aynı panelden takip edersiniz.",
  },
];

// Metinler /hizmetler ve /ozellikler sayfalarındaki özellik açıklamalarıyla aynıdır.
const panelFeatures = [
  {
    title: "Dijital menü ve QR kod",
    text: "Menünüz masadaki QR kodla telefonun kamerasında açılır. Fiyat ya da ürün değiştiğinde menü bastırmadan bütün masalarda hemen güncellenir.",
  },
  {
    title: "Çok dilli menü",
    text: "Ürün ve kategori bilgilerini İngilizce gibi farklı dillerde de girebilirsiniz. Yabancı misafirleriniz menünüzü rahatça okur.",
  },
  {
    title: "Alerjen ve içerik bilgisi",
    text: "Her ürün için fiyat, 14 alerjen uyarısı, kalori ve porsiyon gramajı alanları bulunur. Bu bilgileri girdiğinizde müşteriniz hepsini masada görür.",
  },
  {
    title: "Rezervasyon",
    text: "Online masa taleplerini panelden onaylar ya da iptal edersiniz. Günün rezervasyonları tek listede görünür.",
  },
  {
    title: "Gel-Al sipariş",
    text: "Müşteri Menuland uygulamasından sipariş verir ve panelinizde sesli bildirim çalar. Sipariş başına komisyon alınmaz.",
  },
  {
    title: "Kampanya ve etkinlik",
    text: "İndirimlerinizi ve etkinliklerinizi panelden oluşturur, Menuland uygulamasında duyurursunuz.",
  },
  {
    title: "Garson çağırma",
    text: "Müşteri QR menüdeki düğmeyle garson çağırır ya da hesabı ister. Bildirim panelinize düşer.",
  },
  {
    title: "İstatistik",
    text: "Menünüzün kaç kez görüntülendiğini ve hangi ürünlerin ilgi gördüğünü panelden takip edersiniz.",
  },
];

// Metinler /indir sayfasıyla aynıdır. "Ne Yesem?" çark değildir: kaydırarak seçme ve "Şaşırt Beni".
const appFeatures = [
  {
    title: "Keşif ve harita",
    text: "Uygulamada şehir ve ilçe seçen kullanıcılar işletmenizi menüsüyle birlikte listede ve haritada görür.",
  },
  {
    title: "Ne Yesem?",
    text: "Kararsız kalan kullanıcı beğendiği lezzetleri kaydırarak seçer ya da “Şaşırt Beni” der. Uygulama, Menuland'deki menülerden ona uygun lezzetler önerir.",
  },
  {
    title: "PuanLand",
    text: "Kullanıcılar yorum yazarak ve onaylanan rezervasyonlarla puan kazanır. Bu puanları işletmelerin PuanLand kampanyalarında kullanırlar.",
  },
  {
    title: "Kampanyalar ve etkinlikler",
    text: "Panelden açtığınız kampanyalar ve etkinlikler uygulamada yayınlanır ve kullanıcıların karşısına çıkar.",
  },
];

// Sahadaki kurulum rutini. QR stant teslimatı işletme panelindeki stant siparişinin "Ordu'da elden teslim" seçeneğidir.
const setupSteps = [
  {
    title: "Menünüzü sizinle birlikte gözden geçiririz.",
    text: "Ürün adlarını ve fiyatları ekranda birlikte kontrol ederiz. Alerjen ve içerik bilgileri sizin verdiğiniz bilgilere göre girilir.",
  },
  {
    title: "QR kodları masalarınıza yerleştiririz.",
    text: "Her masa için ayrı QR kod hazırlanır. Basılı QR standı isterseniz panelden sipariş verebilirsiniz; Ordu'da stantlar kurulumla birlikte elden teslim edilir.",
  },
  {
    title: "Paneli telefonunuzda birlikte kullanmaya başlarız.",
    text: "Fiyat değiştirmeyi ve tükenen ürünü gizlemeyi birlikte deneriz. Sonrasında takıldığınız her yerde WhatsApp'tan bize yazabilirsiniz.",
  },
];

const temel = plans.find((p) => p.id === "temel") ?? plans[0];
const premium = plans.find((p) => p.id === "premium") ?? plans[1];

const faqs = [
  {
    q: "Ordu'da QR menü kurulumu için işletmeme geliyor musunuz?",
    a: "Evet. Ordu'daki işletmelerde kurulumu yerinde yapıyoruz. WhatsApp'tan yazdığınızda uygun günü birlikte belirliyoruz. Dilerseniz hesabınızı hemen açıp menünüzü kendiniz de girebilirsiniz.",
  },
  {
    q: "İşletmem Menuland uygulamasında nasıl görünür?",
    a: "Menuland'e eklenen işletmeler iOS ve Android'deki Menuland uygulamasında menüleriyle birlikte listelenir. Uygulamayı kullanan Ordulular sizi şehir ve ilçe aramalarında ve haritada bulur.",
  },
  {
    q: "Müşterilerimin uygulama indirmesi gerekiyor mu?",
    a: "Hayır. Masadaki QR kodu okutan müşteri menünüzü telefonunun kamerasıyla doğrudan açar. Uygulama ise sizi henüz tanımayan Ordululara ulaşmanın ek bir yoludur.",
  },
  {
    q: "İşletmem Altınordu dışındaysa da kullanabilir miyim?",
    a: "Evet. QR menü ve işletme paneli internetin olduğu her yerde çalışır; işletmenizin hangi ilçede olduğu fark etmez. Uygulamadaki keşif ağı Ordu'da aktif olduğu için işletmeniz uygulamada da listelenir.",
  },
  {
    q: "Fiyatlar ne kadar, taahhüt var mı?",
    a: `Temel paket aylık ${formatTRY(temel.monthly)}, Premium paket aylık ${formatTRY(premium.monthly)}. Yıllık ödemede Temel paket ${formatTRY(temel.yearlyTotal)}, Premium paket ${formatTRY(premium.yearlyTotal)} olarak tek seferde ödenir. Taahhüt yoktur; aboneliğinizi istediğiniz zaman iptal edebilirsiniz.`,
  },
  {
    q: "Menümü İngilizce ya da başka bir dilde gösterebilir miyim?",
    a: "Evet. Ürün ve kategori bilgilerini İngilizce gibi farklı dillerde de girebilirsiniz. Yabancı misafirleriniz menünüzü rahatça okur.",
  },
];

// Yapılandırılmış veri: hizmet, sayfa yolu ve sorular. Puan ya da yorum verisi bilerek eklenmez.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ordu QR menü ve dijital menü",
    serviceType: "QR menü ve restoran işletme paneli",
    description: DESCRIPTION,
    url: PAGE_URL,
    provider: {
      "@type": "Organization",
      name: "Menuland",
      legalName: contact.company,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ordu",
      containedInPlace: { "@type": "Country", name: "Türkiye" },
    },
    audience: { "@type": "BusinessAudience", audienceType: "Restoran, kafe ve barlar" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: links.panel,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: contact.phoneHref.replace("tel:", ""),
        contactType: "customer support",
        availableLanguage: "Turkish",
      },
    },
    offers: plans.map((p) => ({
      "@type": "Offer",
      name: `${p.name} Paket`,
      price: p.monthly,
      priceCurrency: "TRY",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: p.monthly,
        priceCurrency: "TRY",
        unitCode: "MON",
      },
      url: `${SITE_URL}/#fiyatlar`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Hizmet bölgeleri", item: `${SITE_URL}/bolgeler` },
      { "@type": "ListItem", position: 3, name: "Ordu", item: PAGE_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const textLink =
  "inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline";

export default function OrduPage() {
  const orduVenues = `${stats.orduVenues.toLocaleString("tr-TR")}+`;
  const rating = stats.appStoreRating.toLocaleString("tr-TR", { minimumFractionDigits: 1 });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader
        eyebrow="Ordu QR menü"
        title="Ordu'da QR menüye geçin, Ordulular sizi uygulamada da bulsun"
        description="Dijital menünüz masadaki QR kodla açılır ve fiyatlarınızı panelden tek yerden güncellersiniz. İşletmeniz aynı zamanda Menuland uygulamasında menüsüyle birlikte listelenir. Kurulumu Ordu'da işletmenize gelerek yapıyoruz."
        breadcrumb={[{ href: "/bolgeler", label: "Hizmet bölgeleri" }, { label: "Ordu" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={whatsappLink("KRM-ORDU1")} variant="whatsapp" size="lg">
            <MessageCircle />
            WhatsApp'tan yazın
          </CtaLink>
          <CtaLink href={links.panel} variant="outline" size="lg">
            Hemen başlayın
            <ArrowRight />
          </CtaLink>
        </div>
        <p className="mt-4 text-sm text-stone-600">Pazartesi–Cumartesi 09.00–18.00 arasında yanıtlıyoruz.</p>
      </PageHeader>

      <section aria-labelledby="ordu-nasil-baslik" className="py-20 sm:py-28">
        <div className="container-page">
          {/* Sayfa başlığının hemen altında: ilk ekranda görünebileceği için animasyonsuz. */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-brand-600">Nasıl işler</p>
            <h2
              id="ordu-nasil-baslik"
              className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
            >
              Panel ve uygulama birlikte çalışır
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
              Menuland yalnızca bir QR menü değildir. İşletmenizi yönettiğiniz panel ile Orduluların kullandığı Menuland
              uygulaması aynı sistemin iki parçasıdır.
            </p>
          </div>
          <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t border-stone-300 pt-6">
                <span aria-hidden className="block text-4xl font-extrabold tracking-tight text-brand-500 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold text-stone-900">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="ordu-panel-baslik" className="border-t border-stone-200 py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="ordu-panel-baslik"
              align="left"
              eyebrow="İşletme paneli"
              title="Menünüz ve servisiniz tek panelde toplanır"
              description="Paneli bilgisayardan, tabletten ya da telefondan kullanırsınız; program kurmanız gerekmez."
            />
            <Reveal className="relative isolate mx-auto mt-12 w-44 sm:w-52 lg:mx-0 lg:ml-6">
              <div aria-hidden className="absolute inset-0 -z-10 m-auto size-60 rounded-full bg-brand-200/60 blur-3xl" />
              <Image
                src="/img/mockups/hero-qr-menu.png"
                alt="Menuland QR menüde bir ürün sayfası: fotoğraf, fiyat, kalori ve alerjen uyarıları"
                width={1320}
                height={2647}
                sizes="208px"
                className="h-auto w-full -rotate-3 drop-shadow-2xl"
              />
            </Reveal>
          </div>
          <Reveal delay={0.05}>
            <ul className="grid gap-x-10 border-b border-stone-200 sm:grid-cols-2">
              {panelFeatures.map((f) => (
                <li key={f.title} className="border-t border-stone-200 py-6">
                  <h3 className="text-base font-bold text-stone-900">{f.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{f.text}</p>
                </li>
              ))}
            </ul>
            <Link href="/ozellikler" className={cn(textLink, "mt-6")}>
              Bütün özellikleri ve paketleri görün
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="ordu-uygulama-baslik"
        className="overflow-hidden border-t border-stone-200 bg-gradient-to-b from-white via-brand-50/60 to-white py-20 sm:py-28"
      >
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="ordu-uygulama-baslik"
              align="left"
              eyebrow="Menuland uygulaması"
              title="Uygulamayı kullanan Ordulular işletmenizi keşfeder"
              description="Menuland'e eklenen işletmeler iOS ve Android'deki Menuland uygulamasında da listelenir. Bunun için ayrıca bir şey yapmanız gerekmez."
            />
            <Reveal>
              <ul className="mt-8 border-b border-stone-200">
                {appFeatures.map((f) => (
                  <li key={f.title} className="border-t border-stone-200 py-5">
                    <h3 className="text-base font-bold text-stone-900">{f.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{f.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="mt-8 flex flex-wrap items-center gap-4">
              <a href={links.appStore} target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-0.5">
                <Image src="/img/app-store-badge.svg" alt="App Store'da Menuland" width={135} height={45} className="h-11 w-auto" />
              </a>
              <a href={links.googlePlay} target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-0.5">
                <Image src="/img/google-play-badge.svg" alt="Google Play'de Menuland" width={150} height={45} className="h-11 w-auto" />
              </a>
              <span className="flex items-center gap-1.5 text-sm text-stone-600">
                <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden />
                App Store'da {rating} puan
              </span>
            </Reveal>
          </div>

          <Reveal className="relative isolate mx-auto w-full max-w-md lg:order-first lg:max-w-none">
            <div aria-hidden className="absolute inset-8 -z-10 rounded-full bg-brand-300/40 blur-3xl" />
            <Image
              src="/img/menuland-map.jpg"
              alt="Menuland uygulamasının harita ekranında Ordu merkezdeki işletmeler"
              width={4125}
              height={4125}
              sizes="(min-width: 1024px) 520px, (min-width: 640px) 448px, 100vw"
              className="h-auto w-full rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(214,63,0,0.35)]"
            />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="ordu-kurulum-baslik" className="border-t border-stone-200 py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            <SectionHeading
              id="ordu-kurulum-baslik"
              align="left"
              eyebrow="Ordu'da yerinde kurulum"
              title="Kurulum için işletmenize geliyoruz"
              description="Menuland Ordu'da doğdu. Ordu'daki işletmelerde kurulumu yerinde yapıyoruz; gelemediğimiz durumlarda aynı kurulumu WhatsApp ve telefonla birlikte tamamlıyoruz."
            />
            <Reveal>
              <ol className="mt-10 border-b border-stone-200">
                {setupSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-5 border-t border-stone-200 py-6">
                    <span aria-hidden className="w-6 shrink-0 pt-px text-base font-bold text-brand-600 tabular-nums">
                      {i + 1}.
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-stone-900">{s.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal delay={0.05} className="lg:pt-16">
            <dl className="flex flex-col-reverse gap-2 border-t border-stone-300 pt-6">
              <dt className="text-[15px] text-stone-600">Ordu'da Menuland'de listelenen mekan</dt>
              <dd className="text-6xl font-extrabold tracking-tight text-stone-900 tabular-nums">{orduVenues}</dd>
            </dl>
            <p className="mt-6 text-[15px] leading-relaxed text-stone-600">
              Uygulamada Altınordu'nun yanı sıra Ünye, Fatsa, Perşembe ve Gülyalı'daki işletmeler de listeleniyor.
            </p>
            <div className="mt-12 border-t border-stone-200 pt-6">
              <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase">Destekleyenler</p>
              <div className="mt-4 flex items-center gap-8">
                <Image
                  src="/img/itucekirdek-menuland.png"
                  alt="İTÜ Çekirdek"
                  width={1773}
                  height={1300}
                  sizes="80px"
                  className="h-12 w-auto object-contain"
                />
                <Image
                  src="/img/orduticaretodasi.png"
                  alt="Ordu Ticaret ve Sanayi Odası"
                  width={1471}
                  height={315}
                  sizes="160px"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="ordu-fiyat-baslik" className="border-t border-stone-200 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            id="ordu-fiyat-baslik"
            align="left"
            eyebrow="Fiyatlar"
            title="Fiyatınız masa sayınıza göre artmaz"
            description="Temel ve Premium paketlerde taahhüt yoktur. Yıllık ödemede %20 indirim uygulanır."
          />
          <Reveal className="mt-12 grid border-y border-stone-200 md:grid-cols-2">
            {plans.map((plan, i) => (
              <div
                key={plan.id}
                className={cn(
                  "flex flex-col py-8",
                  i === 0 ? "md:pr-10" : "border-t border-stone-200 md:border-t-0 md:border-l md:pl-10"
                )}
              >
                <h3 className="text-xl font-bold text-stone-900">{plan.name}</h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-stone-600">{plan.description}</p>
                {/* Açıklamalar farklı uzunlukta; fiyatlar iki sütunda aynı hizada kalsın. */}
                <div className="mt-auto pt-6">
                  <p className="flex items-baseline gap-1.5">
                    <span className="text-5xl font-extrabold tracking-tight text-stone-900 tabular-nums">
                      {formatTRY(plan.monthly)}
                    </span>
                    <span className="text-stone-600">/ay</span>
                  </p>
                  <p className="mt-2 text-sm text-stone-600">
                    Yıllık ödemede {formatTRY(plan.yearlyTotal)} tek seferde ödenir; bu, aylık{" "}
                    {formatTRY(plan.yearly)} demektir.
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-6">
            <Link href="/#fiyatlar" className={textLink}>
              Fiyatları ayrıntılı inceleyin
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="ordu-sss-baslik" className="border-t border-stone-200 py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="ordu-sss-baslik"
              align="left"
              eyebrow="Sık sorulanlar"
              title="Ordu'da QR menü hakkında sorular"
            />
          </div>
          <Reveal>
            <div className="divide-y divide-stone-200 border-y border-stone-200">
              {faqs.map((f) => (
                <Disclosure key={f.q} summary={f.q} name="ordu-sss">
                  <p className="pb-5 text-[15px] leading-relaxed text-stone-600">{f.a}</p>
                </Disclosure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Kapanış: koyu zemin yerine marka şeftalisi (#FDCEAC). Metinler stone-900/800, kontrast AA. */}
      <section aria-labelledby="ordu-cta-baslik" className="relative isolate overflow-hidden bg-[#fdceac]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-15%] -z-10 size-[32rem] rounded-full bg-white/45 blur-3xl"
        />
        <div className="container-page py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <h2
              id="ordu-cta-baslik"
              className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-5xl sm:leading-[1.08]"
            >
              Ordu'daki işletmeniz için kurulumu birlikte planlayalım
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-800">
              WhatsApp'tan yazın ya da{" "}
              <a
                href={contact.phoneHref}
                className="font-semibold whitespace-nowrap text-stone-900 underline decoration-stone-900/40 underline-offset-4 hover:decoration-stone-900"
              >
                {contact.phone}
              </a>{" "}
              numarasını arayın; Pazartesi–Cumartesi 09.00–18.00 arasında yanıtlıyoruz. İsterseniz hesabınızı hemen açıp
              menünüzü kendiniz de girebilirsiniz.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={whatsappLink("KRM-ORDU2")} variant="whatsapp" size="lg">
                <MessageCircle />
                WhatsApp'tan yazın
              </CtaLink>
              <CtaLink href={links.panel} variant="outline" size="lg">
                Hemen başlayın
                <ArrowRight />
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
