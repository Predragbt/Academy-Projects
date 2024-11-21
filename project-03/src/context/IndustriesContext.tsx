import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";

interface IndustryProps {
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

interface IndustriesSectionDataProps {
  id: string;
  eng: LanguageContentProps;
  mk: LanguageContentProps;
}

export interface IndustriesContextType {
  industriesData: IndustriesSectionDataProps | null;
  loading: boolean;
  error: string | null;
}

export const IndustriesContext = createContext<IndustriesContextType | null>(
  null
);

export const IndustriesProvider = ({ children }: { children: ReactNode }) => {
  const [industriesData, setIndustriesData] =
    useState<IndustriesSectionDataProps | null>(null);
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
        const data: IndustriesSectionDataProps = await response.json();
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

export const useIndustriesContext = () => {
  const context = useContext(IndustriesContext);
  if (!context) {
    throw new Error(
      "useIndustriesContext must be used within an IndustriesProvider"
    );
  }
  return context;
};
