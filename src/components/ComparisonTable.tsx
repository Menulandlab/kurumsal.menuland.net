// src/components/ComparisonTable.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { MotionDiv } from './MotionDiv';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-600 mx-auto">
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
  { category: "Temel Özellikler", feature: "Sınırsız Kategori ve Ürün", temel: true, premium: true },
  { feature: "QR Kod Oluşturucu", temel: true, premium: true },
  { feature: "Temel İstatistikler", temel: true, premium: true },
  { feature: "İşletme Bilgileri Yönetimi", temel: true, premium: true },
  { feature: "7/24 E-posta Desteği", temel: true, premium: true },
  
  { category: "Premium Özellikler", feature: "Rezervasyon Yönetimi", temel: false, premium: true },
  { feature: "Kampanya Oluşturma", temel: false, premium: true },
  { feature: "Etkinlik Yönetimi", temel: false, premium: true },
  { feature: "Müşteri Yorumları ve Analizi", temel: false, premium: true },
  { feature: "Garson Çağırma Bildirimleri", temel: false, premium: true },
  { feature: "Gelişmiş Raporlama", temel: false, premium: true },
  { feature: "Önceliklendirilmiş Destek", temel: false, premium: true },
];

const ComparisonTable = () => {
  return (
    <section id="comparison" className="bg-slate-50 py-20 lg:py-28 overflow-hidden border-t border-gray-200">
      <div className="container mx-auto px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Detaylı Paket Karşılaştırması
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tüm paketlerin özelliklerini karşılaştırın ve işletmenize en uygun planı seçin.
          </p>
        </MotionDiv>

        {/* Desktop Görünüm - Tablo */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block overflow-x-auto"
        >
          <table className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border-separate border-spacing-0">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-8 py-8 text-left text-sm font-bold uppercase tracking-wider">Özellik</th>
                <th className="px-8 py-8 text-center text-sm font-bold uppercase tracking-wider border-l border-gray-800">
                  Temel Paket<br />
                  <span className="text-3xl font-extrabold text-white mt-2 block tracking-tight">349₺<span className="text-sm font-normal opacity-60">/ay</span></span>
                </th>
                <th className="px-8 py-8 text-center text-sm font-bold uppercase tracking-wider border-l border-gray-800 bg-orange-600">
                  Premium Paket<br />
                  <span className="text-xs bg-white text-orange-600 px-3 py-1 rounded-full mt-2 inline-block font-black shadow-lg">EN POPÜLER</span><br />
                  <span className="text-3xl font-extrabold text-white mt-2 block tracking-tight">649₺<span className="text-sm font-normal opacity-60">/ay</span></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => {
                if (feature.category) {
                  return (
                    <tr key={index} className="bg-gray-100">
                      <td colSpan={3} className="px-8 py-4 text-left font-bold text-gray-500 uppercase text-[10px] tracking-widest">
                        {feature.category}
                      </td>
                    </tr>
                  );
                }
                return (
                  <tr key={index} className="border-t border-gray-100 hover:bg-gray-50 transition-colors group">
                    <td className="px-8 py-5 text-sm text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">{feature.feature}</td>
                    <td className="px-8 py-5 text-center border-l border-gray-50 transition-colors">
                      {typeof feature.temel === 'boolean' ? (
                        feature.temel ? <CheckIcon /> : <MinusIcon />
                      ) : (
                        <span className="text-sm font-bold text-gray-900">{feature.temel}</span>
                      )}
                    </td>
                    <td className="px-8 py-5 text-center border-l border-orange-100 bg-orange-50/20 transition-colors">
                      {typeof feature.premium === 'boolean' ? (
                        feature.premium ? <CheckIcon /> : <MinusIcon />
                      ) : (
                        <span className="text-sm font-bold text-orange-600">{feature.premium}</span>
                      )}
                    </td>
                  </tr>
                );
              })}
              {/* Alt Butonlar */}
              <tr className="border-t border-gray-100">
                <td className="px-8 py-8"></td>
                <td className="px-8 py-8 text-center border-l border-gray-50">
                    <Link href="https://isletme.menuland.net" target="_blank" className="inline-block bg-gray-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-black transition-all">
                        Temel Seç
                    </Link>
                </td>
                <td className="px-8 py-8 text-center border-l border-orange-100 bg-orange-50/20">
                    <Link href="https://isletme.menuland.net" target="_blank" className="inline-block bg-orange-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-200">
                        Premium Seç
                    </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </MotionDiv>

        {/* Mobil Görünüm */}
        <div className="lg:hidden space-y-6">
            {['Temel', 'Premium'].map((plan) => (
                <div key={plan} className={`bg-white rounded-3xl shadow-xl overflow-hidden border-2 ${plan === 'Premium' ? 'border-orange-500' : 'border-gray-100'}`}>
                    <div className={`p-8 text-center ${plan === 'Premium' ? 'bg-orange-600 text-white' : 'bg-gray-900 text-white'}`}>
                        {plan === 'Premium' && <span className="text-[10px] font-black bg-white text-orange-600 px-3 py-1 rounded-full uppercase mb-4 inline-block">EN POPÜLER</span>}
                        <h3 className="text-xl font-bold">{plan} Paket</h3>
                        <p className="text-4xl font-black mt-2">{plan === 'Temel' ? '349₺' : '649₺'}<span className="text-sm font-normal opacity-60">/ay</span></p>
                    </div>
                    <div className="p-8 space-y-4">
                        {features.map((f, i) => {
                            if (f.category) return <div key={i} className="pt-6 pb-2 text-[10px] font-bold text-gray-400 uppercase border-b border-gray-50 tracking-widest">{f.category}</div>;
                            const val = plan === 'Temel' ? f.temel : f.premium;
                            return (
                                <div key={i} className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600 font-medium">{f.feature}</span>
                                    {typeof val === 'boolean' ? (val ? <CheckIcon /> : <MinusIcon />) : <span className="font-bold text-orange-600">{val}</span>}
                                </div>
                            );
                        })}
                        <Link href="https://isletme.menuland.net" target="_blank" className={`mt-8 block text-center font-bold py-4 rounded-xl transition-all ${plan === 'Premium' ? 'bg-orange-600 text-white shadow-lg' : 'bg-gray-900 text-white'}`}>
                            {plan} Seç
                        </Link>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ComparisonTable;
