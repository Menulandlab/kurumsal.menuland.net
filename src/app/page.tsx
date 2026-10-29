import Hero from "@/components/home/Hero";
import ProofBar from "@/components/home/ProofBar";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import AppReach from "@/components/home/AppReach";
import RoiCalculator from "@/components/home/RoiCalculator";
import Pricing from "@/components/home/Pricing";
import Faq, { faqs } from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";
import { SITE_URL, plans } from "@/lib/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Menuland İşletme Paneli",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    offers: plans.map((p) => ({
      "@type": "Offer",
      name: `${p.name} Paket`,
      price: p.monthly,
      priceCurrency: "TRY",
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <ProofBar />
      <Features />
      <HowItWorks />
      <AppReach />
      <RoiCalculator />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
