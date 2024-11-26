import { useAppContext } from "../../../context/AppContext";
import {
  TeamDataProps,
  TeamDataLanguageProps,
  useTeamMembersContext,
} from "../../../context/TeamMembersContext";
import { TeamMemberCard } from "../../common/TeamMemberCard";
import { TeamMembersBtn } from "../../common/TeamMembersBtn";

export const TeamLeadershipSection = () => {
  const { teamMembersData, loading, error } = useTeamMembersContext();
  const { language } = useAppContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!teamMembersData) return <div>No team members data</div>;

  const languageContent = teamMembersData[
    language as keyof TeamDataProps
  ] as TeamDataLanguageProps;

  if (!languageContent) {
    return <div>Content for this language is not available.</div>;
  }

  return (
    <div className="px-[120px] py-20 bg-[#323232]">
      <p className="text-center text-[48px] text-[#FF6F0F] font-[700] mb-6">
        {languageContent.leadershipTeam.title}
      </p>
      <p className="text-center text-[20px] text-white font-[600] px-[250px]">
        {languageContent.leadershipTeam.content}
      </p>
      <div className="flex flex-wrap justify-center gap-20 mt-20">
        {languageContent.leadershipTeam.members.map((member) => (
          <div key={member.id}>
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>
      <TeamMembersBtn
        buttonText={languageContent.leadershipTeam.buttonText}
        
      />
    </div>
  );
};
