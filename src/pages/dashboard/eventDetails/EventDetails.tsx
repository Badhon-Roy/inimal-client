import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardTopBar from "@/shared/dashboard/dashboardTopBar/DashboardTopBar";
import RunningOrder from "@/shared/dashboard/eventDetails/RunningOrder";


const tabsData = [
    {
        label: "Running Order",
        value: "runningOrder",
        content: <RunningOrder/>
    },
    {
        label: "Confirm Rider",
        value: "confirmRider",
        content: "hello"
    },
    {
        label: "Travel Information",
        value: "travelInformation",
        content: "hello"
    },
    {
        label: "Transportation",
        value: "transportation",
        content: "hello"
    },
    {
        label: "Hotel & Dinner",
        value: "hotel&Dinner",
        content: "hello"
    },
    {
        label: "Venue",
        value: "venue",
        content: "hello"
    },
    {
        label: "Contacts",
        value: "contacts",
        content: "hello"
    },
];

const EventDetails = () => {
    return (
        <div>
            <DashboardTopBar title={"The Midnight Hour (Corina McCoy)"} subTitle={"Arena Club, Berlin, NY"} />

            <div className="bg-white py-4 px-6 rounded-[16px]">
                <Tabs defaultValue="runningOrder" className="w-full">
                    <TabsList className="flex justify-between items-center gap-3 p-2 rounded-xl w-full bg-white">
                        {tabsData.map((tab) => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className="p-2 py-4 cursor-pointer rounded-[8px] text-[18px] font-bold transition-all duration-300 text-[#454F5B] data-[state=active]:bg-[#E9F4FE]"
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {tabsData.map((tab) => (
                        <TabsContent key={tab.value} value={tab.value} className="py-[50px] px-25">
                            <div>
                                {tab.content}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default EventDetails;