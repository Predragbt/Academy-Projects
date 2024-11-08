import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";

interface Highlight {
  id: string;
  icon: string;
  text: string;
  highlightedText: string;
}

interface LanguageContent {
  title: string;
  description: string;
  highlights: Highlight[];
}

interface HomeAboutSection {
  id: string;
  eng: LanguageContent;
  mk: LanguageContent;
}

export const AboutSection = () => {
  const [aboutSectionData, setAboutSectionData] =
    useState<HomeAboutSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useAppContext();

  useEffect(() => {
    const fetchAboutSectionData = async () => {
      try {
        const response = await fetch("http://localhost:5000/homeAboutSection");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch about section data: ${response.statusText}`
          );
        }
        const data = await response.json();
        setAboutSectionData(data);
      } catch (err) {
        setError("Error fetching about section data");
        console.error("Error fetching about section data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAboutSectionData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!aboutSectionData) return <div>No about section data</div>;

  // Ensure content is typed correctly by casting
  const content = aboutSectionData[
    language as keyof HomeAboutSection
  ] as LanguageContent;

  if (!content) {
    return <div>No content for the selected language</div>;
  }

  return (
    <div id={aboutSectionData.id} className="bg-[#333333] text-white p-8">
      <h2 className="text-center text-[#FF6F0F] text-[32px] font-bold mb-4">
        {content.title}
      </h2>
      <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
        {content.description}
      </p>
      <div className="flex justify-center gap-8">
        {content.highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="flex flex-col items-center border p-4"
          >
            <img src={highlight.icon} alt={highlight.text} />
            <p className="text-center text-base">
              {highlight.text}{" "}
              <span className="text-[#FF6F0F] font-semibold">
                {highlight.highlightedText}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
