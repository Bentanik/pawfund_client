"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BlockEvent from "@/components/block-event";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PaginatedComponent from "@/components/paginated";
import useGetDataEvent from "@/app/(user)/event/hooks/getEvents";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Event = () => {
    const [name, setName] = useState<string>("all");
    const [status, setStatus] = useState<REQUEST.EventStatus | undefined>();
    const [isAscCreatedDate, setIsAscCreatedDate] = useState<boolean>(true);
    const [data, setData] = useState<API.Events[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1);

    const { getEventsApi } = useGetDataEvent();

    const handleGetData = async (pageIndex: number) => {
        try {
            const res = await getEventsApi({
                pageIndex: pageIndex,
                pageSize: 3,
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

                            <Link href={"/volunteer"}>
                                <Button className="mt-[20px] rounded-[50px] p-7 min-w-[200px]  hover:bg-[#4DD2BF] transition-colors duration-300">
                                    Volunteer page
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="mt-[20px]">
                <div className="flex gap-[40px] justify-between">
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
                                <SelectItem value={"Ongoing"}>
                                    On going
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex gap-10 items-center w-[30%]">
                        <label className="text-base text-[#6f6f6f]">Name</label>
                        <Input
                            type="text"
                            className="w-full border-2 border-gray-500 focus-visible:ring-0"
                            value={name}
                            onChange={handleChangeName}
                        />
                    </div>
                </div>

                {data?.length > 0 ? (
                    <div className="mt-[30px]">
                        <BlockEvent events={data} />
                    </div>
                ) : (
                    <h4 className="my-10 text-xl">Not available for event</h4>
                )}
            </div>
            {data?.length > 0 && (
                <div className="my-10">
                    <div className="mt-5">
                        <PaginatedComponent
                            totalPages={totalPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Event;
