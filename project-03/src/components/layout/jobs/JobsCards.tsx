import { JobsJobProps } from "../../../pages/Jobs";

interface JobsCardsProps {
  jobs: JobsJobProps[];
}

export const JobsCards = ({ jobs }: JobsCardsProps) => {
  return (
    <div className="flex w-full flex-wrap gap-x-6 gap-y-10">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div
            key={job.title}
            className=" basis-[calc(50%-16px)] bg-[#2A2A2A] text-white p-4"
          >
            <p>Date Posted: {job.date}</p>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Salary: {job.salaryRange}</p>
            <p>Employment Type: {job.employmentType.join(", ")}</p>
            <button>{job.applyText}</button>
          </div>
        ))
      ) : (
        <p>No jobs found for the selected criteria.</p>
      )}
    </div>
  );
};
