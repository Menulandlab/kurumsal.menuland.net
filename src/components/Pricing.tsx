// src/components/Pricing.tsx

import React from 'react';
import Link from 'next/link';
import { MotionDiv } from './MotionDiv';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-menuland">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" />
  </svg>
);

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Gelir Modelimiz
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            İşletmenizin ihtiyaçlarına ve hedeflerine en uygun planı seçerek Menuland'in avantajlarından yararlanmaya başlayın.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Plan 1: Standart */}
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg h-full flex flex-col"
          >
            <h3 className="text-2xl font-bold text-gray-900 uppercase">Standart</h3>
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-gray-900">Ücretsiz</span>
            </div>
            <p className="mt-2 text-gray-500">Platforma ilk adımı atın.</p>
            <ul className="mt-8 space-y-4 text-gray-700 flex-grow">
              <li className="flex items-center gap-3"><CheckIcon /> İşletme Profili</li>
              <li className="flex items-center gap-3"><CheckIcon /> Sınırlı Görünürlük</li>
              <li className="flex items-center gap-3"><CheckIcon /> Destek Hattı</li>
            </ul>
            <Link href="/kayit?plan=standart" className="mt-8 block w-full text-center bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-all duration-300">
              Ücretsiz Başla
            </Link>
          </MotionDiv>

          {/* Plan 2: Premium (Öne Çıkan) */}
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl border-2 border-menuland h-full flex flex-col relative shadow-2xl transform lg:scale-105"
          >
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <span className="bg-menuland text-white text-xs font-bold px-4 py-1 rounded-full uppercase">En Popüler</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 uppercase">Premium</h3>
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-gray-900">899₺</span>
              <span className="text-lg text-gray-500">/ay</span>
            </div>
            <p className="mt-2 text-gray-500">Görünürlüğünüzü ve etkileşiminizi artırın.</p>
            <ul className="mt-8 space-y-4 text-gray-700 flex-grow">
              {/* Profesyonel yorum: Tekrarlanan özellikleri belirtmek yerine bir üst paketi içerdiğini söylemek daha etkilidir. */}
              <li className="flex items-center gap-3"><CheckIcon /> <strong>Tüm Standart Özellikler</strong></li>
              <li className="flex items-center gap-3"><CheckIcon /> Harita Pin Vurgulama</li>
              <li className="flex items-center gap-3"><CheckIcon /> Ayda 1 Kez Ana Sayfa Reklamı</li>
              <li className="flex items-center gap-3"><CheckIcon /> Ayda 1 Kez Hikaye Reklamı</li>
              <li className="flex items-center gap-3"><CheckIcon /> 7/24 Destek</li>
            </ul>
            <Link href="/kayit?plan=premium" className="mt-8 block w-full text-center bg-menuland text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300">
              Planı Seç
            </Link>
          </MotionDiv>

          {/* Plan 3: Pro */}
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg h-full flex flex-col"
          >
            <h3 className="text-2xl font-bold text-gray-900 uppercase">Pro</h3>
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-gray-900">1499₺</span>
              <span className="text-lg text-gray-500">/ay</span>
            </div>
            <p className="mt-2 text-gray-500">Maksimum erişim ve etki için.</p>
            <ul className="mt-8 space-y-4 text-gray-700 flex-grow">
              <li className="flex items-center gap-3"><CheckIcon /> <strong>Tüm Premium Özellikler</strong></li>
              <li className="flex items-center gap-3"><CheckIcon /> Anlık Bildirim Reklamları</li>
              <li className="flex items-center gap-3"><CheckIcon /> Kategori Sponsorluğu</li>
            </ul>
            <Link href="/kayit?plan=pro" className="mt-8 block w-full text-center bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-all duration-300">
              Planı Seç
            </Link>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Pricing;