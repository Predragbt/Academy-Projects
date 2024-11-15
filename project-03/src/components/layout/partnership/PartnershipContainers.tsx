import { PartnershipLanguageContentProps } from "../../../pages/Partnership";

interface Props {
  data: PartnershipLanguageContentProps;
}

export const PartnershipContainers = ({ data }: Props) => {
  return (
    <div className="grid gap-24">
      {data.partners.map((partner, index) =>
        index === 0 || index % 3 === 0 ? (
          <div key={partner.id} className={`bg-white p-8 flex flex-col gap-4`}>
            <div className="w-full flex gap-4">
              <div className="w-1/2 overflow-hidden">
                <img
                  src={partner.image1}
                  alt={`${partner.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 overflow-hidden">
                <img
                  src={partner.image2}
                  alt={`${partner.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[48px] font-[700] py-6">{partner.title}</p>
              <p className="text-[24px]">{partner.description}</p>
            </div>
          </div>
        ) : (
          <div
            key={partner.id}
            className={`bg-[#2A2A2A] p-6 flex ${
              index % 2 ? "" : "flex-row-reverse"
            } text-white gap-[5%]`}
          >
            <div className="w-[45%]">
              <img
                src={partner.image1}
                alt={`${partner.name} image`}
                className="w-full"
              />
            </div>
            <div className="w-[55%] flex flex-col justify-center">
              <p className="text-[48px] font-[700] pb-6">{partner.title}</p>
              <p className="text-[24px]">{partner.description}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};
