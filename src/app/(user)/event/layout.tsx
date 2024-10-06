import { ReactNode } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface LayoutProps {
    children: ReactNode;
}

export default function EventLayout({ children }: LayoutProps) {
    return (
        <div className=" p-[10%]">
            <h1 className="text-[2rem]">News and events</h1>
            <div className="flex gap-10 mt-10">
                {/* Left Content */}
                <div className="flex-[3]">
                    <div className="bg-[#00000011] flex items-center justify-center h-[170px] rounded-xl">
                        <img
                            src="/images/event-thumb.jpg"
                            alt="thumb-hero"
                            className="w-[95%] h-[120px] object-cover"
                            style={{ objectPosition: "0 75%" }}
                        />
                    </div>
                    {/* Nội dung */}
                    <main className="">{children}</main>
                </div>
                {/* Right Content */}

                <div className="flex-1">
                    <div
                        style={{
                            boxShadow: "5px 9px 14px -4px rgba(0,0,0,0.39)",
                        }}
                        className="rounded-lg"
                    >
                        <img
                            src="/images/volunteer-event.jpg"
                            alt="volunteer-event"
                            className="w-full h-[400px] object-cover"
                            style={{ objectPosition: "0 25%" }}
                        />
                        <div className="py-[30px] text-center text-[1.5rem] font-bold">
                            Love cats and want to help?
                        </div>
                        {/* button */}
                        <div className="flex justify-center">
                            <Button className="bg-[#2dd4bf] my-[30px]">
                                Save Changes
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
