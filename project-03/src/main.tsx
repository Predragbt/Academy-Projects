// src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./index.css";
import { AppProvider } from "./context/AppContext";
import { ServicesProvider } from "./context/ServicesContext";
import { IndustriesProvider } from "./context/IndustriesContext";
import { TeamMembersProvider } from "./context/TeamMembersContext";
import { TestimonialsProvider } from "./context/TestimonialsContext";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <ServicesProvider>
        <IndustriesProvider>
          <TeamMembersProvider>
            <TestimonialsProvider>
              <RouterProvider router={router} />
            </TestimonialsProvider>
          </TeamMembersProvider>
        </IndustriesProvider>
      </ServicesProvider>
    </AppProvider>
  </React.StrictMode>
);
