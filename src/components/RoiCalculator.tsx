"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownIcon, LightbulbIcon } from "./Icons";

export default function RoiCalculator() {
  const [tableCount, setTableCount] = useState<number>(25);
  const [updateFrequency, setUpdateFrequency] = useState<number>(4);
  const [selectedPlan, setSelectedPlan] = useState<"temel" | "premium">("temel");

  // Matbaa basım maliyeti: Masa başına lamine / deri ciltli menü maliyeti ortalama 140 ₺
  const paperMenuCostPerTable = 140;
  const annualPaperCost = tableCount * paperMenuCostPerTable * updateFrequency;

  // Menuland Sabit Paket Yıllık Maliyeti (Masa sayısına göre ASLA artmaz)
  // Temel: 349 ₺/ay -> 4.188 ₺/yıl
  // Premium: 649 ₺/ay -> 7.788 ₺/yıl
  const menulandMonthlyCost = selectedPlan === "temel" ? 349 : 649;
  const menulandAnnualCost = menulandMonthlyCost * 12;

  // Net Tasarruf (İşletmenin cebinde kalan kâr)
  const netSavings = Math.max(0, annualPaperCost - menulandAnnualCost);

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Başlık ve Vurgu */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF4D00]">
            SABİT PAKET &amp; NET TASARRUF SİMÜLATÖRÜ
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-zinc-900">
            Masa sayısına göre değil, <br className="hidden sm:inline" />
            <span className="text-[#FF4D00]">sabit paketle</span> tasarruf edin.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            Diğer sistemlerin aksine Menuland'de <strong>masa başına ekstra ücret veya komisyon YOKTUR</strong>. Fiyatlandırma sayfamızdaki sabit paketlerimizle ister 10 masanız olsun ister 100; tüm masalarınız ve menü güncellemeleriniz sınırsızdır.
          </p>
        </div>

        {/* Ana Hesaplama Kutusu */}
        <div className="rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-10 shadow-xl shadow-orange-500/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Sol Taraf: Kaydırıcılar (Sliders) ve Plan Seçimi */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Sabit Paket Seçimi */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-2">
                  1. İncelemek İstediğiniz Sabit Menuland Paketi:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan("temel")}
                    className={`rounded-2xl border p-3.5 text-left transition-all ${
                      selectedPlan === "temel"
                        ? "border-[#FF4D00] bg-orange-50/70 shadow-sm"
                        : "border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-zinc-900">Temel Paket</span>
                      <span className="text-xs font-black text-[#FF4D00]">349 ₺ / ay</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-1">Sınırsız masa, QR menü, temel istatistik</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan("premium")}
                    className={`rounded-2xl border p-3.5 text-left transition-all ${
                      selectedPlan === "premium"
                        ? "border-[#FF4D00] bg-orange-50/70 shadow-sm"
                        : "border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-zinc-900">Premium Paket</span>
                      <span className="text-xs font-black text-[#FF4D00]">649 ₺ / ay</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-1">Garson çağır, sadakat, öncelikli destek</p>
                  </button>
                </div>
              </div>

              {/* Slider 1: Masa Sayısı */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="table-range" className="text-sm font-bold text-zinc-800">
                    Restoran / Kafe Masa Sayınız:
                  </label>
                  <span className="rounded-xl bg-orange-100 border border-orange-200 px-3 py-1 text-sm font-black text-[#FF4D00]">
                    {tableCount} Masa
                  </span>
                </div>
                <input
                  id="table-range"
                  type="range"
                  min="8"
                  max="100"
                  step="2"
                  value={tableCount}
                  onChange={(e) => setTableCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#FF4D00]"
                />
                <div className="flex justify-between text-[11px] font-medium text-zinc-400 mt-1.5">
                  <span>8 Masa</span>
                  <span>50 Masa</span>
                  <span>100 Masa</span>
                </div>
              </div>

              {/* Slider 2: Güncelleme Sıklığı */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="frequency-range" className="text-sm font-bold text-zinc-800">
                    Yılda Kaç Kez Menü / Fiyat Güncelliyorsunuz?
                  </label>
                  <span className="rounded-xl bg-zinc-100 border border-zinc-200 px-3 py-1 text-sm font-black text-zinc-900">
                    {updateFrequency} Kez / Yıl
                  </span>
                </div>
                <input
                  id="frequency-range"
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={updateFrequency}
                  onChange={(e) => setUpdateFrequency(Number(e.target.value))}
                  className="w-full h-2.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#FF4D00]"
                />
                <div className="flex justify-between text-[11px] font-medium text-zinc-400 mt-1.5">
                  <span>1 Kez (Yıllık)</span>
                  <span>4 Kez (Mevsimlik)</span>
                  <span>12 Kez (Aylık)</span>
                </div>
              </div>

              {/* Önemli Güvence Kutusu */}
              <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-4 flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-[#FF4D00]">
                  <LightbulbIcon className="w-4 h-4" />
                </div>
                <div className="text-xs text-zinc-600 leading-relaxed">
                  <strong className="text-zinc-900 font-bold block mb-0.5">Masa Başına Ek Maliyet: 0 ₺</strong>
                  Masa sayınızı 10'dan 80'e çıkarsanız bile Menuland paket ücretiniz değişmez. Matbaaya binlerce lira ödemek yerine, panelinizden tek tıkla fiyatlarınızı saniyeler içinde güncelleyin.
                </div>
              </div>

            </div>

            {/* Sağ Taraf: Net Tasarruf ve Karşılaştırma Kartı */}
            <div className="lg:col-span-5 rounded-3xl bg-zinc-900 p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 h-40 w-40 bg-[#FF4D00]/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="rounded-full bg-orange-500/20 border border-orange-500/30 px-3 py-1 text-[11px] font-bold text-[#FF4D00] inline-block mb-4">
                  TAHMİNİ YILLIK NET KÂR
                </span>

                <div className="mt-1">
                  <span className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                    ~{netSavings.toLocaleString("tr-TR")} ₺
                  </span>
                  <span className="text-xs font-semibold text-zinc-400 block mt-1">
                    Matbaa yerine Menuland ile işletmenizin cebinde kalan net tasarruf
                  </span>
                </div>

                {/* Karşılaştırma Tablosu */}
                <div className="mt-6 pt-5 border-t border-zinc-800 space-y-3 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Klasik Matbaa Baskı Masrafı:</span>
                    <span className="font-bold text-red-400 line-through">
                      ~{annualPaperCost.toLocaleString("tr-TR")} ₺ / yıl
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Menuland Sabit Yıllık Ücreti:</span>
                    <span className="font-bold text-emerald-400">
                      {menulandAnnualCost.toLocaleString("tr-TR")} ₺ / yıl ({menulandMonthlyCost} ₺/ay)
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-zinc-800">
                    <span className="text-zinc-300 font-semibold">Masa Başına Ek Fatura:</span>
                    <span className="font-black text-[#FF4D00]">0 ₺ (SINIRSIZ)</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300 font-semibold">Mevzuat Uyumu:</span>
                    <span className="font-bold text-emerald-400">%100 (Sıfır Ceza Riski)</span>
                  </div>
                </div>
              </div>

              {/* Aksiyon Butonu */}
              <div className="mt-8 pt-4">
                <Link
                  href="#pricing"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FF4D00] py-3.5 px-4 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all text-center"
                >
                  <span>Sabit Paketleri İncele</span>
                  <ArrowDownIcon className="w-3.5 h-3.5" />
                </Link>
                <p className="text-center text-[10px] text-zinc-400 mt-2">
                  Taahhüt yok • Kredi kartı gerekmez • Anında kurulum
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
