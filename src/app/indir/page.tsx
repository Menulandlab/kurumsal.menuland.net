"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DownloadFeatures from './DownloadFeatures';

const APP_STORE_URL = "https://apps.apple.com/tr/app/menuland/id6618147785?l=tr";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.mycompany.menuland&pli=1";

export default function DownloadPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ua = navigator.userAgent || navigator.vendor;
      if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
        window.location.replace(APP_STORE_URL);
      } else if (/android/i.test(ua)) {
        window.location.replace(PLAY_STORE_URL);
      }
    }
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Menuland'i Keşfedin ve İndirin
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Şehrin lezzet haritası cebinizde. En iyi restoranları, kafeleri ve etkinlikleri keşfetmek, menülere göz atmak ve özel indirimlerden faydalanmak için hemen indirin.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
                {/* Google Play Badge */}
                <Link 
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-300"
                >
                    <Image
                        src="/img/google-play-badge.svg"
                        alt="Google Play'den İndirin"
                        width={180}
                        height={67}
                    />
                </Link>
                {/* App Store Badge */}
                <Link 
                  href="https://apps.apple.com/tr/app/menuland/id6618147785?l=tr" // DEĞİŞİKLİK BURADA
                  target="_blank" // Linkin yeni sekmede açılmasını sağlar
                  rel="noopener noreferrer" // Güvenlik için eklenir
                  className="transform hover:scale-105 transition-transform duration-300"
                >
                    <Image
                        src="/img/app-store-badge.svg"
                        alt="App Store'dan İndirin"
                        width={180}
                        height={67}
                    />
                </Link>
            </div>
        </div>
        
        <DownloadFeatures />

      </div>
    </div>
  );
}