import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "./Button";

interface ServicesCardProps {
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
}: ServicesCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-[478px] h-[358px] flex flex-col items-center justify-center p-5">
      <img src={img} alt="service" />
      <p>{title}</p>
      <p>{titleDescription}</p>
      <ButtonComponent
        text={buttonText}
        onClick={() => {
          navigate({ pathname: `/services/${title}` });
        }}
      />
    </div>
  );
};
