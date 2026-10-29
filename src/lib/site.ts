// Sitenin tek bilgi kaynağı: adresler, iletişim, fiyatlar ve sitede gösterilen sayılar.
// Sayıları değiştirirken kaynağını yanındaki yoruma yazın; sitede yalnızca doğrulanabilen sayılar yer alır.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kurumsal.menuland.net";

export const links = {
  panel: "https://isletme.menuland.net",
  demoMenu: "https://menulandcafe.menuland.net",
  appStore: "https://apps.apple.com/tr/app/menuland/id6618147785?l=tr",
  googlePlay: "https://play.google.com/store/apps/details?id=com.mycompany.menuland&pli=1",
  whatsapp:
    "https://wa.me/908508401302?text=Merhaba,%20Menuland%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
};

export const contact = {
  phone: "0850 840 13 02",
  phoneHref: "tel:+908508401302",
  supportEmail: "destek@menuland.net",
  infoEmail: "info@menuland.net",
  company: "MLD Yazılım",
};

// Kaynaklar: App Store TR herkese açık puanı (29.10.2026, 13 değerlendirme);
// işletme ve QR menü sayıları menuland_service veritabanı (17.10.2026).
export const stats = {
  appStoreRating: 5.0,
  appStoreRatingCount: 13,
  orduVenues: 340,
  qrMenuViews: 18000,
};

export type Plan = {
  id: "temel" | "premium";
  name: string;
  description: string;
  monthly: number;
  yearly: number;
  chainMonthly: number;
  chainYearly: number;
  cta: string;
  highlighted?: boolean;
  features: string[];
};

export const basicFeatures = [
  "Sınırsız kategori ve ürün",
  "QR kod oluşturucu",
  "Temel istatistikler",
  "İşletme bilgileri yönetimi",
  "7/24 e-posta desteği",
];

export const premiumFeatures = [
  "Rezervasyon yönetimi",
  "Kampanya oluşturma",
  "Etkinlik yönetimi",
  "Müşteri yorumları ve analizi",
  "Garson çağırma bildirimleri",
  "Gelişmiş raporlama",
  "Önceliklendirilmiş destek",
];

export const plans: Plan[] = [
  {
    id: "temel",
    name: "Temel",
    description: "Dijital menüye geçmek isteyen işletmeler için başlangıç paketi.",
    monthly: 349,
    yearly: 279,
    chainMonthly: 279,
    chainYearly: 223,
    cta: "Temel ile başlayın",
    features: basicFeatures,
  },
  {
    id: "premium",
    name: "Premium",
    description: "Rezervasyon, kampanya ve müşteri etkileşimini tek yerden yönetmek isteyenler için.",
    monthly: 649,
    yearly: 519,
    chainMonthly: 519,
    chainYearly: 415,
    cta: "Premium ile başlayın",
    highlighted: true,
    features: ["Temel paketteki her şey", ...premiumFeatures],
  },
];

export const formatTRY = (value: number) =>
  new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(value) + " ₺";
