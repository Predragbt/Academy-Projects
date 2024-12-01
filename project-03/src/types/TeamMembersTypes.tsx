export interface TeamMemberProps {
    id: string;
    name: string;
    position: string;
    description: string;
    image: string;
    bioTitle: string;
    bio: string;
  }
  
  export interface TeamSectionProps {
    id: string;
    title: string;
    buttonText: string;
    content: string;
    members: TeamMemberProps[];
  }
  
  export interface TeamDataLanguageProps {
    leadershipTeam: TeamSectionProps;
    partnersTeam: TeamSectionProps;
    cybersecuritySpecialistsTeam: TeamSectionProps;
    securityAwarenessAdvisorsTeam: TeamSectionProps;
  }
  
  export interface TeamDataProps {
    eng: TeamDataLanguageProps;
    mk: TeamDataLanguageProps;
  }
  
  export interface TeamMembersContextType {
    teamMembersData: TeamDataProps | null;
    loading: boolean;
    error: string | null;
  }