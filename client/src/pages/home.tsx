import Hero from "@/components/sections/hero";
import AISolutionsBanner from "@/components/sections/ai-solutions-banner";
import SolutionsGrid from "@/components/sections/solutions-grid";
import ProductsToggle from "@/components/sections/products-toggle";
import TechnologyPartners from "@/components/sections/technology-partners";
import BlogSection from "@/components/sections/blog-section";
import CTASection from "@/components/sections/cta-section";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div>
      <SEO 
        title="mxO₂ - AI Powered Digital Transformation Solutions | Enterprise Cloud & Automation"
        description="Transform your business with mxO₂'s AI-powered solutions. Expert cloud migration, robotic process automation, cybersecurity, and enterprise workspace solutions for global enterprises."
        keywords="AI transformation, digital transformation, cloud migration, robotic process automation, enterprise AI, business automation, cybersecurity solutions, data analytics, mxO2, maximum oxygen"
        ogTitle="mxO₂ - Leading AI & Digital Transformation Company"
        ogDescription="Empower your business with cutting-edge AI tools, intelligent automation, and cloud solutions. Drive smarter decisions with mxO₂'s enterprise transformation services."
      />
      <Hero />
      <AISolutionsBanner />
      <SolutionsGrid />
      <ProductsToggle />
      <TechnologyPartners />
      <BlogSection />
      <CTASection />
    </div>
  );
}
