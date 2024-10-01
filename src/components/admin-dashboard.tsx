"use client";
import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";

export default function AdminDashboard() {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4 p-6">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <FaEye className='text-4xl mb-2' />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">$3.456K</h5>
                    </a>
                    <div className="flex justify-between">
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Total View</p>
                        <p className="mb-3 font-normal text-green-500 dark:text-gray-400 flex items-center ">
                            0.43% <IoIosArrowRoundUp className="ml-1 text-green-500" />
                        </p>
                    </div>
                </div>

                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <FaMoneyBillTrendUp className='text-4xl mb-2' />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">$45.2K</h5>
                    </a>
                    <div className="flex justify-between">
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Total Profit</p>
                        <p className="mb-3 font-normal text-green-500 dark:text-gray-400 flex items-center ">
                            4.35% <IoIosArrowRoundUp className="ml-1 text-green-500" />
                        </p>
                    </div>
                </div>

                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <FaGift className='text-4xl mb-2'/>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">2.450</h5>
                    </a>
                    <div className="flex justify-between">
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Total Adopt</p>
                        <p className="mb-3 font-normal text-green-500 dark:text-gray-400 flex items-center ">
                            0.43% <IoIosArrowRoundUp className="ml-1 text-green-500" />
                        </p>
                    </div>
                </div>

                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <FiUsers className='text-4xl mb-2' />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">$45.2K</h5>
                    </a>
                    <div className="flex justify-between">
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Total User</p>
                        <p className="mb-3 font-normal text-green-500 dark:text-gray-400 flex items-center ">
                            0.43% <IoIosArrowRoundUp className="ml-1 text-green-500" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
