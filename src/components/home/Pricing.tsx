"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Building2, Check, Minus, Phone } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "@/components/site/section";
import { CtaLink } from "@/components/site/cta-link";
import { basicFeatures, formatTRY, links, plans, premiumFeatures, type Plan } from "@/lib/site";
import { generateEventId, trackMetaEvent } from "@/utils/meta-pixel";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "yearly";

function trackCheckout(name: string, price: number) {
  trackMetaEvent("InitiateCheckout", generateEventId(), {
    content_name: name,
    value: price,
    currency: "TRY",
    content_category: "Subscription",
  });
}

function AnimatedPrice({ value, className }: { value: number; className?: string }) {
  return (
    <span className={cn("relative inline-flex overflow-hidden whitespace-nowrap tabular-nums", className)}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {formatTRY(value)}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function BillingToggle({ billing, onChange }: { billing: Billing; onChange: (b: Billing) => void }) {
  const options: { id: Billing; label: string }[] = [
    { id: "monthly", label: "Aylık" },
    { id: "yearly", label: "Yıllık" },
  ];
  return (
    <div role="radiogroup" aria-label="Ödeme dönemi" className="inline-flex rounded-xl bg-stone-100 p-1">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="radio"
          aria-checked={billing === o.id}
          onClick={() => onChange(o.id)}
          className="relative flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-semibold text-stone-600 transition-colors aria-checked:text-stone-900"
        >
          {billing === o.id && (
            <motion.span
              layoutId="billing-pill"
              className="absolute inset-0 rounded-lg bg-white shadow-sm"
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
            />
          )}
          <span className="relative">{o.label}</span>
          {o.id === "yearly" && (
            <span className="relative rounded-md bg-emerald-100 px-1.5 py-0.5 text-[11px] font-bold text-emerald-800">
              %20 indirim
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

function PlanCard({ plan, billing, delay }: { plan: Plan; billing: Billing; delay: number }) {
  const price = billing === "yearly" ? plan.yearly : plan.monthly;
  return (
    <Reveal
      delay={delay}
      className={cn(
        "relative flex flex-col rounded-3xl border bg-white p-7 sm:p-9",
        plan.highlighted
          ? "border-brand-200 shadow-[0_30px_60px_-30px_rgba(214,63,0,0.35)]"
          : "border-stone-200 shadow-[0_20px_50px_-30px_rgba(28,25,23,0.2)]"
      )}
    >
      {plan.highlighted && (
        <>
          <BorderBeam size={120} duration={8} colorFrom="#ff9d6b" colorTo="#ff4d00" borderWidth={2} />
          <span className="absolute -top-3 right-7 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">
            Önerilen
          </span>
        </>
      )}
      <h3 className="text-xl font-bold text-stone-900">{plan.name}</h3>
      <p className="mt-2 min-h-12 text-[15px] leading-relaxed text-stone-600">{plan.description}</p>
      <div className="mt-6 flex items-baseline gap-1.5">
        <AnimatedPrice value={price} className="text-5xl font-extrabold tracking-tight text-stone-900" />
        <span className="text-stone-500">/ay</span>
      </div>
      <p className="mt-1 h-5 text-sm text-stone-500">
        {billing === "yearly" ? (
          <>
            <span className="line-through">{formatTRY(plan.monthly)}</span> yerine, yıllık ödemede
          </>
        ) : (
          "Her ay yenilenir, istediğiniz zaman iptal edin"
        )}
      </p>
      <CtaLink
        href={links.panel}
        variant={plan.highlighted ? "primary" : "dark"}
        size="lg"
        className="mt-7 w-full"
        onClick={() => trackCheckout(`${plan.name} Paket`, price)}
      >
        {plan.cta}
      </CtaLink>
      <ul className="mt-8 space-y-3 border-t border-stone-100 pt-7 text-[15px] text-stone-700">
        {plan.features.map((f, i) => (
          <li key={f} className={cn("flex gap-3", i === 0 && plan.id === "premium" && "font-semibold text-stone-900")}>
            <Check className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
            {f}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function ChainPricing({ billing }: { billing: Billing }) {
  return (
    <Reveal className="mt-8 rounded-3xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md">
          <p className="flex items-center gap-2 text-sm font-semibold text-brand-700">
            <Building2 className="size-4" aria-hidden />
            2–5 şube
          </p>
          <h3 className="mt-2 text-xl font-bold text-stone-900">Zincir işletmeler için şube başı indirim</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-stone-600">
            Her şube kendi aboneliğini alır, hepsini tek merkezden yönetirsiniz.
          </p>
        </div>
        <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:max-w-xl">
          {plans.map((p) => {
            const price = billing === "yearly" ? p.chainYearly : p.chainMonthly;
            return (
              <div key={p.id} className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5">
                <p className="text-sm font-semibold text-stone-700">{p.name} zincir</p>
                <p className="mt-1 flex flex-wrap items-baseline gap-x-1">
                  <AnimatedPrice value={price} className="text-3xl font-extrabold text-stone-900" />
                  <span className="text-sm text-stone-500">/şube/ay</span>
                </p>
                <CtaLink
                  href={links.panel}
                  variant="outline"
                  className="mt-4"
                  onClick={() => trackCheckout(`${p.name} Zincir`, price)}
                >
                  Şube aboneliği al
                </CtaLink>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

function ComparisonTable() {
  const rows = [
    ...basicFeatures.map((f) => ({ feature: f, temel: true })),
    ...premiumFeatures.map((f) => ({ feature: f, temel: false })),
  ];
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[420px] text-left text-[15px]">
        <caption className="sr-only">Temel ve Premium paketlerin özellik karşılaştırması</caption>
        <thead>
          <tr className="border-b border-stone-200 text-sm text-stone-500">
            <th scope="col" className="py-3 pr-4 font-medium">Özellik</th>
            <th scope="col" className="w-24 py-3 text-center font-semibold text-stone-900">Temel</th>
            <th scope="col" className="w-24 py-3 text-center font-semibold text-stone-900">Premium</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.feature} className="border-b border-stone-100 last:border-0">
              <th scope="row" className="py-3 pr-4 font-normal text-stone-700">{r.feature}</th>
              <td className="py-3 text-center">
                {r.temel ? (
                  <Check className="mx-auto size-5 text-brand-600" aria-label="Var" />
                ) : (
                  <Minus className="mx-auto size-5 text-stone-300" aria-label="Yok" />
                )}
              </td>
              <td className="py-3 text-center">
                <Check className="mx-auto size-5 text-brand-600" aria-label="Var" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="fiyatlar" aria-labelledby="fiyatlar-baslik" className="scroll-mt-20 bg-gradient-to-b from-white to-stone-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="fiyatlar-baslik"
          eyebrow="Fiyatlar"
          title="Sabit fiyat, sürpriz yok"
          description="Masa sayınıza göre artmayan, komisyonsuz aylık abonelik. Taahhüt yok; istediğiniz zaman iptal edin."
        />

        <div className="mt-10 flex justify-center">
          <BillingToggle billing={billing} onChange={setBilling} />
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
          {plans.map((p, i) => (
            <PlanCard key={p.id} plan={p} billing={billing} delay={i * 0.08} />
          ))}
        </div>

        <div className="mx-auto max-w-4xl">
          <ChainPricing billing={billing} />

          <Reveal className="mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl bg-stone-950 p-6 text-white sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="text-xl font-bold">6 ve üzeri şubeniz mi var?</h3>
              <p className="mt-1.5 text-[15px] text-stone-300">Size özel fiyat, entegrasyon ve destek planı hazırlayalım.</p>
            </div>
            <CtaLink href={links.whatsapp} variant="light" size="lg" className="shrink-0">
              <Phone />
              Bizimle görüşün
            </CtaLink>
          </Reveal>

          <Reveal className="mt-8 rounded-3xl border border-stone-200 bg-white px-6 sm:px-8">
            <Accordion>
              <AccordionItem value="karsilastirma" className="border-0">
                <AccordionTrigger className="py-5 text-base font-semibold text-stone-900 hover:no-underline">
                  Paketleri ayrıntılı karşılaştırın
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <ComparisonTable />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
