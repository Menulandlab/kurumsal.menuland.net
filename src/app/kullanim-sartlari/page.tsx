// src/app/kullanim-sartlari/page.tsx

export default function TermsOfServicePage() {
  return (
    <div className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-6">
        <article className="prose lg:prose-xl max-w-4xl mx-auto">
          <h1>Kullanım Şartları</h1>
          <p className="lead !text-sm !text-gray-500">
            Yürürlük Tarihi: 17.12.2023
          </p>
          <p>
            Menuland mobil uygulamasını kullanmadan önce lütfen bu Kullanım Şartları’nı dikkatlice okuyunuz. Uygulamayı kullanmanız, bu şartları kabul ettiğiniz anlamına gelir.
          </p>

          <h2>1. HİZMETİN TANIMI</h2>
          <p>
            Menuland, kullanıcıların bulundukları şehir ve ilçedeki kafe, restoran, kültürel etkinlik ve yerel işletmeleri keşfetmelerini sağlayan bir şehir rehberi uygulamasıdır. Uygulama, işletmelerin sunduğu içerikleri listelemek, kullanıcıya bilgi sunmak ve bazı promosyonlar hakkında bildirimde bulunmak amacıyla hizmet verir.
          </p>

          <h2>2. KULLANIM KOŞULLARI</h2>
          <ul>
            <li>Uygulama ücretsiz olarak kullanılabilir. Ancak işletmeler için ücretli üyelik seçenekleri sunulabilir.</li>
            <li>Kullanıcılar uygulamayı yalnızca yasal amaçlarla kullanmayı kabul eder.</li>
            <li>Uygulama üzerinde yer alan içerikler (metin, görsel, logo, yazılım kodları vb.) Menuland’a veya içerik sağlayıcılara aittir ve izinsiz kopyalanamaz, çoğaltılamaz veya dağıtılamaz.</li>
          </ul>

          <h2>3. KULLANICI SORUMLULUKLARI</h2>
          <ul>
            <li>Kullanıcılar verdikleri bilgilerin doğru ve güncel olduğunu beyan eder.</li>
            <li>Uygulama üzerinden sağlanan bilgiler yalnızca bilgilendirme amaçlıdır; herhangi bir işletme hakkında doğruluk garantisi verilmez.</li>
            <li>Uygulamada yer alan yönlendirme bağlantılarının (örneğin Google Maps, menü linkleri) çalışabilirliği ilgili işletmelere bağlıdır.</li>
          </ul>

          <h2>4. İŞLETME SORUMLULUKLARI</h2>
          <ul>
            <li>Menuland üzerinden yayın yapan işletmeler, sundukları içeriklerin (menü, fotoğraf, açıklama vb.) doğruluğundan ve telif hakkına uygunluğundan sorumludur.</li>
            <li>Menuland, işletmelerin verdiği içeriklerin doğruluğunu garanti etmez ancak şikâyet durumunda içeriği yayından kaldırma hakkını saklı tutar.</li>
          </ul>

          <h2>5. GÜNCELLEMELER VE DEĞİŞİKLİKLER</h2>
          <p>
            Menuland, uygulama üzerinde dilediği zaman değişiklik yapma, hizmeti durdurma veya bu şartları güncelleme hakkına sahiptir. Güncellenen şartlar, uygulama üzerinden yayınlandığı anda geçerli olur.
          </p>

          <h2>6. FİKRİ MÜLKİYET HAKLARI</h2>
          <p>
            Menuland logosu, tasarımı, yazılımı ve içerikleri 5846 sayılı Fikir ve Sanat Eserleri Kanunu kapsamında korunmaktadır. İzinsiz kullanımı hukuki ve cezai sonuçlar doğurabilir.
          </p>

          <h2>7. SORUMLULUK REDDİ</h2>
          <p>
            Uygulama üzerinden verilen bilgilerin doğruluğu konusunda azami özen gösterilmekle birlikte, içeriklerin doğruluğu konusunda herhangi bir garanti verilmez. Kullanıcılar bu bilgileri kendi sorumluluklarında kullanır.
          </p>

          <h2>8. UYGULANACAK HUKUK VE YETKİ</h2>
          <p>
            Bu şartlar Türkiye Cumhuriyeti yasalarına tabidir. Taraflar arasında çıkabilecek uyuşmazlıklarda Ordu Mahkemeleri ve İcra Daireleri yetkilidir.
          </p>

          <h2>9. İLETİŞİM</h2>
          <p>
            Herhangi bir soru, görüş ya da öneriniz için bizimle şu adreslerden iletişime geçebilirsiniz:
          </p>
          <p>
             <a href="mailto:info@menuland.net">info@menuland.net</a>
            <br />
             <a href="https://www.menuland.net" target="_blank" rel="noopener noreferrer">https://www.menuland.net</a>
          </p>

        </article>
      </div>
    </div>
  );
}