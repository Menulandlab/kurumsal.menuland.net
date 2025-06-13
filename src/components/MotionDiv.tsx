// src/components/MotionDiv.tsx

"use client";

import React from "react";
// Gerekli tipleri framer-motion'dan import ediyoruz
import { motion, type HTMLMotionProps } from "framer-motion";

// Bileşenimizin kabul edeceği prop'ların tipini tanımlıyoruz.
// Bu, bir div elementinin tüm motion özelliklerini ve React çocuklarını içerir.
interface MotionDivProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
}

// Bileşeni, tanımladığımız bu tipleri kullanan bir React Fonksiyonel Bileşeni (FC) olarak oluşturuyoruz.
export const MotionDiv: React.FC<MotionDivProps> = ({ children, ...props }) => {
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  );
};