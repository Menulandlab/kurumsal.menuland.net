import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Pazarlama sayfalarındaki bağlantı-butonlar. Dokunma alanı en az 44px.
export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-[background-color,color,box-shadow,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 active:translate-y-px [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-brand-600 text-white shadow-sm shadow-brand-600/20 hover:bg-brand-700",
        dark: "bg-stone-900 text-white hover:bg-stone-800",
        outline: "border border-stone-300 bg-white text-stone-900 hover:border-stone-400 hover:bg-stone-50",
        ghost: "text-stone-700 hover:bg-stone-100 hover:text-stone-900",
        light: "bg-white text-stone-900 hover:bg-stone-100",
        whatsapp: "bg-[#0F7A40] text-white hover:bg-[#0C6535]",
      },
      size: {
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type CtaLinkProps = VariantProps<typeof ctaVariants> & {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  "aria-label"?: string;
};

export function CtaLink({ href, variant, size, className, children, ...rest }: CtaLinkProps) {
  const classes = cn(ctaVariants({ variant, size }), className);
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
