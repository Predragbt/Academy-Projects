export interface AboutPageData {
  en: LanguageData;
  mk: LanguageData;
}

export interface LanguageData {
  bannerTitle: string;
  aboutContent: aboutSectionContent[];
  locations: LocationProps;
  certifications: CertificationProps;
  successStories: SuccessStoryProps;
}

export interface aboutSectionContent {
  img: string;
  ourStory: string;
  title: string;
  description: string;
}

export interface LocationProps {
  ourStory: string;
  title: string;
  img: string;
  data: Array<{
    country: string;
    address: string;
    city: string;
    postalCode: string;
  }>;
}

export interface CertificationProps {
  title: string;
  data: Array<{
    title: string;
    subtitle: string;
    description: string;
    actionLabel: string;
    img: string;
  }>;
}

export interface SuccessStoryProps {
  title: string;
  data: Array<{
    img: string;
    companyTitle: string;
    company: string;
    challengeTitle: string;
    challenge: string;
    solutionTitle: string;
    solution: string;
    outcomeTitle: string;
    outcome: string;
  }>;
}