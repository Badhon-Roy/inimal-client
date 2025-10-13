import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";   
import Dashboard from "@/pages/dashboard/dashboard/Dashboard";
import Events from "@/pages/dashboard/events/Events";

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
      }
    ],
  },
]);

export default router;