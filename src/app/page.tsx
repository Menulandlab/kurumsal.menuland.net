import Hero from "@/components/Hero";
import AppExperience from "@/components/AppExperience";
import Features from "@/components/Features";
import RoiCalculator from "@/components/RoiCalculator";
import Pricing from "@/components/Pricing";
import ComparisonTable from "@/components/ComparisonTable";
import BusinessBridge from "@/components/BusinessBridge";
import Testimonials from "@/components/Testimonials";
import AppDownloadBanner from "@/components/AppDownloadBanner";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AppExperience />
      <Features />
      <RoiCalculator />
      <Pricing />
      <ComparisonTable />
      <BusinessBridge />
      <Testimonials />
      <AppDownloadBanner />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}