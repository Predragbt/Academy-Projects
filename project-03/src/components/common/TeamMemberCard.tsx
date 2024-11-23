import { useState } from "react";
import { TeamMemberProps } from "../../context/TeamMembersContext";
import { PopUp } from "./PopUp";

interface TeamMemberCardProps {
  member: TeamMemberProps;
  onButtonClick?: () => void;
  direction?: "default" | "reverse";
}

export const TeamMemberCard = ({
  member,
  onButtonClick,
  direction = "default",
}: TeamMemberCardProps) => {
  const arrow = direction === "default" ? "&#129106;" : "&#129104;";
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  return (
    <div className="w-[400px]  bg-transparent h-full flex flex-col relative">
      <div>
        <img src={member.image} alt={member.name} className="w-full" />
      </div>
      <div className="h-full bg-[#2A2A2A]">
        <div className="text-white p-4 h-full flex flex-col justify-between bg-[#2A2A2A]">
          <div>
            <p className="text-[24px] font-medium">{member.name}</p>
            <p className="text-[20px] font-light mb-4 text-gray-300">
              {member.position}
            </p>
          </div>
          <p className="text-[18px] mb-6">{member.description}</p>
          <button
            className="bg-[#FF6F0F] z-20 p-2 rounded-full w-12 h-12 flex items-center justify-center text-[30px] hover:bg-[#FFBD91] transition duration-300"
            onClick={onButtonClick || togglePopUp}
            dangerouslySetInnerHTML={{ __html: arrow }}
          />
        </div>
      </div>

      {isPopUpVisible && <PopUp member={member} onClose={togglePopUp} />}
    </div>
  );
};
