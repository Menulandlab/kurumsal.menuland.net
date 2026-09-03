import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// METADATA BÖLÜMÜ GÜNCELLENDİ (Daha Sağlam Yöntemle)
export const metadata: Metadata = {
  // `metadataBase`, göreceli yolların (örn: /img/og-image.png) tam URL'e dönüştürülmesi için kullanılır.
  metadataBase: new URL('https://www.menuland.net'),

  title: "Menuland - Restoranlar İçin Dijital Menü Çözümleri",
  description: "Menuland ile menünüzü dijitalleştirin, etkinliklerinizi duyurun ve müşteri etkileşiminizi artırın. Kafe, bar ve restoranlar için modern çözümler.",
  
  // Open Graph (Facebook, WhatsApp, LinkedIn vb. için)
  openGraph: {
    title: "Menuland - Dijital Dünyaya Açılan Kapınız",
    description: "Menünüzü saniyeler içinde dijitalleştirin ve daha fazla müşteriye ulaşın.",
    url: "https://www.menuland.net",
    siteName: "Menuland",
    images: [
      {
        url: '/img/og-image.png', // Artık göreceli yol kullanıyoruz
        width: 1200,
        height: 630,
        alt: 'Menuland Tanıtım Görseli',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },

  // Twitter Kartı
  twitter: {
    card: 'summary_large_image',
    title: "Menuland - Dijital Dünyaya Açılan Kapınız",
    description: "Menünüzü saniyeler içinde dijitalleştirin ve daha fazla müşteriye ulaşın.",
    images: ['/img/og-image.png'], // Artık göreceli yol kullanıyoruz
  },

  // İsteğe Bağlı: Robotlar için direktifler
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1971172710431675";

  return (
    <html lang="tr">
      <body className={`${poppins.variable} font-poppins bg-white text-gray-800`}>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3776725197972523"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Meta Pixel Base Tracking */}
        <Script id="meta-pixel" strategy="afterInteractive">
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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
            alt="Meta Pixel PageView"
          />
        </noscript>
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
