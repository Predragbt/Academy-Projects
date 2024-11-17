import {
  NewsletterLanguageContentProps,
  RelatedNewsProps,
} from "../../../pages/Newsletter";

interface Props {
  data: NewsletterLanguageContentProps;
  selectedCard?: RelatedNewsProps;
}

export const NewsletterHero = ({ data, selectedCard }: Props) => {
  return (
    <div
      className="pt-[200px] pb-[60px] px-[120px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${data.background_image})`,
      }}
    >
      <div className="flex">
        <div className="w-[35%]"></div>
        <div className="w-[65%]">
          <p className="text-[32px] font-[600] mb-6">
            {selectedCard?.subtitle || data.subtitle}
          </p>
          <p className="text-[60px] leading-[60px] font-[700] mb-16">
            {selectedCard?.title || data.title}
          </p>
          <div>
            <p className="flex text-[16x] font-[600]">
              <span className="mr-20">
                {data.posted_label} {data.posted_date}
              </span>
              <span className="text-[#FF6F0F]">
                {data.author_label} {data.author}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
