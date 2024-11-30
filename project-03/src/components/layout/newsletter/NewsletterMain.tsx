import { RelatedNewsProps } from "../../../types/NewsLetterTypes";

interface Props {
  data: RelatedNewsProps;
}

export const NewsletterMain = ({ data }: Props) => {
  return (
    <div className="w-[70%] ms-12 pt-10 border-t-2 border-t-black border-b-8 border-b-[#FF6F0F]">
      <div>
        <p className="text-[32px] font-[600] mb-6">{data.summaryTitle}</p>
        <p className="border-b-2 border-black text-[24px] leading-[32px] pb-10">
          {data.description}
        </p>
        <p className="text-[48px] font-[700] mt-16">{data.introductionTitle}</p>
        <p className="text-[24px] leading-[32px] mt-8">{data.description}</p>

        <div className="my-16">
          <p className="text-[48px] font-[700] mb-6">{data.key_trends.title}</p>
          <ol className="list-decimal ml-6 text-[24px] font-[600]">
            {data.key_trends.data.map((trend, index) => (
              <li key={index} className="mb-4">
                <p className="text-[24px] font-[600] mb-2">{trend.title}</p>
                <p className="text-[24px] font-[400]">{trend.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="my-16">
          <p className="text-[48px] font-[700] mb-6">
            {data.case_studies.title}
          </p>
          {data.case_studies.data.map((caseStudy, index) => (
            <div key={index} className="mb-4">
              <p className="text-[24px] font-[600] mb-2">{caseStudy.title}</p>
              <p className="text-[24px]">{caseStudy.description}</p>
            </div>
          ))}
        </div>

        <div className="my-16">
          <p className="text-[48px] font-[700] mb-6">
            {data.prevention_strategies.title}
          </p>
          {data.prevention_strategies.data.map((strategy, index) => (
            <div key={index} className="mb-4">
              <p className="text-[24px] font-[600] mb-2">{strategy.title}</p>
              <p className="text-[24px]">{strategy.description}</p>
            </div>
          ))}
        </div>

        <div className="my-16">
          <p className="text-[48px] font-[700] mb-6">{data.conclusionTitle}</p>
          <p className="text-[24px]">{data.conclusion}</p>
        </div>
      </div>
    </div>
  );
};
