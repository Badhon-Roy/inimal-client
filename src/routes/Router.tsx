import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "@/pages/dashboard/dashboard/Dashboard";
import Events from "@/pages/dashboard/events/Events";
import Settings from "@/pages/dashboard/settings/Settings";
import Profile from "@/pages/dashboard/profile/Profile";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/events",
        element: <Events />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      }
    ],
  },
]);

export default router;