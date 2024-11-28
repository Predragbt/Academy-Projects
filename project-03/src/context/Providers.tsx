import { ReactNode } from "react";
import { AppProvider } from "./AppContext";
import { ServicesProvider } from "./ServicesContext";
import { IndustriesProvider } from "./IndustriesContext";
import { TeamMembersProvider } from "./TeamMembersContext";
import { TestimonialsProvider } from "./TestimonialsContext";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AppProvider>
      <ServicesProvider>
        <IndustriesProvider>
          <TeamMembersProvider>
            <TestimonialsProvider>{children}</TestimonialsProvider>
          </TeamMembersProvider>
        </IndustriesProvider>
      </ServicesProvider>
    </AppProvider>
  );
};
