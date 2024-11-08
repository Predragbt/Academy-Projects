import { HeroSection } from "../components/layout/heroSection/HeroSection";
import { AboutSection } from "../components/layout/home/AboutSection";
import { ServicesSection } from "../components/layout/home/ServicesSection";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </div>
  );
};
