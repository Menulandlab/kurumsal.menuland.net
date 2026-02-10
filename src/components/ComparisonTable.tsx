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
  temel: boolean | string;
  premium: boolean | string;
}

const features: FeatureRow[] = [
  { category: "Temel Özellikler", feature: "İşletme Yönetimi", temel: true, premium: true },
  { feature: "QR Menü Sistemi", temel: true, premium: true },
  { feature: "Temel İstatistikler", temel: true, premium: true },
  { feature: "Müşteri Desteği", temel: true, premium: true },
  
  { category: "Premium Özellikler", feature: "Rezervasyon Sistemi", temel: false, premium: true },
  { feature: "Kampanya Oluşturma", temel: false, premium: true },
  { feature: "Sınırsız Hikaye Paylaşımı", temel: false, premium: true },
  { feature: "Carousel Reklam Alanı", temel: false, premium: "Ayda 2 Slot" },
  { feature: "Öncelikli Müşteri Desteği", temel: false, premium: true },
  { feature: "Detaylı Analitik ve Raporlama", temel: false, premium: true },
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
            Detaylı Paket Karşılaştırması
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tüm paketlerin özelliklerini karşılaştırın ve işletmenize en uygun planı seçin.
          </p>
        </MotionDiv>

        {/* Mobil Görünüm - Kartlar */}
        <div className="lg:hidden space-y-6">
          {['Temel', 'Premium'].map((planName, planIndex) => (
            <MotionDiv
              key={planName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: planIndex * 0.1 }}
              className={`bg-white rounded-xl shadow-lg p-6 ${
                planName === 'Premium' ? 'border-2 border-menuland' : 'border border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center uppercase">
                {planName} Paket
                {planName === 'Premium' && (
                  <span className="ml-2 text-xs bg-menuland text-white px-2 py-1 rounded">EN POPÜLER</span>
                )}
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {planName === 'Temel' ? '349₺' : '649₺'}
                </span>
                <span className="text-gray-500">/ay</span>
              </div>
              <div className="space-y-2 text-sm">
                {features.map((feature, idx) => {
                  const value = planName === 'Temel' ? feature.temel : feature.premium;
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
                          <span className="text-menuland">{value}</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
              <Link 
                href={`/kayit?plan=${planName.toLowerCase()}`}
                className={`mt-6 block w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                  planName === 'Premium' 
                    ? 'bg-menuland text-white hover:bg-opacity-90' 
                    : 'bg-gray-800 text-white hover:bg-gray-900'
                }`}
              >
                Planı Seç
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
          className="hidden lg:block overflow-x-auto"
        >
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase">Özellik</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase border-l border-gray-200">
                  Temel Paket<br />
                  <span className="text-2xl font-extrabold text-gray-900 mt-1 block">349₺<span className="text-sm">/ay</span></span>
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase border-l-2 border-menuland bg-orange-50">
                  Premium Paket<br />
                  <span className="text-xs bg-menuland text-white px-3 py-1 rounded-full mt-2 inline-block">🔥 EN POPÜLER</span><br />
                  <span className="text-2xl font-extrabold text-menuland mt-1 block">649₺<span className="text-sm">/ay</span></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => {
                if (feature.category) {
                  return (
                    <tr key={index} className="bg-gray-50">
                      <td colSpan={3} className="px-6 py-3 text-left font-bold text-gray-800 uppercase text-sm">
                        {feature.category}
                      </td>
                    </tr>
                  );
                }
                return (
                  <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">{feature.feature}</td>
                    <td className="px-6 py-4 text-center border-l border-gray-200">
                      {typeof feature.temel === 'boolean' ? (
                        feature.temel ? <CheckIcon /> : <MinusIcon />
                      ) : (
                        <span className="text-sm font-semibold text-gray-900">{feature.temel}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center border-l-2 border-menuland bg-orange-50/30">
                      {typeof feature.premium === 'boolean' ? (
                        feature.premium ? <CheckIcon /> : <MinusIcon />
                      ) : (
                        <span className="text-sm font-semibold text-menuland">{feature.premium}</span>
                      )}
                    </td>
                  </tr>
                );
              })}
              <tr className="bg-gray-100 border-t-2 border-gray-300">
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-center">
                  <Link 
                    href="/kayit?plan=temel"
                    className="inline-block bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition-all duration-300"
                  >
                    Planı Seç
                  </Link>
                </td>
                <td className="px-6 py-4 text-center bg-orange-50/30">
                  <Link 
                    href="/kayit?plan=premium"
                    className="inline-block bg-menuland text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300"
                  >
                    Planı Seç
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
            * Tüm fiyatlar KDV dahildir. Paketler istediğiniz zaman değiştirilebilir veya iptal edilebilir.
          </p>
          <div className="mt-6">
            <Link 
              href="#pricing"
              className="inline-block text-menuland font-semibold hover:underline"
            >
              ← Fiyatlandırma sayfasına dön
            </Link>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ComparisonTable;
