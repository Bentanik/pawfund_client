"use client";

import { useState, useEffect } from "react";
import PaginatedComponent from "@/components/paginated";
import useGetDataStaffEvent from "@/app/staff/view-event/hooks/getEvents";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function ListEvents() {
    const [name, setName] = useState<string>("all");
    const [status, setStatus] = useState<REQUEST.EventStatus | undefined>();
    const [isAscCreatedDate, setIsAscCreatedDate] = useState<boolean>(true);
    const [data, setData] = useState<API.StaffEvent[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1);

    const { getEventsApi } = useGetDataStaffEvent();

    const handleGetData = async (pageIndex: number) => {
        try {
            const res = await getEventsApi({
                pageIndex: pageIndex,
                pageSize: 5,
                name: name,
                status: status,
                isAscCreatedDate: isAscCreatedDate,
            });
            setTotalPage(res?.value.data.totalPages || 1);
            setData(res?.value.data.items || []);
        } catch (err) {
            setData([]);
        }
    };
    console.log("qqq", data);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        handleGetData(page);
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    useEffect(() => {
        if (currentPage !== 1) {
            handleGetData(1);
            setCurrentPage(1);
        } else handleGetData(currentPage);
    }, [name, status, isAscCreatedDate]);

    return (
        <div className="w-full p-4 ">
            <h1 className="text-2xl font-semibold">View events of branch</h1>
            <div className="flex my-5 gap-10 justify-between">
                <div>
                    <Select
                        value={status}
                        onValueChange={(value) =>
                            setStatus(value as REQUEST.EventStatus)
                        }
                    >
                        <SelectTrigger className="min-w-[200px] border-2 border-[#00000065]">
                            <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={"NotStarted"}>
                                Not Started
                            </SelectItem>
                            <SelectItem value={"Ongoing"}>On going</SelectItem>
                            <SelectItem value={"Rejected"}>Rejected</SelectItem>
                            <SelectItem value={"Completed"}>
                                Completed
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex gap-7 items-center w-[30%]">
                    <label className="text-base text-[#6f6f6f]">Name</label>
                    <Input
                        type="text"
                        className="w-full border-2 border-gray-500 focus-visible:ring-0"
                        value={name}
                        onChange={handleChangeName}
                    />
                </div>
            </div>
            {/* Header */}
            <div className="grid grid-cols-6 bg-[#4B5563] text-white font-semibold rounded-t-lg">
                <div className="p-4">Image</div>
                <div className="p-4">Name</div>
                <div className="p-4 ">Max Attendees</div>
                <div className="p-4 ">Start Date</div>
                <div className="p-4 ">End Date</div>
                <div className="p-4 ">Status</div>
            </div>

            {/* Body */}

            <div className="border border-gray-300 rounded-b-lg">
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <Link
                            href={`list-event-activity/${item.id}`}
                            key={index}
                        >
                            <div className="grid grid-cols-6 hover:bg-gray-50 transition-colors cursor-pointer">
                                <img
                                    src={item?.imagesUrl}
                                    alt="Event image"
                                    className=" w-[50px] h-[50px] m-2 rounded-full"
                                />
                                <div className="p-4 capitalize">
                                    {item?.name}
                                </div>
                                <div className="p-4">{item?.maxAttendees}</div>
                                <div className="p-4 lowercase">
                                    {item?.startDate &&
                                        new Date(
                                            item.startDate
                                        ).toLocaleDateString("en-GB")}
                                </div>
                                <div className="p-4 lowercase">
                                    {item?.endDate &&
                                        new Date(
                                            item.endDate
                                        ).toLocaleDateString("en-GB")}
                                </div>
                                <div className="p-4 lowercase">
                                    {item?.status}
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="p-4 text-center">No result.</div>
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
