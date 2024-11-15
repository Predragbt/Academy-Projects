import { PartnershipHeaderProps } from "../../../pages/Partnership";

interface Props {
  data: PartnershipHeaderProps;
}
export const PartnershipHeader = ({ data }: Props) => {
  return (
    <>
      <p className="text-[75px] leading-[75px] font-[800] text-white text-center mb-12">
        {data.title}
      </p>
      <p className="text-[20px] font-[600] text-white text-center mb-12">{data.subtitle}</p>
    </>
  );
};
