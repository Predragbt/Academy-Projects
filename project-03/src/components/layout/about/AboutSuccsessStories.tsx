import { SuccessStoryProps } from "../../../pages/About";

interface Props {
  successStories: SuccessStoryProps;
}

export const AboutSuccsessStories = ({ successStories }: Props) => {
  return (
    <div className="px-[120px] py-[120px]">
      <p className="text-center font-[700] text-[48px]">
        {successStories.title}
      </p>

      <div>
        {successStories.data.map((story, index) => (
          <div key={index}>
            <div>
              <img src={story.img} alt="" />
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};
