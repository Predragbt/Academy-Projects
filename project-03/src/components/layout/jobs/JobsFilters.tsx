import { JobsFilterProps, JobsJobProps } from "../../../pages/Jobs";
import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
  filters: JobsFilterProps[];
  jobs: JobsJobProps[];
  selectedJobTitle: string | null;
  setSelectedJobTitle: Dispatch<SetStateAction<string | null>>;
  selectedSalaryRange: string | null;
  setSelectedSalaryRange: Dispatch<SetStateAction<string | null>>;
  sortOrder: "latest" | "oldest";
  setSortOrder: Dispatch<SetStateAction<"latest" | "oldest">>;
}

export const JobsFilters = ({
  filters,
  jobs,
  selectedJobTitle,
  setSelectedJobTitle,
  selectedSalaryRange,
  setSelectedSalaryRange,
  sortOrder,
  setSortOrder,
}: Props) => {
  const jobTitles = [...new Set(jobs.map((job) => job.title))];
  const salaryRanges = [...new Set(jobs.map((job) => job.salaryRange))];

  // State to toggle dropdown visibility
  const [isJobTitleDropdownOpen, setJobTitleDropdownOpen] = useState(false);
  const [isSalaryRangeDropdownOpen, setSalaryRangeDropdownOpen] =
    useState(false);
  const [isSortOrderDropdownOpen, setSortOrderDropdownOpen] = useState(false);

  const toggleDropdown = (
    dropdownSetter: Dispatch<SetStateAction<boolean>>
  ) => {
    dropdownSetter((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center gap-10 my-20">
      {/* Job Title Dropdown */}
      <div className="relative border border-[#FF6F0F] w-[18%]  text-center">
        <div className="flex items-center justify-between">
          <button
            className="w-full px-6 py-2 bg-transparent cursor-pointer text-center"
            onClick={() => toggleDropdown(setJobTitleDropdownOpen)}
          >
            {selectedJobTitle ||
              filters.find((f) => f.key === "jobTitle")?.label ||
              "Select a Job Title"}
          </button>
          {selectedJobTitle && (
            <button
              onClick={() => setSelectedJobTitle(null)}
              className="text-gray-500 hover:text-gray-700 font-bold px-4"
            >
              X
            </button>
          )}
        </div>
        {isJobTitleDropdownOpen && (
          <div className="absolute w-full bg-white border border-gray-300 h-40 overflow-y-auto">
            {jobTitles.map((title, index) => (
              <div
                key={title}
                onClick={() => {
                  setSelectedJobTitle(title);
                  setJobTitleDropdownOpen(false);
                }}
                className={`px-6 py-2 cursor-pointer ${
                  index < salaryRanges.length - 1 && "border-b border-gray-300"
                } hover:bg-gray-100`}
              >
                {title}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Salary Range Dropdown */}
      <div className="relative border border-[#FF6F0F] w-[18%] text-center">
        <div className="flex items-center justify-between px-2">
          <button
            className="w-full px-6 py-2 bg-transparent cursor-pointer text-center"
            onClick={() => toggleDropdown(setSalaryRangeDropdownOpen)}
          >
            {selectedSalaryRange ||
              filters.find((f) => f.key === "salaryRange")?.label ||
              "Select a Salary Range"}
          </button>
          {selectedSalaryRange && (
            <button
              onClick={() => setSelectedSalaryRange(null)}
              className="text-gray-500 hover:text-gray-700 font-bold px-1"
            >
              X
            </button>
          )}
        </div>
        {isSalaryRangeDropdownOpen && (
          <div className="absolute w-full bg-white border border-gray-300 z-10 h-40 overflow-y-auto">
            {salaryRanges.map((range, index) => (
              <div
                key={range}
                onClick={() => {
                  setSelectedSalaryRange(range);
                  setSalaryRangeDropdownOpen(false);
                }}
                className={`px-6 py-2 cursor-pointer ${
                  index < salaryRanges.length - 1 && "border-b border-gray-300"
                } hover:bg-gray-100`}
              >
                {range}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sort Order Dropdown */}
      <div className="relative border border-[#FF6F0F] w-[18%] text-center">
        <button
          className="w-full px-6 py-2 bg-transparent cursor-pointer text-center"
          onClick={() => toggleDropdown(setSortOrderDropdownOpen)}
        >
          {sortOrder === "latest" ? "Latest to Oldest" : "Oldest to Latest"}
        </button>
        {isSortOrderDropdownOpen && (
          <div className="absolute w-full bg-white border border-gray-300 z-10">
            <div
              onClick={() => {
                setSortOrder("latest");
                setSortOrderDropdownOpen(false);
              }}
              className="px-6 py-2 border-b border-gray-300 cursor-pointer hover:bg-gray-100"
            >
              Latest to Oldest
            </div>

            <div
              onClick={() => {
                setSortOrder("oldest");
                setSortOrderDropdownOpen(false);
              }}
              className="px-6 py-2 cursor-pointer hover:bg-gray-100"
            >
              Oldest to Latest
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
