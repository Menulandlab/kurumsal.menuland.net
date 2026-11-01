"use client";

import { m } from "motion/react";
import { ClipboardList, MessageCircle, Printer, UserPlus } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/section";
import { CtaLink } from "@/components/site/cta-link";
import { links, whatsappLink } from "@/lib/site";

const steps = [
  {
    icon: UserPlus,
    title: "Hesabınızı açın",
    text: "İşletme panelinden kaydolun, size uygun paketi seçin.",
  },
  {
    icon: ClipboardList,
    title: "Menünüzü ekleyin",
    text: "Kategorileri, ürünleri, fiyatları, fotoğrafları ve alerjen bilgilerini girin.",
  },
  {
    icon: Printer,
    title: "QR kodları masalara koyun",
    text: "Masaya özel QR kodları PDF veya PNG olarak indirip yazdırın. Menünüz yayında.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="nasil-calisir"
      aria-labelledby="nasil-calisir-baslik"
      className="scroll-mt-20 bg-stone-950 py-20 text-white sm:py-28"
    >
      <div className="container-page">
        <SectionHeading
          id="nasil-calisir-baslik"
          tone="dark"
          eyebrow="Nasıl çalışır"
          title="Üç adımda dijital menü"
          description="Teknik bilgi gerekmez. Menünüzü aynı gün yayına alabilirsiniz."
        />

        <div className="relative mt-16">
          {/* Adımları bağlayan çizgi (masaüstü) */}
          <div aria-hidden className="absolute top-7 right-[16%] left-[16%] hidden h-px bg-stone-800 md:block">
            <m.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="h-px origin-left bg-gradient-to-r from-brand-500 via-brand-400 to-brand-500"
            />
          </div>

          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
            {steps.map((step, i) => (
              <m.li
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.15 }}
                className="text-center"
              >
                <span className="relative mx-auto flex size-14 items-center justify-center rounded-2xl bg-stone-900 ring-1 ring-stone-700">
                  <step.icon className="size-6 text-brand-400" aria-hidden />
                  <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-brand-600 text-xs font-bold">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-[15px] leading-relaxed text-stone-300">{step.text}</p>
              </m.li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaLink href={links.panel} size="lg">
            Hesabınızı açın
          </CtaLink>
          <CtaLink href={whatsappLink("KRM-NASIL")} variant="light" size="lg">
            <MessageCircle />
            Kurulumda yardım alın
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
