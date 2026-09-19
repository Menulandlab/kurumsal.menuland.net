"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Features() {
  const [activeAllergen, setActiveAllergen] = useState<'all' | 'gluten' | 'vegan'>('all');
  const [isOrderReady, setIsOrderReady] = useState(false);
  const [wheelRotating, setWheelRotating] = useState(false);
  const [wheelResult, setWheelResult] = useState('Trüflü Burger');

  const spinWheel = () => {
    if (wheelRotating) return;
    setWheelRotating(true);
    const options = ['Izgara Somon', 'Kahvaltı Tabağı', 'Trüflü Burger', 'Kinoa Kasesi'];
    setTimeout(() => {
      const picked = options[Math.floor(Math.random() * options.length)];
      setWheelResult(picked);
      setWheelRotating(false);
    }, 1200);
  };

  return (
    <section id="features" className="py-24 lg:py-32 bg-zinc-50/70 border-t border-zinc-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bölüm Başlığı */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF4D00]">
            KOMPLE RESTORAN TEKNOLOJİSİ
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900">
            İşletmenizi modernleştiren güçlü araçlar.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Sadece bir karekod değil; mevzuata tam uyumlu menü yönetimi, Gel Al sipariş karşılama ve sadakat sistemi tek panelde.
          </p>
        </div>

        {/* Modern Bento Grid (5 Odak Kartı) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Kart 1: Resmi Yönetmelik & Alerjen Şeffaflığı (BÜYÜK KART - 2 KOLON) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:border-[#FF4D00]/40 hover:shadow-md transition-all"
          >
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-bold text-emerald-700 mb-4">
                <span>🛡️ Ticaret Bakanlığı Fiyat Etiketi Yönetmeliği</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">
                14 Alerjen, Kalori ve Gramaj Şeffaflığı
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Resmi tebliğ gereği kapı girişinde ve masada fiyat listesi bulundurma zorunluluğuna tam uyum sağlayın. Müşterileriniz gluten, laktoz veya vegan filtreleriyle siparişlerini güvenle versin.
              </p>
            </div>

            {/* İnteraktif Alerjen Filtre Simülasyonu */}
            <div className="mt-6 pt-6 border-t border-zinc-100">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="text-xs font-semibold text-zinc-500">Canlı Alerjen Filtresini Test Edin:</span>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveAllergen('all')}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                      activeAllergen === 'all'
                        ? 'bg-zinc-900 text-white'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    Tümü (2)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveAllergen('gluten')}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                      activeAllergen === 'gluten'
                        ? 'bg-[#FF4D00] text-white'
                        : 'bg-orange-50 text-orange-800 border border-orange-200'
                    }`}
                  >
                    🌾 Glutensiz (1)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveAllergen('vegan')}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                      activeAllergen === 'vegan'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    🌱 Vegan (1)
                  </button>
                </div>
              </div>

              {/* Dinamik Menü Önizleme Kartları */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(activeAllergen === 'all' || activeAllergen === 'gluten') && (
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-3.5 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-xs font-bold text-zinc-900">Izgara Somon Kase</h4>
                        <span className="text-xs font-extrabold text-zinc-900">420 ₺</span>
                      </div>
                      <p className="mt-1 text-[11px] text-zinc-500">520 kcal • 350g • Kinoa ve edamame</p>
                    </div>
                    <div className="mt-2 flex gap-1">
                      <span className="rounded bg-orange-100 text-orange-800 px-1.5 py-0.5 text-[9px] font-bold">🌾 Glutensiz</span>
                      <span className="rounded bg-zinc-200 text-zinc-700 px-1.5 py-0.5 text-[9px] font-medium">Balık</span>
                    </div>
                  </div>
                )}

                {(activeAllergen === 'all' || activeAllergen === 'vegan') && (
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-3.5 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-xs font-bold text-zinc-900">Avokado &amp; Kinoa Kasesi</h4>
                        <span className="text-xs font-extrabold text-zinc-900">290 ₺</span>
                      </div>
                      <p className="mt-1 text-[11px] text-zinc-500">340 kcal • 260g • Chia tohumu ve nar</p>
                    </div>
                    <div className="mt-2 flex gap-1">
                      <span className="rounded bg-emerald-100 text-emerald-800 px-1.5 py-0.5 text-[9px] font-bold">🌱 Vegan</span>
                      <span className="rounded bg-orange-100 text-orange-800 px-1.5 py-0.5 text-[9px] font-bold">🌾 Glutensiz</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Kart 2: Gel Al & Canlı Mutfak Paneli (1 KOLON) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#FF4D00]/40 hover:shadow-md transition-all"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-[#FF4D00] font-bold text-lg mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-zinc-900">
                Canlı Gel Al Sipariş Ekranı
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Müşteri siparişi verdiğinde mutfak tabletinde sesli uyarı çalar. Tek tıkla onaylayın, hazır olduğunda müşteriye anlık bildirim gitsin.
              </p>
            </div>

            {/* Simüle Edilmiş Sipariş Durum Kartı */}
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-zinc-800">Sipariş #204</span>
                <span className="text-[#FF4D00] font-bold">575.00 ₺</span>
              </div>
              <p className="mt-1 text-[11px] text-zinc-500">2x Kahvaltı Tabağı, 2x Portakal Suyu</p>
              
              <button
                type="button"
                onClick={() => setIsOrderReady(!isOrderReady)}
                className={`mt-3 w-full rounded-xl py-2 text-center text-xs font-bold transition-all cursor-pointer ${
                  isOrderReady
                    ? 'bg-emerald-600 text-white'
                    : 'bg-zinc-900 text-white hover:bg-black'
                }`}
              >
                {isOrderReady ? '✓ Müşteriye Bildirildi (Hazır)' : '🔔 Siparişi Hazır Olarak İşaretle'}
              </button>
            </div>
          </motion.div>

          {/* Kart 3: Masaya Özel Karekod (QR Kod) Yönetimi (1 KOLON) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#FF4D00]/40 hover:shadow-md transition-all"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900 font-bold text-lg mb-4">
                📱
              </div>
              <h3 className="text-xl font-bold text-zinc-900">
                Masa Bazlı Karekod Yönetimi
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Masa 1, Bahçe 4, Teras 12... İstediğiniz isimlendirmeyle masalarınıza özel karekodlar üretin. Yüksek çözünürlüklü baskı formatında (PNG/PDF) hemen indirin.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/80 p-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-white border border-zinc-200 shadow-2xs font-mono text-2xl">
                🏁
              </div>
              <p className="mt-2 text-xs font-bold text-zinc-800">Masa 04 Karekodu</p>
              <span className="text-[10px] text-zinc-500 font-mono">menuland.net/m/masa-4</span>
            </div>
          </motion.div>

          {/* Kart 4: PuanLand Sadakat ve Tekrar Ziyaret (1 KOLON) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#FF4D00]/40 hover:shadow-md transition-all"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 font-bold text-lg mb-4">
                🎁
              </div>
              <h3 className="text-xl font-bold text-zinc-900">
                PuanLand Sadakat Programı
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Müşterileriniz mekanınızı her ziyaret ettiğinde veya sipariş verdiğinde puan kazanır. Kazandığı puanları indirim kuponlarına dönüştürerek sürekli geri gelir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/60 p-4">
              <span className="text-[10px] uppercase tracking-wider font-bold text-amber-800">Kullanıcı Cüzdanı</span>
              <p className="text-2xl font-extrabold text-zinc-900 mt-1">14.975 <span className="text-xs text-amber-800 font-semibold">Puan</span></p>
              <span className="text-[10px] text-zinc-500">Kullanılabilir Kupon: 50 ₺ İndirim</span>
            </div>
          </motion.div>

          {/* Kart 5: Ne Yesem? Karar Çarkı (1 KOLON) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#FF4D00]/40 hover:shadow-md transition-all"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-[#FF4D00] font-bold text-lg mb-4">
                🎡
              </div>
              <h3 className="text-xl font-bold text-zinc-900">
                Ne Yesem? Karar Çarkı
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Ne yiyeceğine karar veremeyen müşteriler için oyunlaştırılmış lezzet çarkı. Öne çıkan menü yemeklerinizi eğlenceli şekilde tavsiye edin.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-center">
              <button
                type="button"
                onClick={spinWheel}
                className="w-full rounded-xl bg-[#FF4D00] py-2 text-center text-xs font-bold text-white hover:bg-[#e04400] transition-all cursor-pointer"
              >
                {wheelRotating ? 'Çark Dönüyor...' : '🎲 Çarkı Çevir'}
              </button>
              <p className="mt-2 text-xs font-semibold text-zinc-800">
                Günün Önerisi: <span className="text-[#FF4D00] font-bold">{wheelResult}</span>
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}