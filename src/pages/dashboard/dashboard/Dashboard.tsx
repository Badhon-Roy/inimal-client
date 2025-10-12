import UserIcon from "@/assets/images/29041054cb8acf6b2c31d1de5a938ff62cad6577.png";
import DeleteIcon from "@/components/SVG/DeleteIcon";
import EditIcon from "@/components/SVG/EditIcon";
import NotificationIcon from "@/components/SVG/NotificationIcon";
import SearchIcon from "@/components/SVG/SearchIcon";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DownArrowIcon from "@/components/SVG/DownArrowIcon";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import EventIcon from "@/components/SVG/EventIcon";
import CalendarIcon from "@/components/SVG/CalendarIcon";
import CircelIcon from "@/components/SVG/CircleIcon";
import WatchIcon from "@/components/SVG/WatchIcon";

type TEvent = {
    checkbox?: boolean;
    name: string;
    key: string;
    artist_name: string;
    agent: string;
    agency: string;
    date: string;
    day: string;
    time: string;
    fee: number;
    status: "Confirmed" | "Pending" | "Cancelled";
    action?: string
};

const Dashboard = () => {
    const [events, setEvents] = useState<TEvent[]>([]);
    const [date, setDate] = useState<Date | undefined>(undefined);

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
                        <button className="border border-[#F4F6F8] p-3 rounded-[6px] bg-[#FFF] cursor-pointer hover:bg-[#F9FAFB]"><DeleteIcon /></button>
                        <button className="border border-[#F4F6F8] p-3 rounded-[6px] bg-[#FFF] cursor-pointer hover:bg-[#F9FAFB]"><EditIcon /></button>
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
        <div className="p-4">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h2 className="text-[32px] text-[#454F5B] font-bold">Dashboard</h2>
                    <p className="text-[#454F5B]">Welcome back, Andrei</p>
                </div>
                <div className="flex items-center gap-6">
                    <SearchIcon />
                    <div className="relative inline-block">
                        <NotificationIcon />
                        <span className="w-[7px] h-[7px] bg-[#3F97FF] rounded-full absolute top-0 right-0"></span>
                    </div>
                    <img className="w-[52px] h-[52px] rounded-full" src={UserIcon} alt="User" />
                </div>
            </div>

            <div className="flex justify-between items-start gap-5 w-full">
                <div className="bg-[#FFF] overflow-hidden rounded-lg p-3 w-[70%]">
                    <div className="flex justify-between items-center mx-4 my-3">
                        <h2 className="text-[#212B36] font-semibold text-[18px]">Event List</h2>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1 border border-[#F4F6F8] rounded-[8px] px-4 py-1 text-[#637381] text-[12px] font-medium">
                                    <span>Recent </span>
                                    <DownArrowIcon /></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuItem>Subscription</DropdownMenuItem>
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
                       <div className="flex gap-2 p-3 rounded-[8px] bg-[#FFF] shadow-[0_0_6px_0_rgba(0,0,0,0.08)]">
                        <div className="bg-[#2094F3] flex flex-col items-center  justify-center rounded-[8px] w-[46px] h-[58px] text-white font-semibold">
                            <h2>3</h2>
                            <h2>Sat</h2>
                        </div>
                        <div>
                            <div className="flex justify-between items-center gap-3 text-[#637381] font-medium">
                                <h2>The Midnight Hour</h2>
                                <div className="flex items-center justify-center gap-2"><CircelIcon/> <span>DJ Nova</span></div>
                            </div>
                            <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                <p>Top Music</p>
                                <div className="flex items-center gap-1"><WatchIcon/> <span>10:00 PM - 12:00 PM</span></div>
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
                                <div className="flex items-center justify-center gap-2"><CircelIcon/> <span>DJ Nova</span></div>
                            </div>
                            <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                <p>Top Music</p>
                                <div className="flex items-center gap-1"><WatchIcon/> <span>10:00 PM - 12:00 PM</span></div>
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
                                <div className="flex items-center justify-center gap-2"><CircelIcon/> <span>DJ Nova</span></div>
                            </div>
                            <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                <p>Top Music</p>
                                <div className="flex items-center gap-1"><WatchIcon/> <span>10:00 PM - 12:00 PM</span></div>
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
                                <div className="flex items-center justify-center gap-2"><CircelIcon/> <span>DJ Nova</span></div>
                            </div>
                            <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                <p>Top Music</p>
                                <div className="flex items-center gap-1"><WatchIcon/> <span>10:00 PM - 12:00 PM</span></div>
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
                                <div className="flex items-center justify-center gap-2"><CircelIcon/> <span>DJ Nova</span></div>
                            </div>
                            <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                <p>Top Music</p>
                                <div className="flex items-center gap-1"><WatchIcon/> <span>10:00 PM - 12:00 PM</span></div>
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
                                <div className="flex items-center justify-center gap-2"><CircelIcon/> <span>DJ Nova</span></div>
                            </div>
                            <div className="flex justify-between items-center text-[#919EAB] text-[12px] mt-2">
                                <p>Top Music</p>
                                <div className="flex items-center gap-1"><WatchIcon/> <span>10:00 PM - 12:00 PM</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;