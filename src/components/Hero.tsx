"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-white">
      {/* İnce Grid & Ambient Arka Plan Işığı */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[380px] w-[500px] sm:w-[700px] rounded-full bg-gradient-to-tr from-orange-300/25 to-amber-200/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Üst Başlık & Girişim Rozetleri */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-200/90 bg-orange-50/90 px-3.5 py-1.5 text-xs font-semibold text-[#FF4D00] shadow-sm mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#FF4D00] animate-pulse" />
            <span>Türkiye'nin Yeni Nesil Mobil Gastronomi &amp; Restoran Ekosistemi</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 leading-[1.08]"
          >
            Şehrin tüm menüleri, <br className="hidden sm:inline" />
            <span className="text-[#FF4D00]">lezzetleri ve indirimleri</span> <br className="hidden sm:inline" />
            tek uygulamada.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Restorana gitmeden önce menüleri ve güncel fiyatları keşfedin; masada kameranızla temassız menüyü açıp 14 alerjeni filtreleyin, siparişlerinizle <strong>PuanLand</strong> kazanın.
          </motion.p>

          {/* İndirme Butonları & Hızlı Aksiyon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            {/* App Store */}
            <Link
              href="https://apps.apple.com/tr/app/menuland/id6618147785?l=tr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-transform hover:scale-105"
            >
              <Image
                src="/img/app-store-badge.svg"
                alt="App Store'dan İndirin"
                width={155}
                height={52}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Google Play */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.mycompany.menuland&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-transform hover:scale-105"
            >
              <Image
                src="/img/google-play-badge.svg"
                alt="Google Play'den İndirin"
                width={155}
                height={52}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Restoranlar İçin Buton */}
            <Link
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-zinc-800 shadow-sm hover:border-[#FF4D00] hover:text-[#FF4D00] transition-all"
            >
              <span>Restoran Tasarrufu Hesapla</span>
              <span>↓</span>
            </Link>
          </motion.div>

          {/* Sosyal Kanıt & Mağaza Metrikleri */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-medium text-zinc-500"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400 font-bold text-sm">★★★★★</span>
              <span className="font-semibold text-zinc-800">4.9 / 5.0</span>
              <span>(App Store &amp; Play Store)</span>
            </div>
            <div className="hidden sm:inline-block h-3 w-px bg-zinc-300" />
            <div className="flex items-center gap-1">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>50.000+ Mobil İndirme</span>
            </div>
            <div className="hidden sm:inline-block h-3 w-px bg-zinc-300" />
            <div className="flex items-center gap-1">
              <span className="text-zinc-800 font-bold">150+</span>
              <span>Anlaşmalı Restoran &amp; Kafe</span>
            </div>
          </motion.div>
        </div>

        {/* Mobil Uygulama Çift Telefon Vitrini (Dual iPhone Showcase) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-14 sm:mt-20 relative max-w-4xl mx-auto"
        >
          {/* Çevrede Süzülen İnteraktif Mobil Etiketler */}
          <div className="hidden md:block absolute -left-12 top-12 z-20">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="flex items-center gap-2.5 rounded-2xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-xl backdrop-blur-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#FF4D00] text-lg">
                📍
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 leading-tight">Yakınımdaki Mekanlar</p>
                <p className="text-[11px] text-zinc-500">Canlı harita &amp; güncel menüler</p>
              </div>
            </motion.div>
          </div>

          <div className="hidden md:block absolute -right-10 top-20 z-20">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="flex items-center gap-2.5 rounded-2xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-xl backdrop-blur-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 text-lg">
                🌾
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 leading-tight">14 Alerjen &amp; Kalori</p>
                <p className="text-[11px] text-emerald-600 font-semibold">%100 Mevzuat Uyumlu</p>
              </div>
            </motion.div>
          </div>

          <div className="hidden md:block absolute -left-6 bottom-20 z-20">
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1 }}
              className="flex items-center gap-2.5 rounded-2xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-xl backdrop-blur-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600 text-lg">
                🎁
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 leading-tight">PuanLand Cüzdan</p>
                <p className="text-[11px] text-zinc-500">+150 Puan kupona dönüştü</p>
              </div>
            </motion.div>
          </div>

          <div className="hidden md:block absolute -right-8 bottom-16 z-20">
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.2 }}
              className="flex items-center gap-2.5 rounded-2xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-xl backdrop-blur-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600 text-lg">
                🎡
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 leading-tight">Ne Yesem? Çarkı</p>
                <p className="text-[11px] text-zinc-500">Bugünün Önerisi: Trüflü Burger</p>
              </div>
            </motion.div>
          </div>

          {/* Telefon Vitrin Sahnesi (Dual Phone Display) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            
            {/* 1. Telefon (Sol/Arka - Masada QR Menü & Alerjen) */}
            <div className="w-[280px] sm:w-[310px] rounded-[44px] p-3 bg-zinc-900 shadow-2xl border-4 border-zinc-800/80 sm:rotate-[-4deg] sm:translate-y-6 hover:rotate-0 transition-transform duration-500">
              {/* Dynamic Island */}
              <div className="relative rounded-[36px] overflow-hidden bg-zinc-950 aspect-[9/19.5] border border-zinc-800">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black z-30 flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-800 mr-2" />
                  <div className="h-2 w-2 rounded-full bg-blue-950" />
                </div>

                {/* Mobil QR Menü Ekranı */}
                <div className="relative h-full w-full bg-zinc-50 p-3 pt-9 flex flex-col justify-between">
                  <div>
                    {/* Üst Mini Bar */}
                    <div className="flex items-center justify-between border-b border-zinc-200 pb-2 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                        <span className="text-[11px] font-bold text-zinc-800">Menuland Cafe</span>
                      </div>
                      <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[9px] font-bold text-[#FF4D00]">
                        Masa 4
                      </span>
                    </div>

                    {/* Alerjen Filtre Rozetleri */}
                    <div className="flex gap-1.5 mb-3 overflow-x-auto no-scrollbar py-0.5">
                      <span className="rounded-lg bg-zinc-900 px-2 py-1 text-[9px] font-bold text-white shrink-0">
                        Tümü
                      </span>
                      <span className="rounded-lg bg-emerald-50 border border-emerald-200 px-2 py-1 text-[9px] font-bold text-emerald-700 shrink-0">
                        🌱 Vegan
                      </span>
                      <span className="rounded-lg bg-amber-50 border border-amber-200 px-2 py-1 text-[9px] font-bold text-amber-700 shrink-0">
                        🌾 Glutensiz
                      </span>
                    </div>

                    {/* Menü Kartı 1 */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-2.5 shadow-sm mb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xs font-bold text-zinc-900">Izgara Somon Kase</h4>
                          <p className="text-[10px] text-zinc-500 mt-0.5">520 kcal • 350g • Kinoa</p>
                        </div>
                        <span className="text-xs font-black text-[#FF4D00]">420 ₺</span>
                      </div>
                      <div className="mt-2 flex gap-1">
                        <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[8px] font-bold text-amber-800">
                          Glutensiz
                        </span>
                        <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[8px] font-semibold text-zinc-600">
                          Balık Alerjeni
                        </span>
                      </div>
                    </div>

                    {/* Menü Kartı 2 */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-2.5 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xs font-bold text-zinc-900">Avokado Salatası</h4>
                          <p className="text-[10px] text-zinc-500 mt-0.5">340 kcal • 260g • Chia</p>
                        </div>
                        <span className="text-xs font-black text-[#FF4D00]">290 ₺</span>
                      </div>
                      <div className="mt-2 flex gap-1">
                        <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[8px] font-bold text-emerald-800">
                          Vegan
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Garson Çağır Butonu */}
                  <div className="mt-3 pt-2 border-t border-zinc-200 flex gap-1.5">
                    <button className="flex-1 rounded-xl bg-zinc-100 border border-zinc-300 py-2 text-[10px] font-bold text-zinc-800">
                      🛎️ Garson Çağır
                    </button>
                    <button className="flex-1 rounded-xl bg-[#FF4D00] py-2 text-[10px] font-bold text-white shadow-sm">
                      🧾 Hesap İste
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-center text-[11px] font-semibold text-zinc-400 mt-2">Masada Temassız QR Menü</p>
            </div>

            {/* 2. Telefon (Önde/Merkezde - Menuland Keşfet & Harita) */}
            <div className="w-[300px] sm:w-[330px] rounded-[48px] p-3 bg-zinc-950 shadow-2xl border-4 border-zinc-700/80 sm:rotate-[2deg] hover:rotate-0 transition-transform duration-500 z-10">
              <div className="relative rounded-[38px] overflow-hidden bg-white aspect-[9/19.5]">
                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-5 w-26 rounded-full bg-black z-30 flex items-center justify-between px-3">
                  <div className="h-2 w-2 rounded-full bg-zinc-800" />
                  <div className="flex gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#FF4D00]" />
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </div>
                </div>

                {/* Mobil Görsel veya UI */}
                <div className="relative h-full w-full">
                  <Image
                    src="/img/menuland-home.jpg"
                    alt="Menuland Mobil Uygulama Ana Sayfa"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Ekran Üzeri Parlama & Gradyan */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-3 right-3 rounded-2xl bg-white/95 backdrop-blur-md p-3 border border-white/60 shadow-lg text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF4D00]">Şehrin Lezzet Rehberi</span>
                    <p className="text-xs font-extrabold text-zinc-900 mt-0.5">Yüzlerce Menü Parmaklarının Ucunda</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-[11px] font-semibold text-zinc-300 mt-2">Menuland iOS &amp; Android Keşfet</p>
            </div>

          </div>
        </motion.div>

        {/* Destekleyenler & Güven Rozetleri */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-zinc-200/80">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
            GÜVENİLEN GİRİŞİM EKOSİSTEMİ &amp; DESTEKÇİLER
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/img/itucekirdek-menuland.png"
              alt="İTÜ Çekirdek Girişimi"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
            />
            <Image
              src="/img/orduticaretodasi.png"
              alt="Ordu Ticaret ve Sanayi Odası"
              width={160}
              height={40}
              className="h-9 w-auto object-contain"
            />
            <div className="flex items-center gap-2 text-zinc-800 font-bold text-xs sm:text-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 text-white text-xs font-black">
                M
              </span>
              <span>150+ Aktif İşletme Menüsü</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}