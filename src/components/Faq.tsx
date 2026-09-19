// src/components/Faq.tsx

import React from 'react';
import AccordionItem from './AccordionItem';
import { MotionDiv } from './MotionDiv';
import Link from 'next/link';

const faqData = [
  {
    category: "1- Genel & İşletme Bilgileri",
    items: [
      {
        question: "Menuland nedir ve işletmelere ne sağlar?",
        answer: "Menuland, restoran, kafe ve barların menülerini saniyeler içinde dijitalleştiren, masada temassız sipariş ve Gel Al operasyonlarını yöneten, Ticaret Bakanlığı mevzuatına tam uyumlu yeni nesil bir restoran teknolojisi ekosistemidir."
      },
      {
        question: "Menuland hangi şehirlerde kullanılabilir?",
        answer: "Menuland, Türkiye genelindeki tüm il ve ilçelerde hizmet vermektedir. Tek şubeli butik kafelerden çok şubeli zincir restoranlara kadar her işletme aynı gün içinde sistemini kurup kullanmaya başlayabilir."
      },
      {
        question: "Ticaret Bakanlığı Fiyat Etiketi ve Alerjen Yönetmeliği'ne uygun mu?",
        answer: "Evet! Menuland dijital menüleri; kapı girişinde ve masada fiyat listesi bulundurma, 14 temel alerjen uyarısı, kalori değerleri ve porsiyon gramajı şeffaflığı zorunluluklarına %100 uyumlu olarak tasarlanmıştır."
      }
    ]
  },
  {
    category: "2- Menü & Karekod (QR Kod) Yönetimi",
    items: [
      {
        question: "Masalara özel karekod nasıl oluşturulur ve bastırılır?",
        answer: "İşletme panelinizdeki 'Karekod Yönetimi' sekmesinden mekanınızdaki masa sayısına göre (Masa 1, Teras 4, Bahçe 12 vb.) tek tıkla karekod üretebilir, yüksek çözünürlüklü baskı formatında (PDF/PNG) anında indirebilirsiniz."
      },
      {
        question: "Menüdeki fiyatları ve stok durumunu anlık değiştirebilir miyim?",
        answer: "Evet. Paneliniz üzerinden ürün fiyatlarını tek tek veya toplu yüzde artışı/indirimi ile anında güncelleyebilirsiniz. Günün menüsünde tükenen ürünleri tek tıkla gizleyebilir veya yeniden satışa açabilirsiniz."
      },
      {
        question: "Müşteriler sipariş veya menü için uygulama indirmek zorunda mı?",
        answer: "Hayır. Masadaki QR kodu okutan müşteriler herhangi bir uygulama indirmeden telefonlarının kamerasından veya tarayıcısından doğrudan saniyeler içinde menüye erişebilir."
      }
    ]
  },
  {
    category: "3- Gel Al, Rezervasyon & Sadakat",
    items: [
      {
        question: "Gel Al siparişleri mutfağa nasıl iletilir?",
        answer: "Müşteri uygulamadan Gel Al siparişi verdiğinde, açık olan yönetim ekranınızda veya mutfak tabletinizde sesli ikaz zili çalar. Kasa veya mutfak personeli tek tıkla siparişi onaylar ve tahmini hazırlık dakikası belirler."
      },
      {
        question: "PuanLand sadakat programı nasıl çalışır?",
        answer: "Müşterileriniz restoranınızı ziyaret ettikçe veya platform üzerinden sipariş verdikçe puan kazanır. Kazandıkları puanları sadece sizin belirlediğiniz indirim kuponlarında kullanarak tekrar mekanınızı tercih ederler."
      },
      {
        question: "Masa rezervasyonlarını Menuland üzerinden yönetebilir miyim?",
        answer: "Evet! Premium paket kapsamındaki işletmeler, müşterilerinden gelen online masa rezervasyon taleplerini panelden kabul edebilir, onaylayabilir ve masa doluluk durumunu takip edebilir."
      }
    ]
  },
  {
    category: "4- Paketler ve Fiyatlandırma",
    items: [
      {
        question: "Temel ve Premium paketleri arasındaki farklar nelerdir?",
        answer: "Temel paket (349₺/ay) işletme yönetimi, sınırsız ürün ve QR menü sistemi sunar. Premium paket (649₺/ay) ise tüm temel özelliklere ek olarak online rezervasyon yönetimi, kampanya oluşturma, garson çağırma bildirimleri ve öncelikli destek içerir."
      },
      {
        question: "Yıllık ödemede indirim var mı?",
        answer: "Evet, yıllık ödemelerde net %20 indirim uygulanır. Temel paket aylık 279₺, Premium paket aylık 519₺'ye denk gelir (2 ay ücretsiz)."
      },
      {
        question: "İptal ve iade politikanız nedir?",
        answer: "Aboneliğinizi taahhütsüz olarak dilediğiniz an iptal edebilirsiniz. İptal durumunda mevcut dönem sonuna kadar tüm özelliklerden kesintisiz yararlanmaya devam edersiniz."
      }
    ]
  }
];

export default function Faq() {
  return (
    <section id="faq" className="bg-zinc-50/70 py-24 lg:py-32 border-t border-zinc-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF4D00]">
            AKLINIZA TAKILANLAR
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Menuland kurulumu, fiyat etiketi mevzuatı ve panel yönetimi hakkında merak edilen tüm yanıtlar.
          </p>
        </div>
        
        <div className="space-y-10">
          {faqData.map((categoryItem, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-xs">
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2.5 pb-3 border-b border-zinc-100">
                <span className="h-2 w-2 rounded-full bg-[#FF4D00]" />
                <span>{categoryItem.category}</span>
              </h3>
              <div className="divide-y divide-zinc-100">
                {categoryItem.items.map((item, itemIndex) => (
                  <AccordionItem key={itemIndex} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Destek Kutusu */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-500">
            Farklı bir sorunuz mu var?{' '}
            <Link href="mailto:destek@menuland.net" className="font-bold text-[#FF4D00] hover:underline">
              destek@menuland.net
            </Link>{' '}
            üzerinden 7/24 ekibimize ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}