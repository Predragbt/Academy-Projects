import { useEffect, useState } from "react";
import { AboutHero } from "../components/layout/about/AboutHero";
import { useAppContext } from "../context/AppContext";
import { AboutContent } from "../components/layout/about/AboutContent";
import { OurLocations } from "../components/layout/about/OurLocations";

// TypeScript interfaces
interface AboutPageData {
  en: LanguageData;
  mk: LanguageData;
}

interface LanguageData {
  bannerTitle: string;
  aboutContent: aboutSectionContent[];
  locations: LocationProps;
  certifications: Certification[];
  successStories: SuccessStory[];
}

export interface aboutSectionContent {
  img: string;
  ourStory: string;
  title: string;
  description: string;
}

export interface LocationProps {
  ourStory: string;
  title: string;
  img: string;
  data: Array<{
    country: string;
    address: string;
    city: string;
    postalCode: string;
  }>;
}

interface Certification {
  title: string;
  description: string;
  actionLabel: string;
}

interface SuccessStory {
  company: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export const About = () => {
  const [aboutPageData, setAboutPageData] = useState<AboutPageData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useAppContext();

  useEffect(() => {
    const fetchAboutPageData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/aboutPage`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch about page data: ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("Fetched about page data:", data);
        setAboutPageData(data);
      } catch (err) {
        setError("Error fetching about page data");
        console.error("Error fetching about page data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAboutPageData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!aboutPageData) return <div>No about page data</div>;

  const languageData = aboutPageData[
    language as keyof AboutPageData
  ] as LanguageData;

  return (
    <>
      <AboutHero />
      <div className="flex flex-row justify-center w-full px-[120px] mt-[-150px] gap-8 flex-wrap mb-24">
        <AboutContent aboutContent={languageData.aboutContent} />
      </div>
      <div>
        <OurLocations locations={languageData.locations} />
      </div>
    </>
  );
};
