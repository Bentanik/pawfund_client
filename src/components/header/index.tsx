"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/stores/store";
import AvatarMenu from "@/components/avatar-menu";
import TippyHeadless from "@tippyjs/react/headless";

const Header: React.FC = () => {
  const userState = useAppSelector((state) => state.userSlice);

  const currentPath = usePathname();

  const [avatarTooltip, setAvatarTooltip] = useState<boolean>(false);

  const handleToggleAvatarTooltip = () => {
    setAvatarTooltip((prev) => !prev);
  };

  const handleCloseAvatarTooltip = () => {
    setAvatarTooltip(false);
  };

  return (
    <header className="flex items-center justify-between px-12 py-8 bg-white">
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
          <div className="relative">
            <TippyHeadless
              interactive
              placement="bottom-end"
              offset={[-5, 2]}
              visible={avatarTooltip}
              render={(attrs) => (
                <div
                  {...attrs}
                  className="w-full max-h-[calc(min((100vh-96px)-60px),734px)] min-h-[30px] py-2 rounded-md bg-white z-[999999]"
                >
                  <AvatarMenu onCloseTooltip={handleCloseAvatarTooltip} />
                </div>
              )}
              onClickOutside={handleCloseAvatarTooltip}
            >
              <figure className="rounded-full border border-zinc-300 overflow-hidden w-14 h-14 flex items-center justify-center hover:bg-teal-400">
                <img
                  id="avatarButton"
                  onClick={handleToggleAvatarTooltip}
                  className="w-12 h-12 rounded-full cursor-pointer"
                  src={userState?.user?.cropAvatarLink}
                  alt="User dropdown"
                />
              </figure>
            </TippyHeadless>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
