import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { SITE_URL, contact, links } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
});

const title = "Menuland İşletme | Restoranlar için QR Menü, Gel-Al ve Rezervasyon Paneli";
const description =
  "Menünüzü dakikalar içinde dijitalleştirin: QR menü, 14 alerjen ve gramaj bilgisi, Gel-Al sipariş, rezervasyon ve kampanyalar tek panelde. Masa başına ücret yok, sabit aylık fiyat.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Menuland İşletme" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Menuland İşletme | Menünüz, siparişleriniz ve müşterileriniz tek panelde",
    description,
    url: SITE_URL,
    siteName: "Menuland",
    images: [{ url: "/img/og-image.png", width: 1200, height: 630, alt: "Menuland İşletme Paneli" }],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menuland İşletme",
    description,
    images: ["/img/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#ff4d00",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Menuland",
  legalName: contact.company,
  url: SITE_URL,
  logo: `${SITE_URL}/img/logo.png`,
  email: contact.infoEmail,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-850-840-13-02",
    contactType: "customer support",
    areaServed: "TR",
    availableLanguage: "Turkish",
  },
  sameAs: [links.appStore, links.googlePlay],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1971172710431675";
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-DVXKCWSF0W";

  return (
    <html lang="tr" className={jakarta.variable}>
      <body>
        {/* Google Analytics (gtag.js). lazyOnload: sayfa yüklendikten sonra gelir, ilk açılışı yavaşlatmaz. */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { page_path: window.location.pathname });
          `}
        </Script>

        {/* Meta Pixel Base Tracking */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* Ham HTML olarak basılır: React <img>'yi önceden yüklemeye çalışıp her ziyaretçide ikinci bir PageView saydırmasın. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1" />`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        <Providers>
          <a
            href="#icerik"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
          >
            İçeriğe geç
          </a>
          <Header />
          <main id="icerik">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
