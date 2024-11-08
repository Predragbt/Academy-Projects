import {
  HomeServicesSection,
  useServicesContext,
} from "../../../context/ServicesContext";
import { useAppContext } from "../../../context/AppContext";
import { ServicesCard } from "../../common/ServicesCard";

export const ServicesSection = () => {
  const { language } = useAppContext();
  const fetchedData = useServicesContext();

  if (!fetchedData) return <p>Loading services...</p>;

  const services = fetchedData[language as keyof HomeServicesSection];

  return (
    <div className="py-16 bg-[#323232] border-b-8 border-[#FF6F0F]">
      <h2 className="text-center text-[48px] text-[#FF6F0F] font-[700] mb-10">{language === "eng" ? "Services" : "Сервиси"}</h2>
      <div className="flex flex-wrap justify-center gap-20">
        {Object.values(services).map((service) => (
          <ServicesCard
            key={service.id}
            img={service.img}
            title={service.title}
            titleDescription={service.titleContent}
            buttonText={service.cardBtnText}
            id={service.id}
          />
        ))}
      </div>
    </div>
  );
};
