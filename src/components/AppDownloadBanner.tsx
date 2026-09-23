"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppDownloadBanner() {
  return (
    <section id="download-app" className="py-20 bg-gradient-to-b from-white to-orange-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="rounded-[36px] bg-zinc-950 text-white p-8 sm:p-14 border border-zinc-800 shadow-2xl relative overflow-hidden">
          
          {/* Işık Hüzmesi */}
          <div className="absolute -right-20 -bottom-20 h-80 w-80 bg-[#FF4D00]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Sol Taraf: Metin ve İndirme Butonları */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-[#FF4D00]">
                <span>📱 HEMEN ÜCRETSİZ İNDİRİN</span>
              </span>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Şehri keşfetmeye <br />
                <span className="text-[#FF4D00]">bugün başlayın.</span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Menuland iOS ve Android uygulamasıyla binlerce restoranın güncel menüsü, indirimleri, "Ne Yesem?" çarkı ve PuanLand sadakat cüzdanı parmaklarınızın ucunda.
              </p>

              {/* Mağaza Butonları */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="https://apps.apple.com/tr/app/menuland/id6618147785?l=tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/img/app-store-badge.svg"
                    alt="App Store'dan İndirin"
                    width={160}
                    height={54}
                    className="h-12 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.mycompany.menuland&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/img/google-play-badge.svg"
                    alt="Google Play'den İndirin"
                    width={160}
                    height={54}
                    className="h-12 w-auto object-contain"
                  />
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400 font-medium pt-2">
                <span>✓ Ücretsiz İndirme</span>
                <span>✓ Reklamsız Deneyim</span>
                <span>✓ Anında Kullanım</span>
              </div>
            </div>

            {/* Sağ Taraf: Hızlı QR Tarama Kartı */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 text-center shadow-xl backdrop-blur-md max-w-[260px]">
                {/* QR Çerçevesi */}
                <div className="rounded-2xl bg-white p-3.5 shadow-inner mx-auto mb-4 flex items-center justify-center">
                  {/* Modern QR Görünümü (SVG) */}
                  <svg className="h-36 w-36 text-zinc-900" viewBox="0 0 100 100" fill="currentColor">
                    {/* Basit ve Şık QR Deseni */}
                    <rect x="0" y="0" width="30" height="30" rx="6" fill="#18181b" />
                    <rect x="6" y="6" width="18" height="18" rx="3" fill="#ffffff" />
                    <rect x="10" y="10" width="10" height="10" rx="2" fill="#FF4D00" />

                    <rect x="70" y="0" width="30" height="30" rx="6" fill="#18181b" />
                    <rect x="76" y="6" width="18" height="18" rx="3" fill="#ffffff" />
                    <rect x="80" y="10" width="10" height="10" rx="2" fill="#FF4D00" />

                    <rect x="0" y="70" width="30" height="30" rx="6" fill="#18181b" />
                    <rect x="6" y="76" width="18" height="18" rx="3" fill="#ffffff" />
                    <rect x="10" y="80" width="10" height="10" rx="2" fill="#FF4D00" />

                    {/* Matris Noktaları */}
                    <rect x="36" y="8" width="8" height="8" rx="2" />
                    <rect x="52" y="8" width="8" height="8" rx="2" />
                    <rect x="36" y="24" width="8" height="8" rx="2" />
                    <rect x="44" y="38" width="12" height="12" rx="3" fill="#FF4D00" />
                    <rect x="12" y="44" width="8" height="8" rx="2" />
                    <rect x="24" y="52" width="8" height="8" rx="2" />
                    <rect x="68" y="44" width="8" height="8" rx="2" />
                    <rect x="82" y="52" width="8" height="8" rx="2" />
                    <rect x="40" y="74" width="8" height="8" rx="2" />
                    <rect x="56" y="82" width="8" height="8" rx="2" />
                    <rect x="74" y="74" width="8" height="8" rx="2" />
                  </svg>
                </div>

                <p className="text-xs font-bold text-white leading-tight">
                  Kameranızla Tarayın
                </p>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Doğrudan App Store veya Google Play indirme sayfasına gidin.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
