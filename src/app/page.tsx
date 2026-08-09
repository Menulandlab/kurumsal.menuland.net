// src/app/page.tsx

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ComparisonTable from "@/components/ComparisonTable";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq"; // Faq bileşenini import ediyoruz
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <ComparisonTable />
      <Testimonials />
      <Faq /> {/* Faq bileşenini buraya ekledik */}
      <Contact />
      <Footer />
    </>
  );
}