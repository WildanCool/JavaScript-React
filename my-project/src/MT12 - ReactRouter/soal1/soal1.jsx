import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import HomePage from "./homePage";
import AboutPage from "./aboutPage";
import DashboardPage from "./dashboardPage";
import SettingsPage from "./settingsPage";
import NotFoundPage from "./notFoundPage";
import ProfilePage from "./profilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    // children: [
    //   {
    //     path: "settings",
    //     element: <SettingsPage />,
    //   },
    // ], //Ini bersarang
  },
  {
    path: "/dashboard/settings", // Ini tidak
    element: <SettingsPage />,
  },
  {
    path: "/profile/:userId",
    element: <ProfilePage />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
