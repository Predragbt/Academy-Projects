import { ButtonComponent } from "../components/common/Button";
import { IndustriesHero } from "../components/layout/industries/IndustriesHero";
import { useAppContext } from "../context/AppContext";
import {
  LanguageContent,
  useIndustriesContext,
} from "../context/IndustriesContext";

export const IndustiresPage = () => {
  const { language } = useAppContext();
  const { loading, error, industriesData } = useIndustriesContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!industriesData) return <div>No industries data</div>;

  const languageContent = industriesData[
    language as keyof typeof industriesData
  ] as LanguageContent;

  return (
    <div>
      <IndustriesHero
        title={languageContent.industriesTitle}
        subtitle={languageContent.industriesDescription}
        img={languageContent.industriesHeroImg}
      />
      <div className="px-[100px] py-[50px] border-b-8 border-[#FF6F0F]">
        {languageContent.industries.map((industry) => (
          <div
            key={industry.id}
            className="mb-8 bg-[#323232] p-8 text-white text-center"
          >
            <div className="flex justify-center">
              <div
                className="text-[#FF6F0F] mb-4"
                dangerouslySetInnerHTML={{ __html: industry.icon }}
              ></div>
            </div>

            <h2 className="text-[32px] font-bold mb-4">{industry.name}</h2>
            <p className="text-[16px] mb-6 text-start">
              {industry.description}
            </p>
            <ButtonComponent text={industry.buttonText} onClick={() => {}} />
          </div>
        ))}
      </div>
      <div className="px-[100px] py-[50px] flex flex-row gap-4 items-center">
        <div className="flex-[2] me-[200px]">
          <p className="text-[48px] font-semibold mb-4">{languageContent.formTitle}</p>
          <p className="text-[24px] text-[#FF6F0F] leading-[30px]">
            {languageContent.formDescription}
          </p>
        </div>
        <div className="flex-[1] flex flex-col items-end">
          <input
            type="text"
            placeholder={languageContent.formPlaceholder}
            className="border-b border-gray-300 p-2 mb-4 w-full text-right placeholder:text-right outline-none"
          />
          <ButtonComponent text={languageContent.formBtn} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
