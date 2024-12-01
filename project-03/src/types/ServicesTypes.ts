export interface ServiceCard {
  id: string;
  title: string;
  titleContent: string;
  cardBtnText: string;
  pageBtnText: string;
  subtitle: string;
  imgPopUp: string;
  img: string;
  features: {
    id: string;
    title: string;
    description: string;
  }[];
  sections: {
    id: string;
    title: string;
    content: string;
  }[];
}

export interface HomeServicesSection {
  eng: {
    card1: ServiceCard;
    card2: ServiceCard;
    card3: ServiceCard;
    card4: ServiceCard;
    card5: ServiceCard;
    card6: ServiceCard;
  };
  mk: {
    card1: ServiceCard;
    card2: ServiceCard;
    card3: ServiceCard;
    card4: ServiceCard;
    card5: ServiceCard;
    card6: ServiceCard;
  };
}

export interface ServicesContextType {
  data: HomeServicesSection | null;
  loading: boolean;
  error: string | null;
}
