import UserIcon from "@/assets/images/29041054cb8acf6b2c31d1de5a938ff62cad6577.png";
import DeleteIcon from "@/components/SVG/DeleteIcon";
import EditIcon from "@/components/SVG/EditIcon";
import NotificationIcon from "@/components/SVG/NotificationIcon";
import SearchIcon from "@/components/SVG/SearchIcon";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import DownArrowIcon from "@/components/SVG/DownArrowIcon";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import CalendarIcon from "@/components/SVG/CalendarIcon";
import CircelIcon from "@/components/SVG/CircleIcon";
import WatchIcon from "@/components/SVG/WatchIcon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BagIcon from "@/components/SVG/BagIcon";
import CorrectIcon from "@/components/SVG/CorrectIcon";
import CardIcon from "@/components/SVG/CardIcon";
import DownArrowIcon2 from "@/components/SVG/DownArrowIcon2";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import type { TEvent } from "@/types/event";


export const notificationsData = [
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

export const tabsData = [
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



const Dashboard = () => {
    const [events, setEvents] = useState<TEvent[]>([]);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [selected, setSelected] = useState("Last 24 Hours");
    const [eventTimeSelected, setEventTimeSelected] =useState("Recent");

    useEffect(() => {
        fetch("/events.json")
            .then((res) => res.json())
            .then((data) => setEvents(data))
            .catch((err) => console.error("Error fetching events:", err));
    }, []);

    const columnHelper = createColumnHelper<TEvent>();

    const columns = [
        columnHelper.accessor("checkbox", {
            header: () => (
                <span className="text-[#212B36] font-normal">  <Checkbox /></span>
            ),
            cell: () => {
                return (
                    <div>
                        <Checkbox />
                    </div>
                )
            },
        }),
        columnHelper.accessor("name", {
            header: () => (
                <span className="text-[#212B36] font-normal flex items-center gap-4">Event Name</span>
            ),
            cell: (info) => {
                const row = info.row.original;
                return (
                    <div>
                        <h2 className="text-[#637381] text-[14px] font-medium">{row.name}</h2>
                        <p className="text-[12px] text-[#637381]">{row.key}</p>
                    </div>
                );
            }
        }),
        columnHelper.accessor("artist_name", {
            header: () => (
                <span className="text-[#212B36] font-normal">Artist</span>
            ),
            cell: (info) => <p className="text-[#637381] text-[14px] font-medium">{info.getValue()}</p>,
        }),
        columnHelper.accessor("agent", {
            header: () => (
                <span className="text-[#212B36] font-normal">Agent</span>
            ),
            cell: (info) => <p className="text-[#637381] text-[14px]">{info.getValue()}</p>,
        }),
        columnHelper.accessor("agency", {
            header: () => (
                <span className="text-[#212B36] font-normal">Agency</span>
            ),
            cell: (info) => <p className="text-[#637381] text-[14px]">{info.getValue()}</p>,
        }),
        columnHelper.accessor("date", {
            header: () => (
                <span className="text-[#212B36] font-normal">Date & Time</span>
            ),
            cell: (info) => {
                const row = info.row.original;
                const dateObj = new Date(row.date);
                const formattedDate = dateObj.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                });
                return (
                    <p className="text-[#637381] text-[14px]">
                        {formattedDate} <br /><span className="text-[#637381] text-[12px]">{row.time}</span>
                    </p>
                );
            },
        }),
        columnHelper.accessor("fee", {
            header: () => (
                <span className="text-[#212B36] font-normal">Fee</span>
            ),
            cell: (info) => <p className="text-[#637381] text-[14px]">{`$${info.getValue()}`}</p>,
        }),
        columnHelper.accessor("status", {
            header: () => (
                <span className="text-[#212B36] font-normal">Status</span>
            ),
            cell: (info) => {
                const row = info.row.original;
                return (
                    <div className={`px-3 py-1 rounded-[6px] text-[12px] w-[84px] text-center ${row.status === "Confirmed"
                        ? "border border-[#A5E6C6] text-[#0CAF60] bg-[#e6fdf2]"
                        : row.status === "Pending"
                            ? "border border-[#FFECA7] text-[#FFD023] bg-[#fffae9]"
                            : "border border-[#F3ADAF] text-[#E03137] bg-[#fceaeb]"
                        }`}
                    >
                        {row.status}
                    </div>
                );
            },
        }),
        columnHelper.accessor("action", {
            header: () => (
                <span className="text-[#212B36] font-normal">Action</span>
            ),
            cell: () => {
                return (
                    <div className="flex gap-3">
                        <button className="border border-[#F4F6F8] p-3 rounded-[6px] bg-[#FFF] cursor-pointer hover:bg-[#F9FAFB] text-[#919eab]"><DeleteIcon /></button>
                        <button className="border border-[#F4F6F8] p-3 rounded-[6px] bg-[#FFF] cursor-pointer hover:bg-[#F9FAFB] text-[#889aac]"><EditIcon /></button>
                    </div>
                )
            },
        }),
    ];

    const table = useReactTable({
        data: events,
        columns,
        getCoreRowModel: getCoreRowModel(),

    });

    return (
        <div>
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h2 className="text-[32px] text-[#454F5B] font-bold">Dashboard</h2>
                    <p className="text-[#454F5B]">Welcome back, Andrei</p>
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

            <div className="flex justify-between items-start gap-5 w-full">
                <div className="w-[70%]">
                    <div className="bg-[#FFF] overflow-hidden rounded-lg p-3">
                        <div className="flex justify-between items-center mx-4 my-3">
                            <h2 className="text-[#212B36] font-semibold text-[18px]">Event List</h2>
                           <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1 border border-[#F4F6F8] rounded-[8px] px-4 py-1 text-[#637381] text-[12px] font-medium">
                                    <span>{eventTimeSelected} </span>
                                    <DownArrowIcon /></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={() => setEventTimeSelected("Recent")}>Recent</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setEventTimeSelected("Last 24 Hours")}>Last 24 Hours</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setEventTimeSelected("Last Week")}>Last Week</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setEventTimeSelected("Last Month")}>Last Month</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        </div>

                        <table className="min-w-full">
                            <thead>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => (
                                            <th key={header.id} className="bg-[#F9FAFB] text-left rounded p-3">
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(header.column.columnDef.header, header.getContext())}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {table.getRowModel().rows.map((row) => (
                                    <tr key={row.id} className="border-b border-[#F4F6F8]">
                                        {row.getVisibleCells().map((cell) => (
                                            <td key={cell.id} className="p-3 align-center">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination className="mt-3 flex justify-start">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" className="hover:bg-[#3f97ff] bg-[#c8e5ff] text-[#3f97ff] hover:text-white" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" className="bg-[#c8e5ff] text-[#3f97ff] hover:bg-[#c8e5ff] hover:text-[#3f97ff] font-medium">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" className="hover:bg-[#c8e5ff] hover:text-[#3f97ff]">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" className="hover:bg-[#c8e5ff] hover:text-[#3f97ff]">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" className="hover:bg-[#3f97ff] bg-[#c8e5ff] text-[#3f97ff] hover:text-white" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
                <div className="bg-[#FFF] overflow-hidden rounded-lg p-3 w-[30%] space-y-4">
                    <div className="flex justify-between items-center mx-4 my-3">
                        <h2 className="text-[#212B36] font-semibold text-[18px]">Upcoming event</h2>
                        <div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-[120px] justify-start text-left font-normal border-[#E5E7EB] hover:bg-[#F9FAFB] data-[empty=true]:text-muted-foreground"
                                        data-empty={!date}
                                    >
                                        <CalendarIcon />
                                        {date ? format(date, "EEE, MMM dd, yyyy") : "Pick a date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 border rounded-lg shadow-md">
                                    <Calendar mode="single" selected={date} onSelect={setDate} />
                                </PopoverContent>
                            </Popover>

                        </div>
                    </div>
                    <div className="max-h-[580px] overflow-y-auto custom-scroll space-y-4">
                        <div className="flex gap-2 p-3 rounded-[8px] bg-[#FFF] shadow-[0_0_6px_0_rgba(0,0,0,0.08)]">
                            <div className="bg-[#2094F3] flex flex-col items-center  justify-center rounded-[8px] w-[46px] h-[58px] text-white font-semibold">
                                <h2>3</h2>
                                <h2>Sat</h2>
                            </div>
                            <div>
                                <div className="flex justify-between items-center gap-3 text-[#637381] font-medium">
                                    <h2>The Midnight Hour</h2>
                                    <div className="flex items-center justify-center gap-2"><CircelIcon /> <span>DJ Nova</span></div>
                                </div>
                                <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                    <p>Top Music</p>
                                    <div className="flex items-center gap-1"><WatchIcon /> <span>10:00 PM - 12:00 PM</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3 rounded-[8px] bg-[#FFF] shadow-[0_0_6px_0_rgba(0,0,0,0.08)]">
                            <div className="bg-[#0061C9] flex flex-col items-center  justify-center rounded-[8px] w-[46px] h-[58px] text-white font-semibold">
                                <h2>4</h2>
                                <h2>Sun</h2>
                            </div>
                            <div>
                                <div className="flex justify-between items-center gap-3 text-[#637381] font-medium">
                                    <h2>The Midnight Hour</h2>
                                    <div className="flex items-center justify-center gap-2"><CircelIcon /> <span>DJ Nova</span></div>
                                </div>
                                <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                    <p>Top Music</p>
                                    <div className="flex items-center gap-1"><WatchIcon /> <span>10:00 PM - 12:00 PM</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3 rounded-[8px] bg-[#FFF] shadow-[0_0_6px_0_rgba(0,0,0,0.08)]">
                            <div className="bg-[#0061C9] flex flex-col items-center  justify-center rounded-[8px] w-[46px] h-[58px] text-white font-semibold">
                                <h2>4</h2>
                                <h2>Sun</h2>
                            </div>
                            <div>
                                <div className="flex justify-between items-center gap-3 text-[#637381] font-medium">
                                    <h2>The Midnight Hour</h2>
                                    <div className="flex items-center justify-center gap-2"><CircelIcon /> <span>DJ Nova</span></div>
                                </div>
                                <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                    <p>Top Music</p>
                                    <div className="flex items-center gap-1"><WatchIcon /> <span>10:00 PM - 12:00 PM</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3 rounded-[8px] bg-[#FFF] shadow-[0_0_6px_0_rgba(0,0,0,0.08)]">
                            <div className="bg-[#0061C9] flex flex-col items-center  justify-center rounded-[8px] w-[46px] h-[58px] text-white font-semibold">
                                <h2>4</h2>
                                <h2>Sun</h2>
                            </div>
                            <div>
                                <div className="flex justify-between items-center gap-3 text-[#637381] font-medium">
                                    <h2>The Midnight Hour</h2>
                                    <div className="flex items-center justify-center gap-2"><CircelIcon /> <span>DJ Nova</span></div>
                                </div>
                                <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                    <p>Top Music</p>
                                    <div className="flex items-center gap-1"><WatchIcon /> <span>10:00 PM - 12:00 PM</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3 rounded-[8px] bg-[#FFF] shadow-[0_0_6px_0_rgba(0,0,0,0.08)]">
                            <div className="bg-[#2094F3] flex flex-col items-center  justify-center rounded-[8px] w-[46px] h-[58px] text-white font-semibold">
                                <h2>7</h2>
                                <h2>Mun</h2>
                            </div>
                            <div>
                                <div className="flex justify-between items-center gap-3 text-[#637381] font-medium">
                                    <h2>The Midnight Hour</h2>
                                    <div className="flex items-center justify-center gap-2"><CircelIcon /> <span>DJ Nova</span></div>
                                </div>
                                <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                    <p>Top Music</p>
                                    <div className="flex items-center gap-1"><WatchIcon /> <span>10:00 PM - 12:00 PM</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3 rounded-[8px] bg-[#FFF] shadow-[0_0_6px_0_rgba(0,0,0,0.08)]">
                            <div className="bg-[#0061C9] flex flex-col items-center  justify-center rounded-[8px] w-[46px] h-[58px] text-white font-semibold">
                                <h2>8</h2>
                                <h2>Tue</h2>
                            </div>
                            <div>
                                <div className="flex justify-between items-center gap-3 text-[#637381] font-medium">
                                    <h2>The Midnight Hour</h2>
                                    <div className="flex items-center justify-center gap-2"><CircelIcon /> <span>DJ Nova</span></div>
                                </div>
                                <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                    <p>Top Music</p>
                                    <div className="flex items-center gap-1"><WatchIcon /> <span>10:00 PM - 12:00 PM</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3 rounded-[8px] bg-[#FFF] shadow-[0_0_6px_0_rgba(0,0,0,0.08)]">
                            <div className="bg-[#2094F3] flex flex-col items-center  justify-center rounded-[8px] w-[46px] h-[58px] text-white font-semibold">
                                <h2>3</h2>
                                <h2>Sat</h2>
                            </div>
                            <div>
                                <div className="flex justify-between items-center gap-3 text-[#637381] font-medium">
                                    <h2>The Midnight Hour</h2>
                                    <div className="flex items-center justify-center gap-2"><CircelIcon /> <span>DJ Nova</span></div>
                                </div>
                                <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                    <p>Top Music</p>
                                    <div className="flex items-center gap-1"><WatchIcon /> <span>10:00 PM - 12:00 PM</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3 rounded-[8px] bg-[#FFF] shadow-[0_0_6px_0_rgba(0,0,0,0.08)]">
                            <div className="bg-[#2094F3] flex flex-col items-center  justify-center rounded-[8px] w-[46px] h-[58px] text-white font-semibold">
                                <h2>3</h2>
                                <h2>Sat</h2>
                            </div>
                            <div>
                                <div className="flex justify-between items-center gap-3 text-[#637381] font-medium">
                                    <h2>The Midnight Hour</h2>
                                    <div className="flex items-center justify-center gap-2"><CircelIcon /> <span>DJ Nova</span></div>
                                </div>
                                <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                    <p>Top Music</p>
                                    <div className="flex items-center gap-1"><WatchIcon /> <span>10:00 PM - 12:00 PM</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;