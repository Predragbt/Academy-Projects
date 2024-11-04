import { createContext, useContext, useState } from "react";

interface AppContextType {
  language: string;
  toggleLanguage: (lang: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState("eng");

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
  };
  return (
    <AppContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
