import HeroSection from "@/components/landing/HeroSection";
import EmotionalTriggers from "@/components/landing/EmotionalTriggers";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ProgressSection from "@/components/landing/ProgressSection";
import SocialProof from "@/components/landing/SocialProof";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <EmotionalTriggers />
      <FeaturesSection />
      <ProgressSection />
      <SocialProof />
      <Footer />
    </main>
  );
};

export default Index;
