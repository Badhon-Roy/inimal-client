import DashboardSidebar from "@/shared/dashboard/dashboardSidebar/DashboardSidebar";
import { Outlet } from "react-router-dom";




export default function DashboardLayout() {

  return (
    <div className="flex h-screen overflow-y-auto bg-[#F9FAFB]">

      {/* Sidebar for dashboard */}
      <DashboardSidebar />

      <main className="flex-1 lg:px-10 px-6 py-[31px] overflow-auto custom-scroll">
        <Outlet />
      </main>
    </div>
  );
}