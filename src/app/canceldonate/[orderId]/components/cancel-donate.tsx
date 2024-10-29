"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function CancelDonate({
  orderId,
}: Readonly<{
  orderId: string;
}>) {
  return (
    <div className="w-full h-screen object-cover overflow-hidden relative">
      <div className="relative w-full h-full bg-red-400">
        <div className="absolute inset-0 bg-[#00000023] opacity-50"></div>
      </div>

      <div className="w-[80%] h-[85%] absolute top-[10%] left-[10%] border border-[#ffffffa4] rounded-xl">
        <div className="p-4 flex">
          <img
            src="/images/donateFailThumb.jpg"
            alt="Thumbnail"
            className="flex-1 h-[590px] object-cover rounded-l-xl object-[50%_80%]"
          />
          <div className="absolute top-[55%] left-[0] right-[0]"></div>
          <div className="flex-[1.4] bg-white rounded-r-xl relative z-10">
            <div className="flex justify-center mt-[100px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-[15%]"
              >
                <path
                  fill="#f22c2c"
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                />
              </svg>
            </div>
            <div className="mt-[10px] text-center text-[2rem]">
              Donated Fail
            </div>

            <div className="mt-5 text-center px-10">
              Something gone wrong please cancel and try again.
            </div>

            <div className="flex justify-center mt-10">
              <Link href="/">
                <Button className="text-[white] bg-black hover:bg-[#f22c2c] z-20 rounded-full p-6">
                  Back to home page
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
