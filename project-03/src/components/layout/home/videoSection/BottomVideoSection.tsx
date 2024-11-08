import { useAppContext } from "../../../../context/AppContext";
import {
  LanguageContent,
  useIndustriesContext,
} from "../../../../context/IndustriesContext";

export const BottomVideoSection = () => {
  const { language } = useAppContext();
  const { loading, error, industriesData } = useIndustriesContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!industriesData) return <div>No industries data</div>;

  const languageContent = industriesData[
    language as keyof typeof industriesData
  ] as LanguageContent;

  return (
    <div className="text-center pt-24">
      <p className="text-[48px] font-[700] text-[#FF6F0F] mb-2">{languageContent.homeTitle}</p>
      <p className="text-[20px] font-[600]">{languageContent.homeDescription}</p>
    </div>
  );
};
