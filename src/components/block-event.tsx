"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAppSelector } from "@/stores/store";

import getAllEvents from "@/app/(user)/event/hooks/getEvents";
const ListEvent = [
    {
        thumb: "/images/meo2.jpg",
        title: "Paws for a Cause Charity Walk",
        desc: "A family-friendly walkathon where participants walk with their dogs to raise funds for local dog and cat centers. The event includes pet-themed booths, food stalls, and games for pets and their owners.",
    },
    {
        thumb: "/images/meo3.jpg",
        title: "Furry Friends Adoption Day",
        desc: "A family-friendly walkathon where participants walk with their dogs to raise funds for local dog and cat centers. The event includes pet-themed booths, food stalls, and games for pets and their owners.",
    },
    {
        thumb: "/images/meo4.jpg",
        title: "Purrfect Paws Gala",
        desc: "A family-friendly walkathon where participants walk with their dogs to raise funds for local dog and cat centers. The event includes pet-themed booths, food stalls, and games for pets and their owners.",
    },
    {
        thumb: "/images/meo2.jpg",
        title: "Paws for a Cause Charity Walk",
        desc: "A family-friendly walkathon where participants walk with their dogs to raise funds for local dog and cat centers. The event includes pet-themed booths, food stalls, and games for pets and their owners.",
    },
    {
        thumb: "/images/meo3.jpg",
        title: "Furry Friends Adoption Day",
        desc: "A family-friendly walkathon where participants walk with their dogs to raise funds for local dog and cat centers. The event includes pet-themed booths, food stalls, and games for pets and their owners.",
    },
    {
        thumb: "/images/meo4.jpg",
        title: "Purrfect Paws Gala",
        desc: "A family-friendly walkathon where participants walk with their dogs to raise funds for local dog and cat centers. The event includes pet-themed booths, food stalls, and games for pets and their owners.",
    },
];
export default function BlockEvent() {
    const [popupEvent, setPopupEvent] = useState<boolean>(false);
    const [events, setEvents] = useState<API.Event[]>([]);

    const userState = useAppSelector((state) => state.userSlice);

    const { isPendingAllEvent, getAllEvent } = getAllEvents();

    const getListEvent = async () => {
        const res = await getAllEvent();
        setEvents(res?.value.data || []);
        console.log(res?.value.data);
    };

    useEffect(() => {
        getListEvent();
    }, []); // Added eventId to dependency array
    useEffect(() => {
        if (popupEvent) {
            getListEvent();
        }
    }, [popupEvent]); // No need for nested condition, use popupEvent directly

    const formatDate = (stringDate: any) => {
        const date = new Date(stringDate);
        const day = date.getDate(); // Lấy ngày không cần 0 phía trước
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
        return events?.map((item) => {
            return (
                <div>
                    <Link
                        href="/event-detail"
                        className="block mt-[30px] relative group"
                    >
                        <div className="relative w-full max-w-sm">
                            <img
                                src="/images/meo1.jpg"
                                alt="Event"
                                className="w-[430px] h-[300px] object-cover"
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
                    <div className="w-[380px]">
                        <div className="py-[20px]">
                            <div className="mb-[10px] font-semibold">
                                {item?.eventDTO.name}
                            </div>
                            <div className=" line-clamp-2 overflow-hidden text-[0.9rem]">
                                {item?.eventDTO.description}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p>{`${formatDate(
                                item?.eventDTO.startDate
                            )} - ${formatDate(item?.eventDTO.endDate)}`}</p>
                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                />

                                <span className=" mr-[20px]">
                                    Receive Alerts
                                </span>
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#2dd4be59] dark:peer-focus:ring-[#2DD4BF] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#2DD4BF]"></div>
                            </label>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            <div>
                <div className="flex gap-[5%] flex-wrap">
                    {renderListEvent()}
                </div>
            </div>
        </div>
    );
}
