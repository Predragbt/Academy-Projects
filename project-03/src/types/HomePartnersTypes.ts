export interface PartnerProps {
  id: number;
  name: string;
  image: string;
}

export interface PartnersFormProps {
  title: string;
  placeholder: string;
  buttonText: string;
}

export interface PartnersHomeSectionLocaleProps {
  form: PartnersFormProps;
  partners: PartnerProps[];
  sectionTitle: string;
}

export interface PartnersHomeSectionProps {
  eng: PartnersHomeSectionLocaleProps;
  mk: PartnersHomeSectionLocaleProps;
}
