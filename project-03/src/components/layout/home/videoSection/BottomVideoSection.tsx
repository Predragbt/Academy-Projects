import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../../context/AppContext";
import { ButtonComponent } from "../../../common/Button";
import { useIndustriesContext } from "../../../../context/IndustriesContext";
import { LanguageContentProps } from "../../../../types/IndustriesTypes";

export const BottomVideoSection = () => {
  const { language } = useAppContext();
  const { loading, error, industriesData } = useIndustriesContext();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!industriesData) return <div>No industries data</div>;

  const languageContent = industriesData[
    language as keyof typeof industriesData
  ] as LanguageContentProps;

  return (
    <div className="text-center pt-24">
      <p className="text-[48px] font-[700] text-[#FF6F0F] mb-2">
        {languageContent.homeTitle}
      </p>
      <p className="text-[20px] font-[600] mb-12">
        {languageContent.homeDescription}
      </p>
      <div className="flex items-center w-full">
        {languageContent.industries.map((industry) => (
          <div key={industry.id} className="flex flex-col w-full">
            <div className="flex items-center w-full">
              <span className="flex-grow h-[4px] bg-black"></span>

              <span className="px-4 flex-shrink-0">
                <div className="flex justify-center">
                  <div
                    className="text-black mb-4"
                    dangerouslySetInnerHTML={{ __html: industry.icon }}
                  ></div>
                </div>
              </span>

              <span className="flex-grow h-[4px] bg-black"></span>
            </div>

            <div className="flex justify-center w-full mt-5">
              <p className="text-[20px] font-[600]">{industry.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <ButtonComponent
          text={languageContent.buttonContent}
          onClick={() => {
            navigate("/industries");
          }}
        />
      </div>
    </div>
  );
};
