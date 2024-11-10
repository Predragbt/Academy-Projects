import { useEffect, useState } from "react";
import { AboutHero } from "../components/layout/about/AboutHero";
import { useAppContext } from "../context/AppContext";
import { AboutContent } from "../components/layout/about/AboutContent";
import { OurLocations } from "../components/layout/about/OurLocations";
import { AboutCertifications } from "../components/layout/about/AboutCertifications";
import { AboutSuccsessStories } from "../components/layout/about/AboutSuccsessStories";

// TypeScript interfaces
interface AboutPageData {
  en: LanguageData;
  mk: LanguageData;
}

interface LanguageData {
  bannerTitle: string;
  aboutContent: aboutSectionContent[];
  locations: LocationProps;
  certifications: CertificationProps;
  successStories: SuccessStoryProps;
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

export interface CertificationProps {
  title: string;
  data: Array<{
    title: string;
    subtitle: string;
    description: string;
    actionLabel: string;
    img: string;
  }>;
}

interface SuccessStoryProps {
  title: string;
  data: Array<{
    company: string;
    challenge: string;
    solution: string;
    outcome: string;
  }>;
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

      <OurLocations locations={languageData.locations} />

      <AboutCertifications certifications={languageData.certifications} />

      <AboutSuccsessStories />
    </>
  );
};
