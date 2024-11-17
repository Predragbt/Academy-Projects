import {
  NewsletterLanguageContentProps,
  RelatedNewsProps,
} from "../../../pages/Newsletter";
import { NewsletterCard } from "./NewsletterCard";

interface Props {
  data: NewsletterLanguageContentProps;
  onCardClick: (card: RelatedNewsProps) => void;
  selectedCard: RelatedNewsProps | undefined;
}

export const NewsletterSidebar = ({
  data,
  onCardClick,
  selectedCard,
}: Props) => {
  return (
    <div className="mr-12 pt-10 border-t-2 border-black">
      {data.related_news
        .filter((news) => news.title !== selectedCard?.title) // Exclude selected card
        .map((news) => (
          <div key={news.title}>
            <NewsletterCard data={news} onCardClick={onCardClick} />
          </div>
        ))}

      <div>
        <p className="text-[32px] font-[600] text-[#FF6F0F] pb-2 ps-6">
          {data.contributor_form.title}
        </p>
      </div>
    </div>
  );
};
