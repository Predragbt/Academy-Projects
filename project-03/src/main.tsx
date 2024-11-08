// src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./index.css";
import { AppProvider } from "./context/AppContext";
import { ServicesProvider } from "./context/ServicesContext";
import { IndustriesProvider } from "./context/IndustriesContext";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <ServicesProvider>
        <IndustriesProvider>
          <RouterProvider router={router} />
        </IndustriesProvider>
      </ServicesProvider>
    </AppProvider>
  </React.StrictMode>
);
