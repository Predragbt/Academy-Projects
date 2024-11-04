import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App serves as the layout with Header and Footer
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
