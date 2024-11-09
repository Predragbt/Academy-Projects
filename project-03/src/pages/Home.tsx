import { HeroSection } from "../components/layout/heroSection/HeroSection";
import { HomeAboutSection } from "../components/layout/home/HomeAboutSection";
import { ServicesSection } from "../components/layout/home/ServicesSection";
import { TeamLeadershipSection } from "../components/layout/home/TeamLeadershipSection";
import { VideoSection } from "../components/layout/home/videoSection/VideoSection";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <HomeAboutSection />
      <VideoSection />
      <TeamLeadershipSection />
    </div>
  );
};
