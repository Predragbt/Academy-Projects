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
    <div className="flex justify-between items-center px-[120px] py-12">
      <div className="w-1/2">
        <p className="text-[52px] leading-[64px] font-[700] text-[#FF6F0F] mb-20">"{content.quote}"</p>
        <button className="bg-transparent h-[52px] w-[250px] border-2 border-[#FF6F0F] mr-6 text-[#FF6F0F] hover:bg-[#FFBD91] text-base font-medium transition duration-300">
          {content.btn1}
        </button>
        <ButtonComponent text={content.btn2} onClick={() => {}} />
      </div>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/46a0/260b/64c4ed89072bdf5aa45ef094533bce2b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LVO4v33E6UeOOorv7sxitnwkKZphIP8IBPDvQ9sumfGOIn~pXjt15J6r6cAR0J~fwf2HlldojchbtadvNzE3sU5IhvO4SK-Sd6FqY~tiQM~FuY41ivXAlLKAu6MkEoUiswW-nK2Z4viQo-QB1uvq1DkEJ~JCXt62AeSbnOc66XafftLMd4gPdEhuZn18AGlztB1FyiNbRS0rcAXv5EwXq-E7SIjFe9Xj8IbPfAnsEecqEjA9aB9sNpULkUui1lKk5AY4lKRkffAju2ebFK-kPHjY8pXC2wfjwK5zW7rppVvkv3UvQqvSx98s0P7hynSG-6XBSP9v1DTvmTf~rUJcGg__"
          alt="Top Video Section"
          className="border-b-8 border-[#FF6F0F]"
        />
      </div>
    </div>
  );
};
