import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";   
import Dashboard from "@/pages/dashboard/dashboard/Dashboard";
import Events from "@/pages/dashboard/events/Events";
import Settings from "@/pages/dashboard/settings/Settings";

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
        path: "/settings",
        element: <Settings />,
      }
    ],
  },
]);

export default router;