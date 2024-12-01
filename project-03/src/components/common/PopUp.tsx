import { TeamMemberProps } from "../../types/TeamMembersTypes";
import { TeamMemberCard } from "./TeamMemberCard";

interface PopUpProps {
  member: TeamMemberProps;
  onClose: () => void;
}

export const PopUp = ({ member, onClose }: PopUpProps) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="flex relative w-[75%]"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "transparent",
        }}
      >
        <div>
          <TeamMemberCard
            member={member}
            onButtonClick={onClose}
            direction="reverse"
          />
        </div>
        <div
          className="px-24 flex flex-col justify-center items-center"
          style={{
            backgroundColor: "#FF6F0F",
            clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)",
          }}
        >
          <div className="w-full">
            <p className="text-[24px] font-[500] mb-12">{member.bioTitle}</p>
          </div>
          <div className="flex">
            <p className="pr-2">{member.bio}</p>
            <p className="pl-2">{member.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
