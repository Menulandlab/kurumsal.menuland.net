import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Tarayıcının yerleşik <details> öğesiyle akordeon: JavaScript gerektirmez, klavye ve ekran okuyucuyla çalışır.
// Aynı `name` verilen öğelerden yalnızca biri açık kalır (desteklemeyen tarayıcıda hepsi bağımsız açılır).
export function Disclosure({
  summary,
  children,
  name,
  className,
  summaryClassName,
}: {
  summary: React.ReactNode;
  children: React.ReactNode;
  name?: string;
  className?: string;
  summaryClassName?: string;
}) {
  return (
    <details {...(name ? { name } : {})} className={cn("group", className)}>
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-stone-900 [&::-webkit-details-marker]:hidden",
          summaryClassName
        )}
      >
        {summary}
        <ChevronDown
          aria-hidden
          className="size-5 shrink-0 text-stone-500 transition-transform duration-300 group-open:rotate-180"
        />
      </summary>
      {children}
    </details>
  );
}
