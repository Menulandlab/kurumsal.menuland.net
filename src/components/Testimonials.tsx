// src/components/Testimonials.tsx

import React from 'react';
import Image from 'next/image';
import { MotionDiv } from './MotionDiv';

// Yorum verisinden avatar URL'lerini kaldırdık, çünkü artık otomatik oluşturacağız.
const testimonialsData = [
  {
    name: "Ayşe Y.",
    role: "Menuland Kullanıcısı",
    quote: "Şehirdeki yeni mekanları ve etkinlikleri keşfetmek hiç bu kadar kolay olmamıştı. Menuland sayesinde gitmeden önce menüye göz atabiliyorum."
  },
  {
    name: "Mehmet Ö.",
    role: "Cafe Sahibi",
    quote: "Menü güncelleme derdi tamamen ortadan kalktı. Etkinlik duyuruları özelliği sayesinde hafta sonu müşteri sayımızda gözle görülür bir artış oldu."
  },
  {
    name: "Elif K.",
    role: "Gurme Blogger",
    quote: "Takipçilerime restoran önerirken Menuland linki paylaşmak çok pratik. Menüye ve atmosferi yansıtan fotoğraflara tek yerden ulaşabiliyorlar."
  },
  {
    name: "Can E.",
    role: "Restoran Müdürü",
    quote: "Tedarik sorunları nedeniyle anlık olarak menüden kaldırdığımız ürünleri anında gizleyebilmek büyük bir lüks. Müşteri memnuniyeti arttı."
  },
  {
    name: "Selin D.",
    role: "Üniversite Öğrencisi",
    quote: "Arkadaşlarımla dışarı çıkmadan önce indirimli ve öğrenci dostu menüleri olan yerleri Menuland'den buluyoruz. Bütçemizi korumamıza yardımcı oluyor."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Onlar Ne Dedi?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Menuland'i kullanan mutlu müşterilerimizin ve iş ortaklarımızın deneyimleri.
          </p>
        </MotionDiv>
      </div>

      <MotionDiv 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full"
      >
        <div className="flex overflow-x-auto space-x-8 pb-4 pl-6 lg:pl-0 lg:justify-center">
          {testimonialsData.map((testimonial, index) => {
            // Her bir isim için dinamik olarak avatar URL'i oluşturuyoruz.
            const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=ff4d00&color=fff&size=128`;
            
            return (
              <div 
                key={index}
                className="flex-none w-[90%] md:w-[450px] bg-white shadow-lg p-8 rounded-xl flex flex-col items-center text-center border border-gray-200"
              >
                <Image
                  src={avatarUrl} // Otomatik oluşturulan URL'i kullanıyoruz
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-6 border-2 border-menuland"
                />
                <blockquote className="text-gray-600 italic text-lg flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-6">
                  <p className="font-bold text-gray-900 text-xl">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </MotionDiv>
    </section>
  );
};

export default Testimonials;