"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsPerson, BsTable, BsGear, BsChevronDown } from "react-icons/bs";
import { AiOutlineForm } from "react-icons/ai";
import { LuBookMarked, LuMessageSquarePlus } from "react-icons/lu";
import { useAppSelector } from "@/stores/store";
export default function StaffSidebar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const userState = useAppSelector((state) => state.userSlice);
    const staffState = useAppSelector((state) => state.differenceSlice.staff);

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <aside
            className={`${
                staffState.openSidebar === false ? "w-72" : "w-0"
            } bg-gray-900 text-white h-screen transition-all`}
        >
            {staffState.openSidebar === false && (
                <div className="p-4 ml-4">
                    <div>
                        <h3 className="pt-4 text-sm font-semibold text-gray-400">
                            STAFF
                        </h3>
                        <ul className="space-y-1">
                            {/* <li>
                                <button
                                    onClick={() => toggleDropdown("dashboard")}
                                    className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-md"
                                >
                                    <div className="flex items-center space-x-2">
                                        <AiOutlineForm className="text-lg" />
                                        <span>Dashboard</span>
                                    </div>
                                    <BsChevronDown
                                        className={`transform transition-transform ${
                                            openDropdown === "dashboard"
                                                ? "rotate-180"
                                                : ""
                                        } text-gray-400`}
                                    />
                                </button>
                                {openDropdown === "dashboard" && (
                                    <ul className="pl-4 mt-1 space-y-1">
                                        <li>
                                            <Link
                                                href="/admin/dashboard/elements"
                                                className="block p-2 hover:bg-gray-800 rounded-md"
                                            >
                                                eCommerce
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li> */}
                            <li>
                                <Link
                                    href="/staff/application"
                                    className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
                                >
                                    <LuBookMarked className="text-lg" />
                                    <span>Application</span>
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => toggleDropdown("cat")}
                                    className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-md"
                                >
                                    <div className="flex items-center space-x-2">
                                        <AiOutlineForm className="text-lg" />
                                        <span>Cat</span>
                                    </div>
                                    <BsChevronDown
                                        className={`transform transition-transform ${
                                            openDropdown === "cat"
                                                ? "rotate-180"
                                                : ""
                                        } text-gray-400`}
                                    />
                                </button>
                                {openDropdown === "cat" && (
                                    <ul className="pl-4 mt-1 space-y-1">
                                        <li>
                                            <Link
                                                href="/staff/pet/create-pet"
                                                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
                                            >
                                                <LuBookMarked className="text-lg" />
                                                <span>Create cat</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/staff/pet/view-pet"
                                                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
                                            >
                                                <LuBookMarked className="text-lg" />
                                                <span>View cats</span>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li>
                                <Link
                                    href="/staff/create-cash-donate"
                                    className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
                                >
                                    <LuBookMarked className="text-lg" />
                                    <span>Donate cash</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/staff/freetime"
                                    className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
                                >
                                    <BsPerson className="text-lg" />
                                    <span>Free Time</span>
                                </Link>
                            </li>
                            {userState.user?.firstName ===
                                "Staff assistant" && (
                                <li>
                                    <Link
                                        href="/staff/message"
                                        className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
                                    >
                                        <LuMessageSquarePlus className="text-lg" />
                                        <span>Message</span>
                                    </Link>
                                </li>
                            )}
                            <li>
                                <button
                                    onClick={() => toggleDropdown("forms")}
                                    className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-md"
                                >
                                    <div className="flex items-center space-x-2">
                                        <AiOutlineForm className="text-lg" />
                                        <span>Events</span>
                                    </div>
                                    <BsChevronDown
                                        className={`transform transition-transform ${
                                            openDropdown === "forms"
                                                ? "rotate-180"
                                                : ""
                                        } text-gray-400`}
                                    />
                                </button>
                                {openDropdown === "forms" && (
                                    <ul className="pl-4 mt-1 space-y-1">
                                        <li>
                                            <Link
                                                href="/staff/event/create-event"
                                                className="block p-2 hover:bg-gray-800 rounded-md"
                                            >
                                                Create event
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/staff/view-event"
                                                className="block p-2 hover:bg-gray-800 rounded-md"
                                            >
                                                View event
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link
                                    href="/admin/tables"
                                    className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
                                >
                                    <BsTable className="text-lg" />
                                    <span>Tables</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/settings"
                                    className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
                                >
                                    <BsGear className="text-lg" />
                                    <span>Settings</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </aside>
    );
}
