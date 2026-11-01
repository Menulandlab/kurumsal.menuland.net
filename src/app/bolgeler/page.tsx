import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Headset,
  MapPin,
  MessageCircle,
  QrCode,
  ShoppingBag,
} from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal, SectionHeading } from "@/components/site/section";
import { CtaLink } from "@/components/site/cta-link";
import { contact, links, stats, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri",
  description:
    "Menuland QR menü ve işletme paneli Türkiye'nin her ilinde kullanılabilir. Mobil uygulamadaki keşif ağımız Ordu'da aktif; İstanbul, Ankara, İzmir ve diğer şehirlere açılmayı planlıyoruz.",
  alternates: { canonical: "/bolgeler" },
};

const everywhere: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: QrCode,
    title: "QR menü ve işletme paneli",
    text: "Panel tarayıcıda çalışır. Hesabınızı açar, menünüzü girer ve QR kodlarınızı bulunduğunuz yerden indirirsiniz.",
  },
  {
    icon: ShoppingBag,
    title: "Gel-Al sipariş ve rezervasyon",
    text: "Siparişler ve masa talepleri, işletmeniz hangi ilde olursa olsun aynı panele düşer.",
  },
  {
    icon: Headset,
    title: "Uzaktan kurulum desteği",
    text: "Kurulumda WhatsApp, telefon ve e-posta üzerinden yardımcı oluyoruz; yerinde ziyaret gerekmez.",
  },
];

const plannedCities = [
  { city: "İstanbul", region: "Marmara" },
  { city: "Ankara", region: "İç Anadolu" },
  { city: "İzmir", region: "Ege" },
  { city: "Bursa", region: "Marmara" },
  { city: "Antalya", region: "Akdeniz" },
  { city: "Samsun", region: "Karadeniz" },
  { city: "Giresun", region: "Karadeniz" },
  { city: "Trabzon", region: "Karadeniz" },
];

const faqs = [
  {
    q: "Şehrim listede yok, Menuland'i kullanabilir miyim?",
    a: "Evet. QR menü, Gel-Al sipariş, rezervasyon ve kampanya özellikleri bulunduğunuz ilden bağımsız çalışır. Hesabınızı bugün açıp menünüzü yayına alabilirsiniz.",
  },
  {
    q: "“Aktif şehir” ne anlama geliyor?",
    a: "Menuland'in yola çıktığı ve mobil uygulamadaki keşif ağının şu an çalıştığı şehir: Ordu. Diğer illerde panel ve QR menü aynı şekilde çalışır; uygulama içi tanıtım çalışmalarını ise sırayla yeni şehirlere taşıyoruz.",
  },
  {
    q: "Kurulum için yanıma gelmeniz gerekiyor mu?",
    a: "Hayır. Kurulumu panelden kendiniz yapabilirsiniz; takıldığınız yerde WhatsApp, telefon veya e-postayla uzaktan destek veriyoruz.",
  },
];

function PageCta() {
  return (
    <section aria-labelledby="bolgeler-cta-baslik" className="pb-20 sm:pb-28">
      <div className="container-page">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-stone-950 p-6 text-white sm:p-8 lg:flex-row lg:items-center">
          <div>
            <h2 id="bolgeler-cta-baslik" className="text-xl font-bold sm:text-2xl">
              Hangi şehirde olursanız olun, bugün başlayın
            </h2>
            <p className="mt-1.5 text-[15px] text-stone-300">
              Hesabınızı açın, menünüzü girin, QR kodları masalara koyun. Sorularınız için {contact.phone}.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:shrink-0">
            <CtaLink href={links.panel} size="lg">
              Hemen başlayın
              <ArrowRight />
            </CtaLink>
            <CtaLink href={whatsappLink("KRM-BOLGE2")} variant="whatsapp" size="lg">
              <MessageCircle />
              WhatsApp'tan yazın
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function BolgelerPage() {
  const orduVenues = `${stats.orduVenues.toLocaleString("tr-TR")}+`;

  return (
    <>
      <PageHeader
        eyebrow="Hizmet bölgeleri"
        title="Menuland Türkiye'nin her yerinde çalışır"
        description="QR menü ve işletme paneli internet olan her yerde kullanılabilir; Türkiye'nin hangi ilinde olursanız olun bugün başlayabilirsiniz. Mobil uygulamadaki keşif ağımız Ordu'da başladı ve yeni şehirlere açılıyor."
        breadcrumb={[{ label: "Hizmet bölgeleri" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={links.panel} size="lg">
            Hemen başlayın
            <ArrowRight />
          </CtaLink>
          <CtaLink href={whatsappLink("KRM-BOLGE1")} variant="outline" size="lg">
            <MessageCircle />
            Şehrinizi sorun
          </CtaLink>
        </div>
      </PageHeader>

      <section aria-labelledby="her-ilde-baslik" className="py-16 sm:py-20">
        <div className="container-page">
          {/* Sayfa başlığının hemen altında: ilk ekranda görünebileceği için animasyonsuz. */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-brand-600">Tüm Türkiye</p>
            <h2
              id="her-ilde-baslik"
              className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl"
            >
              Her ilde bugün kullanabileceğiniz hizmetler
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
              İşletme paneli ve QR menü bulut üzerinden çalışır; şehrinize ekip gelmesini beklemeniz gerekmez.
            </p>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {everywhere.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_1px_2px_rgba(28,25,23,0.04),0_8px_24px_-12px_rgba(28,25,23,0.12)] sm:p-7"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold text-stone-900">{title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="aktif-sehir-baslik" className="bg-gradient-to-b from-white via-brand-50/50 to-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            id="aktif-sehir-baslik"
            align="left"
            eyebrow="Aktif şehir"
            title="Uygulamadaki keşif ağımız Ordu'da"
            description="Menuland Ordu'da doğdu. Buradaki restoran, kafe ve işletmeler Menuland uygulamasında menüleriyle birlikte, şehir ve ilçe aramalarında ve haritada listeleniyor."
          />
          <Reveal className="mt-10 grid gap-8 rounded-3xl border border-brand-200 bg-white p-6 shadow-[0_30px_60px_-30px_rgba(214,63,0,0.35)] sm:p-9 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 ring-1 ring-emerald-200">
                  <span className="size-1.5 rounded-full bg-emerald-600" aria-hidden />
                  Aktif
                </span>
                <h3 className="flex items-center gap-2 text-3xl font-extrabold tracking-tight text-stone-900">
                  <MapPin className="size-7 text-brand-600" aria-hidden />
                  Ordu
                </h3>
              </div>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-stone-600">
                Ordu'daki işletmeler QR menü ve panelin yanında, uygulamayı kullanan müşterilerin karşısına da çıkar:
                kampanyalar ve etkinlikler uygulamada duyurulur, müşteriler PuanLand puanlarını bu işletmelerde
                harcar.
              </p>
              <CtaLink href={links.panel} variant="dark" size="lg" className="mt-6">
                İşletmenizi ekleyin
                <ArrowRight />
              </CtaLink>
            </div>
            <dl className="flex flex-col-reverse gap-1 rounded-2xl bg-stone-50 p-6 lg:p-8">
              <dt className="text-sm text-stone-600">Ordu'da Menuland'de listelenen mekan</dt>
              <dd className="text-5xl font-extrabold tracking-tight text-stone-900 tabular-nums">{orduVenues}</dd>
            </dl>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="planlanan-baslik" className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            id="planlanan-baslik"
            align="left"
            eyebrow="Sıradaki şehirler"
            title="Keşif ağını genişletmeyi planladığımız şehirler"
            description="Bu şehirlerdeki işletmeler panel, QR menü, Gel-Al ve rezervasyon özelliklerini bugünden kullanabilir. Uygulamadaki listelenme ve tanıtım çalışmalarını sırayla bu şehirlere taşıyoruz."
          />
          <Reveal className="mt-10">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {plannedCities.map((c) => (
                <li key={c.city} className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4">
                  <MapPin className="size-5 shrink-0 text-brand-600" aria-hidden />
                  <div>
                    <p className="font-bold text-stone-900">{c.city}</p>
                    <p className="text-sm text-stone-600">{c.region}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="bolge-sss-baslik" className="border-t border-stone-200 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading id="bolge-sss-baslik" align="left" eyebrow="Sık sorulanlar" title="Bölgelerle ilgili sorular" />
          <Reveal className="mt-10">
            <dl className="grid gap-5 md:grid-cols-3">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-3xl border border-stone-200 bg-white p-6">
                  <dt className="text-base font-bold text-stone-900">{f.q}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-stone-600">{f.a}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <PageCta />
    </>
  );
}
