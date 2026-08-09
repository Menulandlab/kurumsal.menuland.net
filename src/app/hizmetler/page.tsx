import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MotionDiv } from '@/components/MotionDiv';

const services = [
  {
    title: "Dijital QR Menü",
    description: "Müşterilerinizin kendi telefonlarından saniyeler içinde menünüze ulaşmasını sağlayın. Fiziksel menü maliyetlerini sıfırlayın ve her zaman güncel kalın.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-menuland">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    )
  },
  {
    title: "Garson Çağırma Sistemi",
    description: "Müşterileriniz masadaki QR kodu okutarak garson çağırabilir veya hesap isteyebilir. Servis hızınızı ve müşteri memnuniyetini artırın.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-menuland">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    )
  },
  {
    title: "Rezervasyon Yönetimi",
    description: "Dijital ortamda rezervasyonları kabul edin, masa doluluk oranlarını takip edin ve müşteri kaybını önleyin.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-menuland">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    )
  },
  {
    title: "Kampanya ve Duyuru Paneli",
    description: "Özel indirimlerinizi, mutlu saatlerinizi (happy hour) ve etkinliklerinizi uygulama üzerinden tüm kullanıcılarınıza duyurun.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-menuland">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688 0-1.25-.562-1.25-1.25s.562-1.25 1.25-1.25h3.02c.688 0 1.25.562 1.25 1.25s-.562 1.25-1.25 1.25h-3.02Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A2.25 2.25 0 0 0 18.75 10.5H12a2.25 2.25 0 0 1-2.25-2.25V1.5Z" />
      </svg>
    )
  },
  {
    title: "Detaylı İşletme Analitiği",
    description: "Hangi ürününüz daha çok inceleniyor? Hangi saatlerde daha yoğunsunuz? Veriye dayalı kararlar vererek işletmenizi büyütün.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-menuland">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    )
  },
  {
    title: "Çoklu Dil Desteği",
    description: "Turist misafirleriniz için menünüzü farklı dillerde sunun. Küresel bir hizmet anlayışıyla müşteri kitlenizi genişletin.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-menuland">
        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
    )
  }
];

export default function HizmetlerPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hizmetlerimiz</h1>
              <p className="text-xl text-gray-600">
                Menuland olarak restoran, kafe ve barların dijital dönüşüm süreçlerinde ihtiyaç duydukları tüm araçları tek bir platformda sunuyoruz.
              </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-slate-50 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Detaylı İçerik Alanı (AI ve SEO için) */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Neden Dijital Dönüşüm?</h2>
            <div className="prose prose-lg text-gray-600 mx-auto">
              <p>
                Geleneksel kağıt menüler artık hem maliyetli hem de hijyen açısından tercih edilmiyor. Menuland'in sunduğu <strong>Dijital Menü</strong> çözümleri sayesinde işletmeler, menülerini anlık olarak güncelleyebilir, tükenen ürünleri saniyeler içinde gizleyebilir ve fiyat değişimlerini anında yansıtabilir.
              </p>
              <p>
                <strong>Garson Çağırma Sistemi</strong> ile müşterileriniz masada beklemek yerine tek tıkla servis ekibine ulaşabilir. Bu durum, masaların daha hızlı dönmesini ve operasyonel verimliliğin artmasını sağlar.
              </p>
              <p>
                Ayrıca <strong>Rezervasyon Yönetimi</strong> ile telefon trafiğini azaltabilir, müşterilerinize modern bir rezervasyon deneyimi sunabilirsiniz. Menuland, işletmenizin sadece menüsünü değil, tüm müşteri deneyimini dijitalleştirir.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
