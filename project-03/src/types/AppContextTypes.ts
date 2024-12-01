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

export interface LayoutData {
  header: HeaderData;
  footer: FooterData;
}

export interface AppContextType {
  language: string;
  toggleLanguage: (lang: string) => void;
  layoutData: LayoutData | null;
  loading: boolean;
  error: string | null;
}
