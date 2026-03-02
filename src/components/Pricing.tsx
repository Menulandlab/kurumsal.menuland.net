// src/components/Pricing.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { MotionDiv } from './MotionDiv';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-600">
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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            İşletmeniz İçin En Uygun Planı Seçin
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            İşletmenizin ihtiyaçlarına ve hedeflerine en uygun planı seçerek Menuland'in avantajlarından yararlanmaya başlayın.
          </p>
        </MotionDiv>

        {/* Paketler */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">

          {/* Plan 1: Temel Paket */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase">Temel Paket</h3>
              <div className="mt-6">
                <span className="text-5xl font-extrabold text-gray-900">349₺</span>
                <span className="text-lg text-gray-500">/ay</span>
              </div>
              <p className="mt-3 text-base font-semibold text-gray-700">İşletme Yönetimi ve QR Menü</p>
              <p className="mt-1 text-sm text-gray-500">İşletmenizi dijitale taşıyın, QR menü ile müşterilerinize ulaşın</p>
            </div>

            <ul className="mt-8 space-y-3 text-gray-700 flex-grow text-sm">
              <li className="flex items-start gap-2"><CheckIcon /> <span>İşletme Yönetimi</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>QR Menü Sistemi</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Temel İstatistikler</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Müşteri Desteği</span></li>
            </ul>

            <Link href="https://isletme.menuland.net" target="_blank" rel="noopener noreferrer" className="mt-8 block w-full text-center bg-gray-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-md">
              Planı Seç
            </Link>
          </MotionDiv>

          {/* Plan 2: Premium (Öne Çıkan) */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl border-2 border-menuland shadow-2xl transform lg:scale-105 h-full flex flex-col relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-menuland text-white text-xs font-bold px-5 py-2 rounded-full uppercase shadow-lg">🔥 EN POPÜLER</span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase mt-2">Premium Paket</h3>
              <div className="mt-6">
                <span className="text-5xl font-extrabold text-gray-900">649₺</span>
                <span className="text-lg text-gray-500">/ay</span>
              </div>
              <p className="mt-3 text-base font-semibold text-gray-700">Tüm Özellikler ile Maksimum Etki</p>
              <p className="mt-1 text-sm text-gray-500">Menuland'in tüm özelliklerinden faydalanın</p>
            </div>

            <ul className="mt-8 space-y-3 text-gray-700 flex-grow text-sm">
              <li className="flex items-start gap-2"><CheckIcon /> <span><strong>Tüm Temel Paket Özellikleri</strong></span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Rezervasyon Sistemi</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Kampanya Oluşturma</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>QR Menü Oluşturma</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Sınırsız Hikaye Paylaşımı</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Carousel Reklam Alanı (Ayda 2 Slot)</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Öncelikli Müşteri Desteği</span></li>
              <li className="flex items-start gap-2 text-green-600"><CheckIcon /> <span><strong>Detaylı Analitik ve Raporlama</strong></span></li>
            </ul>

            <Link href="https://isletme.menuland.net" target="_blank" rel="noopener noreferrer" className="mt-8 block w-full text-center bg-menuland text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg">
              Planı Seç
            </Link>
          </MotionDiv>
        </div>



        {/* Paket Karşılaştırma Tablosu Butonu */}
        <div className="mt-16 text-center">
          <Link
            href="#comparison"
            className="inline-block bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-all duration-300"
          >
            📊 Detaylı Paket Karşılaştırma Tablosu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
