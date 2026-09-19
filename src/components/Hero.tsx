"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-white">
      {/* İnce ve zarif arka plan ızgara deseni */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />

      {/* Arka planda hafif Menuland turuncusu ambient ışıltı */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[350px] bg-gradient-to-tr from-orange-200/40 via-[#FF4D00]/10 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Üst Bilgi Rozeti */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-1.5 text-xs font-semibold text-[#FF4D00] shadow-xs backdrop-blur-xs"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#FF4D00] animate-pulse" />
            <span>Türkiye'nin Yeni Nesil Restoran &amp; Kafe Ekosistemi</span>
            <span className="hidden sm:inline text-orange-400">•</span>
            <span className="hidden sm:inline text-zinc-600 font-medium">Aynı Gün Kurulum</span>
          </motion.div>
        </div>

        {/* Ana Başlık ve Açıklama */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.1]"
          >
            Menünüzü dijitale taşıyın,{' '}
            <span className="relative whitespace-nowrap text-[#FF4D00]">
              <span className="relative">masada ve pakette</span>
            </span>{' '}
            satışlarınızı artırın.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Masa QR menüden Gel Al sipariş yönetimine, Ticaret Bakanlığı 14 alerjen mevzuatından PuanLand sadakat sistemine kadar restoranınızın tüm dijital operasyonu tek çatı altında.
          </motion.p>

          {/* CTA Butonları */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <Link
              href="https://isletme.menuland.net/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF4D00] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-[#e04400] active:scale-98 transition-all"
            >
              <span>İşletmenizi Hemen Ekleyin</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </Link>

            <Link
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-7 py-3.5 text-sm sm:text-base font-semibold text-zinc-800 shadow-2xs hover:bg-zinc-50 hover:border-zinc-300 active:scale-98 transition-all"
            >
              <span>Tasarruf Hesapla</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-zinc-400">
                <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>

          {/* Güven ve Mevzuat Vurguları */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-500"
          >
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" />
              </svg>
              <span>%0 Sipariş Komisyonu</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" />
              </svg>
              <span>Resmi Fiyat Etiketi Yönetmeliğine %100 Uyumlu</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" />
              </svg>
              <span>Kredi Kartsız Anında Başlangıç</span>
            </div>
          </motion.div>
        </div>

        {/* Canlı Restoran Ekosistem Vitrini (Desktop Panel + Mobile QR Menu) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="relative mt-16 sm:mt-20 max-w-6xl mx-auto"
        >
          {/* Yüzen Bildirim 1: Garson Çağrısı (Sol Üst) */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:flex absolute -top-6 -left-4 sm:left-4 z-30 items-center gap-2.5 rounded-2xl border border-zinc-200/80 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-100 text-[#FF4D00]">
              🔔
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900">
                <span>Masa 4: Garson Çağrısı</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <span className="text-[11px] text-zinc-500">Mutfak &amp; Servis ekranına iletildi</span>
            </div>
          </motion.div>

          {/* Yüzen Bildirim 2: Gel Al Siparişi (Sağ Üst) */}
          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden sm:flex absolute -top-8 -right-4 sm:right-6 z-30 items-center gap-2.5 rounded-2xl border border-zinc-200/80 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 font-bold text-xs">
              ₺
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900">
                <span>Yeni Gel Al: 575.00 ₺</span>
                <span className="rounded bg-emerald-100 px-1.5 py-0.2 text-[9px] font-bold text-emerald-800">Onaylandı</span>
              </div>
              <span className="text-[11px] text-zinc-500">Hazırlanma süresi: ~15 dk</span>
            </div>
          </motion.div>

          {/* Yüzen Bildirim 3: 14 Alerjen Uyarısı (Sol Alt) */}
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="hidden lg:flex absolute bottom-8 -left-8 z-30 items-center gap-2 rounded-2xl border border-emerald-200 bg-white/95 px-3.5 py-2 shadow-xl backdrop-blur-md"
          >
            <span className="text-emerald-600 text-sm font-bold">✓</span>
            <span className="text-xs font-semibold text-zinc-800">
              Ticaret Bakanlığı 14 Alerjen &amp; Kalori Uyumlu
            </span>
          </motion.div>

          {/* Ana macOS Tarayıcı Çerçevesi (İşletme Yönetim Paneli) */}
          <div className="rounded-2xl border border-zinc-300/80 bg-white shadow-2xl overflow-hidden ring-1 ring-zinc-900/5">
            {/* Tarayıcı Üst Çubuğu */}
            <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-100/90 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1 text-xs font-mono text-zinc-600">
                <span className="text-emerald-600 font-bold">🔒</span>
                <span>isletme.menuland.net</span>
              </div>
              <div className="w-12 text-right">
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">Canlı Panel</span>
              </div>
            </div>

            {/* Panel İçeriği Mockup */}
            <div className="bg-zinc-50 p-4 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Sol Taraf: Panel İstatistikleri ve Sipariş Kuyruğu (8 Kolon) */}
                <div className="lg:col-span-8 space-y-4 sm:space-y-6">
                  {/* Günlük Özet Kartları */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <div className="rounded-xl border border-zinc-200 bg-white p-3.5 sm:p-4 shadow-2xs">
                      <span className="text-[10px] sm:text-xs font-semibold uppercase text-zinc-400 tracking-wider">Bugün Toplam Ciro</span>
                      <p className="mt-1 text-lg sm:text-2xl font-extrabold text-zinc-900">14.850 ₺</p>
                      <span className="text-[10px] text-emerald-600 font-medium">+%18 dünden fazla</span>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-white p-3.5 sm:p-4 shadow-2xs">
                      <span className="text-[10px] sm:text-xs font-semibold uppercase text-zinc-400 tracking-wider">Aktif Masa</span>
                      <p className="mt-1 text-lg sm:text-2xl font-extrabold text-zinc-900">18 / 24</p>
                      <span className="text-[10px] text-orange-600 font-medium">Doluluk %75</span>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-white p-3.5 sm:p-4 shadow-2xs">
                      <span className="text-[10px] sm:text-xs font-semibold uppercase text-zinc-400 tracking-wider">Gel Al Siparişi</span>
                      <p className="mt-1 text-lg sm:text-2xl font-extrabold text-zinc-900">32 Adet</p>
                      <span className="text-[10px] text-emerald-600 font-medium">0 İptal</span>
                    </div>
                  </div>

                  {/* Canlı Sipariş Listesi */}
                  <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-2xs">
                    <div className="flex items-center justify-between mb-3 border-b border-zinc-100 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <h4 className="text-xs sm:text-sm font-bold text-zinc-900">Canlı Mutfak &amp; Masa Siparişleri</h4>
                      </div>
                      <span className="text-[11px] text-zinc-500 font-medium">Anlık Sesli İkaz Aktif</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-lg border border-orange-100 bg-orange-50/40 p-2.5 text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className="rounded-md bg-[#FF4D00] px-2 py-0.5 text-[10px] font-bold text-white">Masa 4</span>
                          <span className="font-semibold text-zinc-800">2x Serpme Kahvaltı, 2x Portakal Suyu</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-zinc-900">550.00 ₺</span>
                          <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">Hazırlanıyor</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50/70 p-2.5 text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className="rounded-md bg-zinc-900 px-2 py-0.5 text-[10px] font-bold text-white">Gel Al #108</span>
                          <span className="font-semibold text-zinc-800">1x Izgara Somon Bowl, 1x San Sebastian</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-zinc-900">615.00 ₺</span>
                          <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">Müşteri Yolda</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50/70 p-2.5 text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className="rounded-md bg-[#FF4D00] px-2 py-0.5 text-[10px] font-bold text-white">Masa 9</span>
                          <span className="font-semibold text-zinc-800">1x Trüflü Burger, 1x Patates</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-zinc-900">465.00 ₺</span>
                          <span className="rounded bg-zinc-200 px-2 py-0.5 text-[10px] font-bold text-zinc-700">Teslim Edildi</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sağ Taraf: Masada Açılan Mobil QR Menü Önizlemesi (4 Kolon) */}
                <div className="lg:col-span-4 flex flex-col justify-center items-center">
                  <div className="relative w-full max-w-[260px] rounded-[32px] border-[6px] border-zinc-800 bg-zinc-900 p-2 shadow-xl ring-1 ring-zinc-900/10">
                    {/* Telefon Çentiği */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 h-3.5 w-16 rounded-full bg-zinc-950 z-20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-800 mr-1.5" />
                      <div className="h-1 w-5 rounded-full bg-zinc-800" />
                    </div>

                    {/* Telefon Ekranı */}
                    <div className="relative aspect-[9/18] w-full overflow-hidden rounded-[22px] bg-white text-[10px] p-3 flex flex-col justify-between">
                      <div>
                        {/* Üst Durum */}
                        <div className="flex justify-between items-center text-[9px] text-zinc-500 pt-2 mb-2">
                          <span>01:15</span>
                          <span>5G • %81</span>
                        </div>

                        {/* Restoran & Masa Başlığı */}
                        <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                          <div>
                            <p className="font-bold text-xs text-zinc-900">Menuland Cafe</p>
                            <span className="text-[9px] text-emerald-600 font-semibold">✓ QR Menü Doğrulandı</span>
                          </div>
                          <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] font-bold text-emerald-700">Masa 4</span>
                        </div>

                        {/* Alerjen Filtreleri */}
                        <div className="flex gap-1 my-2">
                          <span className="rounded-full bg-zinc-900 text-white px-2 py-0.5 text-[8px] font-bold">Tümü</span>
                          <span className="rounded-full bg-orange-50 text-orange-800 border border-orange-200 px-1.5 py-0.5 text-[8px] font-semibold">🌾 Glutensiz</span>
                          <span className="rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-1.5 py-0.5 text-[8px] font-semibold">🌱 Vegan</span>
                        </div>

                        {/* Örnek Ürün Kartı */}
                        <div className="rounded-lg border border-zinc-100 bg-zinc-50/70 p-2 space-y-1">
                          <div className="flex justify-between items-start">
                            <span className="font-bold text-zinc-900">Kahvaltı Tabağı</span>
                            <span className="font-extrabold text-zinc-900">200 ₺</span>
                          </div>
                          <p className="text-[8px] text-zinc-500 leading-tight">690 kcal • 420g • Doğal zeytin, peynir, bal ve köy yumurtası</p>
                          <div className="flex gap-1 pt-1">
                            <span className="bg-red-100 text-red-700 px-1 rounded text-[7px] font-bold">Gluten</span>
                            <span className="bg-red-100 text-red-700 px-1 rounded text-[7px] font-bold">Laktoz</span>
                          </div>
                        </div>
                      </div>

                      {/* Telefon Alt Garson Çağır Butonu */}
                      <div className="border-t border-zinc-100 pt-2 flex gap-1">
                        <div className="flex-1 rounded-lg border border-zinc-300 py-1.5 text-center font-bold text-[9px] text-zinc-800">
                          🛎️ Garson Çağır
                        </div>
                        <div className="flex-1 rounded-lg bg-[#FF4D00] py-1.5 text-center font-bold text-[9px] text-white">
                          🧾 Hesap İste
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="mt-3 text-[11px] font-medium text-zinc-400">Masada müşterinin gördüğü temassız menü</span>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* Kurumsal Referanslar / Destekleyenler Bandı */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-zinc-100">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-6">
            GÜVENİLEN EKOSİSTEM &amp; İŞ BİRLİKLERİ
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2">
              <Image
                src="/img/itucekirdek-menuland.png"
                alt="İTÜ Çekirdek Girişimi"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/img/orduticaretodasi.png"
                alt="Ordu Ticaret ve Sanayi Odası"
                width={160}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="flex items-center gap-2 text-zinc-700 font-bold text-sm tracking-tight">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 text-white text-xs font-black">
                M
              </span>
              <span>150+ Anlaşmalı İşletme</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}