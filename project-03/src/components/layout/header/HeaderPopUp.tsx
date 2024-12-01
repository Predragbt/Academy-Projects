import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useAppContext } from "../../../context/AppContext";
import {
  HomeServicesSection,
  useServicesContext,
} from "../../../context/ServicesContext";

export const HeaderPopUp = ({ onClose }: { onClose: () => void }) => {
  const { language } = useAppContext();
  const { data, loading, error } = useServicesContext();
  const navigate = useNavigate();
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (loading) return <p>Loading services...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No services data available.</p>;

  const services = data[language as keyof HomeServicesSection];

  return (
    <div className="relative z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Modal Content */}
      <div
        ref={popupRef}
        className="bg-white bg-opacity-40 backdrop-blur p-8 border-b-4 border-[#FF6F0F] absolute mx-[100px]"
      >
        <div className="flex gap-4">
          {Object.values(services).map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between w-1/6"
            >
              <img src={service.imgPopUp} className="w-fit mb-6" alt="" />
              <p className="text-[16px] font-[900] mb-4 border-b border-b-black">
                {service.title.split("|").join(" ")}
              </p>
              <p className="text-[14px] font-[700] mb-4 text-overflow">
                {service.titleContent}
              </p>
              <ul>
                {service.features.map((feature) => (
                  <li
                    key={feature.id}
                    className="border-b border-b-black py-2 text-[12px]"
                  >
                    {feature.title}
                  </li>
                ))}
              </ul>
              <div className="border-b border-b-black pb-2">
                <button
                  className="w-full px-4 bg-[#FF6F0F] text-[10px] font-[700] py-2 mt-2 hover:bg-[#FFBD91] flex justify-between items-center"
                  onClick={() => {
                    navigate(`/services/${service.id}`);
                    onClose();
                  }}
                >
                  {service.title.split("|").join(" ")}
                  <img src="/assets/icons/PopUpIconRight.png" alt="arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
