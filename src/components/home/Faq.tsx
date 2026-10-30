import { Disclosure } from "@/components/site/disclosure";
import { Reveal, SectionHeading } from "@/components/site/section";
import { contact } from "@/lib/site";

export const faqs = [
  {
    q: "Menuland nedir, işletmeme ne sağlar?",
    a: "Menuland; restoran, kafe ve barların menüsünü QR menüye taşıyan, Gel-Al siparişi, rezervasyonu ve kampanyaları tek panelden yönetmeyi sağlayan bir işletme yazılımıdır. İşletmeniz ayrıca Menuland mobil uygulamasında da listelenir.",
  },
  {
    q: "Fiyat etiketi ve alerjen düzenlemesine uygun mu?",
    a: "Menuland menüsünde her ürün için fiyat, 14 alerjen uyarısı, kalori ve porsiyon gramajı alanları bulunur. Bu bilgileri girdiğinizde müşterileriniz masada QR kodu okutarak hepsini görebilir.",
  },
  {
    q: "Müşterilerimin uygulama indirmesi gerekiyor mu?",
    a: "Hayır. Masadaki QR kodu okutan müşteri, menüyü telefonunun kamerası veya tarayıcısıyla doğrudan açar.",
  },
  {
    q: "Masalara özel QR kodu nasıl hazırlarım?",
    a: "Paneldeki QR kod bölümünden masa sayınıza göre (Masa 1, Teras 4, Bahçe 12 gibi) kodlar üretip PDF veya PNG olarak indirebilir, istediğiniz matbaada bastırabilirsiniz.",
  },
  {
    q: "Fiyatları ve tükenen ürünleri anında değiştirebilir miyim?",
    a: "Evet. Fiyatları tek tek veya toplu yüzde artış/indirimle güncelleyebilir, tükenen ürünü tek tıkla gizleyip yeniden açabilirsiniz. Değişiklik tüm QR menülerde hemen görünür.",
  },
  {
    q: "Gel-Al siparişleri bana nasıl ulaşır?",
    a: "Müşteri uygulamadan sipariş verdiğinde açık olan panel ekranınızda sesli bildirim çalar. Siparişi onaylayıp tahmini hazırlık süresini belirlersiniz.",
  },
  {
    q: "PuanLand nedir?",
    a: "PuanLand, Menuland uygulamasının sadakat puanıdır. Müşteriler yorum, rezervasyon gibi işlemlerle puan kazanır ve puanlarını işletmelerin kampanyalarında kullanır.",
  },
  {
    q: "Temel ve Premium paket arasındaki fark nedir?",
    a: "Temel paket (349 ₺/ay) sınırsız ürün, QR menü ve temel istatistikleri içerir. Premium paket (649 ₺/ay) bunlara ek olarak rezervasyon, kampanya ve etkinlik yönetimi, garson çağırma bildirimleri, gelişmiş raporlama ve öncelikli destek sunar.",
  },
  {
    q: "Yıllık ödemede indirim var mı?",
    a: "Evet, yıllık ödemede %20 indirim uygulanır. Temel paket yıllık 3.350 ₺ (aylık 279 ₺'ye denk), Premium paket yıllık 6.230 ₺ (aylık 519 ₺'ye denk) olarak tek seferde ödenir.",
  },
  {
    q: "Taahhüt var mı, nasıl iptal ederim?",
    a: "Taahhüt yok. Aboneliğinizi istediğiniz zaman iptal edebilirsiniz; ödediğiniz dönemin sonuna kadar tüm özellikleri kullanmaya devam edersiniz.",
  },
];

export default function Faq() {
  return (
    <section id="sss" aria-labelledby="sss-baslik" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="sss-baslik"
            align="left"
            eyebrow="Sıkça sorulan sorular"
            title="Aklınıza takılanlar"
            description={
              <>
                Burada cevabını bulamadığınız her soru için{" "}
                <a href={`mailto:${contact.supportEmail}`} className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800">
                  {contact.supportEmail}
                </a>{" "}
                adresine yazabilirsiniz.
              </>
            }
          />
        </div>
        <Reveal>
          <div className="divide-y divide-stone-200 rounded-3xl border border-stone-200 bg-white px-6 sm:px-8">
            {faqs.map((f) => (
              <Disclosure key={f.q} summary={f.q} name="sss">
                <p className="pb-5 text-[15px] leading-relaxed text-stone-600">{f.a}</p>
              </Disclosure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
