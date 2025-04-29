import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import WebDevelopment from "../pages/digitalSolutions/webDevelopment";
import { ROUTES } from "../constants";
import Layout from "../components/Layout";
import { Contact } from "../pages/contact";
import { MobileDevelopment } from "../pages/digitalSolutions/mobileDevelopment";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ROUTES.LANDINGPAGE,
        element: <LandingPage />,
      },
      {
        path: ROUTES.WEBDEVELOPMENT,
        element: <WebDevelopment />,
      },
      {
        path: ROUTES.MOBILEDEVELOPMENT,
        element: <MobileDevelopment />,
      },
      {
        path: ROUTES.CONTACT,
        element: <Contact />,
      },
    ],
  },
]);
