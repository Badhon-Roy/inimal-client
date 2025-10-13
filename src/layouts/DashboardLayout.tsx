import { NavLink, Outlet } from "react-router-dom";
import LogoIcon from "@/assets/images/Logo.svg";
import LogoName from "@/assets/images/inimal.svg";

import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import HomeIcon from "@/components/SVG/HomeIcon";
import EventIcon from "@/components/SVG/EventIcon";
import SettingIcon from "@/components/SVG/SettingIcon";

const navLinks = [
  { name: "Dashboard", path: "/", svg: HomeIcon },
  { name: "Events", path: "/events", svg: EventIcon },
  { name: "Settings", path: "/settings", svg: SettingIcon },
];

export default function DashboardLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="flex h-screen overflow-y-auto bg-[#F9FAFB]">

      {/* Sidebar for large screens */}
      <aside className="hidden sm:flex sm:flex-col w-[260px] bg-white text-[#637381] py-[31px] px-4">
        <div className="flex items-center gap-2 mb-[40px]">
          <img
            src={LogoIcon}
            alt="Logo"
            className="w-[54.756px] h-[53px]"
          />
          <img
            src={LogoName}
            alt="Logo"
            className="h-[24.844px] w-[94.111px]"
          />
        </div>
        <nav className="flex flex-col space-y-5">
          {navLinks.map((link) => {
            const Icon = link.svg;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-[10px] flex items-center gap-4 rounded-[8px] text-gray-600 hover:bg-[#3F97FF] hover:text-white ${isActive ? "bg-[#3F97FF] text-white" : ""
                  }`
                }
              >
                <span className="text-inherit hover:text-white"><Icon/></span>
                <h2>{link.name}</h2>
              </NavLink>
            );
          })}
        </nav>
      </aside>


      {/* Drawer for small screens */}
      <div
        className={`sm:hidden fixed inset-0 z-40 transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Background overlay */}
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity duration-500 ease-in-out ${drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          onClick={closeDrawer}
        />
        {/* Drawer content */}
        <aside className="relative flex flex-col w-[260px] h-full bg-white text-[#637381] py-[31px] px-4">
          {
            drawerOpen && <div className="flex justify-end">
              <button
                className="z-50 p-2 bg-[#3F97FF] text-white rounded"
                onClick={closeDrawer}
              >
                <IoMdClose />
              </button>
            </div>
          }
          <div className="flex items-center gap-2 mb-[40px]">
            <img src={LogoIcon} alt="Logo" className="w-[54.756px] h-[53px]" />
            <img src={LogoName} alt="Logo" className="h-[24.844px] w-[94.111px]" />
          </div>
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => {
              const Icon = link.svg;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-5 py-[10px] flex items-center gap-4 rounded-[8px] text-gray-600 hover:bg-[#3F97FF] ${isActive ? "bg-[#3F97FF] text-white" : ""
                    }`
                  }
                >
                  <Icon />
                  <h2>{link.name}</h2>
                </NavLink>
              );
            })}
          </nav>
        </aside>
      </div>


      <main className="flex-1 lg:px-10 px-6 py-[31px] overflow-auto custom-scroll">
        {/* Small screen navbar */}
        <div className="sm:hidden flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={LogoIcon} alt="Logo" className="w-[54.756px] h-[53px]" />
            <img src={LogoName} alt="Logo" className="h-[24.844px] w-[94.111px]" />
          </div>
          <button
            className="p-2 bg-[#3F97FF] text-white rounded"
            onClick={toggleDrawer}
          >
            {drawerOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>

        <Outlet />
      </main>
    </div>
  );
}