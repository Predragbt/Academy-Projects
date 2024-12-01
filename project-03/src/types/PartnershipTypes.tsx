export interface PartnershipHeaderProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface PartnerProps {
  id: number;
  name: string;
  title: string;
  description: string;
  image1: string;
  image2: string;
}

export interface PartnershipLanguageContentProps {
  header: PartnershipHeaderProps;
  partners: PartnerProps[];
}

export interface PartnershipDataProps {
  eng: PartnershipLanguageContentProps;
  mk: PartnershipLanguageContentProps;
}
