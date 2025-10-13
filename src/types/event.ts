export type TEvent = {
    id: number;
    checkbox?: boolean;
    name: string;
    key: string;
    artist_name: string;
    agent: string;
    agency: string;
    venue_name: string;
    venue_location: string;
    date: string;
    day: string;
    time: string;
    fee: number;
    status: "Confirmed" | "Pending" | "Cancelled";
    action?: string
};