import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAppContext } from "./AppContext";
import {
  TestimonialsDataProps,
  TestimonialsProps,
} from "../types/TestimonialsTypes";

export const TestimonialsContext = createContext<{
  testimonialsData: TestimonialsProps | null;
  loading: boolean;
  error: string | null;
} | null>(null);

export const TestimonialsProvider = ({ children }: { children: ReactNode }) => {
  const [testimonialsData, setTestimonialsData] =
    useState<TestimonialsProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useAppContext();

  useEffect(() => {
    const fetchTestimonialsData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/testimonials?lang=${language}`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch testimonials data: ${response.statusText}`
          );
        }

        const data: TestimonialsDataProps = await response.json();
        const langData = data[language as keyof TestimonialsDataProps];
        setTestimonialsData(langData);
      } catch (err) {
        setError("Error fetching testimonials data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonialsData();
  }, [language]);

  return (
    <TestimonialsContext.Provider value={{ testimonialsData, loading, error }}>
      {children}
    </TestimonialsContext.Provider>
  );
};

export const useTestimonialsContext = () => {
  const context = useContext(TestimonialsContext);
  if (!context) {
    throw new Error(
      "useTestimonialsContext must be used within a TestimonialsProvider"
    );
  }
  return context;
};
