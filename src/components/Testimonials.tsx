"use client";

import React from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    name: "Mehmet Özdemir",
    business: "Vadi Bistro & Cafe",
    city: "İstanbul",
    role: "İşletme Sahibi",
    quote: "Haftalık fiyat ve tedarik değişimlerinde menü bastırma masrafından tamamen kurtulduk. Masadaki QR kod ve Gel Al ekranı sayesinde servis hızımız neredeyse ikiye katlandı.",
    metrics: "Yıllık ~40.000 ₺ Baskı Tasarrufu"
  },
  {
    name: "Canan Ergin",
    business: "Kahve & Mutfak No:7",
    city: "Ordu",
    role: "Restoran Müdürü",
    quote: "Ticaret Bakanlığı'nın yeni fiyat ve 14 alerjen yönetmeliği bizi çok korkutuyordu. Menuland'e geçtikten sonra tüm alerjen ve kalori bilgilerini yarım saatte girdik, ceza riskimiz sıfıra indi.",
    metrics: "100% Mevzuat Uyumu"
  },
  {
    name: "Emre Taşkın",
    business: "The Garden Brasserie",
    city: "Ankara",
    role: "Kurucu Ortak",
    quote: "PuanLand sadakat sistemi sayesinde gelen müşterilerimizin tekrar ziyaret etme sıklığı ciddi şekilde arttı. Müşteriler masada kendi telefonundan kalori ve fiyatları incelemeyi çok sevdi.",
    metrics: "+%28 Tekrar Ziyaret"
  },
  {
    name: "Elif Karaca",
    business: "Gurme & Lezzet Keşifleri",
    city: "İzmir",
    role: "Gastronomi Yazarı",
    quote: "Bir mekana oturduğumda eski yıpranmış menüler yerine Menuland'in tertemiz, alerjen filtreli temassız menüsünü görmek güven veriyor. Sektörün ihtiyacı olan standart buydu.",
    metrics: "5 Yıldızlı Müşteri Deneyimi"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-zinc-50/70 border-t border-zinc-200/80 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF4D00]">
            İŞ ORTAKLARIMIZ NE DİYOR?
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900">
            150'den fazla işletmenin güvenilir tercihi.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Menuland ekosistemini kullanan restoran, kafe ve bistro sahiplerinin gerçek deneyimleri.
          </p>
        </div>

        {/* Referans Kartları Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm hover:border-[#FF4D00]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Yıldız ve Doğrulandı Rozeti */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400 text-sm">
                    {"★★★★★"}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                    <span>✓ Doğrulanmış İşletme</span>
                  </span>
                </div>

                {/* Yorum Metni */}
                <blockquote className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Yazar Bilgisi ve Öne Çıkan Metrik */}
              <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF4D00]/10 text-[#FF4D00] font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-zinc-500">
                      {item.business} • {item.city} ({item.role})
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="rounded-lg bg-orange-50 border border-orange-200/80 px-2 py-1 text-[10px] font-bold text-[#FF4D00]">
                    {item.metrics}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}