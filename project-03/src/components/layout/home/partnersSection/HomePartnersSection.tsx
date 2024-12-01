import { useAppContext } from "../../../../context/AppContext";
import { PartnersHomeSectionLocaleProps, PartnersHomeSectionProps } from "../../../../types/HomePartnersTypes";
import { FormPartnersSection } from "./FormPartnersSection";
import { LogoPartnersSection } from "./LogoPartnersSection";
import { useEffect, useState } from "react";

export const HomePartnersSection = () => {
  const { language } = useAppContext();
  const [partnersData, setPartnersData] =
    useState<PartnersHomeSectionLocaleProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartnersData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/partnersHomeSection?lang=${language}`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch partners data: ${response.statusText}`
          );
        }
        const data: PartnersHomeSectionProps = await response.json();
        setPartnersData(data[language as keyof PartnersHomeSectionProps]);
      } catch (err) {
        setError("Error fetching partners data");
        console.error("Error fetching partners data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPartnersData();
  }, [language]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!partnersData) return <div>No partners data available.</div>;

  return (
    <div className="py-24">
      <LogoPartnersSection data={partnersData} />
      <FormPartnersSection data={partnersData} />
    </div>
  );
};
