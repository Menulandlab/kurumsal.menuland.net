// src/app/indir/DownloadFeatures.tsx

"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const DownloadFeatures = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="mt-20 lg:mt-28 space-y-24">
      {/* Feature 1: Keşfet */}
      <motion.div 
        className="grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={featureVariants}
      >
        <div className="text-center md:text-left">
          {/* Metin renklerini güncelliyoruz */}
          <h3 className="text-3xl font-bold text-gray-900">Binlerce Menü Parmaklarının Ucunda</h3>
          <p className="mt-4 text-lg text-gray-600">
            Ana sayfa akışında bölgendeki popüler mekanları, yeni eklenenleri ve kategorileri kolayca gör. Restorana gitmeden önce menüsünü incele, seçimini önceden yap.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src="/img/menuland-home.jpg" alt="Menuland Ana Sayfa" width={350} height={700} className="rounded-2xl shadow-2xl shadow-menuland/20" />
        </div>
      </motion.div>

      {/* Feature 2: Harita */}
      <motion.div 
        className="grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={featureVariants}
      >
        <div className="flex justify-center md:order-2">
          <Image src="/img/menuland-map.jpg" alt="Menuland Harita Görünümü" width={350} height={700} className="rounded-2xl shadow-2xl shadow-menuland/20" />
        </div>
        <div className="text-center md:text-left md:order-1">
          <h3 className="text-3xl font-bold text-gray-900">Harita ile Keşfet</h3>
          <p className="mt-4 text-lg text-gray-600">
            Yakınındaki tüm Menuland üyesi işletmeleri harita üzerinde gör. Konumuna en yakın restoranı veya kafeyi anında bularak yeni lezzetlere yelken aç.
          </p>
        </div>
      </motion.div>

      {/* Feature 3: Şehir Rehberi */}
      <motion.div 
        className="grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={featureVariants}
      >
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-gray-900">Şehrin Nabzını Tut</h3>
          <p className="mt-4 text-lg text-gray-600">
            Şehir Rehberi ile konserler, tiyatrolar ve diğer tüm kültürel etkinliklerden haberdar ol. Biletini al, planını yap, şehrin keyfini çıkar.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src="/img/menuland-guide.jpg" alt="Menuland Şehir Rehberi" width={350} height={700} className="rounded-2xl shadow-2xl shadow-menuland/20" />
        </div>
      </motion.div>
    </div>
  );
};

export default DownloadFeatures;