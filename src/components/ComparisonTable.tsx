// src/components/ComparisonTable.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { MotionDiv } from './MotionDiv';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-600 mx-auto">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" />
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-300 mx-auto">
    <path fillRule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clipRule="evenodd" />
  </svg>
);

interface FeatureRow {
  category?: string;
  feature: string;
  standart: boolean | string;
  premium: boolean | string;
}

const features: FeatureRow[] = [
  { category: "Temel Özellikler", feature: "İşletme Profili", standart: true, premium: true },
  { feature: "Temel Bilgiler", standart: true, premium: true },
  { feature: "Çalışma Saatleri", standart: true, premium: true },
  { feature: "Kategori Sayısı", standart: "1", premium: "Sınırsız" },
  { feature: "Fotoğraf Sayısı", standart: "3", premium: "Sınırsız" },
  { feature: "Harita Gösterimi", standart: true, premium: true },
  { feature: "Sosyal Medya Linkleri", standart: true, premium: true },
  { feature: "Müşteri Yorumları Görüntüleme", standart: true, premium: true },
  { feature: "İstatistikler", standart: "Temel", premium: "Detaylı (Dashboard)" },

  { category: "Premium Avantajlar", feature: "Rezervasyon Sistemi", standart: false, premium: true },
  { feature: "Kampanya Oluşturma", standart: false, premium: true },
  { feature: "QR Menü Oluşturma", standart: false, premium: true },
  { feature: "Hikaye Paylaşımı", standart: false, premium: "Sınırsız" },
  { feature: "Carousel Reklam Alanı", standart: false, premium: "Ayda 2 Slot" },
  { feature: "Müşteri Yorumlarına Yanıt", standart: false, premium: true },
  { feature: "Premium İşletme Rozeti", standart: false, premium: true },
  { feature: "Öncelikli Gösterim", standart: false, premium: true },
  { feature: "Müşteri Desteği", standart: "Standart", premium: "Öncelikli" },
];

const ComparisonTable = () => {
  return (
    <section id="comparison" className="bg-slate-50 py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Detaylı Kıyaslama Tablosu
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Paket özelliklerini detaylıca inceleyin.
          </p>
        </MotionDiv>

        {/* Mobil Görünüm - Kartlar */}
        <div className="lg:hidden space-y-6">
          {['Standart', 'Premium'].map((planName, planIndex) => (
            <MotionDiv
              key={planName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: planIndex * 0.1 }}
              className={`bg-white rounded-xl shadow-lg p-6 ${planName === 'Premium' ? 'border-2 border-menuland' : 'border border-gray-200'
                }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center uppercase">
                {planName}
                {planName === 'Premium' && (
                  <span className="ml-2 text-xs bg-menuland text-white px-2 py-1 rounded">ÖNERİLEN</span>
                )}
              </h3>
              <div className="space-y-2 text-sm">
                {features.map((feature, idx) => {
                  const value = planName === 'Standart' ? feature.standart : feature.premium;
                  if (feature.category) {
                    return (
                      <div key={idx} className="font-bold text-gray-800 mt-4 mb-2 text-base border-b border-gray-200 pb-2">
                        {feature.category}
                      </div>
                    );
                  }
                  return (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">{feature.feature}</span>
                      <span className="font-semibold">
                        {typeof value === 'boolean' ? (
                          value ? <CheckIcon /> : <MinusIcon />
                        ) : (
                          <span className={`${planName === 'Premium' ? 'text-menuland' : 'text-gray-900'}`}>{value}</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
              <Link
                href={`/kayit?plan=${planName.toLowerCase()}`}
                className={`mt-6 block w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 ${planName === 'Premium'
                  ? 'bg-menuland text-white hover:bg-opacity-90'
                  : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
              >
                {planName === 'Standart' ? 'Ücretsiz Başla' : 'Premium\'a Geç'}
              </Link>
            </MotionDiv>
          ))}
        </div>

        {/* Desktop Görünüm - Tablo */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block overflow-x-auto max-w-5xl mx-auto"
        >
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-6 text-left text-sm font-bold text-gray-900 uppercase w-1/3">Özellik</th>
                <th className="px-6 py-6 text-center text-sm font-bold text-gray-900 uppercase border-l border-gray-200 w-1/3">
                  Standart<br />
                  <span className="text-2xl font-extrabold text-green-600 mt-2 block">ÜCRETSİZ</span>
                </th>
                <th className="px-6 py-6 text-center text-sm font-bold text-gray-900 uppercase border-l-2 border-menuland bg-orange-50 w-1/3 relative">
                  <div className="absolute top-0 left-0 w-full bg-menuland text-white text-[10px] py-1">EN ÇOK TERCİH EDİLEN</div>
                  Premium<br />
                  <span className="text-2xl font-extrabold text-menuland mt-2 block">499₺<span className="text-sm text-gray-600 font-normal">/ay</span></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => {
                if (feature.category) {
                  return (
                    <tr key={index} className="bg-gray-50">
                      <td colSpan={3} className="px-6 py-3 text-left font-bold text-gray-800 uppercase text-sm border-t border-gray-200">
                        {feature.category}
                      </td>
                    </tr>
                  );
                }
                return (
                  <tr key={index} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">{feature.feature}</td>
                    <td className="px-6 py-4 text-center border-l border-gray-200">
                      {typeof feature.standart === 'boolean' ? (
                        feature.standart ? <CheckIcon /> : <MinusIcon />
                      ) : (
                        <span className="text-sm font-bold text-gray-700">{feature.standart}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center border-l-2 border-menuland bg-orange-50/20">
                      {typeof feature.premium === 'boolean' ? (
                        feature.premium ? <CheckIcon /> : <MinusIcon />
                      ) : (
                        <span className="text-sm font-bold text-menuland">{feature.premium}</span>
                      )}
                    </td>
                  </tr>
                );
              })}
              <tr className="bg-gray-100 border-t-2 border-gray-300">
                <td className="px-6 py-6"></td>
                <td className="px-6 py-6 text-center">
                  <Link
                    href="/kayit?plan=standart"
                    className="inline-block w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-sm"
                  >
                    Ücretsiz Başla
                  </Link>
                </td>
                <td className="px-6 py-6 text-center bg-orange-50/20 border-l-2 border-menuland">
                  <Link
                    href="/kayit?plan=premium"
                    className="inline-block w-full bg-menuland text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
                  >
                    Premium'a Geç
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </MotionDiv>

        {/* Not */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            * Fiyatlarımıza KDV dahildir. Yıllık ödemelerde 30 gün ücretsiz fırsatı uygulanır.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ComparisonTable;
