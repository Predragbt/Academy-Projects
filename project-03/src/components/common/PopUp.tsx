import { TeamMemberProps } from "../../context/TeamMembersContext";
import { TeamMemberCard } from "./TeamMemberCard";

interface PopUpProps {
  member: TeamMemberProps;
  onClose: () => void;
}

export const PopUp = ({ member, onClose }: PopUpProps) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#2A2A2A] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <TeamMemberCard
          member={member}
          onButtonClick={onClose}
          direction="reverse"
        />
      </div>
    </div>
  );
};
