import LogoIcon from "@/assets/images/Logo.svg";
import LogoName from "@/assets/images/inimal.svg";
import HomeIcon from "@/components/SVG/HomeIcon";
import EventIcon from "@/components/SVG/EventIcon";
import SettingIcon from "@/components/SVG/SettingIcon";
import ProfileIcon from "@/components/SVG/ProfileIcon";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
const navLinks = [
    { name: "Dashboard", path: "/dashboard", svg: HomeIcon },
    { name: "Events", path: "/dashboard/events", svg: EventIcon },
    { name: "Events Details", path: "/dashboard/event-details", svg: EventIcon },
    { name: "Profile", path: "/dashboard/profile", svg: ProfileIcon },
    { name: "Settings", path: "/dashboard/settings", svg: SettingIcon },
    { name: "Home", path: "/", svg: HomeIcon },
];

const DashboardSidebar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const closeDrawer = () => setDrawerOpen(false);
    return (
        <>
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
                                end={link.path === "/dashboard"}
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-5 py-[10px] flex items-center gap-4 rounded-[8px] text-gray-600 hover:bg-[#3F97FF] hover:text-white ${isActive ? "bg-[#3F97FF] text-white" : ""
                                    }`
                                }
                            >
                                <span className="text-inherit hover:text-white"><Icon /></span>
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

        </>
    )
}

export default DashboardSidebar