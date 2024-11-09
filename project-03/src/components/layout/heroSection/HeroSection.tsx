import { useEffect, useState } from "react";
import { ButtonComponent } from "../../common/Button";
import { useAppContext } from "../../../context/AppContext";

interface HeroSectionTitle {
  part1: string;
  highlight: string;
  part2: string;
  part3: string;
}

interface HeroSectionData {
  subtitle1: string;
  subtitle2: string;
  title: HeroSectionTitle;
  btn1: string;
  btn2: string;
  content: string;
  industries: string[];
}

export const HeroSection = () => {
  const { language } = useAppContext();
  const [heroSectionData, setHeroSectionData] = useState<HeroSectionData>();

  useEffect(() => {
    const fetchHeroSectionData = async () => {
      try {
        const response = await fetch("http://localhost:5000/homeHeroSection");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch hero section data: ${response.statusText}`
          );
        }
        const data = await response.json();
        setHeroSectionData(data[language]);
      } catch (error) {
        console.error("Error fetching hero section data:", error);
      }
    };

    fetchHeroSectionData();
  }, [language]);

  return (
    <div
      className="py-[100px] px-[120px] bg-cover bg-center flex items-center border-b-8 border-[#FF6F0F]"
      style={{
        backgroundImage: `url("/assets/images/HomeHeroSection.png")`,
      }}
    >
      <div className="flex flex-col justify-center text-white">
        <p className="text-3xl font-semibold text-[#FF6F0F]">
          {heroSectionData?.subtitle1}
        </p>
        <p className="text-3xl font-semibold">{heroSectionData?.subtitle2}</p>

        {/* Title and Content Section */}
        <div className="flex items-start mt-4">
          <p className="text-[75px] leading-[75px]">
            {heroSectionData?.title.part1}{" "}
            <span className="text-[#FF6F0F]">
              {heroSectionData?.title.highlight}{" "}
            </span>
            {heroSectionData?.title.part2}
          </p>
        </div>
        <div className="flex flex-row">
          <p className="text-[90px] leading-[90px] whitespace-nowrap pr-4">
            {heroSectionData?.title.part3}
          </p>
          <span className="text-[20px] mt-4 border-l-4 border-[#FF6F0F] pl-4">
            "{heroSectionData?.content}"
          </span>
        </div>

        <div className="flex w-full items-center justify-center space-x-4 mt-20">
          <button className="bg-transparent border border-white h-[52px] w-[250px] flex items-center justify-around text-white text-base font-medium pr-4">
            <img
              src="/assets/images/HeroSectionProfile.png"
              alt="Hero section profile"
            />
            {heroSectionData?.btn1}
          </button>
          {heroSectionData && (
            <ButtonComponent text={heroSectionData.btn2} onClick={() => {}} />
          )}
        </div>

        {heroSectionData && (
          <div className="flex space-x-4 mt-20 justify-between w-full">
            {heroSectionData.industries.map((industry, index) => (
              <button
                key={index}
                className="text-white border-b-2 border-transparent hover:border-gray-500 pb-1"
              >
                {industry}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
