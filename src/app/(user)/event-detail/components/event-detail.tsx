"use client";
import { motion, useAnimation } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAppSelector } from "@/stores/store";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import VolunteerForm from "./volunteer-form";
import getCurrentEvent from "../hooks/getCurrentEvent";
import getEventById from "../hooks/getEventById";

interface EventDetail {
    eventId: string;
}

const EventDetail = ({ eventId }: EventDetail) => {
    const [progress, setProgress] = useState(13);
    const [popupEvent, setPopupEvent] = useState<boolean>(false);
    const [eventActivities, setEventActivities] = useState<API.ActivityEvent[]>(
        []
    );
    const [event, setEvent] = useState<API.Event>();
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

    const userState = useAppSelector((state) => state.userSlice);

    const handleOpenPopup = () => {
        setPopupEvent(true);
    };

    const handleClosePopup = () => {
        setPopupEvent(false);
    };

    const { isPendingEventActivity, getApprovedEventsActivityApi } =
        getCurrentEvent();
    const { isPendingEvent, getEventApi } = getEventById();

    const getListApprovedEventsActivity = async (id: string) => {
        const res = await getApprovedEventsActivityApi({ eventId: id });
        setEventActivities(res?.value.data || []); // Set to empty array if data is undefined
    };

    const getEvent = async (id: string) => {
        const res = await getEventApi({ eventId: id }); // Ensure correct function usage
        setEvent(res?.value.data); // Set to null if data is undefined
    };

    useEffect(() => {
        if (eventId) {
            getListApprovedEventsActivity(eventId);
            getEvent(eventId);
        }
    }, [eventId]); // Added eventId to dependency array

    useEffect(() => {
        if (popupEvent) {
            getListApprovedEventsActivity(eventId);
            getEvent(eventId);
        }
    }, [popupEvent, eventId]); // No need for nested condition, use popupEvent directly

    const renderListEvent = () => {
        return eventActivities?.map((item, index) => {
            const numberOfVolunteer = Math.round(
                (item?.activityDTO.numberOfVolunteer /
                    item?.activityDTO.quantity) *
                    100
            );

            return (
                <div key={index}>
                    <AccordionItem value={`item-${index + 1}`}>
                        <AccordionTrigger className="mt-[20px] text-[1.1rem] ">
                            {item?.activityDTO.name}
                        </AccordionTrigger>
                        <AccordionContent className="">
                            <div className="border rounded-xl">
                                <div className="p-[20px]">
                                    <div className="flex gap-2">
                                        <div>Date time: </div>
                                        <div>{item.activityDTO.startDate}</div>
                                    </div>
                                    <div className="flex gap-2 mt-4">
                                        <div>Number of volunteer: </div>
                                        <div>{item.activityDTO.quantity}</div>
                                        {/* <div className="w-[40%] bg-gray-200 rounded">
                                            <div
                                                className="bg-green-500 text-xs font-medium text-white text-center p-[10px] leading-none rounded-l "
                                                style={{
                                                    width: `${item.progress}`,
                                                }}
                                            ></div>
                                        </div> */}
                                        <Progress
                                            value={numberOfVolunteer}
                                            className="w-[50%] h-[10px] mt-[5px]"
                                        />
                                    </div>

                                    <div className="flex gap-2 mt-4">
                                        <div>Description: </div>
                                        <div>
                                            {item?.activityDTO.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </div>
            );
        });
    };

    return (
        <div>
            <div>
                {/*Thumb hero */}
                <div className="relative">
                    <img
                        src="/images/home1.jpg"
                        alt="thumb hero"
                        className="w-full h-[500px] object-cover "
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                            delay: 0.4,
                        }}
                        className="absolute top-20 transform left-[27%] text-center"
                    >
                        <div className=" text-white text-[3rem] w-[70%] min-w-[700px] font-semibold leading-[50px]">
                            Donate to theDonate to theDonate
                        </div>
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                            delay: 0.9,
                        }}
                        className="absolute top-[210px] transform left-[27%] text-center"
                    >
                        <div className="text-lg text-white text-[1.6rem] w-[60%] min-w-[600px]  leading-[25px] line-clamp-5 overflow-hidden">
                            Donate to theDonate to theDonate Donate to theDonate
                            to theDonateDonate to theDonate to theDonateDonate
                            to theDonate to theDonateDonate to theDonate to
                            Donate to theDonate to theDonate Donate to theDonate
                            to theDonateDonate to theDonate to theDonateDonate
                        </div>
                    </motion.h1>
                </div>

                <motion.div
                    ref={ref1}
                    initial="hidden"
                    animate={inView1 ? "visible" : "hidden"}
                    variants={sectionVariants}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex justify-center mt-[50px] mb-[30px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-[50px] h-[50px]"
                        >
                            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                        </svg>
                    </div>
                </motion.div>

                <div className="p-[20px]">
                    {/* Body event info detail */}
                    <div className="mt-[20px]">
                        <motion.div
                            ref={ref2}
                            initial="hidden"
                            animate={inView2 ? "visible" : "hidden"}
                            variants={sectionVariants}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex ">
                                <div className="flex-1 bg-slate-700 h-[500px]">
                                    <img
                                        src="/images/time-event-bg.jpg"
                                        alt="branch-bg"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex-1 bg-[#f5f5f5] h-[500px]">
                                    <div className="p-[100px]">
                                        <div className="text-[#0000005a]">
                                            Here is all information about event
                                        </div>
                                        <h2 className="text-[3rem]">
                                            Detail about event
                                        </h2>
                                        <div className="flex">
                                            <div className="pr-[30px] border-r-2 pb-[20px]">
                                                <h3 className="flex-1 text-[2rem] text-[#0000005a]">
                                                    Event time
                                                </h3>
                                                <div>
                                                    <div className="text-[1.2rem]">
                                                        Jan 13th - Jan 14th
                                                    </div>

                                                    <div className="text-[1.2rem]">
                                                        8AM - 3PM
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pl-[30px]">
                                                <h3 className="flex-1 text-[2rem] text-[#0000005a]">
                                                    Max Attend
                                                </h3>
                                                <div className="text-center text-[3rem] text-[#0000005a] font-semibold leading-[45px]">
                                                    100
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            ref={ref3}
                            initial="hidden"
                            animate={inView3 ? "visible" : "hidden"}
                            variants={sectionVariants}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex">
                                <div className="flex-1 bg-[#f5f5f5] h-[500px]">
                                    <div className="p-[100px]">
                                        <h2 className="text-[3rem]">
                                            Event location
                                        </h2>
                                        <div>
                                            <div className="flex mt-4 gap-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    className="w-[25px] h-[25px] opacity-50"
                                                >
                                                    <path d="M0 32C0 14.3 14.3 0 32 0L480 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-176 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 48L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64C14.3 64 0 49.7 0 32zm96 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8l144 0z" />
                                                </svg>
                                                <div>Adopt center </div>
                                            </div>
                                            <div className="flex mt-4 gap-3 ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 384 512"
                                                    className="w-[25px] h-[25px] opacity-50"
                                                >
                                                    <path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z" />
                                                </svg>
                                                <div>+84 838 922 554 </div>
                                            </div>{" "}
                                            <div className="flex mt-4 gap-3 ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    className="w-[25px] h-[25px] opacity-50"
                                                >
                                                    <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                                                </svg>
                                                <div>tphatt22@gmail.com </div>
                                            </div>{" "}
                                            <div className="flex mt-4 gap-3 ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 576 512"
                                                    className="w-[25px] h-[25px] opacity-50"
                                                >
                                                    <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                                                </svg>
                                                <div className="w-[50%]">
                                                    123 Nguyễn Văn Trỗi, Phường
                                                    10, Quận Phú Nhuận, TP. Hồ
                                                    Chí Minh.{" "}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 bg-slate-700 h-[500px]">
                                    <img
                                        src="/images/branch-event-bg.jpg"
                                        alt="branch-bg"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/*All activity in event */}
                    <div className="my-[50px]">
                        <div className="flex justify-between w-[70%] items-center">
                            <h1 className="text-[2rem]">
                                Activities for volunteers
                            </h1>
                            <Button
                                className="hover:bg-[#2DD4BF]"
                                onClick={handleOpenPopup}
                            >
                                Be come volunteer
                            </Button>
                        </div>

                        <div>
                            <Accordion
                                type="single"
                                collapsible
                                className="w-[70%]"
                            >
                                {renderListEvent()}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <VolunteerForm
                eventId={eventId}
                open={popupEvent}
                onClose={handleClosePopup}
                eventActivities={eventActivities ?? []}
            />
        </div>
    );
};

export default EventDetail;
