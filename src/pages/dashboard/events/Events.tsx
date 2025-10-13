import DeleteIcon from "@/components/SVG/DeleteIcon";
import EditIcon from "@/components/SVG/EditIcon";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import DownArrowIcon from "@/components/SVG/DownArrowIcon";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink
} from "@/components/ui/pagination"
import type { TEvent } from "@/types/event";
import DashboardTopbar from "@/shared/dashboard/dashboardTopbar/DashboardTopbar";
import { ChevronLeft, ChevronRight } from "lucide-react";



const Events = () => {
    const [events, setEvents] = useState<TEvent[]>([]);
    const [eventTimeSelected, setEventTimeSelected] = useState("Recent");
        const [activePage, setActivePage] = useState(1);
        const maximumEventsNumber = 8;
        const totalPage = Math.ceil(events.length / maximumEventsNumber);
        const pageNumbers = Array.from({ length: totalPage }, (_, index) => index + 1)
    
        const paginatedEvents = useMemo(() => {
            return events.slice(
                (activePage - 1) * maximumEventsNumber,
                activePage * maximumEventsNumber
            );
        }, [events, activePage]);
    
        const handlePrev = () => {
            setActivePage(activePage - 1)
        }
    
        const handleNext = () => {
            setActivePage(activePage + 1)
        }
    

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
                <span className="text-[#212B36] font-normal">Artist Name</span>
            ),
            cell: (info) => <p className="text-[#212B36] font-medium">{info.getValue()}</p>,
        }),
        columnHelper.accessor("agent", {
            header: () => (
                <span className="text-[#212B36] font-normal">Agent</span>
            ),
            cell: (info) => <p className="text-[#637381] text-[14px]">{info.getValue()}</p>,
        }),
        columnHelper.accessor("venue_name", {
            header: () => (
                <span className="text-[#212B36] font-normal">Venue</span>
            ),
            cell: (info) => {
                const row = info.row.original;
                return (
                    <p className="text-[#212B36] ">
                        {row.venue_name} <br /><span className="text-[#637381] text-[14px]">{row.venue_location}</span>
                    </p>
                );
            }
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
                    <p className="text-[#212B36]">
                        {formattedDate} <br /><span className="text-[#637381] text-[14px]">{row.time}</span>
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
        data: paginatedEvents,
        columns,
        getCoreRowModel: getCoreRowModel(),

    });

    return (
        <div>
            <DashboardTopbar title={"Upcoming Events"} subTitle={'Your upcoming events at a glance'} />


            <div className="w-full">
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
                                <button
                                    disabled={activePage === 1}
                                    onClick={handlePrev}
                                    className={`py-2 px-4 rounded-[8px] flex items-center gap-1 transition-all 
                                        ${activePage === 1
                                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                            : "hover:bg-[#3f97ff] bg-[#c8e5ff] text-[#3f97ff] hover:text-white cursor-pointer"
                                        }`}
                                >
                                    <ChevronLeft size={20}/> <span>Prev</span>
                                </button>
                            </PaginationItem>
                            <PaginationItem className="flex gap-2">
                                {
                                    pageNumbers?.map(number => <PaginationLink onClick={() => setActivePage(number)} href="#" className={` text-[#3f97ff] hover:bg-[#c8e5ff] hover:text-[#3f97ff] font-medium ${activePage === number && 'bg-[#c8e5ff]'}`}>{number}</PaginationLink>)
                                }
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <button
                                    disabled={activePage === totalPage}
                                    onClick={handleNext}
                                    className={`py-2 px-4 rounded-[8px] flex items-center gap-1 transition-all 
                                            ${activePage === totalPage
                                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                            : "hover:bg-[#3f97ff] bg-[#c8e5ff] text-[#3f97ff] hover:text-white"
                                        }`}
                                >
                                   <span>Next</span> <ChevronRight  size={20}/>
                                </button>
                            </PaginationItem>
                        </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default Events;