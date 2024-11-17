import { RelatedNewsProps } from "../../../pages/Newsletter";
import { ButtonComponent } from "../../common/Button";

interface Props {
  data: RelatedNewsProps;
  onCardClick: (card: RelatedNewsProps) => void;
}

export const NewsletterCard = ({ data, onCardClick }: Props) => {
  const handleButtonClick = () => {
    onCardClick(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#E6E6E6] p-6 mb-20 border-b-4 border-[#FF6F0F]">
      <p className="text-[16px] font-[700] mb-2">{data.subtitle}</p>
      <p className="text-[12px] text-[#FF6F0F] mb-6">{data.posted_date}</p>
      <p className="text-[24px] font-[700] mb-4">{data.title}</p>
      <p className="mb-6">{data.description}</p>
      <ButtonComponent
        text={data.btnText}
        width="w-full"
        onClick={handleButtonClick}
      />
    </div>
  );
};
