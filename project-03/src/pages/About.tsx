import { useEffect, useState } from "react";
import { AboutHero } from "../components/layout/about/AboutHero";
import { useAppContext } from "../context/AppContext";
import { AboutContent } from "../components/layout/about/AboutContent";
import { OurLocations } from "../components/layout/about/OurLocations";
import { AboutCertifications } from "../components/layout/about/AboutCertifications";
import { AboutSuccsessStories } from "../components/layout/about/AboutSuccsessStories";
import { useTeamMembersContext } from "../context/TeamMembersContext";
import { AboutOurPartners } from "../components/layout/about/АboutOurPartners";
import { AboutOurCybersecuritySpecialists } from "../components/layout/about/AboutOurCybersecuritySpecialists";
import { AboutSecurityAwareness } from "../components/layout/about/AboutSecurityAwareness";
import { AboutPageData, LanguageData } from "../types/AboutPageTypes";
import {
  TeamDataLanguageProps,
  TeamDataProps,
} from "../types/TeamMembersTypes";

export const About = () => {
  const [aboutPageData, setAboutPageData] = useState<AboutPageData | null>(
    null
  );
  const [aboutLoading, setAboutLoading] = useState(true);
  const [aboutError, setAboutError] = useState<string | null>(null);

  const { teamMembersData, loading, error } = useTeamMembersContext();
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
        setAboutPageData(data);
      } catch (err) {
        setAboutError("Error fetching about page data");
        console.error("Error fetching about page data:", err);
      } finally {
        setAboutLoading(false);
      }
    };
    fetchAboutPageData();
  }, []);

  if (aboutLoading || loading) return <div>Loading...</div>;
  if (aboutError || error) return <div>Error: {aboutError}</div>;
  if (!aboutPageData) return <div>No about page data</div>;

  const languageData = aboutPageData[
    language as keyof AboutPageData
  ] as LanguageData;

  if (!teamMembersData) return <div>No team members data</div>;

  const teamMembersLanguageContent = teamMembersData[
    language as keyof TeamDataProps
  ] as TeamDataLanguageProps;

  if (!teamMembersLanguageContent || !languageData) {
    return <div>Content for this language is not available.</div>;
  }

  return (
    <>
      <AboutHero bannerTitle={languageData.bannerTitle} />

      <div className="flex flex-row justify-center w-full px-[120px] mt-[-150px] gap-8 flex-wrap mb-24">
        <AboutContent aboutContent={languageData.aboutContent} />
      </div>

      <OurLocations locations={languageData.locations} />
      <AboutOurPartners teamMembers={teamMembersLanguageContent.partnersTeam} />
      <AboutOurCybersecuritySpecialists
        teamMembers={teamMembersLanguageContent.cybersecuritySpecialistsTeam}
      />
      <AboutSecurityAwareness
        teamMembers={teamMembersLanguageContent.securityAwarenessAdvisorsTeam}
      />
      <AboutCertifications certifications={languageData.certifications} />
      <AboutSuccsessStories successStories={languageData.successStories} />
    </>
  );
};
