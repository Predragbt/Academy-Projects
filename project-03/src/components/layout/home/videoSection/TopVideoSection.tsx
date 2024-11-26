import { useEffect, useState } from "react";
import { useAppContext } from "../../../../context/AppContext";
import { ButtonComponent } from "../../../common/Button";

interface LanguageContent {
  quote: string;
  btn1: string;
  btn2: string;
}

interface TopVideoSectionProps {
  id: string;
  eng: LanguageContent;
  mk: LanguageContent;
}

export const TopVideoSection = () => {
  const [topVideoSectionData, setTopVideoSectionData] =
    useState<TopVideoSectionProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useAppContext();

  useEffect(() => {
    const fetchTopVideoSectionData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/topVideoSection`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch top video section data: ${response.statusText}`
          );
        }
        const data: TopVideoSectionProps = await response.json();
        setTopVideoSectionData(data);
      } catch (err) {
        setError("Error fetching top video section data");
        console.error("Error fetching top video section data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTopVideoSectionData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!topVideoSectionData) return <div>No top video section data</div>;

  const content = topVideoSectionData[
    language as keyof TopVideoSectionProps
  ] as LanguageContent;

  if (!content) return <div>No content for {language}</div>;

  return (
    <div className="flex justify-between items-center px-[120px]">
      <div className="w-1/2">
        <p className="text-[52px] leading-[64px] font-[700] text-[#FF6F0F] mb-20">
          "{content.quote}"
        </p>
        <div className="flex gap-6">
          <ButtonComponent
            text={content.btn1}
            background="bg-transparent text-[#FF6F0F] hover:bg-[#FFBD91] hover:text-white hover:border-[#FFBD91]"
            border="border-2 border-[#FF6F0F] "
          />
          <ButtonComponent text={content.btn2} />
        </div>
      </div>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/46a0/260b/64c4ed89072bdf5aa45ef094533bce2b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qAWrAQ-6crBwNawyERRYvSLBQqScVtShmoEedbBz~sZGcFU2h7~4iE3FTHv~krSrbxEwi8ibsbarvVqlQkrxKKEC4LBT1iONmdU4O6RC4lV~3NxnDmQPvFO1E1-D1aGpLzpyPUAJCwsa7vvMX1RU9dkXyLXhZRoYChxVw2~r78akpgOErt7S7nkfMAd03ZPYgenuWxuHFDVD9qFAliLL6rEDkx~hZEjKR3-F8u~tVMMxMtf41ZrEO8zXCNLEvuXbBpUYAqoWDpU~8-V~enzcaduLkKvhpPTp408oKRACvlMrQV-6dmgQi8FuMrEmR2eKmMCM4VoqQiEQIEexs3cVvQ__"
          alt="Top Video Section"
          className="border-b-8 border-[#FF6F0F]"
        />
      </div>
    </div>
  );
};
