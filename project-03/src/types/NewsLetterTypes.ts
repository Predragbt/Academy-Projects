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

export interface RelatedNewsProps {
  title: string;
  subtitle: string;
  posted_date: string;
  posted_label: string;
  author: string;
  author_label: string;
  summaryTitle: string;
  introductionTitle: string;
  description: string;
  btnText: string;
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

export interface ContributorFormProps {
  title: string;
  fields: {
    id: string;
    placeholder: string;
    type: "email" | "textarea";
  }[];
  submit_button: {
    text: string;
  };
}

export interface NewsletterFooterFormProps {
  title: string;
  description: string;
  fields: {
    id: string;
    placeholder: string;
    type: "email";
  }[];
  submit_button: {
    text: string;
  };
}

export interface NewsletterLanguageContentProps {
  sidebarTitle: string;
  btnText: string;
  background_image: string;
  contributor_form: ContributorFormProps;
  newsletterFooterForm: NewsletterFooterFormProps;
  related_news: RelatedNewsProps[];
}

export interface NewsletterDataProps {
  eng: NewsletterLanguageContentProps;
  mk: NewsletterLanguageContentProps;
}
