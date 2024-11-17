import { NewsletterFooterFormProps } from "../../../pages/Newsletter";
import { ButtonComponent } from "../../common/Button";

interface Props {
  data: NewsletterFooterFormProps;
}

export const NewsletterFooterForm = ({ data }: Props) => {
  return (
    <>
      <div className="px-[120px] py-[80px] flex flex-row gap-4 items-center">
        <div className="flex-[60%] me-[200px]">
          <p className="text-[48px] leading-[48px] font-semibold mb-4">
            <span className="text-[#FF6F0F]">{data.title}</span>{" "}
            {data.description}
          </p>
        </div>
        <div className="flex-[40%] flex flex-col items-end">
          <input
            type="text"
            placeholder={data.fields[0].placeholder}
            className="border-b border-gray-300 p-2 mb-4 w-full text-right placeholder:text-right outline-none"
          />
          <ButtonComponent text={data.submit_button.text} onClick={() => {}} />
        </div>
      </div>
    </>
  );
};
