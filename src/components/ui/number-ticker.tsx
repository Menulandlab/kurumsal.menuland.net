"use client"

import { useEffect, useLayoutEffect, useRef, type ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  delay?: number
  duration?: number
  decimalPlaces?: number
}

// Magic UI NumberTicker'ın hafif Menuland uyarlaması (motion yerine requestAnimationFrame):
// - Sunucuda son değer basılır; JavaScript yüklenmeden ya da arama motorunda "0" görünmez.
// - Sayaç yalnızca ekran dışındayken sıfırlanır, görünür olunca sayar; ekrandaysa hiç oynamaz.
// - Türkçe sayı biçimi (18.000) ve "hareketi azalt" tercihi.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect

export function NumberTicker({
  value,
  startValue = 0,
  delay = 0,
  duration = 1.6,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)

  const format = (n: number) =>
    new Intl.NumberFormat("tr-TR", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(Number(n.toFixed(decimalPlaces)))

  useIsoLayoutEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) return

    let frame = 0
    let timer: ReturnType<typeof setTimeout> | undefined
    // 1) Ekranın 300px altına yaklaşınca başlangıç değerine al (ekran dışında olduğu için görünmez).
    const arm = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        arm.disconnect()
        el.textContent = format(startValue)
        run.observe(el)
      },
      { rootMargin: "0px 0px 300px 0px" }
    )
    // 2) Görünür olunca say. Hiç yaklaşılmazsa sunucudaki son değer olduğu gibi kalır.
    const run = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        run.disconnect()
        timer = setTimeout(() => {
          const t0 = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - t0) / (duration * 1000), 1)
            const eased = 1 - Math.pow(1 - p, 3)
            el.textContent = format(startValue + (value - startValue) * eased)
            if (p < 1) frame = requestAnimationFrame(tick)
          }
          frame = requestAnimationFrame(tick)
        }, delay * 1000)
      },
      { threshold: 0.4 }
    )
    arm.observe(el)
    return () => {
      arm.disconnect()
      run.disconnect()
      if (timer) clearTimeout(timer)
      cancelAnimationFrame(frame)
      el.textContent = format(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, startValue, delay, duration, decimalPlaces])

  return (
    <span ref={ref} className={cn("inline-block tabular-nums", className)} {...props}>
      {format(value)}
    </span>
  )
}
