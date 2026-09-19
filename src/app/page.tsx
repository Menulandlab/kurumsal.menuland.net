import Hero from "@/components/Hero";
import Features from "@/components/Features";
import RoiCalculator from "@/components/RoiCalculator";
import Pricing from "@/components/Pricing";
import ComparisonTable from "@/components/ComparisonTable";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <RoiCalculator />
      <Pricing />
      <ComparisonTable />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}