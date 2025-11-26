import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-5rem)]">
      {/* Portfolio Section */}
      <PortfolioSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Footer CTA Section */}
      <FooterCTA />
    </div>
  );
}
