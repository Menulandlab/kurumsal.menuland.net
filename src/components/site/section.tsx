"use client";

import { m, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

// Ekran altında kalan içerik için yumuşak giriş. İlk ekranda (hero) kullanılmaz:
// oradaki içerik JavaScript yüklenmeden de görünür olmalı.
export function Reveal({
  delay = 0,
  className,
  children,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  id?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold tracking-wide",
            tone === "dark" ? "text-brand-300" : "text-brand-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          tone === "dark" ? "text-white" : "text-stone-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-stone-300" : "text-stone-600"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
