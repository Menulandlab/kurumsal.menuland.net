import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description:
    "Menuland mobil uygulamasının kullanım şartları: hizmetin tanımı, kullanıcı ve işletme sorumlulukları, fikri mülkiyet ve uygulanacak hukuk.",
  alternates: { canonical: "/kullanim-sartlari" },
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Yasal"
        title="Kullanım Şartları"
        description="Yürürlük Tarihi: 17.12.2023"
        breadcrumb={[{ label: "Kullanım Şartları" }]}
      />

      <div className="container-page py-12 sm:py-16">
        <article className="prose prose-stone max-w-3xl prose-headings:tracking-tight prose-headings:text-stone-900 prose-h2:mt-12 prose-a:font-semibold prose-a:text-brand-700 prose-strong:text-stone-900">
          <p>
            Menuland mobil uygulamasını kullanmadan önce lütfen bu Kullanım Şartları’nı dikkatlice okuyunuz. Uygulamayı kullanmanız, bu şartları kabul ettiğiniz anlamına gelir.
          </p>

          <h2>1. Hizmetin Tanımı</h2>
          <p>
            Menuland, kullanıcıların bulundukları şehir ve ilçedeki kafe, restoran, kültürel etkinlik ve yerel işletmeleri keşfetmelerini sağlayan bir şehir rehberi uygulamasıdır. Uygulama, işletmelerin sunduğu içerikleri listelemek, kullanıcıya bilgi sunmak ve bazı promosyonlar hakkında bildirimde bulunmak amacıyla hizmet verir.
          </p>

          <h2>2. Kullanım Koşulları</h2>
          <ul>
            <li>Uygulama ücretsiz olarak kullanılabilir. Ancak işletmeler için ücretli üyelik seçenekleri sunulabilir.</li>
            <li>Kullanıcılar uygulamayı yalnızca yasal amaçlarla kullanmayı kabul eder.</li>
            <li>Uygulama üzerinde yer alan içerikler (metin, görsel, logo, yazılım kodları vb.) Menuland’a veya içerik sağlayıcılara aittir ve izinsiz kopyalanamaz, çoğaltılamaz veya dağıtılamaz.</li>
          </ul>

          <h2>3. Kullanıcı Sorumlulukları</h2>
          <ul>
            <li>Kullanıcılar verdikleri bilgilerin doğru ve güncel olduğunu beyan eder.</li>
            <li>Uygulama üzerinden sağlanan bilgiler yalnızca bilgilendirme amaçlıdır; herhangi bir işletme hakkında doğruluk garantisi verilmez.</li>
            <li>Uygulamada yer alan yönlendirme bağlantılarının (örneğin Google Maps, menü linkleri) çalışabilirliği ilgili işletmelere bağlıdır.</li>
          </ul>

          <h2>4. İşletme Sorumlulukları</h2>
          <ul>
            <li>Menuland üzerinden yayın yapan işletmeler, sundukları içeriklerin (menü, fotoğraf, açıklama vb.) doğruluğundan ve telif hakkına uygunluğundan sorumludur.</li>
            <li>Menuland, işletmelerin verdiği içeriklerin doğruluğunu garanti etmez ancak şikâyet durumunda içeriği yayından kaldırma hakkını saklı tutar.</li>
          </ul>

          <h2>5. Güncellemeler ve Değişiklikler</h2>
          <p>
            Menuland, uygulama üzerinde dilediği zaman değişiklik yapma, hizmeti durdurma veya bu şartları güncelleme hakkına sahiptir. Güncellenen şartlar, uygulama üzerinden yayınlandığı anda geçerli olur.
          </p>

          <h2>6. Fikri Mülkiyet Hakları</h2>
          <p>
            Menuland logosu, tasarımı, yazılımı ve içerikleri 5846 sayılı Fikir ve Sanat Eserleri Kanunu kapsamında korunmaktadır. İzinsiz kullanımı hukuki ve cezai sonuçlar doğurabilir.
          </p>

          <h2>7. Sorumluluk Reddi</h2>
          <p>
            Uygulama üzerinden verilen bilgilerin doğruluğu konusunda azami özen gösterilmekle birlikte, içeriklerin doğruluğu konusunda herhangi bir garanti verilmez. Kullanıcılar bu bilgileri kendi sorumluluklarında kullanır.
          </p>

          <h2>8. Uygulanacak Hukuk ve Yetki</h2>
          <p>
            Bu şartlar Türkiye Cumhuriyeti yasalarına tabidir. Taraflar arasında çıkabilecek uyuşmazlıklarda Ordu Mahkemeleri ve İcra Daireleri yetkilidir.
          </p>

          <h2>9. İletişim</h2>
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
    </>
  );
}
