import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { EngineCredits } from "@/components/EngineCredits";
import { CreatorSpotlight } from "@/components/CreatorSpotlight";
import { GitHubStarBanner } from "@/components/GitHubStarBanner";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FAQSection } from "@/components/FAQSection";
import { LiveStatsCounter } from "@/components/LiveStatsCounter";
import { Footer } from "@/components/Footer";
import { BackgroundAudioIcons } from "@/components/BackgroundAudioIcons";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col relative">
      <BackgroundAudioIcons />
      <Header />
      <Hero />
      <InteractiveDemo />
      <Features />
      <EngineCredits />
      <CreatorSpotlight />
      <GitHubStarBanner />
      <NewsletterSection />
      <FAQSection />
      <LiveStatsCounter />
      <Footer />
    </main>
  );
}
