import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MotionDiv } from '@/components/MotionDiv';

const featuresList = [
  {
    category: "Görsel ve Sunum",
    items: [
      "Yüksek çözünürlüklü ürün görselleri",
      "Kategori bazlı akıllı listeleme",
      "Ürün detay ve içerik açıklamaları",
      "Özelleştirilebilir tema seçenekleri"
    ]
  },
  {
    category: "Operasyonel Araçlar",
    items: [
      "Tek tıkla garson çağırma",
      "Hızlı hesap isteme butonu",
      "Masaya özel QR kod tanımlama",
      "Anlık ürün stok yönetimi"
    ]
  },
  {
    category: "Pazarlama ve Satış",
    items: [
      "Kampanya ve indirim duyuruları",
      "Öne çıkan ürünler bölümü",
      "Carousel reklam alanları",
      "Sosyal medya entegrasyonu"
    ]
  },
  {
    category: "Yönetim ve Raporlama",
    items: [
      "Detaylı ürün tıklama istatistikleri",
      "Müşteri davranış analizi",
      "Şube yönetimi (Zincir işletmeler için)",
      "Bulut tabanlı yönetim paneli"
    ]
  }
];

export default function OzelliklerPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight uppercase">Tüm Özellikler</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Menuland'in sunduğu kapsamlı özelliklerle işletmenizin dijital dünyadaki potansiyelini maksimize edin.
              </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {featuresList.map((section, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-10 rounded-3xl border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">{section.category}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <svg className="w-5 h-5 text-menuland" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* SEO ve Teknik Detay */}
        <section className="bg-gray-900 py-20 text-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Teknik Altyapımız</h2>
            <div className="prose prose-lg prose-invert mx-auto text-gray-300">
              <p>
                Menuland, en modern web teknolojileriyle geliştirilmiştir. <strong>Bulut tabanlı (Cloud)</strong> altyapımız sayesinde verileriniz her zaman güvende ve dünyanın her yerinden erişilebilirdir. <strong>PWA (Progressive Web App)</strong> teknolojimiz sayesinde müşterileriniz uygulama indirmeden uygulama hızında bir deneyim yaşar.
              </p>
              <p>
                Sistemimiz, saniyede binlerce isteği karşılayabilecek kapasitede ölçeklenebilir bir mimariye sahiptir. QR kodlarımız her türlü ışık ve kamera koşulunda en hızlı şekilde taranacak şekilde optimize edilmiştir. İşletmenizin teknolojik ihtiyaçlarını karşılamak için sürekli olarak Ar-Ge çalışmalarımıza devam ediyoruz.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
