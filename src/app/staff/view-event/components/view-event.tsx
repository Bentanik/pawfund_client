"use client";

import { useState, useEffect } from "react";
import PaginatedComponent from "@/components/paginated";
import useGetDataStaffEvent from "@/app/staff/view-event/hooks/getEvents";
import { Input } from "@/components/ui/input";

export default function PaymentTable() {
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
            <div className="flex mb-5 gap-10">
                <div className="flex gap-7 items-center w-[30%]">
                    <label className="text-base text-[#6f6f6f]">Name</label>
                    <Input
                        type="text"
                        className="w-full border-2 border-gray-500 focus-visible:ring-0"
                        value={name}
                        onChange={handleChangeName}
                    />
                </div>
                <div className="flex gap-7 items-center w-[30%]">
                    <label className="text-base text-[#6f6f6f]">Ward</label>
                    <Input
                        type="text"
                        className="w-full border-2 border-gray-500 focus-visible:ring-0"
                        // value={ward}
                        // onChange={handleChangeWard}
                    />
                </div>
                <div className="flex gap-7 items-center w-[30%]">
                    <label className="text-base text-[#6f6f6f]">District</label>
                    <Input
                        type="text"
                        className="w-full border-2 border-gray-500 focus-visible:ring-0"
                        // value={district}
                        // onChange={handleChangeDistrict}
                    />
                </div>
            </div>
            {/* Header */}
            <div className="grid grid-cols-5 bg-[#4B5563] text-white font-semibold rounded-t-lg">
                <div className="p-4">Image</div>
                <div className="p-4">Name</div>
                <div className="p-4 ">Max Attendees</div>
                <div className="p-4 ">Start Date</div>
                <div className="p-4 ">End Date</div>
            </div>

            {/* Body */}
            <div className="border border-gray-300 rounded-b-lg">
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-5 hover:bg-gray-50 transition-colors"
                        >
                            <img
                                src={item?.imagesUrl}
                                alt="Event image"
                                className="bg-black w-[50px] h-[50px] m-2 rounded-full"
                            />

                            <div className="p-4 capitalize">{item?.name}</div>

                            <div className="p-4">{item?.maxAttendees}</div>
                            <div className="p-4 lowercase">
                                {item?.startDate}
                            </div>
                            <div className="p-4 lowercase">{item?.endDate}</div>
                        </div>
                    ))
                ) : (
                    <div className="p-4 text-center">Không có kết quả nào.</div>
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
