import { useEffect, useState } from "react";
import { JobsHeader } from "../components/layout/jobs/JobsHeader";
import { useAppContext } from "../context/AppContext";
import { JobsFilters } from "../components/layout/jobs/JobsFilters";
import { JobsCards } from "../components/layout/jobs/JobsCards";

export interface JobsPageProps {
  eng: JobsLanguageSectionProps;
  mk: JobsLanguageSectionProps;
}

export interface JobsLanguageSectionProps {
  title: string;
  subtitle: string;
  filters: JobsFilterProps[];
  jobs: JobsJobProps[];
}

export interface JobsFilterProps {
  key: string;
  label: string;
  options: string[];
}

export interface JobsJobProps {
  date: string;
  title: string;
  salaryRange: string;
  description: string;
  employmentType: string[];
  applyText: string;
}

export const Jobs = () => {
  const [jobsData, setJobsData] = useState<JobsPageProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { language } = useAppContext();
  const langKey = language as keyof JobsPageProps;

  // Filter states
  const [selectedJobTitle, setSelectedJobTitle] = useState<string | null>(null);
  const [selectedSalaryRange, setSelectedSalaryRange] = useState<string | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");

  useEffect(() => {
    const fetchJobsData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/jobPage?lang=${language}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch jobs data: ${response.statusText}`);
        }
        const data: JobsPageProps = await response.json();
        setJobsData(data);
      } catch (err) {
        setError("Error fetching jobs data");
        console.error("Error fetching jobs data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobsData();
  }, [language]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!jobsData) return <div>No jobs data</div>;

  // Filter and sort jobs based on selected criteria
  const filteredJobs = jobsData[langKey].jobs
    .filter((job) => {
      return (
        (!selectedJobTitle || job.title === selectedJobTitle) &&
        (!selectedSalaryRange || job.salaryRange === selectedSalaryRange)
      );
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="px-[120px] py-[100px] ">
      <JobsHeader
        title={jobsData[langKey].title || "Default Title"}
        subtitle={jobsData[langKey].subtitle || "Default Subtitle"}
      />
      <JobsFilters
        filters={jobsData[langKey].filters}
        jobs={jobsData[langKey].jobs}
        selectedJobTitle={selectedJobTitle}
        setSelectedJobTitle={setSelectedJobTitle}
        selectedSalaryRange={selectedSalaryRange}
        setSelectedSalaryRange={setSelectedSalaryRange}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <JobsCards jobs={filteredJobs} />
    </div>
  );
};
