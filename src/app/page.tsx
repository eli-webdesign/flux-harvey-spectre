import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { NewsSection } from "@/components/NewsSection";
import { PhotoSection } from "@/components/PhotoSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-1 flex-col">
      <Hero />
      <AboutSection />
      <IntroSection />
      <PhotoSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <NewsSection />
      <Footer />
    </main>
  );
}
