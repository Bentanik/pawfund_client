"use client";

import { useState, useEffect } from "react";
import PaginatedComponent from "@/components/paginated";
import useGetDataStaffEvent from "@/app/staff/view-event/hooks/getEvents";
import useGetDataStaffEventActivity from "@/app/staff/list-event-activity/hooks/getEventActivities";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import CreateEvent from "@/components/create-activity-form";

interface ListEventActivity {
    eventId: string;
}

export default function ListEventActivities({ eventId }: ListEventActivity) {
    const [name, setName] = useState<string>("all");
    const [status, setStatus] = useState<REQUEST.EventStatus | undefined>();
    const [isAscCreatedDate, setIsAscCreatedDate] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1);
    const [showForm, setShowForm] = useState(false);
    const [eventActivities, setEventActivities] = useState<
        API.StaffActivities[]
    >([]);

    const { getEventActivitiesApi } = useGetDataStaffEventActivity();

    const getListApprovedEventsActivity = async (
        id: string,
        pageIndex: number
    ) => {
        const res = await getEventActivitiesApi({
            eventId: id,
            pageIndex: pageIndex,
            pageSize: 5,
            name: name,
            status: status,
            isAscCreatedDate: isAscCreatedDate,
        });
        setEventActivities(res?.value.data.items || []); // Set to empty array if data is undefined
        setTotalPage(res?.value.data.totalPages || 1); // Set total pages
    };

    useEffect(() => {
        if (eventId) {
            getListApprovedEventsActivity(eventId, currentPage);
        }
    }, [eventId, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        getListApprovedEventsActivity(eventId, page);
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleGetData = (page: number) => {
        getListApprovedEventsActivity(eventId, page);
    };

    useEffect(() => {
        if (currentPage !== 1) {
            handleGetData(1);
            setCurrentPage(1);
        } else handleGetData(currentPage);
    }, [name, status, isAscCreatedDate]);

    const toggleForm = () => {
        setShowForm((prev) => !prev); 
    };

    return (
        <div className="w-full p-4 ">
            <h1 className="text-2xl font-semibold">View event activities</h1>

            <div className="flex my-5 gap-10 justify-between">
                <div className="flex gap-7 items-center w-[30%]">
                    <label className="text-base text-[#6f6f6f]">Name</label>
                    <Input
                        type="text"
                        className="w-full border-2 border-gray-500 focus-visible:ring-0"
                        value={name}
                        onChange={handleChangeName}
                    />
                </div>
                <div className="my-5">
                    <Button className="bg-teal-400 text-white hover:bg-teal-500" onClick={toggleForm}>
                        Add Event Activity
                    </Button>
                </div>
            </div>
            {showForm && (
                <CreateEvent eventId={eventId} />
            )}

            {/* Header */}
            <div className="grid grid-cols-4 bg-[#4B5563] text-white font-semibold rounded-t-lg">
                <div className="p-4">Name</div>
                <div className="p-4 ">Max Attendees</div>
                <div className="p-4 ">Volunteer participating</div>
                <div className="p-4 ">Start Date</div>
            </div>

            {/* Body */}

            <div className="border border-gray-300 rounded-b-lg">
                {eventActivities.length > 0 ? (
                    eventActivities.map((item, index) => (
                        <Link
                            href={`/list-event-activity/${item.id}`}
                            key={index}
                        >
                            <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors cursor-pointer">
                                <div className="p-4 capitalize">
                                    {item?.name}
                                </div>
                                <div className="p-4">{item?.quantity}</div>
                                <div className="p-4 lowercase">
                                    {item?.numberOfVolunteer}
                                </div>
                                <div className="p-4 lowercase">
                                    {item?.startDate &&
                                        new Date(
                                            item.startDate
                                        ).toLocaleDateString("en-GB")}
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="p-4 text-center">No results</div>
                )}
            </div>

            <div className="my-10">
                <div className="mt-5">
                    <PaginatedComponent
                        totalPages={totalPage}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
}
