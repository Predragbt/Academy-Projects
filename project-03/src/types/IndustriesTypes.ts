export interface IndustryProps {
  id: string;
  name: string;
  icon: string;
  description: string;
  buttonText: string;
}

export interface LanguageContentProps {
  industriesTitle: string;
  industriesHeroImg: string;
  homeTitle: string;
  formDescription: string;
  formTitle: string;
  formBtn: string;
  formPlaceholder: string;
  homeDescription: string;
  buttonContent: string;
  industriesDescription: string;
  industries: IndustryProps[];
}

export interface IndustriesSectionDataProps {
  id: string;
  eng: LanguageContentProps;
  mk: LanguageContentProps;
}

export interface IndustriesContextType {
  industriesData: IndustriesSectionDataProps | null;
  loading: boolean;
  error: string | null;
}
