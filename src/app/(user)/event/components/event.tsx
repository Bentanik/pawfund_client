"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BlockEvent from "@/components/block-event";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function UserProfilePage() {
    return (
        <div className="min-h-screen px-[7%]">
            <div className="flex  py-[20px]">
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1"
                >
                    <img
                        src="/images/thumb-event1.jpg"
                        alt="thumb-hero"
                        className="w-full h-[600px] object-cover"
                    />
                </motion.div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1"
                >
                    <div className="p-[10%]">
                        <h1 className="text-[3.5rem] font-semibold after:content-[''] after:absolute after:left-[11%] after:top-[150px] after:w-[7%] after:h-1 after:bg-black">
                            Cat events
                        </h1>
                        <p className="mt-[70px] ml-[20px]">
                            Cat adoption and support events help homeless or
                            abandoned cats find loving homes, raise awareness
                            about responsible pet ownership, and provide a
                            platform for animal lovers to adopt and support cats
                            through donations or volunteering, making a positive
                            impact in cat lives.
                        </p>
                        <div className="w-full border-t mt-[30px]">
                            <h2 className="mt-[20px] text-[1.3rem] font-semibold">
                                You want to become a volunteer ?
                            </h2>
                            <p className="mt-10px">
                                To learn about policies and other benefits for
                                volunteers, please click the button below.
                            </p>

                            <Button className="mt-[20px] rounded-[50px] p-7 min-w-[200px]  hover:bg-[#4DD2BF] transition-colors duration-300">
                                Volunteer page
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="mt-[20px]">
                <div className="flex flex-col gap-y-2 w-[30%]">
                    <Select>
                        <SelectTrigger className="w-[50%] border-2 border-[#00000065]">
                            <SelectValue placeholder="Newest & Upcoming" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Newest & Upcoming">
                                Newest & Upcoming
                            </SelectItem>
                            <SelectItem value="In progress">
                                In progress
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-[30px] flex gap-[10px]">
                    <BlockEvent />
                </div>
            </div>
            <div className="my-[50px]">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                className="bg-blue-500 text-white hover:bg-blue-500 hover:text-white"
                            ></PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">4</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
