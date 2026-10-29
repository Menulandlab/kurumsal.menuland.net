"use client";

import { useId, useState } from "react";
import { Reveal, SectionHeading } from "@/components/site/section";
import { CtaLink } from "@/components/site/cta-link";
import { formatTRY, links, plans } from "@/lib/site";
import { cn } from "@/lib/utils";

// Varsayım: lamine/ciltli menünün masa başına baskı maliyeti ortalama 140 ₺ (eski sitedeki hesapla aynı).
const PRINT_COST_PER_TABLE = 140;

function Slider({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-sm font-semibold text-stone-800">
          {label}
        </label>
        <output htmlFor={id} className="shrink-0 rounded-lg bg-brand-50 px-2.5 py-1 text-sm font-bold whitespace-nowrap text-brand-700 tabular-nums ring-1 ring-brand-100">
          {value} {unit}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full accent-brand-600"
        style={{ background: `linear-gradient(to right, var(--color-brand-500) ${pct}%, var(--color-stone-200) ${pct}%)` }}
      />
      <div className="mt-1.5 flex justify-between text-xs text-stone-500">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

export default function RoiCalculator() {
  const [tables, setTables] = useState(25);
  const [updates, setUpdates] = useState(4);
  const [planId, setPlanId] = useState<"temel" | "premium">("temel");

  const plan = plans.find((p) => p.id === planId)!;
  const paperCost = tables * PRINT_COST_PER_TABLE * updates;
  const menulandCost = plan.monthly * 12;
  const savings = Math.max(0, paperCost - menulandCost);

  return (
    <section id="tasarruf" aria-labelledby="tasarruf-baslik" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="tasarruf-baslik"
          eyebrow="Tasarruf hesaplayıcı"
          title="Menü bastırmak yerine bir kez kurun"
          description="Fiyat her değiştiğinde menüleri yeniden bastırmak yerine sabit bir aylık ücret ödeyin. Masa sayınız artsa da ücret değişmez."
        />

        <Reveal className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_24px_60px_-30px_rgba(28,25,23,0.25)] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8 p-6 sm:p-10">
            <fieldset>
              <legend className="text-sm font-semibold text-stone-800">Karşılaştırılacak paket</legend>
              <div className="mt-3 grid grid-cols-2 gap-2 rounded-xl bg-stone-100 p-1">
                {plans.map((p) => (
                  <label
                    key={p.id}
                    className={cn(
                      "flex min-h-11 cursor-pointer items-center justify-center rounded-lg text-sm font-semibold transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand-500",
                      planId === p.id ? "bg-white text-stone-900 shadow-sm" : "text-stone-600 hover:text-stone-900"
                    )}
                  >
                    <input
                      type="radio"
                      name="roi-plan"
                      value={p.id}
                      checked={planId === p.id}
                      onChange={() => setPlanId(p.id)}
                      className="sr-only"
                    />
                    {p.name} · {formatTRY(p.monthly)}/ay
                  </label>
                ))}
              </div>
            </fieldset>

            <Slider label="Masa sayınız" value={tables} min={8} max={100} step={2} unit="masa" onChange={setTables} />
            <Slider
              label="Yılda kaç kez menü bastırıyorsunuz?"
              value={updates}
              min={1}
              max={12}
              step={1}
              unit="kez"
              onChange={setUpdates}
            />
            <p className="text-xs leading-relaxed text-stone-500">
              Hesap, masa başına ortalama {PRINT_COST_PER_TABLE} ₺ menü baskı maliyeti varsayımıyla yapılır. Kendi
              matbaa fiyatınız farklı olabilir.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 bg-stone-950 p-6 text-white sm:p-10">
            <dl className="space-y-5">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-stone-300">Yıllık baskı maliyeti</dt>
                <dd className="text-lg font-semibold tabular-nums">{formatTRY(paperCost)}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-stone-300">Menuland {plan.name}, yıllık</dt>
                <dd className="text-lg font-semibold tabular-nums">{formatTRY(menulandCost)}</dd>
              </div>
              <div className="border-t border-stone-800 pt-5">
                <dt className="text-sm text-stone-300">Yılda cebinizde kalan</dt>
                <dd aria-live="polite" className="mt-1 text-5xl font-extrabold tracking-tight text-brand-400 tabular-nums">
                  {savings > 0 ? (
                    formatTRY(savings)
                  ) : (
                    <span className="text-3xl text-stone-200">Baskıyla başa baş</span>
                  )}
                </dd>
                {savings === 0 && (
                  <p className="mt-2 text-sm text-stone-400">
                    Bu masa sayısında fark küçük; asıl kazanç fiyatları anında güncelleyebilmek ve sipariş almak.
                  </p>
                )}
              </div>
            </dl>
            <CtaLink href={links.panel} size="lg" className="w-full">
              Menünüzü dijitalleştirin
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
