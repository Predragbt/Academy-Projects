import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";

// Interfaces for Industry data
interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  buttonText: string;
}

export interface LanguageContent {
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
  industries: Industry[];
}

interface IndustriesSectionData {
  id: string;
  eng: LanguageContent;
  mk: LanguageContent;
}

// Context type that includes industries data, loading, and error states
export interface IndustriesContextType {
  industriesData: IndustriesSectionData | null;
  loading: boolean;
  error: string | null;
}

// Context creation with type `IndustriesContextType | null`
export const IndustriesContext = createContext<IndustriesContextType | null>(
  null
);

// Provider Component
export const IndustriesProvider = ({ children }: { children: ReactNode }) => {
  const [industriesData, setIndustriesData] =
    useState<IndustriesSectionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIndustriesData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/industriesSection`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch industries data: ${response.statusText}`
          );
        }
        const data: IndustriesSectionData = await response.json();
        setIndustriesData(data);
      } catch (err) {
        setError("Error fetching industries data");
        console.error("Error fetching industries data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustriesData();
  }, []);

  return (
    <IndustriesContext.Provider value={{ industriesData, loading, error }}>
      {children}
    </IndustriesContext.Provider>
  );
};

// Custom hook to use the IndustriesContext
export const useIndustriesContext = () => {
  const context = useContext(IndustriesContext);
  if (!context) {
    throw new Error(
      "useIndustriesContext must be used within an IndustriesProvider"
    );
  }
  return context;
};
