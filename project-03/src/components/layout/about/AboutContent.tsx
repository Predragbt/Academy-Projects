import { aboutSectionContent } from "../../../pages/About";

interface Props {
  aboutContent: aboutSectionContent[];
}

export const AboutContent = ({ aboutContent }: Props) => {
  return (
    <>
      {aboutContent.map((content, index) => (
        <div
          key={index}
          className="bg-[#323232] text-white px-8 py-10 md:basis-[calc(50%-16px)] flex-1"
        >
          <div>
            <img src={content.img} alt={content.title} />
          </div>
          <p className="text-[48px] font-[700] my-4">
            <span className="text-[#FF6F0F]">{content.ourStory}</span>
            {" "}{content.title}
          </p>

          <p>{content.description}</p>
        </div>
      ))}
    </>
  );
};
