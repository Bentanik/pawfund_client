"use client";
import React, { useState, useEffect, useRef } from 'react';
import { VscBellDot } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";

export default function StaffHeader() {
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const notificationRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
                setNotificationOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white text-white px-10 py-4 flex items-center justify-between">
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white text-black p-2 rounded-l-md focus:outline-none border border-gray-300"
                />
                <button className="bg-gray-600 p-3 rounded-r-md border border-gray-600">
                    <CiSearch />
                </button>
            </div>

            <div className="flex items-center space-x-4 relative">
                <div className="relative" ref={notificationRef}>
                    <div
                        onClick={() => setNotificationOpen(!notificationOpen)}
                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 bg-slate-200 cursor-pointer"
                    >
                        <VscBellDot className="text-black h-6 w-6" />
                    </div>

                    {notificationOpen && (
                        <div
                            id="notificationDropdown"
                            className="z-10 absolute right-0 mt-2 bg-white rounded-lg shadow w-80 max-h-80 overflow-y-auto border border-gray-200"
                        >
                            <div className="px-4 py-3 text-lg font-semibold text-gray-800 border-b border-gray-200">
                                Notification
                            </div>
                            <ul className="py-2">
                                {[...Array(3)].map((_, index) => (
                                    <li key={index} className="px-4 py-3 border-b border-gray-200">
                                        <div className="text-sm text-gray-700 mb-1">
                                            {`Notification message ${index + 1} - A brief description that fits nicely.`}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {`${new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}`}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="relative" ref={dropdownRef}>
                    <img
                        id="avatarButton"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-10 h-10 rounded-full cursor-pointer"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Thay thế bằng đường dẫn avatar của bạn
                        alt="User dropdown"
                    />

                    {dropdownOpen && (
                        <div
                            id="userDropdown"
                            className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                        >
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div>Bonnie Green</div>
                                <div className="font-medium truncate">name@flowbite.com</div>
                            </div>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
