import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";

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

const defaultContext: ServicesContextType = {
  data: null,
  loading: true,
  error: null,
};

export const ServicesContext =
  createContext<ServicesContextType>(defaultContext);

// Provider Component
export const ServicesProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<HomeServicesSection | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLayoutData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/services`);
      if (!response.ok) {
        throw new Error(`Failed to fetch layout data: ${response.statusText}`);
      }
      const fetchedData: HomeServicesSection = await response.json();
      setData(fetchedData);
    } catch (err) {
      console.error("Error fetching layout data:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLayoutData();
  }, []);

  return (
    <ServicesContext.Provider value={{ data, loading, error }}>
      {children}
    </ServicesContext.Provider>
  );
};

// Hook to Consume Context
export const useServicesContext = (): ServicesContextType => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error(
      "useServicesContext must be used within a ServicesProvider"
    );
  }
  return context;
};
