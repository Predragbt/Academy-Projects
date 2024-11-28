import { useEffect, useState } from "react";
import { JobsHeader } from "../components/layout/jobs/JobsHeader";
import { useAppContext } from "../context/AppContext";
import { JobsFilters } from "../components/layout/jobs/JobsFilters";
import { JobsCards } from "../components/layout/jobs/JobsCards";
import { JobsPageProps } from "../types/JobsTypes";

export const Jobs = () => {
  const [jobsData, setJobsData] = useState<JobsPageProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { language } = useAppContext();
  const langKey = language as keyof JobsPageProps;

  const [selectedJobTitle, setSelectedJobTitle] = useState<string | null>(null);
  const [selectedSalaryRange, setSelectedSalaryRange] = useState<string | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState<string>("latest");

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

  const filteredJobs = jobsData[langKey].jobs
    .filter((job) => {
      return (
        (!selectedJobTitle || job.title === selectedJobTitle) &&
        (!selectedSalaryRange || job.salaryRange === selectedSalaryRange)
      );
    })
    .sort((a, b) => {
      const dateA = new Date(a.dateKey).getTime();
      const dateB = new Date(b.dateKey).getTime();
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
        sortOptions={jobsData[langKey].sortOptions}
      />
      <JobsCards jobs={filteredJobs} />
    </div>
  );
};
