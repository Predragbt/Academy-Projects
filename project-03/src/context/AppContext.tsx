import { createContext, useContext, useEffect, useState } from "react";

// Interfaces for layout data
interface HeaderLink {
  name: string;
  link: string;
}

interface NavigationGroup {
  primary: HeaderLink[];
  secondary: HeaderLink[];
}

interface HeaderData {
  topLinks: HeaderLink[];
  navigation: NavigationGroup;
}

interface TopFooterSection {
  title: string;
  items: string[];
}

interface FooterData {
  topFooter: TopFooterSection[];
  bottomFooter: HeaderLink[];
  newsletterCheckbox: string;
  submitButton: string;
}

interface LayoutData {
  header: HeaderData;
  footer: FooterData;
}

interface AppContextType {
  language: string;
  toggleLanguage: (lang: string) => void;
  layoutData: LayoutData | null;
  loading: boolean;
  error: string | null;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState("eng");
  const [layoutData, setLayoutData] = useState<LayoutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const fetchLayoutData = async (lang: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/layoutData`);
      if (!response.ok) {
        throw new Error(`Failed to fetch layout data: ${response.statusText}`);
      }

      const data: { header: any; footer: any } = await response.json();
      console.log("Fetched layout data:", data);

      const languageHeader = data.header?.[lang];
      const languageFooter = data.footer?.[lang];

      if (!languageHeader || !languageFooter) {
        throw new Error(`Missing data for language '${lang}'`);
      }

      setLayoutData({
        header: {
          topLinks: languageHeader.topLinks || [],
          navigation: {
            primary: languageHeader.navigation.primary || [],
            secondary: languageHeader.navigation.secondary || [],
          },
        },
        footer: {
          topFooter: languageFooter.topFooter || [],
          bottomFooter: languageFooter.bottomFooter || [],
          newsletterCheckbox: languageFooter.newsletterCheckbox,
          submitButton: languageFooter.submitButton,
        },
      });
    } catch (error) {
      console.error("Error fetching layout data:", error);
      setError("Error fetching layout data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLayoutData(language);
  }, [language]);

  return (
    <AppContext.Provider
      value={{ language, toggleLanguage, layoutData, loading, error }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
