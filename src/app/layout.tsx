import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import CookieConsent from "@/components/CookieConsent";
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
  return (
    <html lang="tr" className={jakarta.variable}>
      <body>
        {/* Google Analytics ve Meta pikseli yalnızca çerez onayından sonra yüklenir (CookieConsent). */}
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
        <CookieConsent />
      </body>
    </html>
  );
}
