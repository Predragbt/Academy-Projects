import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "./Button";

interface ServicesCardProps {
  id: string;
  img: string;
  title: string;
  titleDescription: string;
  buttonText: string;
}

export const ServicesCard = ({
  img,
  title,
  titleDescription,
  buttonText,
  id,
}: ServicesCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-[480px] bg-[#2A2A2A] text-white flex flex-col justify-between p-5">
      <img src={img} alt="service" className="self-start mb-8" />
      <p className="text-[24px] font-bold mb-6">{title.split("|").join(" ")}</p>
      <p className="mb-6">{titleDescription}</p>
      <ButtonComponent
        text={buttonText}
        onClick={() => {
          navigate(`/services/${id}`);
        }}
      />
    </div>
  );
};
