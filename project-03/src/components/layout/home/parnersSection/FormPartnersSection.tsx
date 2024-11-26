import { ButtonComponent } from "../../../common/Button";
import { PartnersHomeSectionLocaleProps } from "./HomePartnersSection";

interface Props {
  data: PartnersHomeSectionLocaleProps;
}
export const FormPartnersSection = ({ data }: Props) => {
  return (
    <div className="flex justify-center items-center text-center">
      <hr className="border-t-8 border-[#FF6F0F] w-[25%] mx-auto" />
      <div className="px-[200px] py-20 bg-[#323232]">
        <p className="text-white text-[36px] font-[600] mb-8">
          {data.form.title}
        </p>
        <div className="flex justify-center items-stretch">
          <input
            type="text"
            placeholder={data.form.placeholder}
            className="placeholder:text-center w-1/2"
          />
          <ButtonComponent text={data.form.buttonText} onClick={() => {}} />
        </div>
      </div>
      <hr className="border-t-8 border-[#FF6F0F] w-[25%] mx-auto" />
    </div>
  );
};
