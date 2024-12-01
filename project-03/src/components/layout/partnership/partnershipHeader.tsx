import { PartnershipHeaderProps } from "../../../types/PartnershipTypes";

interface Props {
  data: PartnershipHeaderProps;
}
export const PartnershipHeader = ({ data }: Props) => {
  const splitTitle = data.title.split("|");
  return (
    <>
      <div className="flex justify-center">
        <p className="text-[75px] leading-[75px] font-[800] text-white text-center mb-12 w-[1000px]">
          {splitTitle.map((text, index) => (
            <span
              className={`${
                index % 2 === 0 ? "text-[#FFFFFF]" : "text-[#FF6F0F] font-[800]"
              }`}
              key={index}
            >
              {text}
            </span>
          ))}
        </p>
      </div>
      <p className="text-[20px] font-[600] text-white text-center mb-12">
        {data.subtitle}
      </p>
    </>
  );
};
