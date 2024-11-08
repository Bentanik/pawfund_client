"use client";
import React, { useState, useRef } from "react";
import { VscBellDot } from "react-icons/vsc";
import { useAppDispatch, useAppSelector } from "@/stores/store";
import { AlignJustify } from "lucide-react";
import { closeSidebar, openSidebar } from "@/stores/difference-slice";
import TippyHeadless from "@tippyjs/react/headless";
import StaffAvatarMenu from "@/components/staff-avatar-menu";

export default function StaffHeader() {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.userSlice);
  const staffState = useAppSelector((state) => state.differenceSlice.staff);

  const [notificationOpen, setNotificationOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const [avatarTooltip, setAvatarTooltip] = useState<boolean>(false);


  const handleToggleSidebar = () => {
    return staffState.openSidebar
      ? dispatch(closeSidebar())
      : dispatch(openSidebar());
  };

  const handleToggleAvatarTooltip = () => {
    setAvatarTooltip((prev) => !prev);
  };

  const handleCloseAvatarTooltip = () => {
    setAvatarTooltip(false);
  };

  return (
    <header className="bg-white py-4 ">
      <div className="flex items-center justify-between">
        <div>
          <button onClick={handleToggleSidebar}>
            <span>
              <AlignJustify />
            </span>
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
                className="z-30 absolute right-0 mt-2 bg-white rounded-lg shadow w-80 max-h-80 overflow-y-auto border border-gray-200"
              >
                <div className="px-4 py-3 text-lg font-semibold text-gray-800 border-b border-gray-200">
                  Notification
                </div>
                <ul className="py-2">
                  {[...Array(3)].map((_, index) => (
                    <li
                      key={index}
                      className="px-4 py-3 border-b border-gray-200"
                    >
                      <div className="text-sm text-gray-700 mb-1">
                        {`Notification message ${
                          index + 1
                        } - A brief description that fits nicely.`}
                      </div>
                      <div className="text-xs text-gray-500">
                        {`${new Date().toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}`}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

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
                <StaffAvatarMenu onCloseTooltip={handleCloseAvatarTooltip} />
              </div>
            )}
            onClickOutside={handleCloseAvatarTooltip}
          >
            <figure className="rounded-full border border-zinc-300 overflow-hidden w-14 h-14 flex items-center justify-center hover:bg-teal-400">
              {userState?.user?.cropAvatarLink !== "" && (
                <img
                  id="avatarButton"
                  onClick={handleToggleAvatarTooltip}
                  className="w-12 h-12 rounded-full cursor-pointer"
                  src={
                    userState?.user?.cropAvatarLink ||
                    "images/unknown_avatar.png"
                  }
                  alt="User dropdown"
                />
              )}
            </figure>
          </TippyHeadless>
        </div>
      </div>
      <div></div>
    </header>
  );
}
