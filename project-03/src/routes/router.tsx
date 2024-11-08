import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

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
        path: "services",
        element: <div>Services</div>,
        children: [
          {
            path: ":title",
            element: <div>Service Details</div>,
          },
        ],
      },
    ],
  },
]);

export default router;
