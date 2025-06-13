// src/app/gizlilik-politikasi/page.tsx

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-6">
        {/* prose sınıfı, içindeki tüm metin etiketlerini otomatik olarak biçimlendirir */}
        <article className="prose lg:prose-xl max-w-4xl mx-auto">
          <h1>Gizlilik Politikası</h1>
          <p className="lead !text-sm !text-gray-500">
            Yürürlük Tarihi: 17.12.2023
            <br />
            Son Güncelleme: 02.02.2025
          </p>
          <p>
            Menuland (“Uygulama”, “Biz”, “Bize”, “Bizim”), kullanıcıların restoranlar, kafeler ve şehir rehberi özelliklerinden faydalanmasını sağlayan bir mobil uygulamadır. Kullanıcılarımızın gizliliği bizim için önemlidir ve bu gizlilik politikası, Menuland’in kullanıcı verilerini nasıl topladığını, kullandığını, paylaştığını ve koruduğunu açıklar.
          </p>
          <p>
            Bu politikayı dikkatlice okumanızı öneririz. Uygulamamızı kullanarak bu gizlilik politikasını kabul etmiş olursunuz.
          </p>

          <h2>1. Toplanan Bilgiler</h2>
          <p>Menuland, kullanıcılarından aşağıdaki türde bilgileri toplayabilir:</p>
          
          <h3>1.1. Kullanıcı Tarafından Sağlanan Bilgiler</h3>
          <ul>
            <li>Ad, soyad (eğer kullanıcı paylaşırsa)</li>
            <li>E-posta adresi (iletişim veya destek talepleri için)</li>
            <li>Konum bilgisi (isteğe bağlı, kullanıcı yakındaki işletmeleri görmek istediğinde)</li>
            <li>Uygulama içi tercihler (favori mekanlar, geçmiş aramalar vb.)</li>
          </ul>

          <h3>1.2. Otomatik Olarak Toplanan Bilgiler</h3>
          <ul>
            <li>IP adresi</li>
            <li>Cihaz bilgileri (model, işletim sistemi, uygulama sürümü vb.)</li>
            <li>Çerezler ve benzer izleme teknolojileri</li>
            <li>Uygulama kullanım verileri (ziyaret edilen sayfalar, etkileşimler vb.)</li>
          </ul>

          <h3>1.3. Üçüncü Taraf Kaynaklardan Alınan Bilgiler</h3>
          <ul>
            <li>Google Haritalar ve diğer harita servisleri aracılığıyla işletme konumları</li>
            <li>Reklam ve analiz hizmetleri sunan üçüncü taraflardan elde edilen kullanım verileri</li>
          </ul>

          <h2>2. Bilgilerin Kullanımı</h2>
          <p>Menuland, topladığı bilgileri aşağıdaki amaçlarla kullanır:</p>
          <ul>
            <li>Uygulamanın temel işlevlerini sağlamak ve geliştirmek</li>
            <li>Kullanıcılara kişiselleştirilmiş içerikler sunmak</li>
            <li>Kullanıcı geri bildirimlerini değerlendirmek ve destek sağlamak</li>
            <li>Güvenlik, dolandırıcılığı önleme ve yasal yükümlülükleri yerine getirme</li>
          </ul>

          <h2>3. Bilgi Paylaşımı ve Üçüncü Taraflarla Paylaşım</h2>
          <p>Menuland, kullanıcı bilgilerini üçüncü taraflarla paylaşmaz, satmaz veya kiralamaz. Ancak aşağıdaki durumlarda veri paylaşımı yapılabilir:</p>
          <ul>
            <li><strong>Yasal Gereklilikler:</strong> Yetkili makamların talebiyle yasal yükümlülüklerin yerine getirilmesi</li>
            <li><strong>Hizmet Sağlayıcılar:</strong> Analiz, harita hizmetleri ve sunucu barındırma gibi hizmetleri sağlayan üçüncü taraflarla paylaşım</li>
            <li><strong>Reklam ve Analiz Ortakları:</strong> Kullanıcı deneyimini iyileştirmek için anonimleştirilmiş verilerin paylaşımı</li>
          </ul>

          <h2>4. Harici Bağlantılar ve Menü Linkleri</h2>
          <p>
            Menuland, işletmelerin menülerini ve web sitelerini kullanıcılara sunmak için harici bağlantılar sağlayabilir. İşletme sayfasındaki “Menü” butonuna tıklanıldığında, işletmenin kendi web sitesine yönlendirilirsiniz.
          </p>
          <p>
            Bu bağlantılar, kullanıcıların telefonlarında bulunan harici tarayıcılarda açılır ve Menuland, bu harici web sitelerinin içeriğinden, güvenliğinden veya çerez politikalarından sorumlu değildir. Kullanıcılar, harici siteleri ziyaret etmeden önce ilgili gizlilik politikalarını incelemelidir.
          </p>

          <h2>5. Uluslararası Veri Aktarımları</h2>
          <p>
            Menuland, Türkiye dışında faaliyet gösteren kullanıcılarına da hizmet sunabilir. Kullanıcı bilgileri, hizmet sağlayıcılarımız tarafından Türkiye dışındaki sunucularda işlenebilir. Bu durum, Genel Veri Koruma Yönetmeliği (GDPR) ve diğer uluslararası gizlilik yasalarına uygun olarak gerçekleştirilir.
          </p>
          <p>
            Avrupa Ekonomik Alanı (EEA) veya diğer veri koruma düzenlemeleri olan ülkelerde bulunan kullanıcılar için, kişisel veriler yalnızca uygun güvenlik önlemleri alınarak aktarılır.
          </p>

          <h2>6. Veri Güvenliği</h2>
          <p>Menuland, kullanıcı verilerinin güvenliğini sağlamak için aşağıdaki önlemleri alır:</p>
          <ul>
            <li>Verilerin şifrelenmesi</li>
            <li>Yetkisiz erişimi önlemek için güvenlik duvarları ve kimlik doğrulama sistemleri</li>
            <li>Erişim kontrolleri ile sadece yetkili personelin verilere ulaşmasını sağlama</li>
          </ul>
          <p>Ancak, internet üzerinden yapılan veri iletimlerinin %100 güvenli olmadığını unutmamanız önemlidir.</p>

          <h2>7. Çerezler ve Takip Teknolojileri</h2>
          <p>
            Menuland, kullanıcı deneyimini geliştirmek için çerezler ve benzeri takip teknolojilerini kullanır. Kullanıcılar tarayıcı ayarlarından çerezleri devre dışı bırakabilirler, ancak bu durumda bazı hizmetler düzgün çalışmayabilir.
          </p>

          <h2>8. Kullanıcı Hakları</h2>
          <p>Menuland, kullanıcıların kişisel verilerine erişim, düzeltme, silme veya işlenmesini kısıtlama hakkını tanır. Kullanıcılar aşağıdaki haklara sahiptir:</p>
          <ul>
            <li>Kendi verilerine erişme ve bilgi talep etme</li>
            <li>Yanlış veya eksik verileri düzeltme</li>
            <li>Verilerini silme (yasal gereklilikler hariç)</li>
            <li>İşlenmesini kısıtlama veya itiraz etme</li>
          </ul>
          <p>
            Bu haklardan herhangi birini kullanmak için bizimle iletişime geçebilirsiniz: <a href="mailto:info@menuland.net">info@menuland.net</a>
          </p>

          <h2>9. Çocukların Gizliliği</h2>
          <p>
            Menuland, 13 yaş altındaki çocuklardan bilerek kişisel veri toplamaz. Eğer bir ebeveyn veya vasi, çocuğunun kişisel bilgilerinin toplandığını düşünüyorsa, bizimle iletişime geçerek bu bilgilerin silinmesini talep edebilir.
          </p>

          <h2>10. Gizlilik Politikası Güncellemeleri</h2>
          <p>
            Bu gizlilik politikası zaman zaman güncellenebilir. Güncellemeler yapıldığında, kullanıcılar uygulama içinde veya e-posta yoluyla bilgilendirilecektir.
          </p>

          <h2>11. İletişim Bilgileri</h2>
          <p>
            Menuland gizlilik politikası hakkında sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:
            <br />
            E-posta: <a href="mailto:info@menuland.net">info@menuland.net</a>
          </p>
        </article>
      </div>
    </div>
  );
}