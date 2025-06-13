// src/components/Hero.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MotionDiv } from './MotionDiv';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
      {/* Arka plan desenini açık gri yapıyoruz */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="container mx-auto px-6 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Metin renklerini koyu yapıyoruz */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Menülerinizi Dijital Dünyaya Taşıyın
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Menuland ile restoran, kafe ve barınızın menüsünü saniyeler içinde
            dijitalleştirin, müşteri etkileşiminizi artırın ve işletmenizi
            büyütün.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link
            href="/indir"
            className="w-full sm:w-auto bg-menuland text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Uygulamayı İndir
          </Link>
          {/* İkincil butonu açık tema için güncelliyoruz */}
          <Link
            href="#features"
            className="w-full sm:w-auto bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-all duration-300 transform hover:scale-105"
          >
            Daha Fazla Bilgi
          </Link>
        </MotionDiv>
        
        {/* Cihaz çerçevesini açık tema için güncelliyoruz */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 lg:mt-24"
        >
          <div className="relative mx-auto border-gray-200 bg-white border-[8px] rounded-t-xl w-full max-w-4xl h-[300px] md:h-[450px] lg:h-[550px] shadow-2xl">
            <div className="rounded-lg overflow-hidden w-full h-full">
              <Image
                src="/img/anasayfa.png"
                alt="Menuland Uygulama Arayüzü"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;