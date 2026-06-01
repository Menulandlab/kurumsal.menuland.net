"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MotionDiv } from './MotionDiv';
import { generateEventId, trackMetaEvent } from '@/utils/meta-pixel';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-600">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" />
  </svg>
);

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleInitiateCheckout = (packageName: string, monthlyPrice: number, yearlyPrice: number) => {
    const eventId = generateEventId();
    const activePrice = isYearly ? yearlyPrice : monthlyPrice;
    trackMetaEvent('InitiateCheckout', eventId, {
      content_name: packageName,
      value: activePrice,
      currency: 'TRY',
      content_category: 'Subscription'
    });
  };

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
            İşletmeniz İçin En İyi Planı Seçin
          </h2>
        </MotionDiv>

        {/* Aylık / Yıllık Toggle */}
        <div className="flex justify-center mb-16">
          <div className="relative flex bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-8 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
                !isYearly ? "bg-white text-gray-900 shadow-md" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Aylık
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-8 py-2 text-sm font-bold rounded-lg transition-all duration-300 flex items-center gap-2 ${
                isYearly ? "bg-gray-900 text-white shadow-md" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Yıllık
              <span className="bg-orange-100 text-orange-600 text-[10px] px-1.5 py-0.5 rounded uppercase">
                %20 İndirim
              </span>
            </button>
          </div>
        </div>

        {/* Standart Paketler */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto mb-24">
          {/* Temel Paket */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 pt-12 rounded-2xl border-2 border-gray-100 shadow-xl flex flex-col relative"
          >
            {isYearly && (
              <div className="absolute top-4 left-6">
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">
                  %20 İndirim
                </span>
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900">Temel Paket</h3>
            <div className="mt-6">
              <span className="text-5xl font-extrabold text-gray-900">
                {isYearly ? "279₺" : "349₺"}
              </span>
              <span className="text-gray-500 ml-1">/ay</span>
              {isYearly && (
                <p className="text-xs text-gray-400 mt-1">
                  <span className="line-through">349₺/ay</span> yıllık 3.350₺
                </p>
              )}
            </div>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed">
              Dijital menüye geçiş yapmak isteyen işletmeler için ideal başlangıç paketi.
            </p>

            <Link onClick={() => handleInitiateCheckout('Temel Paket', 349, 279)} href="https://isletme.menuland.net" target="_blank" className="mt-8 block w-full text-center bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-black transition-all">
              Satın Al
            </Link>
            <p className="text-[10px] text-gray-400 text-center mt-3">
              {isYearly ? "Yıllık ödeme • İstediğiniz zaman iptal edebilirsiniz" : "Her ay otomatik yenilenir • İstediğiniz zaman iptal edebilirsiniz"}
            </p>

            <ul className="mt-10 space-y-4 text-sm text-gray-600">
              <li className="flex items-center gap-3"><CheckIcon /> Sınırsız Kategori ve Ürün</li>
              <li className="flex items-center gap-3"><CheckIcon /> QR Kod Oluşturucu</li>
              <li className="flex items-center gap-3"><CheckIcon /> Temel İstatistikler</li>
              <li className="flex items-center gap-3"><CheckIcon /> İşletme Bilgileri Yönetimi</li>
              <li className="flex items-center gap-3"><CheckIcon /> 7/24 E-posta Desteği</li>
            </ul>
          </MotionDiv>

          {/* Premium Paket */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 pt-12 rounded-2xl border-2 border-orange-100 shadow-2xl flex flex-col relative"
          >
            <div className="absolute -top-3 right-8">
              <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">EN POPÜLER</span>
            </div>
            {isYearly && (
              <div className="absolute top-4 left-6">
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">
                  %20 İndirim
                </span>
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900">Premium Paket</h3>
            <div className="mt-6">
              <span className="text-5xl font-extrabold text-gray-900">
                {isYearly ? "519₺" : "649₺"}
              </span>
              <span className="text-gray-500 ml-1">/ay</span>
              {isYearly && (
                <p className="text-xs text-gray-400 mt-1">
                  <span className="line-through">649₺/ay</span> yıllık 6.230₺
                </p>
              )}
            </div>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed">
              Müşteri etkileşimini artırmak ve tam kontrol sağlamak isteyenler için.
            </p>

            <Link onClick={() => handleInitiateCheckout('Premium Paket', 649, 519)} href="https://isletme.menuland.net" target="_blank" className="mt-8 block w-full text-center bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition-all">
              Hemen Başla
            </Link>
            <p className="text-[10px] text-gray-400 text-center mt-3">
              {isYearly ? "Yıllık ödeme • İstediğiniz zaman iptal edebilirsiniz" : "Her ay otomatik yenilenir • İstediğiniz zaman iptal edebilirsiniz"}
            </p>

            <ul className="mt-10 space-y-4 text-sm text-gray-600">
              <li className="flex items-center gap-3 font-bold"><CheckIcon /> Tüm Temel Paket Özellikleri</li>
              <li className="flex items-center gap-3"><CheckIcon /> Rezervasyon Yönetimi</li>
              <li className="flex items-center gap-3"><CheckIcon /> Kampanya Oluşturma</li>
              <li className="flex items-center gap-3"><CheckIcon /> Etkinlik Yönetimi</li>
              <li className="flex items-center gap-3"><CheckIcon /> Müşteri Yorumları ve Analizi</li>
              <li className="flex items-center gap-3"><CheckIcon /> Garson Çağırma Bildirimleri</li>
              <li className="flex items-center gap-3 font-bold"><CheckIcon /> Gelişmiş Raporlama</li>
              <li className="flex items-center gap-3"><CheckIcon /> Önceliklendirilmiş Destek</li>
            </ul>
          </MotionDiv>
        </div>

        {/* Zincir İşletme Bölümü */}
        <div className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
                <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-lg inline-flex items-center gap-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M4 3a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z" />
                        <path fillRule="evenodd" d="M3 8h14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Zm5 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                    </svg>
                    Çoklu Şube / Zincir İşletmeler
                </span>
                <h3 className="text-3xl font-bold text-gray-900">Tüm Şubelerinizi Tek Pakette Yönetin</h3>
                <p className="mt-4 text-gray-600">Her şube için ayrı abonelik, tek merkezden yönetim. 2–5 şube arası zincir fiyatlandırması.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Temel Zincir */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg flex flex-col relative">
                    <span className="absolute -top-2 left-4 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Zincir</span>
                    <h4 className="text-xl font-bold text-gray-900">Temel Zincir</h4>
                    <div className="mt-6">
                        <span className="text-4xl font-extrabold text-gray-900">
                            {isYearly ? "223₺" : "279₺"}
                        </span>
                        <span className="text-gray-500 ml-1">/şube/ay</span>
                        {isYearly && (
                            <p className="text-xs text-gray-400 mt-1">
                                <span className="line-through">279₺/ay</span> yıllık 2.680₺/şube
                            </p>
                        )}
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg mt-6 mb-8 text-orange-800 text-xs text-center font-medium">
                        Her şube kendi aboneliğini alır, tüm şubeler aynı plan özelliklerinden yararlanır.
                    </div>
                    <Link onClick={() => handleInitiateCheckout('Temel Zincir', 279, 223)} href="https://isletme.menuland.net" target="_blank" className="bg-gray-900 text-white font-bold py-3 rounded-lg text-center hover:bg-black transition-all mb-8">
                        Şube Aboneliği Al
                    </Link>
                    <ul className="space-y-4 text-sm text-gray-600 border-t border-gray-100 pt-8">
                        <li className="flex items-center gap-3"><CheckIcon /> Sınırsız Kategori ve Ürün</li>
                        <li className="flex items-center gap-3"><CheckIcon /> QR Kod Oluşturucu</li>
                        <li className="flex items-center gap-3"><CheckIcon /> Temel İstatistikler</li>
                        <li className="flex items-center gap-3"><CheckIcon /> İşletme Bilgileri Yönetimi</li>
                        <li className="flex items-center gap-3"><CheckIcon /> 7/24 E-posta Desteği</li>
                    </ul>
                </div>

                {/* Premium Zincir */}
                <div className="bg-white p-8 rounded-2xl border border-orange-100 shadow-lg flex flex-col relative">
                    <span className="absolute -top-2 left-4 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Zincir</span>
                    <h4 className="text-xl font-bold text-gray-900">Premium Zincir</h4>
                    <div className="mt-6">
                        <span className="text-4xl font-extrabold text-gray-900">
                            {isYearly ? "415₺" : "519₺"}
                        </span>
                        <span className="text-gray-500 ml-1">/şube/ay</span>
                        {isYearly && (
                            <p className="text-xs text-gray-400 mt-1">
                                <span className="line-through">519₺/ay</span> yıllık 4.984₺/şube
                            </p>
                        )}
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg mt-6 mb-8 text-orange-800 text-xs text-center font-medium">
                        Her şube kendi aboneliğini alır, tüm şubeler aynı plan özelliklerinden yararlanır.
                    </div>
                    <Link onClick={() => handleInitiateCheckout('Premium Zincir', 519, 415)} href="https://isletme.menuland.net" target="_blank" className="bg-orange-600 text-white font-bold py-3 rounded-lg text-center hover:bg-orange-700 transition-all mb-8">
                        Şube Aboneliği Al
                    </Link>
                    <ul className="space-y-4 text-sm text-gray-600 border-t border-gray-100 pt-8">
                        <li className="flex items-center gap-3 font-bold"><CheckIcon /> Tüm Temel Paket Özellikleri</li>
                        <li className="flex items-center gap-3"><CheckIcon /> Rezervasyon Yönetimi</li>
                        <li className="flex items-center gap-3"><CheckIcon /> Kampanya Oluşturma</li>
                        <li className="flex items-center gap-3"><CheckIcon /> Etkinlik Yönetimi</li>
                        <li className="flex items-center gap-3"><CheckIcon /> Müşteri Yorumları ve Analizi</li>
                        <li className="flex items-center gap-3"><CheckIcon /> Garson Çağırma Bildirimleri</li>
                        <li className="flex items-center gap-3 font-bold"><CheckIcon /> Gelişmiş Raporlama</li>
                        <li className="flex items-center gap-3"><CheckIcon /> Önceliklendirilmiş Destek</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Kurumsal / 6+ Şube Bölümü */}
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M4 3a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z" />
                        <path fillRule="evenodd" d="M3 8h14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Zm5 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-bold uppercase tracking-wider">6+ Şube</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Büyük Zincir İşletmeler İçin Özel Fiyatlandırma</h3>
                <p className="text-gray-400">6 ve daha fazla şubeniz varsa, özel kurumsal paket fiyatlandırmamızdan yararlanın. Size özel entegrasyon ve destek sunuyoruz.</p>
            </div>
            <Link href="#contact" className="bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl hover:bg-orange-700 transition-all flex items-center gap-3 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3Z" />
                </svg>
                Bizimle İletişime Geçin
            </Link>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
