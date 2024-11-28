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
    type: "text" | "email" | "number" | "select" | "textarea";
    options?: string[];
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