"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

type BlockEventProps = {
    events?: API.Events[];
};
const BlockEvent: React.FC<BlockEventProps> = ({ events }) => {
    const formatDate = (stringDate: any) => {
        const date = new Date(stringDate);
        const day = date.getDate();
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const month = months[date.getMonth()]; // Lấy tên tháng viết tắt

        return `${month} ${day}`; // Ví dụ: "Nov 10"
    };
    const renderListEvent = () => {
        return events
            ?.filter(
                (item) =>
                    item.status === "NotStarted" || item.status === "Ongoing"
            )
            .map((item) => {
                return (
                    <div key={item.id}>
                        <Link
                            href={`/event-detail/${item.id}`}
                            className="block mt-[30px] relative group"
                        >
                            <div className="relative w-full max-w-sm">
                                s
                                <img
                                    src={item?.imagesUrl}
                                    alt="Event"
                                    className="w-full h-[300px] object-cover"
                                />
                                {/* Nội dung chỉ xuất hiện khi hover vào thẻ Link */}
                                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#00000095] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-2">
                                    <div className="pt-10">
                                        <p className="text-[white] text-[0.9rem] text-center">
                                            Click here to view detail
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="w-full">
                            <div className="py-[20px]">
                                <div className="mb-[10px] font-semibold">
                                    {item?.name}
                                </div>
                                <div className=" line-clamp-2 overflow-hidden text-[0.9rem]">
                                    {item?.description}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <p>{`${formatDate(
                                    item?.startDate
                                )} - ${formatDate(item?.endDate)}`}</p>
                                <div>{item?.status}</div>
                            </div>
                        </div>
                    </div>
                );
            });
    };

    return (
        <div>
            <div>
                <div className="grid grid-cols-3 gap-[5%] w-full">
                    {renderListEvent()}
                </div>
            </div>
        </div>
    );
};

export default BlockEvent;
