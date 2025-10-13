import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";   
import Dashboard from "@/pages/dashboard/dashboard/Dashboard";
import Events from "@/pages/dashboard/events/Events";
import Settings from "@/pages/dashboard/settings/Settings";
import Profile from "@/pages/dashboard/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/settings",
        element: <Settings />,
      }
    ],
  },
]);

export default router;