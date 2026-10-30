"use client";

import { LazyMotion, MotionConfig } from "motion/react";

const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

// LazyMotion: sayfalar hafif `m` bileşenlerini kullanır; animasyon motoru ilk boyamadan sonra gelir.
// strict: yanlışlıkla tam boy `motion` bileşeni kullanılırsa geliştirmede hata verir.
// reducedMotion: ziyaretçi "hareketi azalt" ayarını açtıysa kaydırma ve ölçek etkileri kapanır.
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
