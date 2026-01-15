// src/components/Pricing.tsx

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MotionDiv } from './MotionDiv';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-600">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" />
  </svg>
);

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

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

          {/* Aylık/Yıllık Toggle */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Aylık</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-menuland focus:ring-offset-2"
              style={{ backgroundColor: billingCycle === 'yearly' ? '#ff4d00' : '#d1d5db' }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yıllık <span className="text-green-600 font-bold">(30 Gün Ücretsiz)</span>
            </span>
          </div>
        </MotionDiv>

        {/* Paketler */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">

          {/* Plan 1: Standart */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase">Standart</h3>
              <div className="mt-6">
                <span className="text-5xl font-extrabold text-gray-900">ÜCRETSİZ</span>
              </div>
              <p className="mt-3 text-base font-semibold text-gray-700">Platform'a İlk Adımı Atın</p>
              <p className="mt-1 text-sm text-gray-500">İşletmenizi Menuland'de ücretsiz listeleyin</p>
            </div>

            <ul className="mt-8 space-y-3 text-gray-700 flex-grow text-sm">
              <li className="flex items-start gap-2"><CheckIcon /> <span>İşletme Profili</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Temel Bilgiler (adres, telefon, e-posta)</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Çalışma Saatleri</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>1 Kategori</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>3 Fotoğraf</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Harita Gösterimi</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Sosyal Medya Linkleri</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Müşteri Yorumları Görüntüleme</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Temel İstatistikler</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>İşletme Sahibi Rozeti</span></li>
            </ul>

            <Link href="/kayit?plan=standart" className="mt-8 block w-full text-center bg-green-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md">
              Ücretsiz Başla
            </Link>
          </MotionDiv>

          {/* Plan 2: PREMIUM PAKET (Yeni) */}
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
              <h3 className="text-2xl font-bold text-gray-900 uppercase mt-2">PREMIUM PAKET</h3>
              <div className="mt-2 text-sm text-green-600 font-bold uppercase tracking-wider">SINIRSIZ</div>
              <p className="mt-1 text-sm text-gray-500">İşletmenizin Tam Potansiyelini Açın</p>

              <div className="mt-6">
                {billingCycle === 'monthly' ? (
                  <>
                    <span className="text-5xl font-extrabold text-gray-900">499₺</span>
                    <span className="text-lg text-gray-500">/ay</span>
                  </>
                ) : (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-extrabold text-gray-900">4.990₺</span>
                      <span className="text-lg text-gray-500">/yıl</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sm text-gray-400 line-through">5.988₺</span>
                      <span className="ml-2 text-sm text-green-600 font-semibold">30 Gün Ücretsiz</span>
                    </div>
                  </>
                )}
              </div>
              <p className="mt-3 text-base font-semibold text-gray-700">Standart paketteki tüm özellikler dahil, artı premium avantajlar</p>
            </div>

            <ul className="mt-8 space-y-3 text-gray-700 flex-grow text-sm">
              <li className="flex items-start gap-2"><CheckIcon /> <span><strong>Standart Paketteki Her Şey +</strong></span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Sınırsız Fotoğraf</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Rezervasyon Sistemi</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Kampanya Oluşturma</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>QR Menü oluşturma</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Sınırsız Hikaye Paylaşımı</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Carousel Reklam Alanı (Ayda 2 Slot)</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Yorumlara Yanıt Verme</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Detaylı Analytics Dashboard</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>"Premium İşletme" Rozeti</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Arama Sonuçlarında Öncelikli Gösterim</span></li>
              <li className="flex items-start gap-2"><CheckIcon /> <span>Öncelikli Müşteri Desteği</span></li>
            </ul>

            <Link href="/kayit?plan=premium" className="mt-8 block w-full text-center bg-menuland text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg">
              Premium'a Geç
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
