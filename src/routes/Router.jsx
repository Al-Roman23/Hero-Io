import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllAppsPage from "../pages/Apps/AllAppsPage";
import AppDetails from "../pages/Apps/AppDetails";
import MyInstallation from "../pages/Apps/MyInstallation";
import ErrorPage from "../utils/ErrorPage";
import appsData from "../assets/apps.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: () => ({ apps: appsData }),
      },
      {
        path: "/apps",
        element: <AllAppsPage />,
        loader: () => ({ apps: appsData }),
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
        loader: ({ params }) => {
          const app = appsData.find((a) => a.id.toString() === params.id);
          return app || null;
        },
      },
      {
        path: "/installations",
        element: <MyInstallation />,
        loader: () => appsData,
      },
    ],
  },
]);

export default router;
