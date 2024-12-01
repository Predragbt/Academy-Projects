import { CertificationProps } from "../../../types/AboutPageTypes";
import { ButtonComponent } from "../../common/Button";

interface Props {
  certifications: CertificationProps;
}

export const AboutCertifications = ({ certifications }: Props) => {
  return (
    <div className="bg-[#323232] text-white px-[120px] py-[80px]">
      <p className="text-[48px] font-[700] text-center">
        {certifications.title}
      </p>
      <div className="flex flex-wrap justify-center gap-12 mt-8 text-center">
        {certifications.data.map((certification, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-[#2A2A2A] border-b-2 gap-6 py-16 px-6 items-center md:basis-[calc(33%-30px)]"
          >
            <img src={certification.img} alt={certification.title} />
            <div>
              <p className="text-[32px] font-[600]">{certification.title}</p>
              <p className="text-[32px] font-[600]">{certification.subtitle}</p>
            </div>
            <p className="w-[60%] mb-6">{certification.description}</p>
            <ButtonComponent
              text={certification.actionLabel}
              onClick={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
