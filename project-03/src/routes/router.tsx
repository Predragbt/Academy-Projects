import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { IndustiresPage } from "../pages/Industries";

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
    ],
  },
]);

export default router;
