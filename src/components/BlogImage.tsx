"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Blog kapak görseli. Görsel yüklenemezse kategori adını gösteren sade bir yer tutucuya düşer.
// Kapsayıcı `relative` olmalı ve bir en-boy oranı (ör. aspect-video) vermeli; görsel onu doldurur.
interface BlogImageProps {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  fallbackText?: string;
  priority?: boolean;
}

export default function BlogImage({ src, alt, sizes, className, fallbackText = "", priority = false }: BlogImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        {...(alt ? { role: "img", "aria-label": alt } : { "aria-hidden": true })}
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-50 to-stone-100 p-6 text-center text-sm font-semibold text-stone-600"
      >
        {fallbackText}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
      onError={() => setHasError(true)}
    />
  );
}
