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
    slug: "orduda-deniz-keyfi-bedava-ilce-ilce-ucretsiz-en-guzel-sahiller-ve-plajlar",
    title: "Ordu’da Deniz Keyfi Bedava! İlçe İlçe Ücretsiz En Güzel Sahiller ve Plajlar",
    excerpt: "Yaz sıcakları iyice bastırdığında, kendini Karadeniz'in serin sularına bırakmaktan daha iyi bir alternatif olamaz. Üstelik yeşille mavinin kucaklaştığı Ordu'da, cüzdanını hiç açmadan muhteşem koyların ve uçsuz bucaksız kumsalların tadını çıkarabilirsin!",
    author: "Menuland Ekibi",
    date: "2026-06-22T23:58:00+03:00",
    image: "/img/blog/ordu-plajlari.jpg",
    category: "Şehir Rehberi",
    readTime: "5 dk",
    content: `
      <p>Yaz sıcakları iyice bastırdığında, kendini Karadeniz'in serin sularına bırakmaktan daha iyi bir alternatif olamaz. Üstelik yeşille mavinin kucaklaştığı Ordu'da, cüzdanını hiç açmadan muhteşem koyların ve uçsuz bucaksız kumsalların tadını çıkarabilirsin!</p>
      <p>Havlunu kapıp yola çıkman için Ordu'nun en popüler sahil ilçelerini taradık ve Ünye, Fatsa, Altınordu ile Gülyalı hattında tamamen ücretsiz olarak denize girebileceğin en iyi yerleri senin için listeledik. Hazırsan, Ordu sahil turumuz başlıyor!</p>
      
      <h2>1. Altınordu: Şehrin Kalbinde Deniz Keyfi</h2>
      <p>Ordu’nun merkez ilçesi Altınordu, hem şehir hayatından kopmak istemeyenler hem de akşamüstü iş çıkışı kendini hemen suya atmak isteyenler için harika seçenekler sunuyor.</p>
      <ul>
        <li><strong>Kumbaşı Sahili (Kumbaşı Belediye Plajı):</strong> Altınordu’nun en popüler noktalarından biri. Üstelik burası Mavi Bayraklı bir halk plajı! İncecik kumu ve geniş sahiliyle hem güneşlenmek hem de yürüyüş yapmak için ideal. Giriş tamamen ücretsiz, dilersen şemsiyeni kendin götürebilirsin.</li>
        <li><strong>Cumhuriyet Sahili (Cumhuriyet Mahallesi Halk Plajı):</strong> Kent merkezine oldukça yakın olan bu sahil de tıpkı Kumbaşı gibi belediyenin titiz çalışmalarıyla Mavi Bayrak ödülüne layık görülen yerlerden. Ailelerin ve gençlerin uğrak noktası olan sahilde duş, soyunma kabini gibi imkanlar da ücretsiz sunuluyor.</li>
        <li><strong>Bozukkale Feneri ve Sahili:</strong> Tarihi dokusuyla dikkat çeken Bozukkale bölgesi, daha sakin ve nostaljik bir ortam arayanların tercihi. Deniz fenerinin gölgesinde, Karadeniz’in hırçın ama bir o kadar da büyüleyici manzarasını izleyerek yüzebilirsin.</li>
      </ul>

      <h2>2. Gülyalı: Havalimanının Gölgesinde Mavi Bayrak</h2>
      <p>Ordu'nun Giresun sınırına yakın ilçesi Gülyalı, özellikle geniş plajları ve temiz suyuyla son yılların yükselen yıldızı.</p>
      <ul>
        <li><strong>Eğrice Plajı:</strong> Gülyalı denince akla ilk gelen yerlerden biri şüphesiz Eğrice. Geniş kumsalı ve dalga kıranları sayesinde nispeten daha sakin bir deniz sunması burayı yüzmek için oldukça cazip kılıyor. Kamp sandalye ve masanı kapıp gelmek için biçilmiş kaftan.</li>
        <li><strong>Mavi Dünya Plajı (Gülyalı Halk Plajı):</strong> Gülyalı’nın gururu! Ordu Büyükşehir Belediyesi'nin yenileme çalışmalarıyla modern bir görünüme kavuşan ve Mavi Bayrak alan bu plaja giriş tamamen ücretsiz. Sadece içerideki şezlong ve şemsiyelerden istersen sembolik ücretler ödeniyor, ancak kendi havlunu serip denizin tadını çıkarmak tamamen bedava.</li>
      </ul>

      <h2>3. Fatsa: Sakin Koylar ve Doğa Harikaları</h2>
      <p>Fatsa, kayalık yapıların oluşturduğu doğal havuzları ve yeşilin her tonunu barındıran gizli koylarıyla tam bir keşif rotası.</p>
      <ul>
        <li><strong>Dolunay Plajı:</strong> Fatsa merkezine sadece 4 km mesafede bulunan bu sahil, hem kolay ulaşımı hem de ince kumuyla bilinir. Çevresindeki kafelerle canınız bir şeyler çektiğinde alternatif sunsa da plaj alanı halka açık ve ücretsizdir.</li>
        <li><strong>Fatsa Çamlık Halk Plajı:</strong> Ağaçların gölgesinde piknik yapıp, ardından birkaç adımda denize girmek ister misin? Çamlık tam olarak böyle bir yer. Doğayla iç içe, gölgelik alanları bol ve denizi oldukça keyifli.</li>
        <li><strong>Efirli Plajı (Perşembe-Fatsa Sınırı):</strong> Aslında Perşembe ilçesine bağlı olsa da Fatsa ve Altınordu'dan kolayca ulaşılan Efirli, Ordu'nun en eski ve en bilinen plajlarından biri. Nostaljik bir havası var ve yaz aylarında cıvıl cıvıl oluyor.</li>
      </ul>

      <h2>4. Ünye: Uçsuz Bucaksız Kumsallar</h2>
      <p>Ordu’nun en uzun sahil şeritlerinden birine sahip olan Ünye, \"Karadeniz'in Egesi\" kıvamındaki geniş kumsallarıyla ünlü.</p>
      <ul>
        <li><strong>Uzunkum Plajı:</strong> Adının hakkını sonuna kadar veren, kilometrelerce uzanan incecik kumlu bir sahil. Su sporlarına da oldukça uygun olan bu plajda ücretsiz alanlarda havlunu serebilir, gün batımının muhteşem manzarasını izleyebilirsin.</li>
        <li><strong>Ünye Feneraltı Plajı:</strong> Burası falezlerin ve doğal kaya oluşumlarının arasında yüzmek isteyen macera severlerin yeri. Deniz canlılarını gözlemlemek ve şnorkelle dalış yapmak istiyorsan, Feneraltı'nın kayalık suları seni büyüleyecek.</li>
      </ul>

      <h2>📌 Editörün Özel Notu: Perşembe (Vona) Hattındaki Efsanevi Noktalar</h2>
      <p>Yazıyı hazırlarken Fatsa ile Altınordu arasında kalan, Ordu'nun en bakir koylarına ev sahipliği yapan Perşembe (Sakin Şehir) ilçesini atlamak olmazdı. İşte listede adı geçen ve mutlaka uğraman gereken o büyüleyici ücretsiz yerler:</p>
      <ul>
        <li><strong>Çaka Plajı (Beyaz Kum):</strong> Karadeniz’de olduğuna inanamayacağın, bembeyaz kumları olan bir doğa harikası. Tamamen taşsız, sığ ve berrak.</li>
        <li><strong>Yason Burnu ve Yalancı Yason (Sülü Burnu):</strong> Mitolojik Argonotlar efsanesinin geçtiği, tarihi kilisesiyle ünlü Yason Burnu'nda denize girmek bambaşka bir deneyim. Hemen yanındaki Yalancı Yason (Sülü Burnu) ise taşlık yapısıyla suyun en berrak olduğu yerlerden biri. (Deniz ayakkabını unutma!)</li>
        <li><strong>Hoynat Adası Karşısı:</strong> Türkiye’de tepeli karabataklerin yuva yaptığı nadir yerlerden olan Hoynat Adası’nın hemen karşısındaki küçük koylar, manzaraya karşı yüzmek için harika.</li>
        <li><strong>Katran Kazanı & Çeşmeönü:</strong> Çeşmeönü, korunaklı yapısıyla dalgasız ve sakin bir deniz arayanların ilk adresi. Katran Kazanı ise kayaların dalgalarla aşınmasıyla oluşmuş saklı bir cennet köşesi.</li>
      </ul>

      <p><strong>Menuland Tavsiyesi:</strong> Karadeniz'in sağı solu belli olmaz; yüzerken belediyenin görevlendirdiği cankurtaranların olduğu bölgeleri tercih etmeye ve rüzgarlı günlerde dalgalara karşı dikkatli olmaya özen gösterin. İyi tatiller!</p>
    `
  },
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
