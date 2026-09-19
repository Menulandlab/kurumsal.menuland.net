"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RoiCalculator() {
  const [tableCount, setTableCount] = useState<number>(24);
  const [updateFrequency, setUpdateFrequency] = useState<number>(4);

  // Ortalama lamine / kuşe menü baskı maliyeti (menü başına ~350 ₺)
  const estimatedPrintingSavings = tableCount * updateFrequency * 350;

  // Garson zaman tasarrufu (masada menü bekleme süresi ~%35 azalır)
  const timeSavingsPercent = Math.min(45, Math.round(20 + (tableCount / 100) * 20));

  return (
    <section id="calculator" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* İnce ambient arka plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] h-[400px] bg-gradient-to-br from-orange-100/50 via-zinc-100/40 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF4D00]">
            KAZANÇ VE VERİMLİLİK SİMÜLATÖRÜ
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900">
            Menuland işletmenize ne kazandırır?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Fiziksel menü baskı masraflarından kurtulun, fiyatlarınızı anında güncelleyin ve Gel Al siparişleriyle cironuzu artırın.
          </p>
        </div>

        {/* Hesaplayıcı Gövdesi */}
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-10 shadow-lg backdrop-blur-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Sol Taraf: Sürgüler (Sliders) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Sürgü 1: Masa Sayısı */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm sm:text-base font-bold text-zinc-900">
                    Restoran / Kafe Masa Sayınız:
                  </label>
                  <span className="rounded-xl bg-white border border-zinc-200 px-3.5 py-1 text-sm sm:text-base font-black text-[#FF4D00] shadow-2xs">
                    {tableCount} Masa
                  </span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={100}
                  step={2}
                  value={tableCount}
                  onChange={(e) => setTableCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#FF4D00]"
                />
                <div className="flex justify-between text-[11px] text-zinc-400 mt-1">
                  <span>8 Masa</span>
                  <span>50 Masa</span>
                  <span>100 Masa</span>
                </div>
              </div>

              {/* Sürgü 2: Yıllık Menü / Fiyat Güncelleme Sayısı */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm sm:text-base font-bold text-zinc-900">
                    Yılda Kaç Kez Menü / Fiyat Değiştiriyorsunuz?
                  </label>
                  <span className="rounded-xl bg-white border border-zinc-200 px-3.5 py-1 text-sm sm:text-base font-black text-[#FF4D00] shadow-2xs">
                    {updateFrequency} Kez / Yıl
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={12}
                  step={1}
                  value={updateFrequency}
                  onChange={(e) => setUpdateFrequency(Number(e.target.value))}
                  className="w-full h-2.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#FF4D00]"
                />
                <div className="flex justify-between text-[11px] text-zinc-400 mt-1">
                  <span>1 Kez (Mevsimlik)</span>
                  <span>4 Kez (Dönemsel)</span>
                  <span>12 Kez (Aylık)</span>
                </div>
              </div>

              {/* Küçük Bilgi Notu */}
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-4 text-xs text-zinc-600 leading-relaxed flex items-start gap-2.5">
                <span className="text-base">💡</span>
                <div>
                  <span className="font-bold text-zinc-800">Biliyor muydunuz?</span>
                  <p className="mt-0.5 text-zinc-600">
                    Gıda girdi maliyetleri değiştikçe menülerinizi matbaaya göndermeden, panelinizden tek tıkla %5 veya %10 güncelleyebilir; tükenen ürünleri saniyeler içinde gizleyebilirsiniz.
                  </p>
                </div>
              </div>

            </div>

            {/* Sağ Taraf: Sonuç Kartı */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-6">
                
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Tahmini Yıllık Tasarruf
                  </span>
                  <motion.div
                    key={estimatedPrintingSavings}
                    initial={{ scale: 0.95, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight"
                  >
                    ~{estimatedPrintingSavings.toLocaleString('tr-TR')}{' '}
                    <span className="text-2xl font-bold text-[#FF4D00]">₺ / yıl</span>
                  </motion.div>
                  <p className="mt-1 text-xs text-zinc-500">
                    Sadece lamine kağıt menü ve matbaa masraflarından sağlanan net kazanç.
                  </p>
                </div>

                {/* Ek Göstergeler */}
                <div className="space-y-3 pt-4 border-t border-zinc-100 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600 font-medium">Garson Menü Servis Yükü:</span>
                    <span className="font-bold text-emerald-600">-%{timeSavingsPercent} Tasarruf</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600 font-medium">Mevzuat Ceza Riski:</span>
                    <span className="font-bold text-emerald-600">%0 (Tam Uyum)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600 font-medium">Yeni Gel Al Siparişleri:</span>
                    <span className="font-bold text-[#FF4D00]">+%20 Ekstra Gelir</span>
                  </div>
                </div>

                {/* Aksiyon Butonu */}
                <div className="pt-2">
                  <Link
                    href="https://isletme.menuland.net/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-3.5 text-sm font-bold text-white shadow-xs hover:bg-[#FF4D00] transition-colors"
                  >
                    <span>Hemen Ücretsiz Başlayın</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <p className="mt-2 text-center text-[11px] text-zinc-400">
                    Kredi kartı gerekmez • Aynı gün kurulum
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
