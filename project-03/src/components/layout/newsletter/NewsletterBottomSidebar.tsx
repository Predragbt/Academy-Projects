import {
  NewsletterLanguageContentProps,
  RelatedNewsProps,
} from "../../../types/NewsLetterTypes";
import { NewsletterCard } from "./NewsletterCard";

interface Props {
  data: NewsletterLanguageContentProps;
  onCardClick: (card: RelatedNewsProps) => void;
  selectedCard: RelatedNewsProps | undefined;
}

export const NewsletterBottomSidebar = ({
  data,
  onCardClick,
  selectedCard,
}: Props) => {
  return (
    <div className="px-[120px] mt-24 bg-[#323232] py-12">
      <div className="flex overflow-x-scroll scrollbar-custom pb-20">
        <div className="flex items-end w-1/4 border-b-2 border-[#FF6F0F] me-6">
          <button className="p-4 text-[#FF6F0F] text-[32px] font-[600]">
            {data.btnText}
          </button>
        </div>
        <div className="flex w-3/4 gap-4">
          {data.related_news
            .filter((news) => news.title !== selectedCard?.title) // Exclude selected card
            .map((news) => (
              <div
                key={news.title}
                className="flex-shrink-0 w-[calc(33%-12px)]"
              >
                <NewsletterCard
                  data={news}
                  onCardClick={onCardClick}
                  bgColor={"bg-[#FFD2B5]"}
                  height={"h-full"}
                  justify={"flex flex-col justify-between"}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
