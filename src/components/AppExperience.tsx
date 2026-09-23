"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface AppTab {
  id: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  phoneTag: string;
  phoneTagColor: string;
}

const tabs: AppTab[] = [
  {
    id: "explore",
    badge: "ŞEHİR RADARI",
    title: "En Popüler Mekanları & Canlı Menüleri Keşfet",
    description: "Sürpriz hesaplara son. Gitmek istediğin restoranın, kafenin veya pub'ın güncel fiyatlarını, fotoğraflarını ve atmosferini gitmeden önce cebinden gör.",
    bullets: [
      "Canlı Harita ile sana en yakın onaylı mekanlar",
      "Kategori filtreleri: Kahve, Dünya Mutfağı, Burger, Tatlı",
      "Kullanıcı yorumları ve mekan doluluk durumu",
    ],
    imageSrc: "/img/menuland-home.jpg",
    phoneTag: "📍 Yakınımdaki 150+ Mekan",
    phoneTagColor: "bg-orange-500",
  },
  {
    id: "qr-allergens",
    badge: "MASADA GÜVENLİK",
    title: "14 Alerjen & Kalori Filtresi Parmaklarının Ucunda",
    description: "Masadaki Menuland QR kodunu kameranla okut. Ticaret Bakanlığı mevzuatına uygun alerjen, kalori ve gramaj detaylarını inceleyerek güvenle sipariş ver.",
    bullets: [
      "Gluten, laktoz, fındık ve vegan anlık filtreleme",
      "Porsiyon gramajı ve kalori şeffaflığı",
      "Garson çağırma ve masaya hesap isteme butonu",
    ],
    imageSrc: "/img/mobil-gel-al-siparis.png",
    phoneTag: "🌾 %100 Şeffaf Alerjen Filtresi",
    phoneTagColor: "bg-emerald-500",
  },
  {
    id: "decision-wheel",
    badge: "EĞLENCELİ GURME",
    title: "Kararsız Kaldığında 'Ne Yesem?' Çarkını Çevir",
    description: "Arkadaşlarınla 'nereye gitsek, ne yesek?' tartışmalarına teknolojik çözüm. Çarkı tek dokunuşla çevir, günün lezzet önerisini ve özel indirimini anında yakala.",
    bullets: [
      "Kişiselleştirilmiş mekan ve yemek önerileri",
      "Çarka özel anlık PuanLand sürpriz indirimleri",
      "Sosyal medyada paylaşılabilir eğlenceli deneyim",
    ],
    imageSrc: "/img/mobil-karar-carki.png",
    phoneTag: "🎡 Karar Çarkı: Günün Seçimi",
    phoneTagColor: "bg-rose-500",
  },
  {
    id: "puanland",
    badge: "SADAKAT CÜZDANI",
    title: "PuanLand ile Her Siparişinde Puan Topla, İndirim Kazan",
    description: "Anlaşmalı restoranlarda QR menüyü okutup sipariş verdikçe PuanLand cüzdanında puan birikir. Biriken puanlarını bedava kahveye veya hesap indirimine dönüştür.",
    bullets: [
      "Fiziksel sadakat kartı taşıma derdine son",
      "Tüm anlaşmalı mekanlarda ortak harcanabilir puanlar",
      "Kişiye özel doğum günü ve etkinlik ikramları",
    ],
    imageSrc: "/img/mobil-puanland-cuzdan.png",
    phoneTag: "🎁 14.975 Puan Cüzdanda",
    phoneTagColor: "bg-amber-500",
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
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 max-w-2xl mx-auto">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
          
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
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-[#FF4D00]">
                  <span>✨ {currentTab.badge}</span>
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
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF4D00]/20 text-[#FF4D00] text-xs font-bold mt-0.5">
                        ✓
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
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sağ Kolon: Titanium iPhone Mockup İçinde Ekran */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[280px] sm:w-[310px] rounded-[48px] p-3.5 bg-zinc-950 shadow-2xl border-4 border-zinc-700/80">
              
              {/* Dynamic Island */}
              <div className="relative rounded-[38px] overflow-hidden bg-black aspect-[9/19.5] border border-zinc-800">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black z-30 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-zinc-700 mr-2" />
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>

                {/* Ekran Görseli */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTab.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={currentTab.imageSrc}
                      alt={currentTab.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Alt Yüzen Bilgi Rozeti */}
                <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-zinc-900/90 backdrop-blur-md p-2.5 border border-zinc-700/70 text-center shadow-lg">
                  <p className="text-[11px] font-bold text-white">{currentTab.phoneTag}</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
