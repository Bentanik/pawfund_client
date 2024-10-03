"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsGrid, BsCalendar, BsPerson, BsTable, BsGear, BsChevronDown, BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineForm, AiOutlinePieChart } from "react-icons/ai";

export default function AdminSidebar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <aside className="w-72 bg-gray-900 text-white h-screen flex items-center">
            <div className="p-4 ml-4 w-full">
                {/* <h1 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
                    <span className="bg-indigo-500 w-8 h-8 flex items-center justify-center rounded-md">
                        <img src="/tailadmin-logo.svg" alt="TailAdmin Logo" className="w-5 h-5" />
                    </span>
                    <span>TailAdmin</span>
                </h1> */}
                <ul className="space-y-1">
                    <li className="pt-4 text-sm font-semibold text-gray-400">ADMIN</li>
                    <li>
                        <button
                            onClick={() => toggleDropdown('dashboard')}
                            className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-md"
                        >
                            <div className="flex items-center space-x-2">
                                <AiOutlineForm className="text-lg" />
                                <span>Dashboard</span>
                            </div>
                            <BsChevronDown
                                className={`transform transition-transform ${openDropdown === 'dashboard' ? "rotate-180" : ""
                                    } text-gray-400`}
                            />
                        </button>
                        {openDropdown === 'dashboard' && (
                            <ul className="pl-4 mt-1 space-y-1">
                                <li>
                                    <Link href="/admin/dashboard/elements" className="block p-2 hover:bg-gray-800 rounded-md">
                                        eCommerce
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/admin/calendar" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                            <BsCalendar className="text-lg" />
                            <span>Calendar</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/profile" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                            <BsPerson className="text-lg" />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => toggleDropdown('forms')}
                            className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-md"
                        >
                            <div className="flex items-center space-x-2">
                                <AiOutlineForm className="text-lg" />
                                <span>Forms</span>
                            </div>
                            <BsChevronDown
                                className={`transform transition-transform ${openDropdown === 'forms' ? "rotate-180" : ""
                                    } text-gray-400`}
                            />
                        </button>
                        {openDropdown === 'forms' && (
                            <ul className="pl-4 mt-1 space-y-1">
                                <li>
                                    <Link href="/admin/forms/elements" className="block p-2 hover:bg-gray-800 rounded-md">
                                        Form Elements
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin/forms/layout" className="block p-2 hover:bg-gray-800 rounded-md">
                                        Form Layout
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/admin/tables" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                            <BsTable className="text-lg" />
                            <span>Tables</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/settings" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                            <BsGear className="text-lg" />
                            <span>Settings</span>
                        </Link>
                    </li>

                    <li className="pt-4 text-sm font-semibold text-gray-400">OTHERS</li>
                    <li>
                        <Link href="/admin/chart" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                            <AiOutlinePieChart className="text-lg" />
                            <span>Chart</span>
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => toggleDropdown('ui')}
                            className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-md"
                        >
                            <div className="flex items-center space-x-2">
                                <AiOutlineForm className="text-lg" />
                                <span>UI Elements</span>
                            </div>
                            <BsChevronDown
                                className={`transform transition-transform ${openDropdown === 'ui' ? "rotate-180" : ""
                                    } text-gray-400`}
                            />
                        </button>
                        {openDropdown === 'ui' && (
                            <ul className="pl-4 mt-1 space-y-1">
                                <li>
                                    <Link href="/admin/ui/buttons" className="block p-2 hover:bg-gray-800 rounded-md">
                                        Buttons
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin/ui/cards" className="block p-2 hover:bg-gray-800 rounded-md">
                                        Cards
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            onClick={() => toggleDropdown('auth')}
                            className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-md"
                        >
                            <div className="flex items-center space-x-2">
                                <BsBoxArrowInRight className="text-lg" />
                                <span>Authentication</span>
                            </div>
                            <BsChevronDown
                                className={`transform transition-transform ${openDropdown === 'auth' ? "rotate-180" : ""
                                    } text-gray-400`}
                            />
                        </button>
                        {openDropdown === 'auth' && (
                            <ul className="pl-4 mt-1 space-y-1">
                                <li>
                                    <Link href="/admin/auth/login" className="block p-2 hover:bg-gray-800 rounded-md">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin/auth/register" className="block p-2 hover:bg-gray-800 rounded-md">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </aside>
    );
}
