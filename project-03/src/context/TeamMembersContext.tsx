import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import {
  TeamDataProps,
  TeamMembersContextType,
} from "../types/TeamMembersTypes";

export const TeamMembersContext = createContext<TeamMembersContextType | null>(
  null
);

export const TeamMembersProvider = ({ children }: { children: ReactNode }) => {
  const [teamMembersData, setTeamMembersData] = useState<TeamDataProps | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMembersData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/teamMembers`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch team members data: ${response.statusText}`
          );
        }
        const data: TeamDataProps = await response.json();
        setTeamMembersData(data);
      } catch (err) {
        setError("Error fetching team members data");
        console.error("Error fetching team members data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembersData();
  }, []);

  return (
    <TeamMembersContext.Provider value={{ teamMembersData, loading, error }}>
      {children}
    </TeamMembersContext.Provider>
  );
};

export const useTeamMembersContext = () => {
  const context = useContext(TeamMembersContext);
  if (!context) {
    throw new Error(
      "useTeamMembersContext must be used within a TeamMembersProvider"
    );
  }
  return context;
};
