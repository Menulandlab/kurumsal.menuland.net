import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MotionDiv } from '@/components/MotionDiv';

const activeRegions = [
  {
    city: "Ordu",
    status: "Aktif Hizmet",
    description: "Menuland'in merkez üssü olan Ordu'da, restoran ve kafelerin dijital dönüşümüne öncülük ediyoruz. Şehir genelindeki yaygın ağımızla işletmelere yüksek verimlilik sağlıyoruz."
  }
];

const upcomingRegions = [
  { city: "İstanbul", region: "Marmara" },
  { city: "Ankara", region: "İç Anadolu" },
  { city: "İzmir", region: "Ege" },
  { city: "Samsun", region: "Karadeniz" },
  { city: "Giresun", region: "Karadeniz" },
  { city: "Trabzon", region: "Karadeniz" },
  { city: "Antalya", region: "Akdeniz" },
  { city: "Bursa", region: "Marmara" }
];

export default function BolgelerPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-slate-50 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">Hizmet Bölgelerimiz</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Menuland, dijital menü ve restoran yönetim teknolojilerini Türkiye'nin her noktasına taşımak için kararlılıkla ilerliyor.
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Aktif Bölgeler */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-12 uppercase tracking-widest text-center">Aktif Olduğumuz Şehirler</h2>
            <div className="max-w-4xl mx-auto">
              {activeRegions.map((region, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-3xl border-2 border-orange-500 shadow-xl flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-orange-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Aktif</span>
                      <h3 className="text-3xl font-black text-gray-900">{region.city}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {region.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link href="https://isletme.menuland.net" className="inline-block bg-gray-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-black transition-all">
                      İşletmeni Kaydet
                    </Link>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Yakında Gelecek Şehirler */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-widest">Yakında Hizmetinizdeyiz</h2>
              <p className="text-gray-600">Altyapı çalışmalarımızın sürdüğü ve çok yakında aktif olacağımız şehirler.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {upcomingRegions.map((item, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center group hover:border-orange-500 transition-all"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">{item.city}</h4>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">{item.region}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Metin Alanı */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-10 uppercase tracking-tight">Türkiye'nin Dijital Menü Dönüşümü</h2>
            <div className="prose prose-lg mx-auto text-gray-500 leading-loose">
              <p>
                Menuland olarak, restoran teknolojilerini sadece büyük şehirlerle sınırlı tutmuyoruz. Başarı hikayemize başladığımız <strong>Ordu</strong> ilindeki güçlü operasyonumuzun ardından, tüm Türkiye'ye yayılma hedefimizle ilerliyoruz. Dijital menü, QR menü ve restoran yönetim sistemlerimizle işletmelerin operasyonel hızını artırıyoruz.
              </p>
              <p>
                <strong>İstanbul</strong>, <strong>Ankara</strong> ve <strong>İzmir</strong> gibi metropollerin yanı sıra Karadeniz, Marmara ve Ege bölgelerindeki yayılım stratejimizle, her ölçekteki işletmenin teknolojik dönüşüm ortağı oluyoruz. Siz de şehrinizde Menuland avantajlarından yararlanmak için ön kayıt oluşturabilir ve dijital dünyaya ilk adımı atabilirsiniz.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Link from 'next/link';
