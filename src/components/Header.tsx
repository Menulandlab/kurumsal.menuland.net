"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CtaLink } from "@/components/site/cta-link";
import { links } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#ozellikler", label: "Özellikler" },
  { href: "/#nasil-calisir", label: "Nasıl çalışır" },
  { href: "/#tasarruf", label: "Tasarruf" },
  { href: "/#fiyatlar", label: "Fiyatlar" },
  { href: "/#sss", label: "SSS" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-stone-200/80 bg-white/85 shadow-[0_1px_12px_rgba(28,25,23,0.06)] backdrop-blur-md"
          : "border-transparent bg-white/60 backdrop-blur-sm"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Menuland ana sayfa">
          <Image src="/img/logo-dark.png" alt="Menuland" width={514} height={143} priority className="h-8 w-auto" />
          <span className="hidden rounded-md border border-brand-200 bg-brand-50 px-1.5 py-0.5 text-[11px] font-bold tracking-wide text-brand-700 sm:inline-block">
            İŞLETME
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 aria-[current=page]:text-stone-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <CtaLink href={links.panel} variant="ghost">
            Giriş yap
          </CtaLink>
          <CtaLink href={links.panel}>Hemen başlayın</CtaLink>
        </div>

        <Sheet>
          <SheetTrigger
            className="inline-flex size-11 items-center justify-center rounded-xl text-stone-800 hover:bg-stone-100 lg:hidden"
            aria-label="Menüyü aç"
          >
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] max-w-sm gap-0 p-0">
            <div className="flex h-16 items-center border-b border-stone-200 px-5">
              <SheetTitle className="text-base font-semibold">Menü</SheetTitle>
            </div>
            <nav aria-label="Mobil menü" className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <SheetClose
                      render={<Link href={item.href} />}
                      nativeButton={false}
                      className="flex min-h-12 items-center rounded-xl px-3 text-base font-medium text-stone-800 hover:bg-stone-100"
                    >
                      {item.label}
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="grid gap-2 border-t border-stone-200 p-4">
              <CtaLink href={links.panel} size="lg">
                Hemen başlayın
              </CtaLink>
              <CtaLink href={links.panel} variant="outline" size="lg">
                Giriş yap
              </CtaLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
