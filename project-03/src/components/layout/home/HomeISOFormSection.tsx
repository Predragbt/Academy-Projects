import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import { ButtonComponent } from "../../common/Button";

export interface ISOCertificationProps {
  title: string;
  description: string;
  img: string;
}

export interface ISOCertificationItemProps {
  id: number;
  name: string;
  description: string;
  link: string;
}

export interface ISOCallToActionProps {
  buttonText: string;
  buttonLink: string;
}

export interface ISONewsletterProps {
  title: string;
  emailPlaceholder: string;
  buttonText: string;
  buttonLink: string;
}

export interface ISOLanguageContentProps {
  isoCertification: ISOCertificationProps;
  certifications: ISOCertificationItemProps[];
  cta: ISOCallToActionProps;
  newsletter: ISONewsletterProps;
}

export interface ISOHomeFormProps {
  eng: ISOLanguageContentProps;
  mk: ISOLanguageContentProps;
}

export const HomeISOFormSection = () => {
  const [ISOData, setISOData] = useState<ISOLanguageContentProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useAppContext();

  useEffect(() => {
    const fetchISOData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/homeFormISOSection?lang=${language}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch ISO data: ${response.statusText}`);
        }
        const data: ISOHomeFormProps = await response.json();
        setISOData(data[language as keyof ISOHomeFormProps]);
      } catch (err) {
        setError("Error fetching ISO data");
        console.error("Error fetching ISO data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchISOData();
  }, [language]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!ISOData) return <div>No ISO data</div>;

  return (
    <div className="px-[120px] py-20 border-b-8 border-[#FF6F0F]">
      <div className="flex">
        <div className="flex justify-center w-[45%]">
          <img
            src={ISOData.isoCertification.img}
            alt="ISO image"
            className="w-[300px] h-[300px] mt-[100px]"
          />
        </div>
        <div className="flex flex-col w-[55%]">
          <p className="text-[48px] font-[700] text-[#FF6F0F] mb-12">
            {ISOData.isoCertification.title}
          </p>
          <p className="text-[32px] font-[600] mb-10">
            {ISOData.isoCertification.description}
          </p>
          {ISOData.certifications.map((certification, index) => (
            <div
              key={index}
              className={`border-t-2 border-black text-[20px] font-[600] py-4 flex justify-between ${
                index !== ISOData.certifications.length - 1 ? "" : "border-b-2"
              }`}
            >
              <div className="w-[85%]">
                <span>{certification.name}</span>
                <span> - {certification.description}</span>
              </div>
              <div className="flex justify-end items-center w-[15%]">
                <img
                  src="/assets/icons/ISOArrow.png"
                  alt="arrow"
                  className="px-4 object-contain w-auto h-auto"
                />
              </div>
            </div>
          ))}
          <div className="flex justify-end py-12">
            <ButtonComponent text={ISOData.cta.buttonText} onClick={() => {}} />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center mt-[200px]">
        <div className="flex-[60%] me-[200px]">
          <p className="text-[48px] font-[700] leading-[56px] mb-4 text-[#FF6F0F]">
            {ISOData.newsletter.title}
          </p>
        </div>
        <div className="flex-[40%] flex flex-col items-end">
          <input
            type="text"
            placeholder={ISOData.newsletter.emailPlaceholder}
            className="border-b border-gray-300 p-2 mb-4 w-full text-right placeholder:text-right outline-none"
          />
          <ButtonComponent
            text={ISOData.newsletter.buttonText}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
