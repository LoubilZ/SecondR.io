import PortfolioSection from "@/components/PortfolioSection";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-5rem)]">
      {/* Portfolio Section */}
      <PortfolioSection />
      
      {/* Footer CTA Section */}
      <FooterCTA />
    </div>
  );
}
