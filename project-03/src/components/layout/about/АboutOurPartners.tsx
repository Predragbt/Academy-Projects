import { TeamSectionProps } from "../../../types/TeamMembersTypes";
import { TeamMemberCard } from "../../common/TeamMemberCard";

interface Props {
  teamMembers: TeamSectionProps;
}
export const AboutOurPartners = ({ teamMembers }: Props) => {
  return (
    <div className="px-[120px] py-[50px]">
      <div className="text-center">
        <p className="text-[48px] font-[700] text-[#FF6F0F] mb-8">
          {teamMembers.title}
        </p>
        <p className="text-[20px] font-[600]">{teamMembers.content}</p>
      </div>
      <div className="flex justify-center gap-20 mt-12">
        {teamMembers.members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};
