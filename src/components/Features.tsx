"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  const [activeAllergenFilter, setActiveAllergenFilter] = useState<"all" | "glutenFree" | "vegan">("all");

  const allergenDishes = [
    {
      name: "Izgara Somon Kase",
      calories: "520 kcal",
      weight: "350g",
      price: "420 ₺",
      details: "Kinoa, edamame, avokado dilimleri ve zencefilli sos.",
      isGlutenFree: true,
      isVegan: false,
      allergens: ["Balık"],
    },
    {
      name: "Avokado & Kinoa Kasesi",
      calories: "340 kcal",
      weight: "260g",
      price: "290 ₺",
      details: "Chia tohumu, nar taneleri, taze nane ve organik zeytinyağı.",
      isGlutenFree: true,
      isVegan: true,
      allergens: [],
    },
  ];

  const filteredDishes = allergenDishes.filter((dish) => {
    if (activeAllergenFilter === "glutenFree") return dish.isGlutenFree;
    if (activeAllergenFilter === "vegan") return dish.isVegan;
    return true;
  });

  return (
    <section id="features" className="py-20 lg:py-28 bg-zinc-50/70 border-t border-zinc-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Üst Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF4D00]">
            YENİ NESİL TEKNOLOJİ
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-zinc-900">
            Hem misafirler hem işletmeler için <br className="hidden sm:inline" />
            eksiksiz mobil ekosistem.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            Menuland sadece bir karekod değil; Türkiye'nin güncel yasal mevzuatlarına tam uyumlu, müşteri sadakatini ve sipariş hızını artıran yaşayan bir platformdur.
          </p>
        </div>

        {/* Asimetrik Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Kart 1 (Geniş): 14 Alerjen & Mevzuat */}
          <div className="md:col-span-12 lg:col-span-7 rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800 mb-4">
                <span>🛡️ Ticaret Bakanlığı Fiyat Etiketi Yönetmeliği</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900">
                14 Alerjen, Kalori ve Gramaj Şeffaflığı
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                Resmi tebliğ gereği kapı girişinde ve masada fiyat listesi ile alerjen bulundurma zorunluluğuna tam uyum sağlayın. Misafirleriniz gluten, laktoz veya vegan filtreleriyle siparişlerini güvenle versin.
              </p>

              {/* Canlı Filtre Deneyimi */}
              <div className="mt-6 pt-5 border-t border-zinc-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-zinc-700">Alerjen Filtresini Test Edin:</span>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveAllergenFilter("all")}
                      className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                        activeAllergenFilter === "all"
                          ? "bg-zinc-900 text-white"
                          : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                      }`}
                    >
                      Tümü (2)
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveAllergenFilter("glutenFree")}
                      className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                        activeAllergenFilter === "glutenFree"
                          ? "bg-[#FF4D00] text-white"
                          : "bg-orange-50 border border-orange-200 text-[#FF4D00]"
                      }`}
                    >
                      🌾 Glutensiz
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveAllergenFilter("vegan")}
                      className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                        activeAllergenFilter === "vegan"
                          ? "bg-emerald-600 text-white"
                          : "bg-emerald-50 border border-emerald-200 text-emerald-700"
                      }`}
                    >
                      🌱 Vegan
                    </button>
                  </div>
                </div>

                {/* Yemek Listesi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredDishes.map((dish, i) => (
                    <div key={i} className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-3 text-xs">
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-zinc-900">{dish.name}</span>
                        <span className="font-black text-[#FF4D00]">{dish.price}</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 mt-1">{dish.calories} • {dish.weight}</p>
                      <div className="mt-2 flex gap-1">
                        {dish.isGlutenFree && (
                          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[8px] font-bold text-amber-800">
                            Glutensiz
                          </span>
                        )}
                        {dish.isVegan && (
                          <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[8px] font-bold text-emerald-800">
                            Vegan
                          </span>
                        )}
                        {dish.allergens.map((alg, aIdx) => (
                          <span key={aIdx} className="rounded bg-zinc-200 px-1.5 py-0.5 text-[8px] font-medium text-zinc-700">
                            {alg}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Kart 2: Canlı Harita & Şehir Rehberi */}
          <div className="md:col-span-12 lg:col-span-5 rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-bold text-[#FF4D00] mb-4">
                <span>📍 Mobil Şehir Radarı</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900">
                Haritada Canlı Restoran Keşfi
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                Kullanıcılar uygulamayı açtıklarında konumlarına en yakın mekanları, güncel menü fiyatlarını ve fotoğrafları haritada tek bakışta görür.
              </p>
            </div>

            <div className="mt-6 rounded-2xl bg-zinc-100 p-4 border border-zinc-200 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF4D00] text-white text-xl">
                🗺️
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900">150+ Noktada Canlı Menü</p>
                <p className="text-[11px] text-zinc-500">Mekana gitmeden önce menüyü ve fiyatları görerek karar verin.</p>
              </div>
            </div>
          </div>

          {/* Kart 3: Masa Bazlı Karekod */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-100 text-lg mb-3">
                📱
              </div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900">
                Masa Bazlı Akıllı Karekod
              </h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                Her masaya özel yüksek çözünürlüklü QR kodlar oluşturun. Misafirler uygulama indirmeden de tarayıcı üzerinden anında menünüze ulaşsın.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-[#FF4D00]">
              <span>Masa Başına Ek Maliyet Yok</span>
              <span>✓ Sınırsız</span>
            </div>
          </div>

          {/* Kart 4: PuanLand Sadakat Programı */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-lg mb-3">
                🎁
              </div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900">
                PuanLand Sadakat Ekosistemi
              </h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                Misafirleriniz mekanınızı her ziyaret ettiğinde puan kazansın. Tekrar gelme sıklığını artıran modern dijital cüzdan sistemi.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-amber-600">
              <span>Müşteri Sadakati</span>
              <span>+%28 Tekrar Ziyaret</span>
            </div>
          </div>

          {/* Kart 5: Gel Al & Ön Sipariş */}
          <div className="md:col-span-12 lg:col-span-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-lg mb-3">
                ⚡
              </div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900">
                Gel Al (Takeaway) Mutfak Paneli
              </h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                Sıra beklemeden paket sipariş alma imkanı. Mutfak ekranına anında sesli düşen siparişler ile paket servis verimliliğinizi ikiye katlayın.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Komisyonsuz Sipariş</span>
              <span>%0 Komisyon</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}