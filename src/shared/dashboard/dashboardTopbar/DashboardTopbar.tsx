import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import SearchIcon from "@/components/SVG/SearchIcon";
import NotificationIcon from "@/components/SVG/NotificationIcon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BagIcon from "@/components/SVG/BagIcon";
import CardIcon from "@/components/SVG/CardIcon";
import DownArrowIcon2 from "@/components/SVG/DownArrowIcon2";
import { useState } from "react";
import CorrectIcon from "@/components/SVG/CorrectIcon";
import UserIcon from "@/assets/images/29041054cb8acf6b2c31d1de5a938ff62cad6577.png";


const notificationsData = [
    {
        icon: <BagIcon />,
        title: "Booking Request Confirmed",
        message: "Agent John confirmed booking for Artist X on Oct 5",
        time: '2 hours age',
        status: 'successful'
    },
    {
        icon: <BagIcon />,
        title: "Booking Request Pending",
        message: "Agent Alice pending approval for Artist Y on Oct 6",
        time: '9:46 am',
        status: 'successful'
    },
    {
        icon: <BagIcon />, title: "Event 1", message: "Music festival on Oct 12", time: '9:46 am',
        status: 'successful'
    },
    {
        icon: <BagIcon />, title: "Event 2", message: "Art exhibition on Oct 15", time: '9:46 am',
        status: 'successful'
    },
    {
        icon: <CardIcon />,
        title: "Payment 2",
        message: "Payment pending for order #124",
        time: '9:46 am',
        status: 'successful'
    },
    {
        icon: <BagIcon />,
        title: "Payment Received",
        message: "Payment for Artist Z has been completed",
        time: '9:46 am',
        status: 'successful'
    },
    {
        icon: <CardIcon />,
        title: "Payment 2",
        message: "Payment pending for order #124",
        time: '9:46 am',
        status: 'successful'
    },
];

const tabsData = [
    {
        label: "All",
        value: "all",
        content: notificationsData, // dynamic content
    },
    {
        label: "Books",
        value: "books",
        content: [
            {
                icon: <BagIcon />, title: "Book 1", message: "Author A published on Oct 1", time: '9:46 am',
                status: 'successful'
            },
            {
                icon: <BagIcon />, title: "Book 2", message: "Author B published on Oct 3", time: '9:46 am',
                status: 'successful'
            },
        ],
    },
    {
        label: "Event",
        value: "event",
        content: [
            {
                icon: <BagIcon />, title: "Event 1", message: "Music festival on Oct 12", time: '9:46 am',
                status: 'successful'
            },
            {
                icon: <BagIcon />, title: "Event 2", message: "Art exhibition on Oct 15", time: '9:46 am',
                status: 'successful'
            },
        ],
    },
    {
        label: "Payment",
        value: "payment",
        content: [
            {
                icon: <CardIcon />, title: "Payment 1", message: "Payment completed for order #123", time: '9:46 am',
                status: 'successful'
            },
            {
                icon: <CardIcon />, title: "Payment 2", message: "Payment pending for order #124", time: '9:46 am',
                status: 'successful'
            },
        ],
    },
];

const DashboardTopBar = ({ title, subTitle }: { title: string, subTitle: string }) => {
    const [selected, setSelected] = useState("Last 24 Hours");
    return (
        <div className="flex justify-between items-center mb-12">
            <div>
                <h2 className="text-[32px] text-[#454F5B] font-bold">{title}</h2>
                <p className="text-[#454F5B]">{subTitle}</p>
            </div>
            <div className="flex items-center gap-6">
                <SearchIcon />
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 rounded-[8px] px-4 py-1 text-[#637381] text-[12px] font-medium">
                        <div className="relative inline-block">
                            <NotificationIcon />
                            <span className="w-[7px] h-[7px] bg-[#3F97FF] rounded-full absolute top-0 right-1"></span>
                        </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="end"
                        sideOffset={6}
                        className="w-[743px] animate-in slide-in-from-right-5"
                    >
                        <Tabs defaultValue="all" className="w-full">
                            <div className="flex justify-between items-center sticky top-2 z-30">
                                <TabsList className="flex gap-2 p-2 rounded-xl w-fit bg-white">
                                    {tabsData.map((tab) => (
                                        <TabsTrigger
                                            key={tab.value}
                                            value={tab.value}
                                            className="p-2 py-4 cursor-pointer rounded-[8px] text-sm font-medium transition-all duration-300 text-[#637381] data-[state=active]:bg-[#E9F4FE] w-[100px]"
                                        >
                                            {tab.label}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center gap-2 border border-[#F4F6F8] bg-white rounded-[8px] px-4 py-1 text-[#637381] text-[12px] font-medium">
                                        <span>{selected} </span>
                                        <DownArrowIcon2 /></DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => setSelected("Last 24 Hours")}>Last 24 Hours</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setSelected("Last Week")}>Last Week</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setSelected("Last Month")}>Last Month</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            {tabsData.map((tab) => (
                                <TabsContent key={tab.value} value={tab.value} className="mt-4 max-h-[600px] overflow-y-auto custom-scroll">
                                    {tab.content.map((item, index) => (
                                        <div
                                            key={index}
                                            className="m-6 rounded-lg shadow-sm mt-4 p-4 border-l-[2px] border-[#74CAFF]"
                                        >
                                            <div className="flex justify-between items-start">
                                                <div className="flex items-center  gap-3">
                                                    <div className="bg-[#E9F9FF] rounded-full flex justify-center items-center p-4">
                                                        {item?.icon}
                                                    </div>
                                                    <div>
                                                        <h2 className="text-[#212B36] font-medium">{item.title}</h2>
                                                        <p className="text-[#888E9C] mt-2">{item.message}</p>
                                                    </div>

                                                </div>
                                                <div className="flex flex-col items-end gap-2">
                                                    <p className="text-[#888E9C]">{item.time}</p>
                                                    {
                                                        item?.status === "successful" && <CorrectIcon />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </TabsContent>
                            ))}
                        </Tabs>
                    </DropdownMenuContent>
                </DropdownMenu>

                <img className="w-[52px] h-[52px] rounded-full" src={UserIcon} alt="User" />
            </div>
        </div>
    )
}

export default DashboardTopBar