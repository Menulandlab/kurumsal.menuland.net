"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon, ArrowRightIcon, SparklesIcon } from "./Icons";

interface AppTab {
  id: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  phoneTag: string;
}

const tabs: AppTab[] = [
  {
    id: "explore",
    badge: "ŞEHİR RADARI",
    title: "En Popüler Mekanları & Canlı Menüleri Keşfet",
    description: "Sürpriz hesaplara son. Gitmek istediğin restoranın, kafenin veya pub'ın güncel fiyatlarını, fotoğraflarını ve atmosferini gitmeden önce cebinden gör.",
    bullets: [
      "Canlı Harita ile sana en yakın onaylı mekanlar",
      "Kategori filtreleri: 24 Saat Açık, Aileye Uygun, Akşam Yemeği",
      "Kullanıcı yorumları ve mekan doluluk durumu",
    ],
    imageSrc: "/img/mockups/3-cebinizenesaglar.png",
    phoneTag: "Canlı Harita & Yakınımdaki Mekanlar",
  },
  {
    id: "qr-allergens",
    badge: "MASADA GÜVENLİK",
    title: "14 Alerjen & Kalori Filtresi Parmaklarının Ucunda",
    description: "Masadaki Menuland QR kodunu kameranla okut. Ticaret Bakanlığı mevzuatına uygun alerjen, kalori ve gramaj detaylarını inceleyerek güvenle sipariş ver.",
    bullets: [
      "Gluten, laktoz, kuruyemiş ve yumurta alerjen uyarıları",
      "Porsiyon gramajı ve kalori (kcal) şeffaflığı",
      "İçindekiler listesi ve kapı önü/masa fiyat tebliğine %100 uyum",
    ],
    imageSrc: "/img/mockups/1-masadaqr.png",
    phoneTag: "%100 Şeffaf Alerjen & Kalori",
  },
  {
    id: "home-menu",
    badge: "CEBİNDEKİ LEZZET",
    title: "Seçkin Mekanlar, Günlük Hikayeler & Ne Yesem?",
    description: "Şehrin en iyi kafe ve restoranlarının günlük hikayelerini izle, hava durumuna özel yemek önerilerini incele ve kararsız kaldığında 'Ne Yesem?' butonuyla seçimini yap.",
    bullets: [
      "Günün öne çıkan seçkin mekanları ve popüler mutfaklar",
      "Mekan hikayeleri ve anlık etkinlik duyuruları",
      "Tek dokunuşla 'Ne Yesem?' akıllı öneri motoru",
    ],
    imageSrc: "/img/mockups/2-menulandmobil.png",
    phoneTag: "Menuland Ana Sayfa & Keşfet",
  },
];

export default function AppExperience() {
  const [activeTab, setActiveTab] = useState<string>("explore");

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-zinc-900 text-white relative overflow-hidden">
      {/* Arka plan ışıkları */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-0 h-96 w-96 rounded-full bg-[#FF4D00]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 -z-0 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF4D00]">
            UYGULAMA DENEYİMİ
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-white">
            Menuland cebinizde ne sağlar?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            Sıradan bir PDF karekod menü değil; şehri gezen, sipariş veren ve lezzet keşfeden herkes için yaşayan bir mobil deneyim.
          </p>

          {/* Sekme Butonları */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 max-w-xl mx-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-md"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 rounded-xl bg-[#FF4D00]"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{tab.badge}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Canlı Ekran & Detay Kartı Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          
          {/* Sol Kolon: Özellik Metinleri */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-[#FF4D00]">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  <span>{currentTab.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  {currentTab.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  {currentTab.description}
                </p>

                {/* Madde İmleri */}
                <div className="space-y-3 pt-2">
                  {currentTab.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF4D00]/20 text-[#FF4D00] mt-0.5">
                        <CheckIcon className="w-3.5 h-3.5 text-[#FF4D00]" />
                      </div>
                      <span className="text-xs sm:text-sm text-zinc-300 font-medium leading-normal">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buton Linki */}
                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="https://apps.apple.com/tr/app/menuland/id6618147785?l=tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#FF4D00] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition-all"
                  >
                    <span>Uygulamada Dene</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sağ Kolon: Kullanıcının Özel Canva Mockup'ı */}
          <div className="lg:col-span-5 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 15, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className="relative w-[300px] sm:w-[380px] lg:w-[440px] aspect-[4/5] drop-shadow-2xl"
              >
                <Image
                  src={currentTab.imageSrc}
                  alt={currentTab.title}
                  fill
                  sizes="(max-width: 768px) 300px, (max-width: 1200px) 380px, 440px"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
