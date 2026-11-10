"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";
import { CEREZ_TERCIHLERI_OLAYI, kayitliTercih, tercihiKaydet, useCerezTercihi } from "@/lib/cerezTercihi";

/**
 * Çerez onayı (KVKK çerez rehberi): zorunlu çerezler her zaman çalışır; Google Analytics ve Meta pikseli
 * yalnızca ziyaretçi onay verirse yüklenir. Tercih tarayıcıda saklanır ve alt bilgideki
 * "Çerez tercihleri" bağlantısından istenildiği zaman değiştirilebilir.
 */

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-DVXKCWSF0W";
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1971172710431675";

/** Onay geri alındığında Google Analytics ve Meta'nın bu alan adında bıraktığı çerezleri siler. */
function cerezleriSil(analiz: boolean, reklam: boolean) {
  const adlar = document.cookie
    .split(";")
    .map((cerez) => cerez.trim().split("=")[0])
    .filter(
      (ad) =>
        (analiz && (ad === "_ga" || ad.startsWith("_ga_") || ad === "_gid" || ad === "_gat")) ||
        (reklam && (ad === "_fbp" || ad === "_fbc"))
    );
  const host = window.location.hostname;
  const alanlar = new Set(["", host, `.${host}`]);
  if (host.endsWith("menuland.net")) alanlar.add(".menuland.net");
  for (const ad of adlar) {
    for (const alan of alanlar) {
      document.cookie = `${ad}=; Max-Age=0; path=/${alan ? `; domain=${alan}` : ""}`;
    }
  }
}

const bosAbone = () => () => {};

export default function CookieConsent() {
  const { hazir, tercih } = useCerezTercihi();
  // Ölçüm yalnızca gerçek alan adında yapılır; yerel geliştirme ve önizleme adresleri verileri kirletmez.
  const izinliAlan = useSyncExternalStore(
    bosAbone,
    () => /(^|\.)menuland\.net$/.test(window.location.hostname),
    () => false
  );

  const [ayarlarAcik, setAyarlarAcik] = useState(false);
  const [taslakAnaliz, setTaslakAnaliz] = useState(false);
  const [taslakReklam, setTaslakReklam] = useState(false);

  useEffect(() => {
    const ac = () => {
      const mevcut = kayitliTercih();
      setTaslakAnaliz(mevcut?.analiz ?? false);
      setTaslakReklam(mevcut?.reklam ?? false);
      setAyarlarAcik(true);
    };
    window.addEventListener(CEREZ_TERCIHLERI_OLAYI, ac);
    return () => window.removeEventListener(CEREZ_TERCIHLERI_OLAYI, ac);
  }, []);

  const kaydet = (analiz: boolean, reklam: boolean) => {
    const onceki = tercih;
    tercihiKaydet(analiz, reklam);
    setAyarlarAcik(false);
    // Yüklenmiş bir betik sayfadan sökülemez; daha önce verilen onay geri alındıysa sayfa yenilenir.
    const analizGeriAlindi = Boolean(onceki?.analiz && !analiz);
    const reklamGeriAlindi = Boolean(onceki?.reklam && !reklam);
    if (analizGeriAlindi || reklamGeriAlindi) {
      cerezleriSil(analizGeriAlindi, reklamGeriAlindi);
      window.location.reload();
    }
  };

  const afisGoster = hazir && !tercih && !ayarlarAcik;
  const kart =
    "fixed inset-x-3 bottom-3 z-[60] rounded-2xl border border-[#FDCEAC] bg-white p-5 shadow-[0_12px_40px_rgba(214,63,0,0.14)] sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-md";
  const ikincilDugme =
    "min-h-11 rounded-xl bg-[#FDCEAC] px-4 py-2.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-[#fbbf94]";
  const birincilDugme =
    "min-h-11 rounded-xl bg-[#D63F00] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#AD3300]";

  return (
    <>
      {tercih?.analiz && izinliAlan && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
      {tercih?.reklam && izinliAlan && (
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {afisGoster && (
        <section role="dialog" aria-labelledby="cerez-baslik" aria-describedby="cerez-metin" className={kart}>
          <h2 id="cerez-baslik" className="text-base font-bold text-stone-900">
            Çerez tercihiniz
          </h2>
          <p id="cerez-metin" className="mt-2 text-sm leading-relaxed text-stone-600">
            Sitenin çalışması için gerekli çerezleri her zaman kullanırız. Ziyaretleri ölçmek için Google Analytics,
            reklamlarımızın etkisini ölçmek için Meta (Facebook ve Instagram) pikselini ise yalnızca onay verirseniz
            kullanırız. Ayrıntılar{" "}
            <Link href="/gizlilik-politikasi" className="font-semibold text-[#D63F00] underline underline-offset-2">
              Gizlilik politikası
            </Link>
            &apos;nda.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button type="button" onClick={() => kaydet(false, false)} className={ikincilDugme}>
              Reddet
            </button>
            <button type="button" onClick={() => kaydet(true, true)} className={birincilDugme}>
              Kabul et
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              setTaslakAnaliz(false);
              setTaslakReklam(false);
              setAyarlarAcik(true);
            }}
            className="mt-2 min-h-9 w-full text-center text-sm font-medium text-stone-600 underline underline-offset-2 hover:text-stone-900"
          >
            Tercihleri ayarla
          </button>
        </section>
      )}

      {ayarlarAcik && (
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="cerez-ayar-baslik"
          className={`${kart} max-h-[85vh] overflow-y-auto`}
        >
          <div className="flex items-start justify-between gap-3">
            <h2 id="cerez-ayar-baslik" className="text-base font-bold text-stone-900">
              Çerez tercihleri
            </h2>
            {tercih && (
              <button
                type="button"
                onClick={() => setAyarlarAcik(false)}
                aria-label="Kapat"
                className="-mr-1 -mt-1 rounded-lg px-2 py-1 text-lg leading-none text-stone-600 hover:text-stone-900"
              >
                ×
              </button>
            )}
          </div>

          <ul className="mt-3 divide-y divide-[#FDCEAC]/60">
            <li className="flex items-start justify-between gap-4 py-3">
              <div>
                <p className="text-sm font-semibold text-stone-900">Zorunlu çerezler</p>
                <p className="mt-0.5 text-xs leading-relaxed text-stone-600">
                  Sitenin güvenli ve doğru çalışması için gereklidir. Kapatılamaz.
                </p>
              </div>
              <span className="mt-0.5 shrink-0 text-xs font-semibold text-stone-600">Her zaman açık</span>
            </li>
            <li className="flex items-start justify-between gap-4 py-3">
              <label htmlFor="cerez-analiz" className="cursor-pointer">
                <span className="block text-sm font-semibold text-stone-900">Analiz çerezleri</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-stone-600">
                  Google Analytics ile hangi sayfaların ziyaret edildiğini ölçeriz.
                </span>
              </label>
              <input
                id="cerez-analiz"
                type="checkbox"
                role="switch"
                checked={taslakAnaliz}
                onChange={(e) => setTaslakAnaliz(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#D63F00]"
              />
            </li>
            <li className="flex items-start justify-between gap-4 py-3">
              <label htmlFor="cerez-reklam" className="cursor-pointer">
                <span className="block text-sm font-semibold text-stone-900">Reklam çerezleri</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-stone-600">
                  Meta pikseli, Facebook ve Instagram reklamlarımızın etkisini ölçmek için çerez kullanır.
                </span>
              </label>
              <input
                id="cerez-reklam"
                type="checkbox"
                role="switch"
                checked={taslakReklam}
                onChange={(e) => setTaslakReklam(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#D63F00]"
              />
            </li>
          </ul>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button type="button" onClick={() => kaydet(taslakAnaliz, taslakReklam)} className={ikincilDugme}>
              Seçimi kaydet
            </button>
            <button type="button" onClick={() => kaydet(true, true)} className={birincilDugme}>
              Tümünü kabul et
            </button>
          </div>
        </section>
      )}
    </>
  );
}
