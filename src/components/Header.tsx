"use client"; // Menü durumunu yönetmek (useState) ve tıklama olaylarını dinlemek için bu bir Client Component olmalıdır.

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  // Menünün açık (true) veya kapalı (false) olma durumunu takip eden state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mobil menü açıkken arkadaki sayfanın kaydırılmasını engellemek için bir yan etki (side effect)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Bu bileşen ekrandan kaldırılırsa, stilin varsayılan hale döndüğünden emin oluruz.
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]); // Bu useEffect, sadece isMenuOpen durumu değiştiğinde çalışır.


  return (
    <>
      {/* Ana Header Yapısı */}
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-1.5 flex justify-between items-center">
          
          {/* Logo */}
          <div>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/img/logo-dark.png"
                alt="Menuland Logo"
                width={100}
                height={28}
                priority
              />
            </Link>
          </div>

          {/* Masaüstü Navigasyon Linkleri (Sadece orta ve büyük ekranlarda görünür) */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-600 hover:text-menuland transition-colors duration-300">
              Özellikler
            </Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-menuland transition-colors duration-300">
              Fiyatlandırma
            </Link>
            <Link href="https://blog.menuland.net" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-menuland transition-colors duration-300">
              Blog
            </Link>
            <Link href="/#contact" className="text-gray-600 hover:text-menuland transition-colors duration-300">
              İletişim
            </Link>
          </nav>

          {/* Masaüstü İndirme Butonu (Sadece orta ve büyük ekranlarda görünür) */}
          <div className="hidden md:block">
            <Link
              href="/indir"
              className="bg-menuland text-white font-bold py-1.5 px-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-sm"
            >
              Uygulamayı İndir
            </Link>
          </div>
          
          {/* Mobil Menü Butonu (Hamburger İkonu - Sadece küçük ekranlarda görünür) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-gray-800 p-2 -mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* Mobil Menü Katmanı (Overlay) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-white z-[60] p-6 flex flex-col"
          >
            {/* Menü İçi Üst Bar: Logo ve Kapatma Butonu */}
            <div className="flex justify-between items-center mb-16">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                 <Image
                    src="/img/logo-dark.png"
                    alt="Menuland Logo"
                    width={120}
                    height={32}
                  />
              </Link>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-800 p-2 -mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Mobil Menü Linkleri */}
            <nav className="flex flex-col items-center justify-center text-center space-y-8 flex-grow">
              <Link href="/#features" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-800 hover:text-menuland transition-colors">
                Özellikler
              </Link>
              <Link href="/#pricing" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-800 hover:text-menuland transition-colors">
                Fiyatlandırma
              </Link>
              <Link href="https://blog.menuland.net" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-800 hover:text-menuland transition-colors">
                Blog
              </Link>
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-800 hover:text-menuland transition-colors">
                İletişim
              </Link>
            </nav>
            
            {/* Mobil Menüdeki İndirme Butonu */}
            <div className="mt-8">
               <Link
                href="/indir"
                onClick={() => setIsMenuOpen(false)}
                className="w-full block text-center bg-menuland text-white font-bold py-3 px-5 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Uygulamayı İndir
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;