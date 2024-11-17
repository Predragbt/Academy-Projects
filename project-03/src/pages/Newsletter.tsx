import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { NewsletterHero } from "../components/layout/newsletter/NewsletterHero";

import { NewsletterMain } from "../components/layout/newsletter/NewsletterMain";
import { NewsletterSidebar } from "../components/layout/newsletter/NewsletterSiebar";

export interface NewsletterKeyTrendProps {
  title: string;
  description: string;
}

export interface NewsletterCaseStudyProps {
  title: string;
  description: string;
}

export interface NewsletterPreventionStrategyProps {
  title: string;
  description: string;
}

export interface NewsletterContentProps {
  title: string;
  summary: string;
  introduction: string;
  key_trends: {
    title: string;
    data: NewsletterKeyTrendProps[];
  };
  case_studies: {
    title: string;
    data: NewsletterCaseStudyProps[];
  };
  prevention_strategies: {
    title: string;
    data: NewsletterPreventionStrategyProps[];
  };
  conclusionTitle: string;
  conclusion: string;
}

export interface NewsletterContributorProps {
  id: number;
  email: string;
  description: string;
}

export interface NewsletterSubscriberProps {
  id: number;
  email: string;
}

export interface RelatedNewsProps {
  title: string;
  subtitle: string;
  posted_date: string;
  description: string;
  btnText: string;
}

export interface ContributorFormProps {
  title: string;
  fields: {
    id: string;
    label: string;
    placeholder: string;
    type: "email" | "textarea";
  }[];
  submit_button: {
    text: string;
  };
}

export interface NewsletterLanguageContentProps {
  title: string;
  subtitle: string;
  sidebarTitle: string;
  btnText: string;
  posted_date: string;
  posted_label: string;
  author: string;
  author_label: string;
  background_image: string;
  category: string;
  content: NewsletterContentProps;
  related_news: RelatedNewsProps[];
  contributor_form: ContributorFormProps;
  newsletter_subscription: NewsletterSubscriberProps[];
}

export interface NewsletterDataProps {
  eng: NewsletterLanguageContentProps;
  mk: NewsletterLanguageContentProps;
}

export interface SelectedCardProps {
  title: string;
  subtitle: string;
}

export const Newsletter = () => {
  const [newsletterData, setNewsletterData] =
    useState<NewsletterLanguageContentProps | null>(null);
  const [selectedCard, setSelectedCard] = useState<
    RelatedNewsProps | undefined
  >(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useAppContext();

  useEffect(() => {
    const fetchNewsletterData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/newsletter?lang=${language}`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch newsletter data: ${response.statusText}`
          );
        }
        const data: NewsletterDataProps = await response.json();
        const langData = data[language as keyof NewsletterDataProps];
        setNewsletterData(langData);
        setSelectedCard(langData.related_news[0]); // Default to the first card
      } catch (err) {
        setError("Error fetching newsletter data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsletterData();
  }, [language]);

  const handleCardClick = (card: RelatedNewsProps) => {
    setSelectedCard(card);
  };

  if (loading) return <div>Loading newsletter data...</div>;
  if (error) return <div>{error}</div>;
  if (!newsletterData) return <div>No newsletter data</div>;

  return (
    <div>
      <NewsletterHero data={newsletterData} selectedCard={selectedCard} />
      <div className="px-[120px] py-12">
        <p className="text-[32px] font-[600] text-[#FF6F0F] pb-2 ps-6">
          {newsletterData.sidebarTitle}
        </p>
        <div className="flex">
          <div className="scrollbar-y overflow-y-scroll w-[25%]">
            <NewsletterSidebar
              data={newsletterData}
              onCardClick={handleCardClick}
              selectedCard={selectedCard} // Pass selectedCard for filtering
            />
          </div>
          {selectedCard && <NewsletterMain data={selectedCard} />}
        </div>
      </div>
    </div>
  );
};
