"use client";

// Özellikler bölümündeki etkileşimli küçük gösterimler. Bölümün geri kalanı sunucu bileşeni.
import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { Percent } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Serpme kahvaltı (2 kişilik)", from: 520, to: 550 },
  { name: "Menemen", from: 95, to: 100 },
  { name: "Taze portakal suyu", from: 70, to: 75 },
];

// Fiyat güncelleme gösterimi: düğmeye basınca fiyatlar yeni değerine kayar.
export function PriceUpdateDemo() {
  const [updated, setUpdated] = useState(false);
  return (
    <div className="mx-6 mb-6 rounded-2xl border border-stone-200 bg-stone-50 p-4 sm:mx-7">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-stone-900">Kahvaltı</p>
        <button
          type="button"
          onClick={() => setUpdated((u) => !u)}
          aria-pressed={updated}
          className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-stone-900 px-3 text-xs font-semibold text-white transition-colors hover:bg-stone-800"
        >
          <Percent className="size-3.5" aria-hidden />
          {updated ? "Geri al" : "Fiyatlara %5 ekle"}
        </button>
      </div>
      <ul className="mt-3 divide-y divide-stone-200">
        {menuItems.map((item) => (
          <li key={item.name} className="flex items-center justify-between py-2.5 text-sm">
            <span className="text-stone-700">{item.name}</span>
            <span className="relative h-5 w-16 overflow-hidden text-right font-semibold tabular-nums text-stone-900">
              <AnimatePresence initial={false} mode="popLayout">
                <m.span
                  key={updated ? "to" : "from"}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  {updated ? item.to : item.from} ₺
                </m.span>
              </AnimatePresence>
            </span>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="mt-2 h-4 text-xs font-medium text-emerald-700">
        {updated ? "Tüm masalardaki QR menüde güncellendi" : ""}
      </p>
    </div>
  );
}

export function ViewsChart() {
  return (
    <div className="flex h-28 items-end gap-2" aria-hidden>
      {[38, 52, 45, 70, 64, 92, 80].map((h, i) => (
        <m.div
          key={i}
          initial={{ height: "8%" }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className={cn("flex-1 rounded-t-md", i === 5 ? "bg-brand-500" : "bg-brand-200")}
        />
      ))}
    </div>
  );
}
