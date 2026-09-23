"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BusinessBridge() {
  return (
    <section id="business" className="py-20 lg:py-28 bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 h-80 w-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 p-8 sm:p-14 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sol Taraf: Metin & Avantajlar */}
            <div className="lg:col-span-8 space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-[#FF4D00]">
                <span>🏪 RESTORAN VE KAFELER İÇİN</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                İşletmenizi Menuland'e ekleyin, <br />
                <span className="text-[#FF4D00]">binlerce yeni müşteriye</span> ulaşın.
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
                Menuland sadece masada menü açtırmaz; mekanınızı mobil uygulamayı kullanan binlerce gurmenin radarına sokar. Sürpriz ek maliyetler veya masa başına komisyonlar olmadan, sabit paketle işletmenizi dijitalleştirin.
              </p>

              {/* 3 Temel Güvence */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3.5">
                  <p className="text-xs font-bold text-white mb-0.5">Sıfır Masa Ücreti</p>
                  <p className="text-[11px] text-zinc-400">İster 10 ister 100 masa, paket ücretiniz sabit kalır.</p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3.5">
                  <p className="text-xs font-bold text-white mb-0.5">%100 Yasal Uyum</p>
                  <p className="text-[11px] text-zinc-400">Ticaret Bakanlığı 14 alerjen &amp; fiyat tebliğine tam uyum.</p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3.5">
                  <p className="text-xs font-bold text-white mb-0.5">Aynı Gün Kurulum</p>
                  <p className="text-[11px] text-zinc-400">Menünüzü ekleyin, QR kodlarınızı hemen yazdırın.</p>
                </div>
              </div>
            </div>

            {/* Sağ Taraf: Aksiyon Butonları */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 text-center lg:text-left">
              <a
                href="https://isletme.menuland.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#FF4D00] py-4 px-6 text-sm font-bold text-white shadow-xl shadow-orange-500/25 hover:bg-orange-600 transition-all text-center"
              >
                <span>İşletme Girişi / Kayıt Ol</span>
                <span>→</span>
              </a>

              <Link
                href="#pricing"
                className="w-full flex items-center justify-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-800/80 py-3.5 px-6 text-xs sm:text-sm font-bold text-zinc-200 hover:border-zinc-500 hover:text-white transition-all text-center"
              >
                <span>Sabit Fiyatlandırma Paketleri</span>
                <span>↓</span>
              </Link>

              <p className="text-[11px] text-zinc-500 text-center">
                7/24 Destek: destek@menuland.net
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
