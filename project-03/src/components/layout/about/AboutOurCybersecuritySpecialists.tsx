import { TeamSectionProps } from "../../../context/TeamMembersContext";
import { TeamMemberCard } from "../../common/TeamMemberCard";
import { TeamMembersBtn } from "../../common/TeamMembersBtn";

interface Props {
  teamMembers: TeamSectionProps;
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
      <TeamMembersBtn
        buttonText={teamMembers.buttonText}
        justify="justify-end"
        marginTop="mt-12"
      />
    </div>
  );
};
