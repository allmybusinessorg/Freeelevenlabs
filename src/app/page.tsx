import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { EngineCredits } from "@/components/EngineCredits";
import { CreatorSpotlight } from "@/components/CreatorSpotlight";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header />
      <Hero />
      <InteractiveDemo />
      <Features />
      <EngineCredits />
      <CreatorSpotlight />
      <NewsletterSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
