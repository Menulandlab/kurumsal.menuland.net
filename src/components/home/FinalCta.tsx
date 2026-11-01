import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Reveal } from "@/components/site/section";
import { CtaLink } from "@/components/site/cta-link";
import { contact, links, whatsappLink } from "@/lib/site";

const warm = (a: number) => `hsla(20, 100%, 60%, ${a})`;

export default function FinalCta() {
  return (
    <section id="iletisim" aria-labelledby="iletisim-baslik" className="scroll-mt-20 px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-stone-950 px-6 py-16 text-center sm:px-12 sm:py-24">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Spotlight
            gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, ${warm(0.16)} 0, ${warm(0.04)} 50%, ${warm(0)} 80%)`}
            gradientSecond={`radial-gradient(50% 50% at 50% 50%, ${warm(0.1)} 0, ${warm(0.03)} 80%, transparent 100%)`}
            gradientThird={`radial-gradient(50% 50% at 50% 50%, ${warm(0.07)} 0, ${warm(0.02)} 80%, transparent 100%)`}
            translateY={-300}
          />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_30%,transparent_100%)]" />
        </div>

        <Reveal>
          <h2 id="iletisim-baslik" className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
            Menünüzü bugün dijitale taşıyın
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-stone-300">
            Hesabınızı açın, menünüzü ekleyin, QR kodları masalara koyun. Takıldığınız yerde WhatsApp'tan yardımcı
            oluyoruz.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaLink href={links.panel} size="lg">
              Hemen başlayın
              <ArrowRight />
            </CtaLink>
            <CtaLink href={whatsappLink("KRM-SON")} variant="whatsapp" size="lg">
              <MessageCircle />
              WhatsApp'tan yazın
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-12 flex max-w-2xl flex-col justify-center gap-3 text-sm text-stone-300 sm:flex-row sm:gap-8">
            <li>
              <a href={contact.phoneHref} className="inline-flex min-h-11 items-center gap-2 hover:text-white">
                <Phone className="size-4 text-brand-400" aria-hidden />
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.supportEmail}`} className="inline-flex min-h-11 items-center gap-2 hover:text-white">
                <Mail className="size-4 text-brand-400" aria-hidden />
                {contact.supportEmail}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
