import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import WebDevelopment from "../pages/digitalSolutions/webDevelopment";
import { ROUTES } from "../constants";
import Layout from "../components/Layout";
import { Contact } from "../pages/contact";
import { MobileDevelopment } from "../pages/digitalSolutions/mobileDevelopment";
import Sales from "../pages/bpo/sales";
import CustomerSupport from "../pages/bpo/customerSupport";
import { DigitalMarketing } from "../pages/digitalSolutions/digitalMarketing";
import BPO from "../pages/bpo";
import DigitalSolutions from "../pages/digitalSolutions";
import QualityAssurance from "../pages/bpo/qualityAssurance";

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
        path: ROUTES.DIGIALMARKETING,
        element: <DigitalMarketing />,
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
      {
        path: ROUTES.SALES,
        element: <Sales />,
      },
      {
        path: ROUTES.CUSTOMERSUPPORT,
        element: <CustomerSupport />,
      },
      {
        path: ROUTES.BPO,
        element: <BPO />,
      },
      {
        path: ROUTES.DIGITALSOLUTIONS,
        element: <DigitalSolutions />,
      },

      {
        path: ROUTES.QUALITYASSURANCE,
        element: <QualityAssurance />,
      },
    ],
  },
]);
