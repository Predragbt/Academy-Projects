import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";

// Interfaces for the data structure
export interface ServiceCard {
  id: string;
  title: string;
  titleContent: string;
  cardBtnText: string;
  pageBtnText: string;
  subtitle: string;
  img: string;
  features: {
    title: string;
    description: string;
  }[];
  sections: {
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
  };
  mk: {
    card1: ServiceCard;
    card2: ServiceCard;
    card3: ServiceCard;
    card4: ServiceCard;
    card5: ServiceCard;
  };
}

// Context setup
export const ServicesContext = createContext<HomeServicesSection | null>(null);

export const ServicesProvider = ({ children }: { children: ReactNode }) => {
  const [fetchedData, setFetchedData] = useState<HomeServicesSection | null>(null);
  const [loading, setLoading] = useState<boolean>(true);  // New loading state

  // Fetch function
  const fetchLayoutData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/services`);
      if (!response.ok) {
        throw new Error(`Failed to fetch layout data: ${response.statusText}`);
      }
      const data: HomeServicesSection = await response.json();
      setFetchedData(data);
    } catch (error) {
      console.error("Error fetching layout data:", error);
    } finally {
      setLoading(false);  // Ensure loading is set to false after fetch attempt
    }
  };

  useEffect(() => {
    fetchLayoutData();
  }, []);

  // Render a fallback UI while loading
  if (loading) {
    return <div>Loading services data...</div>;
  }

  return (
    <ServicesContext.Provider value={fetchedData}>
      {children}
    </ServicesContext.Provider>
  );
};

// Hook for easy access to the context
export const useServicesContext = (): HomeServicesSection | null => {
  const context = useContext(ServicesContext);
  if (context === null) {
    console.warn("Services data is still loading or failed to load.");
  }
  return context;
};
