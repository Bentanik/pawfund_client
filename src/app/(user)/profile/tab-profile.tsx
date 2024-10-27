"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getStorageItem, setStorageItem } from "@/utils/local-storage";

const TABS = [
  {
    id: 1,
    value: "Profile",
  },
  {
    id: 2,
    value: "Donate",
  },
  {
    id: 3,
    value: "Adopt",
  },
  {
    id: 4,
    value: "Profile",
  },
];

export default function TabProfile() {
  const router = useRouter();
  const [tab, setTab] = useState<number>(1);

  useEffect(() => {
    const tabNumber = getStorageItem("tab-profile");
    if (tabNumber) {
      setTab(JSON.parse(tabNumber));
    }
  }, []);

  const handleChangeTab = (id: number) => {
    setTab(id);
  };

  useEffect(() => {
    if (tab === 1) router.push("/profile/information");
    if (tab === 2) router.push("/profile/donate");
    if (tab === 3) router.push("/profile/adopt");

    setStorageItem("tab-profile", JSON.stringify(tab));
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
    </div>
  );
}
