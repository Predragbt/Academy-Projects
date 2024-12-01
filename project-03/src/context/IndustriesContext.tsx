import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import {
  IndustriesContextType,
  IndustriesSectionDataProps,
} from "../types/IndustriesTypes";

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
