import Hero from "@/components/sections/hero";
import AISolutionsBanner from "@/components/sections/ai-solutions-banner";
import SolutionsGrid from "@/components/sections/solutions-grid";
import MissionCriticalSection from "@/components/sections/mission-critical-section";
import IndustrySolutions from "@/components/sections/industry-solutions";
import TechnologyPartners from "@/components/sections/technology-partners";
import BlogSection from "@/components/sections/blog-section";
import CTASection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <AISolutionsBanner />
      <SolutionsGrid />
      <MissionCriticalSection />
      <IndustrySolutions />
      <TechnologyPartners />
      <BlogSection />
      <CTASection />
    </div>
  );
}
