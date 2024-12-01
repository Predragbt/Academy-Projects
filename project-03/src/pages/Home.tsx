import { HeroSection } from "../components/layout/heroSection/HeroSection";
import { HomeAboutSection } from "../components/layout/home/HomeAboutSection";
import { HomeISOFormSection } from "../components/layout/home/HomeISOFormSection";
import { HomePartnersSection } from "../components/layout/home/partnersSection/HomePartnersSection";
import { ServicesSection } from "../components/layout/home/ServicesSection";
import { TeamLeadershipSection } from "../components/layout/home/TeamLeadershipSection";
import { TestimonialsSection } from "../components/layout/home/TestimonialsSection";
import { VideoSection } from "../components/layout/home/videoSection/VideoSection";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <HomeAboutSection />
      <VideoSection />
      <TeamLeadershipSection />
      <HomePartnersSection />
      <HomeISOFormSection />
      <TestimonialsSection />
    </div>
  );
};
