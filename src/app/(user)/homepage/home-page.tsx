"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gray-100">
      <div className="bg-[url('/images/background.jpg')] bg-cover bg-center w-full h-[120vh] shadow-md flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-7xl w-1/2 font-bold text-center text-white mb-4 relative z-10"
        >
          Welcome to Cat Adoption Foundation
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="max-w-lg text-center mb-4 relative z-10"
        >
          <h5 className="text-white text-lg">
            "Time spent with cats is never wasted" - Sigmund Freud
          </h5>
        </motion.div>

        <motion.div
          className="flex gap-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <Link href="/aboutus">
            <Button
              className={`hover:bg-transparent text-lg w-56 transform transition-transform duration-700 relative group flex items-center justify-center uppercase p-6`}
              variant="outline"
            >
              <span className="text-white inline-block transition-transform duration-300 transform group-hover:-translate-x-4">
                learn about us
              </span>
              <span className="transition-transform duration-300 transform opacity-0 group-hover:opacity-100 absolute right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Button>
          </Link>
          <Link href="/donation">
            <Button
              className={`hover:bg-pink-600 text-lg w-32 bg-pink-600 border-none transform transition-transform duration-700 relative group flex items-center justify-center uppercase p-6`}
              variant="outline"
            >
              <span className="text-white inline-block transition-transform duration-300 transform group-hover:-translate-x-4">
                donate
              </span>
              <span className="transition-transform duration-300 transform opacity-0 group-hover:opacity-100 absolute right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Button>
          </Link>

          <Link href="/event">
            <Button
              className={`hover:bg-transparent text-lg w-48 transform transition-transform duration-700 relative group flex items-center justify-center uppercase p-6`}
              variant="outline"
            >
              <span className="text-white inline-block transition-transform duration-300 transform group-hover:-translate-x-4">
                latest news
              </span>
              <span className="transition-transform duration-300 transform opacity-0 group-hover:opacity-100 absolute right-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Button>
          </Link>
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
        <div className="text-center text-2xl py-5">
          cats and kittens rehomed to date
        </div>
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
          <h2 className="text-5xl font-medium mb-4">
            Looking to adopt your new furry best friend?
          </h2>
          <p className="text-gray-500 text-xl mb-4">
            Our beautiful cats and kittens are waiting to find their furever
            family - could that be you?
          </p>
          <div className="self-start mt-4">
            <Link href="/adopt">
              <Button
                variant="outline"
                className="text-gray-600 bg-teal-400 uppercase p-8 hover:bg-teal-300"
              >
                Learn more about adopt
              </Button>
            </Link>
          </div>
        </div>
        <div className="col-span-6 bg-[url('/images/home1.jpg')] bg-cover bg-center w-full h-[92vh]"></div>
      </motion.div>

      <motion.div
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-12"
      >
        <div className="col-span-6 bg-[url('/images/home2.webp')] bg-cover bg-center w-full h-[101vh]"></div>
        <div className="flex flex-col justify-center items-center col-span-6 p-36">
          <div className="self-start mb-4">
            <h5>Would you like to help?</h5>
          </div>
          <h2 className="text-5xl font-medium mb-4">
            We're always looking for enthusiastic volunteers
          </h2>
          <p className="text-gray-500 text-xl mb-4">
            We have a range of volunteer roles available.
          </p>
          <div className="self-start mt-4">
            <Link href="/event-detail">
              <Button
                variant="outline"
                className="text-gray-600 uppercase p-8 border-black hover:bg-teal-400"
              >
                become a volunteer
              </Button>
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
          <h2 className="text-5xl font-medium mb-4">
            We need your help - donate, sponsor or fundraise
          </h2>
          <p className="text-gray-500 text-xl mb-4">
            As a small, volunteer-run organisation, we rely on your generosity.
          </p>
          <div className="self-start mt-4">
            <Link href="/adopt">
              <Button
                variant="outline"
                className="text-gray-600 bg-teal-400 uppercase p-8 hover:bg-teal-300"
              >
                way to help
              </Button>
            </Link>
          </div>
        </div>
        <div className="col-span-6 bg-[url('/images/home3.webp')] bg-cover bg-center w-full h-[97vh]"></div>
      </motion.div>
    </div>
  );
}
