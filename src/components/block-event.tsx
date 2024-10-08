"use client";

import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
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
    const renderListEvent = () => {
        return ListEvent.map((item) => {
            return (
                <div>
                    <Link
                        href="/event-detail"
                        className="block mt-[30px] relative group"
                    >
                        <div className="relative w-full max-w-sm">
                            <img
                                src={item.thumb}
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
                                {item.title}
                            </div>
                            <div className=" line-clamp-2 overflow-hidden text-[0.9rem]">
                                {item.desc}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p>Nov21 - Nov23</p>
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
