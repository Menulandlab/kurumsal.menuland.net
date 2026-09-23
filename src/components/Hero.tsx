"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { StarIcon, CheckIcon, MapPinIcon, ShieldCheckIcon, GiftIcon, CompassIcon, ArrowDownIcon } from "./Icons";

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
              <ArrowDownIcon className="w-3.5 h-3.5" />
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
              <div className="flex items-center gap-0.5 text-amber-400">
                <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>
              <span className="font-semibold text-zinc-800">4.9 / 5.0</span>
              <span>(App Store &amp; Play Store)</span>
            </div>
            <div className="hidden sm:inline-block h-3 w-px bg-zinc-300" />
            <div className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-emerald-600" />
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
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#FF4D00]">
                <MapPinIcon className="w-5 h-5" />
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
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <ShieldCheckIcon className="w-5 h-5" />
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
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <GiftIcon className="w-5 h-5" />
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
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                <CompassIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 leading-tight">Ne Yesem? Çarkı</p>
                <p className="text-[11px] text-zinc-500">Bugünün Önerisi: Trüflü Burger</p>
              </div>
            </motion.div>
          </div>

          {/* Telefon Vitrin Sahnesi (Kullanıcının Özel Canva Mockup'ları) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:-space-x-12 lg:-space-x-16">
            
            {/* 1. Telefon (Sol/Arka - Masada QR Menü & Alerjen) */}
            <motion.div
              whileHover={{ scale: 1.03, rotate: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-[290px] sm:w-[370px] lg:w-[430px] aspect-[4/5] drop-shadow-2xl sm:rotate-[-4deg] sm:translate-y-6 z-0"
            >
              <Image
                src="/img/mockups/1-masadaqr.png"
                alt="Menuland Masada QR Menü & Alerjen Bilgisi"
                fill
                sizes="(max-width: 768px) 290px, (max-width: 1200px) 370px, 430px"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* 2. Telefon (Sağ/Önde - Menuland Mobil Keşfet & Ana Sayfa) */}
            <motion.div
              whileHover={{ scale: 1.04, rotate: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-[310px] sm:w-[390px] lg:w-[460px] aspect-[4/5] drop-shadow-2xl sm:rotate-[2deg] z-10 -mt-10 sm:mt-0"
            >
              <Image
                src="/img/mockups/2-menulandmobil.png"
                alt="Menuland Mobil Uygulama Keşfet ve Ana Sayfa"
                fill
                sizes="(max-width: 768px) 310px, (max-width: 1200px) 390px, 460px"
                className="object-contain"
                priority
              />
            </motion.div>

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