"use client";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomePage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="flex flex-col items-center justify-center min-h-full bg-gray-100">
            <div className="bg-[url('/background.jpg')] bg-cover bg-center w-full h-[120vh] rounded-lg shadow-md flex flex-col items-center justify-center ">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-7xl w-1/2 font-bold text-center text-white mb-4"
                >
                    Welcome to Cat Adoption Foundation
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    className="max-w-lg text-center mb-4"
                >
                    <h5 className="text-lg">"Time spent with cats is never wasted" - Sigmund Freud</h5>
                </motion.div>
                <motion.div
                    className="flex gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                >
                    <Button className={`text-lg transform transition-transform duration-700 relative group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} uppercase p-6`} variant="outline">
                        <span className="inline-block transition-transform duration-300 transform group-hover:-translate-x-2">
                            learn about us
                        </span>
                        <span className="inline-block ml-2 opacity-0 transition-all duration-300 transform group-hover:opacity-100 group-hover:translate-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </Button>
                    <Button className={`text-lg bg-pink-600 border-none transform transition-transform duration-700 relative group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} uppercase p-6`} variant="outline">
                        <span className="inline-block transition-transform duration-300 transform group-hover:-translate-x-2">
                            donate
                        </span>
                        <span className="inline-block ml-2 opacity-0 transition-all duration-300 transform group-hover:opacity-100 group-hover:translate-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </Button>
                    <Button className={`text-lg transform transition-transform duration-700 relative group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} uppercase p-6`} variant="outline">
                        <span className="inline-block transition-transform duration-300 transform group-hover:-translate-x-2">
                            latest news
                        </span>
                        <span className="inline-block ml-2 opacity-0 transition-all duration-300 transform group-hover:opacity-100 group-hover:translate-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </Button>
                </motion.div>
            </div>

            <motion.div
                ref={ref1}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                variants={sectionVariants}
                transition={{ duration: 0.7 }}
                className="p-20"
            >
                <div className="text-center text-9xl">10000</div>
                <div className="text-center text-2xl py-5">cats and kittens rehomed to date</div>
            </motion.div>

            <motion.div
                ref={ref2}
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={sectionVariants}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-12"
            >
                <div className="flex flex-col justify-center items-center col-span-6 p-36 bg-zinc-200 ">
                    <h2 className="text-5xl font-medium mb-4">Looking to adopt your new furry best friend?</h2>
                    <p className="text-gray-500 text-xl mb-4">Our beautiful cats and kittens are waiting to find their furever family - could that be you?</p>
                    <div className="self-start mt-4">
                        <Link href="/adopt">
                            <Button variant="outline" className="text-gray-600 bg-teal-400 uppercase p-8 hover:bg-teal-300">Learn more about adopt</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-6 bg-[url('/home1.jpg')] bg-cover bg-center w-full h-[92vh]"></div>
            </motion.div>

            <motion.div
                ref={ref3}
                initial="hidden"
                animate={inView3 ? "visible" : "hidden"}
                variants={sectionVariants}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-12"
            >
                <div className="col-span-6 bg-[url('/home2.webp')] bg-cover bg-center w-full h-[101vh]"></div>
                <div className="flex flex-col justify-center items-center col-span-6 p-36">
                    <div className="self-start mb-4">
                        <h5>Would you like to help?</h5>
                    </div>
                    <h2 className="text-5xl font-medium mb-4">We're always looking for enthusiastic volunteers</h2>
                    <p className="text-gray-500 text-xl mb-4">We have a range of volunteer roles available.</p>
                    <div className="self-start mt-4">
                        <Link href="/adopt">
                            <Button variant="outline" className="text-gray-600 uppercase p-8 border-black hover:bg-teal-400">become a volunteer</Button>
                        </Link>
                    </div>
                </div>
            </motion.div>

            <motion.div
                ref={ref4}
                initial="hidden"
                animate={inView4 ? "visible" : "hidden"}
                variants={sectionVariants}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-12"
            >
                <div className="flex flex-col justify-center items-center col-span-6 p-36 bg-zinc-200 ">
                    <div className="self-start mb-4">
                        <h5>Like what we're doing?</h5>
                    </div>
                    <h2 className="text-5xl font-medium mb-4">We need your help - donate, sponsor or fundraise</h2>
                    <p className="text-gray-500 text-xl mb-4">As a small, volunteer-run organisation, we rely on your generosity.</p>
                    <div className="self-start mt-4">
                        <Link href="/adopt">
                            <Button variant="outline" className="text-gray-600 bg-teal-400 uppercase p-8 hover:bg-teal-300">way to help</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-6 bg-[url('/home3.webp')] bg-cover bg-center w-full h-[97vh]"></div>
            </motion.div>
        </div>
    );
};

export default HomePage;
