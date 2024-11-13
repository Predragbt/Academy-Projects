import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

export interface ContactInfoProps {
  email: string;
  phone: string;
  address: string;
}

export interface ContactStepProps {
  number: number;
  description: string;
}

export interface ContactFieldProps {
  label: string;
  placeholder: string;
}

export interface ContactFormProps {
  fields: ContactFieldProps[];
  submit_button: {
    text: string;
  };
}

export interface ContactLanguageContentProps {
  header: string;
  contact_section: {
    title: string;
    description: string;
    contact_info: ContactInfoProps;
  };
  what_happens_next: {
    title: string;
    steps: ContactStepProps[];
  };
  form: ContactFormProps;
}

export interface ContactDataProps {
  eng: ContactLanguageContentProps;
  mk: ContactLanguageContentProps;
}

export const Contact = () => {
  const [contactData, setContactData] =
    useState<ContactLanguageContentProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useAppContext();

  useEffect(() => {
    const fetchContactData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/contact?lang=${language}`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch contact data: ${response.statusText}`
          );
        }
        const data: ContactDataProps = await response.json();
        setContactData(data[language as keyof ContactDataProps]);
      } catch (err) {
        setError("Error fetching contact data");
        console.error("Error fetching contact data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchContactData();
  }, [language]);

  if (loading) return <div>Loading contact data...</div>;
  if (error) return <div>{error}</div>;
  if (!contactData) return <div>No contact data</div>;

  return (
    <div>
      <h1>{contactData.header}</h1>
      <p>{contactData.contact_section.title}</p>
      <p>{contactData.contact_section.description}</p>
    </div>
  );
};
