# Menuland Kurumsal — Tasarım Sistemi (MASTER)

kurumsal.menuland.net için tek doğruluk kaynağı. Sayfaya özel kural gerekirse `pages/<sayfa>.md` açılır; o dosya bu belgeyi geçersiz kılar.

Kaynak: UI UX Pro Max veri tabloları (products, ui-reasoning, colors, typography, landing, styles) — "Restaurant/Food Service" ve "B2B Service" profillerinin birleşimi, 29.10.2026.

## Konumlandırma

- **Hedef kitle:** restoran, kafe ve bar sahipleri (B2B). Tüketici uygulaması yalnızca işletmeye faydası üzerinden anlatılır; indirme sayfası `/indir`.
- **Sayfa kalıbı:** Hero (değer önerisi + ürün görseli) → güven şeridi (logolar, doğrulanmış sayılar) → özellikler (bento) → nasıl çalışır (3 adım) → uygulama erişimi → tasarruf hesaplayıcı → şeffaf fiyatlar → SSS → kapanış çağrısı.
- **Stil:** İsviçre tarzı sade yapı + sıcak, blok vurgular + ölçülü hareket.
- **Kaçınılacaklar:** mor/pembe "yapay zekâ" degradeleri, emoji ikon, gizli referanslar, aşırı animasyon, yanıp sönen CTA, JavaScript yüklenene kadar görünmeyen ilk ekran, doğrulanamayan sayı ve uydurma müşteri yorumu.

## Renk

| Belirteç | Değer | Kullanım |
|---|---|---|
| brand-500 | `#FF4D00` | Logo rengi; büyük başlık vurgusu, ikon, süs |
| brand-600 | `#D63F00` | Beyaz yazılı butonlar ve bağlantılar (beyazla 4.6:1) |
| brand-700 | `#AD3300` | Hover, küçük vurgulu metin |
| brand-50/100 | `#FFF4ED` / `#FFE4D3` | Arka plan tonları, ikon zeminleri |
| foreground | `#1C1917` (stone-900) | Başlık ve gövde metni |
| muted-foreground | `#57534E` (stone-600) | İkincil metin (en açık metin tonu bu; stone-400 metinde kullanılmaz) |
| border | `#E7E5E4` (stone-200) | Kart ve ayırıcılar |
| koyu bölüm | stone-950 | "Nasıl çalışır", hesaplayıcı sonucu, kapanış çağrısı |

Site yalnızca açık temadadır; `dark:` sınıfları `.dark` sınıfına bağlıdır ve kullanılmaz.

## Tipografi

- **Yazı tipi:** Plus Jakarta Sans (latin + latin-ext, Türkçe karakterler için şart), `--font-jakarta`.
- Başlıklar `font-extrabold tracking-tight`, `text-wrap: balance`. H1 2.5rem → 4rem; H2 1.875rem → 2.75rem.
- Gövde 16–18px, satır yüksekliği ~1.6.

## Bileşenler

- `CtaLink` (src/components/site/cta-link.tsx): primary / dark / outline / ghost / light / whatsapp; md=44px, lg=48px yükseklik.
- `SectionHeading`, `Reveal` (src/components/site/section.tsx), `PageHeader` (alt sayfa üstü).
- Magic UI: NumberTicker (sunucuda son değer basılır), Marquee (aria-hidden + sr-only liste), Iphone (next/image), BorderBeam (önerilen paket), AnimatedShinyText.
- Aceternity: Spotlight (kapanış bölümü, sıcak ton).
- shadcn/ui (Base UI): Accordion, Sheet (mobil menü).

## Hareket

- Süreler 200–600ms, `ease: [0.22, 1, 0.36, 1]`.
- Ekran altı içerik `Reveal` ile bir kez belirir; ilk ekran içeriği her zaman görünür başlar.
- `MotionConfig reducedMotion="user"` + CSS'te `prefers-reduced-motion` ile sonsuz döngüler (marquee, parıltı) durur.

## İçerik kuralları

- Sayılar yalnızca `src/lib/site.ts` → `stats` içinden gelir ve kaynağı yorumda yazılıdır.
- Mevzuat için "%100 uyumlu" denmez; "fiyat, 14 alerjen, kalori ve gramaj alanları" gibi ürün gerçeği yazılır.
- Müşteri yorumu yalnızca izinli, işletme adıyla birlikte eklenir.
