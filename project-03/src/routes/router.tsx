import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { IndustiresPage } from "../pages/Industries";
import { Jobs } from "../pages/Jobs";
import { Contact } from "../pages/Contact";
import { PartnershipPage } from "../pages/Partnership";
import { Newsletter } from "../pages/Newsletter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services/:id",
        element: <Services />,
      },
      { path: "/industries", element: <IndustiresPage /> },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/partnership",
        element: <PartnershipPage />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

export default router;
