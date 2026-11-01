import Image from "next/image";
import Link from "next/link";
import { contact, links, whatsappLink } from "@/lib/site";

const columns = [
  {
    title: "Ürün",
    items: [
      { href: "/#ozellikler", label: "Özellikler" },
      { href: "/#fiyatlar", label: "Fiyatlar" },
      { href: "/ozellikler", label: "Tüm özellikler" },
      { href: "/hizmetler", label: "Hizmetler" },
      { href: "/bolgeler", label: "Bölgeler" },
    ],
  },
  {
    title: "Kaynaklar",
    items: [
      { href: "/blog", label: "Blog" },
      { href: "/indir", label: "Mobil uygulama" },
      { href: links.demoMenu, label: "Örnek QR menü" },
      { href: links.panel, label: "İşletme paneli" },
    ],
  },
  {
    title: "Yasal",
    items: [
      { href: "/gizlilik-politikasi", label: "Gizlilik politikası" },
      { href: "/kullanim-sartlari", label: "Kullanım şartları" },
    ],
  },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const className = "inline-flex min-h-9 items-center text-sm text-stone-600 transition-colors hover:text-stone-900";
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="container-page grid gap-12 py-14 lg:grid-cols-[1.3fr_2fr]">
        <div className="max-w-sm">
          <Image src="/img/logo-dark.png" alt="Menuland" width={514} height={143} sizes="120px" className="h-8 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            Restoran, kafe ve barlar için QR menü, Gel-Al sipariş, rezervasyon ve kampanya yönetimi.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <Image
              src="/img/itucekirdek-menuland.png"
              alt="İTÜ Çekirdek"
              width={1773}
              height={1300}
              sizes="80px"
              className="h-11 w-auto object-contain"
            />
            <Image
              src="/img/orduticaretodasi.png"
              alt="Ordu Ticaret ve Sanayi Odası"
              width={1471}
              height={315}
              sizes="150px"
              className="h-7 w-auto object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-[1fr_1fr_1fr_1.35fr]">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-sm font-semibold text-stone-900">{col.title}</h2>
              <ul className="mt-3 space-y-1">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div>
            <h2 className="text-sm font-semibold text-stone-900">İletişim</h2>
            <ul className="mt-3 space-y-1">
              <li>
                <a href={whatsappLink("KRM-ALT")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center text-sm font-medium text-[#0F7A40] hover:underline">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="inline-flex min-h-9 items-center text-sm text-stone-600 hover:text-stone-900">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.supportEmail}`} className="inline-flex min-h-9 items-center text-sm text-stone-600 hover:text-stone-900">
                  {contact.supportEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-stone-200">
        <p className="container-page py-6 text-sm text-stone-500">
          © {new Date().getFullYear()} {contact.company}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
