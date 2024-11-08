"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  BsGrid,
  BsCalendar,
  BsPerson,
  BsTable,
  BsGear,
  BsChevronDown,
  BsBoxArrowInRight,
} from "react-icons/bs";
import { AiOutlineForm, AiOutlinePieChart } from "react-icons/ai";
import { RiHome2Line } from "react-icons/ri";
import { useAppSelector } from "@/stores/store";
import { BsCoin } from "react-icons/bs";
export default function AdminSidebar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
      <div className="p-4 ml-4 w-full">
        <ul className="space-y-1">
          <li className="pt-4 text-sm font-semibold text-gray-400">ADMIN</li>
          {/* <li>
            <Link
              href="/admin/dashboard"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
            >
              <RiHome2Line className="text-lg" />
              <span>Dashboard</span>
            </Link>
          </li> */}
          <li>
            <button
              onClick={() => toggleDropdown("dashboard")}
              className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-md"
            >
              <div className="flex items-center space-x-2 hover:bg-gray-700 rounded-md">
                <RiHome2Line className="text-xl" />
                <span>Dashboard</span>
              </div>
              <BsChevronDown
                className={`transform transition-transform ${
                  openDropdown === "dashboard" ? "rotate-180" : ""
                } text-gray-400`}
              />
            </button>
            {openDropdown === "dashboard" && (
              <ul className="pl-4 mt-1 space-y-1">
                <li>
                  <Link
                    href="/admin/dashboard"
                    className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md"
                  >
                    <BsCalendar className="text-lg" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/user-donate"
                    className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md"
                  >
                    <BsCoin className="text-lg" />
                    All users donation
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/admin/view-branchs"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
            >
              <BsCalendar className="text-lg" />
              <span>View branches</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/create-branch"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
            >
              <BsCalendar className="text-lg" />
              <span>Create branch</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/manageuser"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
            >
              <BsPerson className="text-lg" />
              <span>Manage User</span>
            </Link>
          </li>
          {/* <li>
            <button
              onClick={() => toggleDropdown("forms")}
              className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-md"
            >
              <div className="flex items-center space-x-2">
                <AiOutlineForm className="text-lg" />
                <span>Forms</span>
              </div>
              <BsChevronDown
                className={`transform transition-transform ${openDropdown === "forms" ? "rotate-180" : ""
                  } text-gray-400`}
              />
            </button>
            {openDropdown === "forms" && (
              <ul className="pl-4 mt-1 space-y-1">
                <li>
                  <Link
                    href="/admin/forms/elements"
                    className="block p-2 hover:bg-gray-800 rounded-md"
                  >
                    Form Elements
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/forms/layout"
                    className="block p-2 hover:bg-gray-800 rounded-md"
                  >
                    Form Layout
                  </Link>
                </li>
              </ul>
            )}
          </li> */}
          {/* <li>
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
          </li> */}

          {/* <li className="pt-4 text-sm font-semibold text-gray-400">OTHERS</li>
          <li>
            <Link
              href="/admin/chart"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
            >
              <AiOutlinePieChart className="text-lg" />
              <span>Chart</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => toggleDropdown("ui")}
              className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-md"
            >
              <div className="flex items-center space-x-2">
                <AiOutlineForm className="text-lg" />
                <span>UI Elements</span>
              </div>
              <BsChevronDown
                className={`transform transition-transform ${openDropdown === "ui" ? "rotate-180" : ""
                  } text-gray-400`}
              />
            </button>
            {openDropdown === "ui" && (
              <ul className="pl-4 mt-1 space-y-1">
                <li>
                  <Link
                    href="/admin/ui/buttons"
                    className="block p-2 hover:bg-gray-800 rounded-md"
                  >
                    Buttons
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/ui/cards"
                    className="block p-2 hover:bg-gray-800 rounded-md"
                  >
                    Cards
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => toggleDropdown("auth")}
              className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-md"
            >
              <div className="flex items-center space-x-2">
                <BsBoxArrowInRight className="text-lg" />
                <span>Authentication</span>
              </div>
              <BsChevronDown
                className={`transform transition-transform ${openDropdown === "auth" ? "rotate-180" : ""
                  } text-gray-400`}
              />
            </button>
            {openDropdown === "auth" && (
              <ul className="pl-4 mt-1 space-y-1">
                <li>
                  <Link
                    href="/admin/auth/login"
                    className="block p-2 hover:bg-gray-800 rounded-md"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/auth/register"
                    className="block p-2 hover:bg-gray-800 rounded-md"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            )}
          </li> */}
        </ul>
      </div>
    </aside>
  );
}
