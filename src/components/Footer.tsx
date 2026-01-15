import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Image bileşenini kullanmak için import ediyoruz

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">

        {/* İş Birliklerimiz Alanı */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-6 font-medium">İş Birliklerimiz</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Ordu Ticaret Odası */}
            <div className="relative h-24 w-48 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
              <Image
                src="/img/orduticaretodasi.png"
                alt="Ordu Ticaret Odası"
                fill
                className="object-contain"
              />
            </div>

            {/* İTÜ Çekirdek */}
            <div className="relative h-16 w-60 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
              <Image
                src="/img/itucekirdek-menuland.png"
                alt="İTÜ Çekirdek"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Ayırıcı Çizgi */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Telif Hakkı ve Linkler Alanı */}
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Menuland. Tüm Hakları Saklıdır.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="https://blog.menuland.net" target="_blank" rel="noopener noreferrer" className="hover:text-menuland transition-colors">
              Blog
            </Link>
            <Link href="/kayit" className="hover:text-menuland transition-colors">
              İşletmeler İçin
            </Link>
            <Link href="/gizlilik-politikasi" className="hover:text-menuland transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-sartlari" className="hover:text-menuland transition-colors">
              Kullanım Şartları
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
