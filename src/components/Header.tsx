"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-zinc-200/80 py-2.5'
            : 'bg-white/70 backdrop-blur-xs border-b border-zinc-100 py-3.5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2.5">
            <Image
              src="/img/logo-dark.png"
              alt="Menuland Logo"
              width={150}
              height={42}
              priority
              className="h-8 sm:h-9 w-auto object-contain"
            />
            <span className="hidden sm:inline-block rounded-md bg-orange-50 border border-orange-200/60 px-2 py-0.5 text-[10px] font-bold text-[#FF4D00]">
              KURUMSAL
            </span>
          </Link>

          {/* Masaüstü Navigasyon */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold text-zinc-600">
            <Link href="#experience" className="hover:text-[#FF4D00] transition-colors">
              Uygulama
            </Link>
            <Link href="#features" className="hover:text-[#FF4D00] transition-colors">
              Özellikler
            </Link>
            <Link href="#calculator" className="hover:text-[#FF4D00] transition-colors">
              Tasarruf Hesapla
            </Link>
            <Link href="#pricing" className="hover:text-[#FF4D00] transition-colors">
              Fiyatlandırma
            </Link>
            <Link href="#business" className="hover:text-[#FF4D00] transition-colors">
              İşletmeler
            </Link>
            <Link href="/blog" className="hover:text-[#FF4D00] transition-colors">
              Blog
            </Link>
          </nav>

          {/* Masaüstü Butonlar */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://isletme.menuland.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-zinc-700 hover:text-zinc-950 px-3 py-2 rounded-xl hover:bg-zinc-100 transition-colors"
            >
              İşletme Girişi
            </Link>
            <Link
              href="#download-app"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#FF4D00] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#e04400] active:scale-98 transition-all"
            >
              <span>Uygulamayı İndir</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          {/* Mobil Hamburger Butonu */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="p-2 -mr-2 text-zinc-800 rounded-lg hover:bg-zinc-100 transition-colors"
              aria-label="Menüyü Aç"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* Mobil Menü Çekmecesi (Drawer) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-xs md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.25 }}
              className="fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-white p-6 flex flex-col justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
                  <Image
                    src="/img/logo-dark.png"
                    alt="Menuland Logo"
                    width={140}
                    height={39}
                    className="h-8 w-auto object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1.5 text-zinc-400 hover:text-zinc-700 rounded-lg hover:bg-zinc-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <nav className="flex flex-col space-y-4 pt-6 text-sm font-semibold text-zinc-800">
                  <Link href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF4D00] transition-colors py-1">
                    Uygulama Deneyimi
                  </Link>
                  <Link href="#features" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF4D00] transition-colors py-1">
                    Özellikler &amp; Bento Grid
                  </Link>
                  <Link href="#calculator" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF4D00] transition-colors py-1">
                    Tasarruf Hesaplayıcı (Sabit Paket)
                  </Link>
                  <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF4D00] transition-colors py-1">
                    Paketler &amp; Fiyatlandırma
                  </Link>
                  <Link href="#business" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF4D00] transition-colors py-1">
                    İşletmeler İçin
                  </Link>
                  <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF4D00] transition-colors py-1">
                    Blog &amp; Rehber
                  </Link>
                </nav>
              </div>

              <div className="pt-6 border-t border-zinc-100 space-y-2.5">
                <Link
                  href="#download-app"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full block text-center rounded-xl bg-[#FF4D00] text-white font-bold py-3 text-xs shadow-xs hover:bg-[#e04400] transition-all"
                >
                  Uygulamayı İndir
                </Link>
                <Link
                  href="https://isletme.menuland.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full block text-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800 font-bold py-3 text-xs hover:bg-zinc-100 transition-all"
                >
                  İşletme Girişi
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}