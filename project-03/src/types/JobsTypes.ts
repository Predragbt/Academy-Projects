export interface JobsPageProps {
  eng: JobsLanguageSectionProps;
  mk: JobsLanguageSectionProps;
}

export interface JobsLanguageSectionProps {
  title: string;
  subtitle: string;
  filters: JobsFilterProps[];
  jobs: JobsJobProps[];
  sortOptions: SortOptionsProps;
}

export interface JobsFilterProps {
  key: string;
  label: string;
  options: string[];
}

export interface JobsJobProps {
  date: string;
  dateKey: string;
  title: string;
  salaryRange: string;
  description: string;
  employmentType: {
    type: string;
    data: string[];
  };
  applyText: string;
}

export interface SortOptionsProps {
  latest: string;
  oldest: string;
}
