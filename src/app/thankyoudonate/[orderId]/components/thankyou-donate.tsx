"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function ThankyouDonate({
    orderId,
}: Readonly<{
    orderId: string;
}>) {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="grid grid-cols-12">
            <div className="py-5 px-28">
                <div className="absolute top-5 left-10 p-2 bg-slate-200 rounded-md hover:bg-slate-300 cursor-pointer">
                    <Link href="/">Home</Link>
                </div>
            </div>
            <motion.div
                ref={ref1}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                variants={sectionVariants}
                transition={{ duration: 0.7 }}
                className="col-span-12 space-y-4 py-10 px-28"
            >
                <h1 className="text-4xl font-semibold">
                    Thank you for contributing to our success! Your support is
                    not just a monetary contribution, but a belief and hope for
                    great dreams.
                </h1>
            </motion.div>

            <div className="flex col-span-12 py-10 px-28 gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-[80%] col-span-6 space-y-10 text-gray-500"
                >
                    <p>
                        Thank you for opening your heart to support our mission
                        to help stray cats! Your contributions are not just
                        financial support; they are a gift filled with love and
                        compassion, providing much-needed aid to vulnerable
                        lives in need of rescue.
                    </p>
                    <p>
                        Stray cats often face countless dangers and challenges
                        on the streets—from hunger and illness to abandonment.
                        Thanks to your generosity, we can provide these little
                        souls not only with food and shelter but also with the
                        medical care and love they desperately need. Your
                        donations help transform their lives, taking them from
                        the harsh realities of street life to the warmth and
                        safety of loving homes.
                    </p>
                    <p>
                        Every stray cat we rescue has a story to tell, and you
                        are helping us write new chapters filled with hope and
                        happiness. For us, your support represents more than
                        just material assistance; it embodies a belief in the
                        importance of saving and caring for these small lives.
                        Thank you for making the dream of a better world for
                        stray cats a reality.
                    </p>
                    <p>
                        Please know that every action you take makes a
                        significant difference in the lives of these felines.
                        Once again, we sincerely thank you from the bottom of
                        our hearts!
                    </p>
                </motion.div>

                <div className="col-span-6 bg-cover bg-center w-1/2 h-[50vh] rounded-lg flex flex-col items-center justify-center">
                    <motion.div
                        className="col-span-6 flex flex-col justify-center items-center"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="bg-[url('/images/volunteer3.webp')] bg-cover bg-center w-[40vh] h-[30vh] shadow-md"></div>
                        <div className="flex">
                            <motion.div
                                className="mt-[-2vh] relative z-0 bg-[url('/images/volunteer1.jpg')] bg-cover bg-center w-[40vh] h-[30vh] shadow-md"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            ></motion.div>
                            <motion.div
                                className="bg-[url('/images/volunteer2.webp')] bg-cover bg-center w-[30vh] h-[30vh] shadow-md"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
