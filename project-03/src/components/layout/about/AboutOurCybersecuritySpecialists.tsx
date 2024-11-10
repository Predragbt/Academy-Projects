import { TeamSection } from "../../../context/TeamMembersContext";
import { TeamMemberCard } from "../../common/TeamMemberCard";

interface Props {
  teamMembers: TeamSection;
}
export const AboutOurCybersecuritySpecialists = ({ teamMembers }: Props) => {
  return (
    <div className="px-[120px] py-[50px] bg-[#323232]">
      <div className="text-center">
        <p className="text-[48px] font-[700] text-[#FF6F0F] mb-12">
          {teamMembers.title}
        </p>
      </div>
      <div className="flex justify-center gap-20 mt-12">
        {teamMembers.members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};
