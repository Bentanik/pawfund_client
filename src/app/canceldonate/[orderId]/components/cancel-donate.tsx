"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function CancelDonate({
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
          We regret to inform you that our fundraising efforts did not meet our
          goals. Your intended support was deeply appreciated, and we are
          grateful for your belief in our mission.
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
            Thank you for being a part of our journey to help stray cats! Your
            support means the world to us, and every donation brings us one step
            closer to making a difference in their lives.
          </p>
          <p>
            However, we also want to acknowledge that our mission is not without
            its challenges. There are times when we face setbacks—cats we were
            unable to rescue in time, or situations that test our resources and
            resolve. Each failure reminds us of the harsh realities these
            animals endure daily and the urgent need for continued support and
            awareness.
          </p>
          <p>
            Despite these challenges, your generosity fuels our determination to
            keep going. Every contribution, no matter the size, helps us provide
            food, shelter, and medical care to those we can reach. It empowers
            us to keep striving for the safety and well-being of stray cats,
            even when the path is difficult.
          </p>
          <p>
            We are committed to learning from our experiences and improving our
            efforts. Your support not only aids in immediate relief but also
            inspires hope for a better future for these vulnerable beings.
            Together, we can continue to advocate for those who cannot speak for
            themselves.
          </p>
          <p>
            Thank you for believing in our mission, even through the ups and
            downs. Your kindness and compassion light the way forward, helping
            us create a world where every stray cat has a chance at a better
            life.
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
