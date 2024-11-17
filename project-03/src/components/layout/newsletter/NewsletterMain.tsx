import { RelatedNewsProps } from "../../../pages/Newsletter";

interface Props {
  data: RelatedNewsProps;
}

export const NewsletterMain = ({ data }: Props) => {
  return (
    <div className="w-[70%] ms-12 pt-10 border-t-2 border-black">
      <div className="mb-20">
        <p className="text-[32px] font-[600] mb-6">{data.title}</p>
        <p className="border-b-2 border-black text-[24px] leading-[32px] pb-6">
          {data.description}
        </p>
        <p className="text-[48px] font-[700] my-6">{data.subtitle}</p>
      </div>
    </div>
  );
};
