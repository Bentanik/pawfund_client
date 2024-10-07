"use client";

import Link from "next/link";

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
        thumb: "/images/meo5.jpeg",
        title: "Pet Lovers’ Picnic",
        desc: "A family-friendly walkathon where participants walk with their dogs to raise funds for local dog and cat centers. The event includes pet-themed booths, food stalls, and games for pets and their owners.",
    },
    {
        thumb: "/images/meo6.jpeg",
        title: "Rescue Run 5K",
        desc: "A fam and cat centers. The event includes pet-themed booths, food stalls, and games for pets and their owners.",
    },

    {
        thumb: "/images/meo3.jpg",
        title: "Furry Friends Adoption Day",
        desc: "A family-friendly walkathon where participants walk with their dogs to raise funds for local dog and cat centers. The event includes pet-themed booths, food stalls, and games for pets and their owners.",
    },
    {
        thumb: "/images/meo5.jpeg",
        title: "Pet Lovers’ Picnic",
        desc: "A family-friendly walkathon where participants walk with their dogs to raise funds for local dog and cat centers. The event includes pet-themed booths, food stalls, and games for pets and their owners.",
    },
    {
        thumb: "/images/meo6.jpeg",
        title: "Rescue Run 5K",
        desc: "A fam and cat centers. The event includes pet-themed booths, food stalls, and games for pets and their owners.",
    },

    {
        thumb: "/images/meo3.jpg",
        title: "Furry Friends Adoption Day",
        desc: "A family-friendly walkathon where participants walk with their dogs to raise funds for local dog and cat centers. The event includes pet-themed booths, food stalls, and games for pets and their owners.",
    },
];
export default function BlockEvent() {
    const renderListEvent = () => {
        return ListEvent.map((item) => {
            return (
                <Link
                    href="/event-detail"
                    className="block w-[32%] hover:opacity-70"
                >
                    <div className="bg-[#00000011] rounded-xl hover:shadow-[0_0_0_2px_#2dd4bf] transition-all duration-300 ease-in-out">
                        <div className="p-[15px]">
                            <img
                                src={item.thumb}
                                alt="event-thumb"
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="mt-[10px]">
                                <h3 className="text-[1.5rem] font-medium line-clamp-1">
                                    {item.title}
                                </h3>
                                <p className="line-clamp-2 mt-[5px] text-[0.875rem] text-gray-700">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        });
    };

    return (
        <div>
            <div>
                <div className="flex flex-wrap gap-[10px]">
                    {renderListEvent()}
                </div>
            </div>
        </div>
    );
}
