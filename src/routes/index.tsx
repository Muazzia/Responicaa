import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import { ROUTES } from "../constants";
import WebDevelopment from "../pages/digitalSolutions/webDevelopment";

export const routes = createBrowserRouter([
  { path: ROUTES.LANDINGPAGE, Component: LandingPage },

  // DIGITAL SOLUTIONS
  {
    path: ROUTES.WEBDEVELOPMENT,
    Component: WebDevelopment,
  },
]);
