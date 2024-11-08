import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { ServicesHero } from "../components/layout/services/ServicesHero";
import {
  HomeServicesSection,
  useServicesContext,
} from "../context/ServicesContext";

export const Services = () => {
  const { language } = useAppContext();
  const fetchedData = useServicesContext();
  const { id } = useParams(); // Get `id` from URL params

  if (!fetchedData) return <p>Loading services...</p>;

  const services = fetchedData[language as keyof HomeServicesSection];

  const filterData = Object.values(services).find(
    (service) => service.id === id
  );

  return (
    <div>
      {filterData ? (
        <div>
          <ServicesHero
            title={filterData.title}
            subtitle={filterData.titleContent}
            btnText={filterData.pageBtnText}
          />

          <div className="px-[120px] bg-[#323232] py-12 text-center">
            <p className="text-[48px] text-white font-bold mb-8">
              {filterData.subtitle}
            </p>
            <img src={filterData.img} alt="service" className="mx-auto mb-14" />

            <div className="flex flex-row gap-4 text-center">
              {filterData.features.map((feature) => (
                <div
                  key={feature.id}
                  className="px-[40px] py-[60px] bg-white flex-1 p-4 border-b-8 border-[#FF6F0F]"
                >
                  <p className="text-[24px] text-[#FF6F0F] font-[700] mb-4">
                    {feature.title}
                  </p>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-[120px] bg-[#323232] py-12 text-center">
            {filterData.sections.map((section) => (
              <div key={section.id} className=" py-12 text-center flex flex-col items-center justify-center">
                <p className="text-[24px] text-[#FF6F0F] font-[700] mb-8">
                  {section.title}
                </p>
                <p className="text-white w-[1000px] text-start">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Service not found.</p>
      )}
    </div>
  );
};
