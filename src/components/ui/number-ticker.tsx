"use client"

import { useEffect, useLayoutEffect, useRef, type ComponentPropsWithoutRef } from "react"
import { useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
}

// Magic UI NumberTicker, Menuland uyarlaması:
// - Sunucuda son değer basılır; JavaScript yüklenmeden ya da arama motorunda "0" görünmez.
// - Sayaç yalnızca ekran dışındayken sıfırlanır, görünür olunca sayar; ekrandaysa hiç oynamaz.
// - Türkçe sayı biçimi (18.000, 5,0) ve "hareketi azalt" tercihi.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduceMotion = useReducedMotion()
  const motionValue = useMotionValue(direction === "down" ? startValue : value)
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 })
  const isInView = useInView(ref, { once: true, margin: "0px" })
  const armed = useRef(false)

  const format = (n: number) =>
    new Intl.NumberFormat("tr-TR", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(Number(n.toFixed(decimalPlaces)))

  useIsoLayoutEffect(() => {
    const el = ref.current
    if (!el || reduceMotion) return
    const rect = el.getBoundingClientRect()
    const visible = rect.top < window.innerHeight && rect.bottom > 0
    if (!visible) {
      armed.current = true
      motionValue.jump(direction === "down" ? value : startValue)
      springValue.jump(direction === "down" ? value : startValue)
      el.textContent = format(direction === "down" ? value : startValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isInView || !armed.current) return
    const timer = setTimeout(() => {
      motionValue.set(direction === "down" ? startValue : value)
    }, delay * 1000)
    return () => clearTimeout(timer)
  }, [motionValue, isInView, delay, value, direction, startValue])

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) ref.current.textContent = format(latest)
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [springValue, decimalPlaces]
  )

  return (
    <span ref={ref} className={cn("inline-block tabular-nums", className)} {...props}>
      {format(direction === "down" ? startValue : value)}
    </span>
  )
}
