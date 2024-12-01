import { SuccessStoryProps } from "../../../types/AboutPageTypes";

interface Props {
  successStories: SuccessStoryProps;
}

export const AboutSuccsessStories = ({ successStories }: Props) => {
  return (
    <div className="px-[120px] py-[120px]">
      <p className="text-center font-[700] text-[48px] mb-16">
        {successStories.title}
      </p>

      <div className="flex overflow-x-scroll gap-6 scrollbar-custom">
        {successStories.data.map((story, index) => (
          <div
            key={index}
            className="flex flex-shrink-0 basis-[calc(33%-16px)]"
          >
            <div className="flex-shrink-0 mr-4">
              <img src={story.img} alt={story.challengeTitle} />
            </div>
            <div className="flex flex-col gap-5 border-l-2 border-[#FF6F0F] pl-6 pb-6 mb-16">
              <p>
                <span className="font-bold">{story.companyTitle}:</span>{" "}
                {story.company}
              </p>
              <p>
                <span className="font-bold">{story.challengeTitle}:</span>{" "}
                {story.challenge}
              </p>
              <p>
                <span className="font-bold">{story.solutionTitle}:</span>{" "}
                {story.solution}
              </p>
              <p>
                <span className="font-bold">{story.outcomeTitle}:</span>{" "}
                {story.outcome}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
