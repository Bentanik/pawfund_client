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
import { useAppSelector } from "@/stores/store";
import useLogout from "@/hooks/use-logout";
import { Backdrop } from "../backdrop";
import AvatarMenu from "../avatar-menu";

const Header: React.FC = () => {
  const userState = useAppSelector((state) => state.userSlice);

  const currentPath = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
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
        <Link
          href="/"
          className={`text-gray-600 ${
            currentPath === "/" ? "text-teal-400" : "hover:text-teal-400"
          }`}
        >
          Home
        </Link>
        <Link
          href="/aboutus"
          className={`text-gray-600 ${
            currentPath === "/aboutus" ? "text-teal-400" : "hover:text-teal-400"
          }`}
        >
          About Us
        </Link>
        <Link
          href="/adopt"
          className={`text-gray-600 ${
            currentPath === "/adopt" ? "text-teal-400" : "hover:text-teal-400"
          }`}
        >
          Adopt
        </Link>
        <Link
          href="/volunteer"
          className={`text-gray-600 ${
            currentPath === "/volunteer"
              ? "text-teal-400"
              : "hover:text-teal-400"
          }`}
        >
          Volunteer
        </Link>
        <Link href="/donation">
          <Button variant="outline" className="text-gray-600 bg-teal-400">
            Donate
          </Button>
        </Link>
        <Link
          href="/event"
          className={`text-gray-600 ${
            currentPath === "/newandevent"
              ? "text-teal-400"
              : "hover:text-teal-400"
          }`}
        >
          News and Events
        </Link>

        {userState.user === null ? (
          <Link
            href="/login"
            className={`text-gray-600 ${
              currentPath === "/sponsors"
                ? "text-teal-400"
                : "hover:text-teal-400"
            }`}
          >
            Login
          </Link>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <figure className="rounded-full border border-zinc-300 overflow-hidden w-12 h-12 flex items-center justify-center hover:bg-teal-400 shadow-avatar">
              <img
                id="avatarButton"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full cursor-pointer"
                src={userState?.user?.avatarLink}
                alt="User dropdown"
              />
            </figure>
            {dropdownOpen && <AvatarMenu />}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
