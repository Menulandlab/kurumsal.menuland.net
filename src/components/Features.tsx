// src/components/Features.tsx

import React from 'react';
import { MotionDiv } from './MotionDiv';

const featuresData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-menuland">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Tamamen Dijital Menü',
    description: 'Kağıt menü maliyetinden kurtulun. Menülerinizi anında güncelleyin, ürün görselleri ve detaylı açıklamalar ekleyerek satışlarınızı artırın.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-menuland">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688 0-1.25-.562-1.25-1.25s.562-1.25 1.25-1.25h3.02c.688 0 1.25.562 1.25 1.25s-.562 1.25-1.25 1.25h-3.02Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A2.25 2.25 0 0 0 18.75 10.5H12a2.25 2.25 0 0 1-2.25-2.25V1.5Z" />
      </svg>
    ),
    title: 'Etkinlik ve Duyurular',
    description: 'Canlı müzik günlerinizi, özel indirimlerinizi veya tadım etkinliklerinizi uygulama üzerinden tüm kullanıcılara kolayca duyurun.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-menuland">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25c3.866 0 7.345 1.453 9.975 3.854M7.5 10.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
      </svg>
    ),
    title: 'Hedefli Reklam Kampanyaları',
    description: 'Belirli bir hedef kitleye yönelik reklamlar oluşturarak yeni müşteriler kazanın ve mevcut müşterilerinizin sadakatini artırın.',
  },
];

const Features = () => {
  return (
    // Bölüm arka planını açık gri (slate-50) yapıyoruz
    <section id="features" className="bg-slate-50 py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <MotionDiv
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Metinleri koyu renk yapıyoruz */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Neden Menuland?</h2>
          <p className="mt-4 text-lg text-gray-600">İşletmenizi bir adım öne taşıyacak güçlü ve yenilikçi çözümler sunuyoruz.</p>
        </MotionDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <MotionDiv
              key={index}
              // Kartları beyaz arka plan, açık gri kenarlık ve gölge ile güncelliyoruz
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-menuland transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">{feature.icon}</div>
              {/* Kart metinlerini de koyu renk yapıyoruz */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;