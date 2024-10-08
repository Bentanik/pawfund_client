"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { TbMessageReportFilled } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
// import { BiArrowBack } from "react-icons/bi";

const Header: React.FC = () => {
    const currentPath = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
                // setSettingsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="flex items-center justify-between px-12 py-8 bg-white shadow">
            <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-10" />
                <h1 className="text-2xl font-bold ml-2">CAT ADOPTION FOUNDATION inc</h1>
            </div>
            <nav className="flex items-center space-x-6 mr-10">
                <Link href="/" className={`text-gray-600 ${currentPath === "/" ? "text-teal-400" : "hover:text-teal-400"}`}>Home</Link>
                <Link href="/aboutus" className={`text-gray-600 ${currentPath === "/aboutus" ? "text-teal-400" : "hover:text-teal-400"}`}>About Us</Link>
                <Link href="/adopt" className={`text-gray-600 ${currentPath === "/adopt" ? "text-teal-400" : "hover:text-teal-400"}`}>Adopt</Link>
                <Link href="/volunteer" className={`text-gray-600 ${currentPath === "/volunteer" ? "text-teal-400" : "hover:text-teal-400"}`}>Volunteer</Link>
                <Link href="/donation">
                    <Button variant="outline" className="text-gray-600 bg-teal-400">Donate</Button>
                </Link>
                <Link href="/newandevent" className={`text-gray-600 ${currentPath === "/newandevent" ? "text-teal-400" : "hover:text-teal-400"}`}>News and Events</Link>
                <Link href="/sponsors" className={`text-gray-600 ${currentPath === "/sponsors" ? "text-teal-400" : "hover:text-teal-400"}`}>Sponsors</Link>
                <Link href="/login" className={`text-gray-600 ${currentPath === "/login" ? "text-teal-400" : "hover:text-teal-400"}`}>Login</Link>
                <div className="relative" ref={dropdownRef}>
                    <div className="flex items-center">
                        <img
                            id="avatarButton"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="w-10 h-10 rounded-full cursor-pointer"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="User dropdown"
                        />
                    </div>
                    {/* {dropdownOpen && !settingsDropdownOpen && ( */}
                    {dropdownOpen && (
                        <div
                            id="userDropdown"
                            className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-72"
                        >
                            <div className="px-4 py-3 text-lg text-gray-900">
                                <div className="font-bold">Hello</div>
                                <div className="text-xs text-gray-500 truncate">name@domain.com</div>
                            </div>

                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
                                <li>
                                    <a href="#" className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200">
                                        <div className="flex items-center">
                                            <IoSettingsSharp className="p-1 bg-gray-300 text-black rounded-full mr-2" size={30} />
                                            <span className="text-black">Cài đặt & quyền riêng tư</span>
                                        </div>
                                        <FiChevronRight
                                            className="text-gray-500"
                                            size={24}
                                            // onClick={() => {
                                            //     setSettingsDropdownOpen(true);
                                            //     setDropdownOpen(false);
                                            // }}
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200">
                                        <div className="flex items-center">
                                            <FaQuestionCircle className="p-1 bg-gray-300 text-black rounded-full mr-2" size={30} />
                                            <span className="text-black">Trợ giúp & hỗ trợ</span>
                                        </div>
                                        <FiChevronRight className="text-gray-500" size={24} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200">
                                        <div className="flex items-center">
                                            <FaMoon className="p-1 bg-gray-300 text-black rounded-full mr-2" size={30} />
                                            <span className="text-black">Màn hình & trợ năng</span>
                                        </div>
                                        <FiChevronRight className="text-gray-500" size={24} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200">
                                        <div className="flex items-center">
                                            <TbMessageReportFilled className="p-1 bg-gray-300 text-black rounded-full mr-2" size={30} />
                                            <span className="text-black">Đóng góp ý kiến</span>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                            <div className="py-1">
                                <a href="#" className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200">

                                    <div className="flex items-center">
                                        <LuLogOut className="p-1 bg-gray-300 text-black rounded-full mr-2" size={30} />
                                        <span className="text-black">Đăng xuất</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                    )}

                    {/* {settingsDropdownOpen && (
                        <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-72">
                            <div className="flex items-center justify-between px-4 py-2">
                                <button onClick={() => {
                                    setSettingsDropdownOpen(false);
                                    setDropdownOpen(true);
                                }} className="flex items-center text-gray-600 hover:bg-gray-200 rounded p-1">
                                    <BiArrowBack />
                                </button>
                                <span className="font-semibold">Cài đặt & Quyền riêng tư</span>
                            </div>
                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
                                <li>
                                    <a href="#" className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200">
                                        <div className="flex items-center">
                                            <IoSettingsSharp className="p-1 bg-gray-300 text-black rounded-full mr-2" size={30} />
                                            <span className="text-black">Cài đặt & quyền riêng tư</span>
                                        </div>
                                    
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200">
                                        <div className="flex items-center">
                                            <FaQuestionCircle className="p-1 bg-gray-300 text-black rounded-full mr-2" size={30} />
                                            <span className="text-black">Ngôn ngữ</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200">
                                        <div className="flex items-center">
                                            <FaMoon className="p-1 bg-gray-300 text-black rounded-full mr-2" size={30} />
                                            <span className="text-black">Kiểm tra quyền riêng tư</span>
                                        </div>
                                       
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200">
                                        <div className="flex items-center">
                                            <TbMessageReportFilled className="p-1 bg-gray-300 text-black rounded-full mr-2" size={30} />
                                            <span className="text-black">Trung tâm quyền riêng tư</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200">
                                        <div className="flex items-center">
                                            <TbMessageReportFilled className="p-1 bg-gray-300 text-black rounded-full mr-2" size={30} />
                                            <span className="text-black">Nhật ký hoạt động</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200">
                                        <div className="flex items-center">
                                            <TbMessageReportFilled className="p-1 bg-gray-300 text-black rounded-full mr-2" size={30} />
                                            <span className="text-black">Tùy chọn nội dung</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )} */}
                </div>
            </nav>
        </header>
    );
};

export default Header;
