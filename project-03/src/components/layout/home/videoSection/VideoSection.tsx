import { BottomVideoSection } from "./BottomVideoSection";
import { TopVideoSection } from "./TopVideoSection";

export const VideoSection = () => {
  return (
    <div className="px-[120px] py-24 border-b-8 border-[#FF6F0F]">
      <TopVideoSection />
      <BottomVideoSection />
    </div>
  );
};
