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
        <p className="text-[24px] leading-[32px] pb-6">
          {data.description}
        </p>

        <div className="my-8">
          <p className="text-[28px] font-[600]">{data.key_trends.title}</p>
          {data.key_trends.data.map((trend, index) => (
            <div key={index} className="mb-4">
              <p className="text-[24px] font-[700]">{trend.title}</p>
              <p className="text-[20px]">{trend.description}</p>
            </div>
          ))}
        </div>

        <div className="my-8">
          <p className="text-[28px] font-[600]">{data.case_studies.title}</p>
          {data.case_studies.data.map((caseStudy, index) => (
            <div key={index} className="mb-4">
              <p className="text-[24px] font-[700]">{caseStudy.title}</p>
              <p className="text-[20px]">{caseStudy.description}</p>
            </div>
          ))}
        </div>

        <div className="my-8">
          <p className="text-[28px] font-[600]">
            {data.prevention_strategies.title}
          </p>
          {data.prevention_strategies.data.map((strategy, index) => (
            <div key={index} className="mb-4">
              <p className="text-[24px] font-[700]">{strategy.title}</p>
              <p className="text-[20px]">{strategy.description}</p>
            </div>
          ))}
        </div>

        <div className="my-8">
          <p className="text-[28px] font-[600]">{data.conclusionTitle}</p>
          <p className="text-[20px]">{data.conclusion}</p>
        </div>
      </div>
    </div>
  );
};
