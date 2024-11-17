import {
  NewsletterLanguageContentProps,
  RelatedNewsProps,
} from "../../../pages/Newsletter";
import { ButtonComponent } from "../../common/Button";
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
        <p className="text-[32px] font-[600] text-[#FF6F0F] pb-2 ps-6 mb-6 border-b-2 border-black">
          {data.contributor_form.title}
        </p>
        <div>
          <div className="bg-[#E6E6E6] p-6 border-b-4 border-[#FF6F0F]">
            <div className="mb-12">
              {data.contributor_form.fields.map((field) => (
                <div key={field.id} className="mb-4">
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      className="w-full p-4 bg-[#B8B8B8] placeholder-white text-center"
                      placeholder={field.placeholder}
                      rows={8}
                    />
                  ) : (
                    <input
                      id={field.id}
                      type={field.type}
                      className="w-full p-4 bg-[#B8B8B8] placeholder-white text-center"
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}
            </div>
            <ButtonComponent
              text={data.contributor_form.submit_button.text}
              onClick={() => {}}
              width="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
