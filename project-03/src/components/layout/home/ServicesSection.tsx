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
    <div>
      {Object.values(services).map((service, index) => (
        <ServicesCard
          key={service.id}
          img={service.img}
          title={service.title}
          titleDescription={service.titleContent}
          buttonText={service.cardBtnText}
        />
      ))}
    </div>
  );
};
