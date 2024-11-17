import {
  NewsletterLanguageContentProps,
  RelatedNewsProps,
} from "../../../pages/Newsletter";

interface Props {
  data: NewsletterLanguageContentProps;
  selectedCard?: RelatedNewsProps;
}

export const NewsletterHero = ({ data, selectedCard }: Props) => {
  const title = selectedCard?.title || data.related_news[0]?.title;
  const subtitle = selectedCard?.subtitle || data.related_news[0]?.subtitle;
  const posted_date =
    selectedCard?.posted_date || data.related_news[0]?.posted_date;
  const posted_label =
    selectedCard?.posted_label || data.related_news[0]?.posted_label;
  const author = selectedCard?.author || data.related_news[0]?.author;
  const author_label =
    selectedCard?.author_label || data.related_news[0]?.author_label;

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
          <p className="text-[32px] font-[600] mb-6">{subtitle}</p>
          <p className="text-[60px] leading-[60px] font-[700] mb-16">{title}</p>
          <div>
            <p className="flex text-[16x] font-[600]">
              <span className="mr-20">
                {posted_label} {posted_date}
              </span>
              <span className="text-[#FF6F0F]">
                {author_label} {author}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
