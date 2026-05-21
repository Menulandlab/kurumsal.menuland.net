export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "restoran-isletmeciliginde-dijitallesmenin-onemi",
    title: "Restoran İşletmeciliğinde Dijitalleşmenin Önemi",
    excerpt: "Geleneksel menülerden dijital QR menülere geçiş, işletmenize neler kazandırır? Maliyet analizi ve müşteri memnuniyeti.",
    author: "Akın Can Kabacık",
    date: "2024-05-20T09:00:00+03:00",
    image: "/img/blog/dijitallesme.jpg",
    category: "İşletme Yönetimi",
    readTime: "5 dk",
    content: `
      <p>Yeme-içme sektörü, son yıllarda büyük bir değişim geçiriyor. Artık sadece lezzetli yemekler sunmak yetmiyor; müşteriler hız, hijyen ve teknoloji odaklı bir deneyim bekliyor.</p>
      <h2>Kağıt Menülerin Sonu Mu Geliyor?</h2>
      <p>Geleneksel kağıt menüler, yüksek baskı maliyetleri ve güncellenme zorlukları nedeniyle artık işletmeler için bir yük haline geldi. Menuland ile fiyat değişikliklerini anında yapabilir, tükenen ürünleri saniyeler içinde listeden kaldırabilirsiniz.</p>
    `
  },
  {
    slug: "2024-restoran-trendleri-teknoloji-ve-lezzet",
    title: "2024 Restoran Trendleri: Teknoloji ve Lezzet",
    excerpt: "Bu yıl restoran dünyasında neler değişiyor? Temassız hizmetten yapay zeka destekli menülere kadar her şey.",
    author: "Menuland Ekibi",
    date: "2024-05-19T10:00:00+03:00",
    image: "/img/blog/2024-trendleri.jpg",
    category: "Sektörel Trendler",
    readTime: "6 dk",
    content: `
      <p>2024 yılı, restoranlar için teknolojinin mutfağa girdiği bir yıl oluyor. Artık sadece yemek kalitesi değil, sunulan dijital deneyim de puanlanıyor.</p>
      <h2>Kişiselleştirilmiş Menü Deneyimi</h2>
      <p>Müşteriler, diyet tercihlerine göre filtrelenebilen akıllı menüleri tercih ediyor. Menuland'in sunduğu akıllı kategorizasyon bu ihtiyacı tam olarak karşılıyor.</p>
    `
  },
  {
    slug: "qr-menu-kullanirken-dikkat-edilmesi-gerekenler",
    title: "QR Menü Kullanırken Dikkat Edilmesi Gerekenler",
    excerpt: "Tasarım, hız ve kullanıcı deneyimi. Başarılı bir dijital menü deneyimi için kritik ipuçları.",
    author: "Akın Can Kabacık",
    date: "2024-05-18T14:30:00+03:00",
    image: "/img/blog/qr-menu-ipucu.jpg",
    category: "Teknoloji",
    readTime: "4 dk",
    content: `
      <p>QR menü kullanımı basit görünse de, müşterinin bu süreci sorunsuz tamamlaması için dikkat edilmesi gereken bazı teknik detaylar vardır.</p>
      <h2>Hız ve Görsellik</h2>
      <p>QR kodu okutan bir müşteri, saniyeler içinde menüye ulaşmak ister. Menuland'in hafif altyapısı bu hızı sağlarken, yüksek çözünürlüklü görseller sipariş iştahını artırır.</p>
    `
  },
  {
    slug: "musteri-sadakati-dijital-dunyada-mudavim-yaratmak",
    title: "Müşteri Sadakati: Dijital Dünyada Müdavim Yaratmak",
    excerpt: "Müşterilerinizi nasıl müdavime dönüştürebilirsiniz? Dijital araçlarla sadakat programları.",
    author: "Menuland Ekibi",
    date: "2024-05-15T11:00:00+03:00",
    image: "/img/blog/musteri-sadakati.jpg",
    category: "Pazarlama",
    readTime: "5 dk",
    content: `
      <p>Yeni müşteri kazanmak maliyetliyken, mevcut müşteriyi elde tutmak karlılığı artırır. Dijital menünüzü bir pazarlama aracına dönüştürün.</p>
      <h2>Duyurular ve Kampanyalar</h2>
      <p>Özel günlerde yapacağınız duyuruları Menuland üzerinden müşterilerinize ulaştırarak tekrar gelmelerini sağlayabilirsiniz.</p>
    `
  },
  {
    slug: "garson-cagirma-sistemleri-operasyonel-hiz",
    title: "Garson Çağırma Sistemleri: Operasyonel Hız",
    excerpt: "Garson çağırma butonları servis hızınızı nasıl %40 artırabilir? Verimlilik analizi.",
    author: "Akın Can Kabacık",
    date: "2024-05-12T09:15:00+03:00",
    image: "/img/blog/garson-cagirma.jpg",
    category: "İşletme Yönetimi",
    readTime: "3 dk",
    content: `
      <p>Masada bekleyen ve garsonla göz teması kurmaya çalışan müşteri, mutsuz müşteridir. Dijital garson çağırma sistemi bu sorunu kökten çözer.</p>
      <h2>Daha Hızlı Hesap, Daha Çok Masa Devri</h2>
      <p>Müşteri hesabını uygulama üzerinden istediğinde süreç hızlanır ve masanın yeni müşteriye hazırlanma süresi kısalır.</p>
    `
  },
  {
    slug: "sosyal-medya-ve-restoran-etkilesimi",
    title: "Sosyal Medya ve Restoran Etkileşimi",
    excerpt: "Sosyal medya hesaplarınızla dijital menünüzü nasıl entegre edebilirsiniz? Instagram'dan siparişe giden yol.",
    author: "Menuland Ekibi",
    date: "2024-05-10T16:00:00+03:00",
    image: "/img/blog/sosyal-medya.jpg",
    category: "Pazarlama",
    readTime: "4 dk",
    content: `
      <p>Instagram hikayelerinizdeki linkleri doğrudan dijital menünüze yönlendirin. Menuland'in 'Story' özelliği ile işletmenizi güncel tutun.</p>
    `
  }
];
