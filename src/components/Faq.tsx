// src/components/Faq.tsx

import React from 'react';
import AccordionItem from './AccordionItem';
import { MotionDiv } from './MotionDiv';
import Link from 'next/link'; // Link bileşenini import ediyoruz

const faqData = [
  {
    category: "1- Genel Bilgiler",
    items: [
      {
        question: "Menuland nedir?",
        answer: "Menuland, çevrenizdeki kafe ve restoranların menülerine kolayca ulaşmanızı sağlayan bir mobil uygulamadır. Aynı zamanda şehirdeki kültürel etkinlikleri ve doğal/tarihi mekanları keşfetmenize yardımcı olur."
      },
      {
        question: "Menuland hangi şehirlerde kullanılabilir?",
        answer: "Şu anda Menuland, Ordu şehrinde hizmet vermektedir. Ancak, yatırım sürecine bağlı olarak yakında farklı şehirlerde de aktif hale gelecektir."
      },
      {
        question: "Menuland ücretli mi?",
        answer: "Hayır, Menuland kullanıcılar için tamamen ücretsizdir. Ancak, işletmeler için belirli tanıtım paketleri ve abonelik seçenekleri mevcuttur."
      }
    ]
  },
  {
    category: "2- Kullanım",
    items: [
      {
        question: "Menuland’da nasıl mekan bulabilirim?",
        answer: "Uygulamada yer alan harita veya arama çubuğunu kullanarak çevrenizdeki kafe ve restoranları keşfedebilirsiniz. Ayrıca, belirli mutfak türlerine veya kategorilere göre filtreleme yapabilirsiniz."
      },
      {
        question: "Menuland üzerinden rezervasyon yapabilir miyim?",
        answer: "Şu an için doğrudan rezervasyon hizmetimiz yoktur, ancak işletmelerin iletişim bilgilerine ulaşarak kendileriyle iletişime geçebilirsiniz."
      },
      {
        question: "Menuland’ı nasıl indirebilirim?",
        answer: "Menuland, App Store ve Google Play Store üzerinden ücretsiz olarak indirilebilir."
      }
    ]
  },
  {
    category: "3- İçerik ve Güncellemeler",
    items: [
      {
        question: "Menuland’daki bilgiler nasıl güncelleniyor?",
        answer: "Menuland’daki işletmelerin menüleri ve bilgileri, işletme sahipleri tarafından güncellenmektedir. Ayrıca, ekibimiz düzenli olarak kontroller yaparak verilerin güncelliğini sağlamaktadır."
      },
      {
        question: "Menuland’a yeni bir işletme nasıl eklenir?",
        answer: "Eğer bir işletme sahibiyseniz, Menuland’a kayıt olarak işletmenizi ekleyebilir ve menü bilgilerinizi yönetebilirsiniz. Bunun için İşletme Başvuru Formu’nu doldurabilirsiniz."
      },
      {
        question: "Menuland’da gördüğüm hatalı bir bilgiyi nasıl bildirebilirim?",
        answer: "Eğer yanlış veya eksik bir bilgi fark ederseniz, ilgili işletme sayfasında bulunan “Geri Bildirim Gönder” butonu aracılığıyla veya info@menuland.net adresinden bize ulaşabilirsiniz."
      }
    ]
  },
  {
    category: "4- Paketler ve Fiyatlandırma",
    items: [
      {
        question: "Temel ve Premium paketleri arasındaki farklar nelerdir?",
        answer: "Temel paket (349₺/ay) işletme yönetimi ve QR menü sistemi sunar. Premium paket (649₺/ay) ise tüm temel özelliklere ek olarak rezervasyon sistemi, kampanya oluşturma, sınırsız hikaye paylaşımı, carousel reklam alanı (ayda 2 slot) ve öncelikli müşteri desteği gibi gelişmiş özellikleri içerir."
      },
      {
        question: "Paket ücretleri nedir?",
        answer: "Temel paket aylık 349₺, Premium paket ise aylık 649₺'dir. Her iki paket de işletmenizin ihtiyaçlarına göre seçilebilir."
      },
      {
        question: "Paketimi nasıl yükseltebilirim veya değiştirebilirim?",
        answer: "İşletme panelinizden istediğiniz zaman paketinizi yükseltebilir veya değiştirebilirsiniz. Paket değişikliklerinde kalan süreniz yeni pakete aktarılır."
      },
      {
        question: "İptal ve iade politikanız nedir?",
        answer: "Aboneliğinizi istediğiniz zaman iptal edebilirsiniz. İptal işleminden sonra mevcut dönem sonuna kadar tüm özelliklerden faydalanmaya devam edersiniz."
      }
    ]
  },
  {
    category: "5- Reklam ve İşbirlikleri",
    items: [
      {
        question: "Menuland işletmelere nasıl avantaj sağlar?",
        answer: "Menuland, işletmelerin daha fazla müşteriye ulaşmasını sağlarken, menülerini dijital ortamda kolayca paylaşmalarına yardımcı olur. Ayrıca, özel tanıtım ve reklam alanları ile işletmelerin öne çıkmasını destekler."
      },
      {
        question: "Menuland'da reklam vermek istiyorum, ne yapmalıyım?",
        answer: "İşletmeniz için Menuland'da reklam vermek isterseniz, Fiyatlandırma sayfamızı inceleyebilir veya bizimle iletişime geçebilirsiniz."
      },
      {
        question: "Ek hizmetler nelerdir ve nasıl satın alabilirim?",
        answer: "Profesyonel fotoğraf çekimi (2.500₺), menü dijitalleştirme (1.000₺), video tanıtım (5.000₺) ve sosyal medya yönetimi (3.500₺/ay) hizmetlerimiz bulunmaktadır. Bu hizmetler için bizimle iletişime geçebilirsiniz."
      },
      {
        question: "Menuland’ın sosyal medya hesapları var mı?",
        // CEVAP KISMI GÜNCELLENDİ
        answer: (
          <>
            Evet! Bizi{" "}
            <Link href="https://www.instagram.com/menulandapp/" target="_blank" className="text-menuland font-medium underline hover:opacity-80 transition-opacity">Instagram</Link>,{" "}
            <Link href="https://x.com/menulandapp" target="_blank" className="text-menuland font-medium underline hover:opacity-80 transition-opacity">X (Twitter)</Link>,{" "}
            <Link href="https://www.facebook.com/menulandapp" target="_blank" className="text-menuland font-medium underline hover:opacity-80 transition-opacity">Facebook</Link>{" "}
            ve{" "}
            <Link href="https://www.linkedin.com/company/menulandapp/" target="_blank" className="text-menuland font-medium underline hover:opacity-80 transition-opacity">LinkedIn</Link>{" "}
            üzerinden takip edebilirsiniz. Güncellemeler ve yeni mekanlar hakkında bilgi almak için sosyal medya hesaplarımızı takip etmeyi unutmayın.
          </>
        )
      }
    ]
  }
];

const Faq = () => {
  return (
    <section id="faq" className="bg-slate-50 py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sık Sorulan Sorular
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Aklınıza takılabilecek soruların cevaplarını burada bulabilirsiniz.
          </p>
        </MotionDiv>
        
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {faqData.map((categoryItem, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-menuland pl-4">
                {categoryItem.category}
              </h3>
              {categoryItem.items.map((item, itemIndex) => (
                <AccordionItem key={itemIndex} question={item.question} answer={item.answer} />
              ))}
            </div>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};

export default Faq;