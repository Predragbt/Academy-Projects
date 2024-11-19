import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

import { PartnershipContainers } from "../components/layout/partnership/PartnershipContainers";
import { PartnershipHeader } from "../components/layout/partnership/partnershipHeader";
import { PartnershipTestimonials } from "../components/layout/partnership/PartnershipTestimonials";

export interface PartnershipHeaderProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface PartnerProps {
  id: number;
  name: string;
  title: string;
  description: string;
  image1: string;
  image2: string;
}

export interface PartnershipLanguageContentProps {
  header: PartnershipHeaderProps;
  partners: PartnerProps[];
}

export interface PartnershipDataProps {
  eng: PartnershipLanguageContentProps;
  mk: PartnershipLanguageContentProps;
}

export const PartnershipPage = () => {
  const [partnershipData, setPartnershipData] =
    useState<PartnershipLanguageContentProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useAppContext();

  useEffect(() => {
    const fetchPartnershipData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/partnershipPage?lang=${language}`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch partnership data: ${response.statusText}`
          );
        }
        const data: PartnershipDataProps = await response.json();
        setPartnershipData(data[language as keyof PartnershipDataProps]);
      } catch (err) {
        setError("Error fetching partnership data");
        console.error("Error fetching partnership data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPartnershipData();
  }, [language]);

  if (loading) return <div>Loading partnership data...</div>;
  if (error) return <div>{error}</div>;
  if (!partnershipData) return <div>No partnership data</div>;

  return (
    <div className="bg-[#323232]">
      <div className="px-[120px] py-20  border-b-8 border-[#FF6F0F]">
        <PartnershipHeader data={partnershipData.header} />
        <PartnershipContainers data={partnershipData} />
        <div className="flex justify-center mt-20">
          <button className="h-[52px] w-[250px] text-[#FF6F0F] border-b border-[#FF6F0F] hover:text-[#FFBD91] hover:border-[#FFBD91]">
            {partnershipData.header.buttonText}
          </button>
        </div>
      </div>
      <PartnershipTestimonials />
    </div>
  );
};
