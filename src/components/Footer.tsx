import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Image bileşenini kullanmak için import ediyoruz

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        
        {/* İTÜ Çekirdek Logo Alanı */}
        <div className="text-center mb-8">
            <p className="text-sm text-gray-600 mb-4">Gururla bir İTÜ Çekirdek girişimiyiz.</p>
            <div className="flex justify-center">
                <Image
                    src="/img/itucekirdek-menuland.png"
                    alt="İTÜ Çekirdek Logo"
                    width={150}
                    height={42}
                />
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
