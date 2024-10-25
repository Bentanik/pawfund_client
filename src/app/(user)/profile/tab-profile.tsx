"use client";

import Profile from "@/app/(user)/profile/components/profile-component";
import { useEffect, useState } from "react";

const TABS = [
  {
    id: 1,
    value: "Profile",
  },
  {
    id: 2,
    value: "Profile",
  },
  {
    id: 3,
    value: "Profile",
  },
  {
    id: 4,
    value: "Profile",
  },
];

export default function TabProfile() {
  const [tab, setTab] = useState<number>(1);

  const handleChangeTab = (id: number) => {
    setTab(id);
  };

  useEffect(() => {
    if (tab === 1) {
    }
  }, [tab]);

  const renderTabs = () => {
    return TABS?.map((item, index) => {
      return (
        <div
          key={index}
          className={`relative pb-5 px-4 inline-block after:absolute after:content-[''] after:w-0 after:h-[5px] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-md after:z-20
            ${item.id === tab && "after:!w-full after:bg-[#6551f5]"} ${
            item.id !== tab && "hover:after:w-full hover:after:bg-[#6551f5]"
          } cursor-pointer select-none`}
          onClick={() => handleChangeTab(item.id)}
        >
          {/* <span className="text-xl font-semibold text-[#1d1d1d]">
            {item.value}
          </span> */}
          <span
            className={`text-base font-light text-[#00000080] ${
              item.id === tab && "text-[#000]"
            } ${item.id !== tab && "hover:text-[#000]"} `}
          >
            {item.value}
          </span>
        </div>
      );
    });
  };

  return (
    <div className="pt-10">
      <div className="relative mt-16 mb-10  after:absolute after:h-[1px] after:w-full after:bg-zinc-300 after:bottom-[4%] after:-translate-y-1/2">
        <div className="flex justify-center gap-x-20 overflow-hidden">
          {renderTabs()}
        </div>
      </div>
      <div className="px-20 mb-5">
        <Profile />
      </div>
    </div>
  );
}
