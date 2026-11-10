"use client";

import { CEREZ_TERCIHLERI_OLAYI } from "@/lib/cerezTercihi";

/** Alt bilgideki "Çerez tercihleri" bağlantısı: çerez penceresini tercih ayarlarıyla açar. */
export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(CEREZ_TERCIHLERI_OLAYI))}
      className="inline-flex min-h-9 items-center text-left text-sm text-stone-600 transition-colors hover:text-stone-900"
    >
      Çerez tercihleri
    </button>
  );
}
