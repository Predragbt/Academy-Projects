import { useState } from "react";
import { PartnersHomeSectionLocaleProps } from "../../../../types/HomePartnersTypes";

interface Props {
  data: PartnersHomeSectionLocaleProps;
}

export const LogoPartnersSection = ({ data }: Props) => {
  const [instances] = useState<number>(100);

  const repeatedPartners = Array.from(
    { length: instances },
    () => data.partners
  ).flat();

  return (
    <div className="overflow-hidden mb-[180px] px-[120px]">
      <p className="text-[48px] font-[700] text-center text-[#FF6F0F] mb-16">
        {data.sectionTitle}
      </p>
      <div className="overflow-hidden relative w-[100%]">
        <div
          className="flex w-max"
          style={{
            animation: "slideAnimation 4000s linear",
          }}
        >
          {repeatedPartners.map((partner, index) => (
            <div key={index} className="looper_listInstance">
              <img
                src={partner.image}
                alt={partner.name}
                className="max-w-[200px] mx-8"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
