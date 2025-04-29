import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import WebDevelopment from "../pages/digitalSolutions/webDevelopment";
import { ROUTES } from "../constants";
import Layout from "../components/Layout";
import Sales from "../pages/bpo/sales";
import CustomerSupport from "../pages/bpo/customerSupport";

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

      // BPO SUB ROUTES
      {
        path: ROUTES.SALES,
        element: <Sales />,
      },
      {
        path: ROUTES.CUSTOMERSUPPORT,
        element: <CustomerSupport />,
      },
    ],
  },
]);
