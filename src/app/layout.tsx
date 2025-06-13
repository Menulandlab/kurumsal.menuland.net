import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
  return (
    <html lang="tr">
      <body className={`${poppins.variable} font-poppins bg-white text-gray-800`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
