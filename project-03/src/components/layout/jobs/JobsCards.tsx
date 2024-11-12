import { JobsJobProps } from "../../../pages/Jobs";
import { ButtonComponent } from "../../common/Button";

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
            className=" basis-[calc(50%-16px)] flex flex-col justify-between bg-[#2A2A2A] text-white p-10"
          >
            <div className="bg-white text-black w-[144px] h-[52px] flex items-center justify-center font-[700]">
              {job.date}
            </div>
            <p className="text-[48px] leading-[52px] font-[700] my-6">
              {job.title}
            </p>
            <p className="text-[24px]">{job.description}</p>
            <div className="flex gap-x-4 w-full my-8">
              {job.employmentType.data.map((type) => (
                <div
                  key={type}
                  className={`text-center border-2 p-2 w-full ${
                    job.employmentType.type === type
                      ? "border-[#FF6F0F] text-[#FF6F0F]"
                      : "border-white text-white"
                  }`}
                >
                  {type}
                </div>
              ))}
            </div>
            <button className="bg-[#FF6F0F] h-[52px] w-full text-white hover:bg-[#FFBD91] text-base font-medium transition duration-300">
              {job.applyText}
            </button>
          </div>
        ))
      ) : (
        <p>No jobs found for the selected criteria.</p>
      )}
    </div>
  );
};
