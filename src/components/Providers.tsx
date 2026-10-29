"use client";

import { MotionConfig } from "motion/react";

// Ziyaretçi "hareketi azalt" ayarını açtıysa motion animasyonlarındaki kaydırma ve ölçek etkileri kapanır.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
