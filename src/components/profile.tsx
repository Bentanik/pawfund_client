"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import useGetProfile from "@/app/(user)/profile/hooks/useGetProfileAccount";
import { Backdrop } from "@/components/backdrop";
import { useAppSelector } from "@/stores/store";

export default function Profile() {
  const { getProfileAccount, isPending } = useGetProfile();
  const accountState = useAppSelector((state) => state.accountSlice);

  // useEffect(() => {
  //   getProfileAccount();
  // }, []);

  return (
    <div className="px-[10%]">
      {/* Nội dung cho Settings */}
      <div className="min-h-screen flex gap-[3%]">
        {/* Profile Form */}
        <div className="w-[70%] p-8 border-2 rounded-[5px]">
          <h2 className="text-3xl font-semibold mb-8">User profile</h2>

          <form>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center justify-between gap-x-3">
                {/* First Name */}
                <div className="basis-1/2">
                  <label className="block ">First Name</label>
                  <input
                    type="text"
                    defaultValue={accountState.profile?.firstName}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>

                {/* First Name */}
                <div className="basis-1/2">
                  <label className="block ">First Name</label>
                  <input
                    type="text"
                    defaultValue={accountState.profile?.firstName}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              {/* Email */}
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  defaultValue={accountState.profile?.email}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-gray-700">Gender</label>
                <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Birthday */}
              <div>
                <label className="block text-gray-700">Birthday</label>
                <div className="flex space-x-2">
                  <select className="w-1/3 p-2 border border-gray-300 rounded-md">
                    <option>July</option>
                    {/* Thêm các tháng khác nếu cần */}
                  </select>
                  <select className="w-1/3 p-2 border border-gray-300 rounded-md">
                    <option>30</option>
                    {/* Thêm các ngày khác nếu cần */}
                  </select>
                  <select className="w-1/3 p-2 border border-gray-300 rounded-md">
                    <option>1999</option>
                    {/* Thêm các năm khác nếu cần */}
                  </select>
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-gray-700">Country</label>
                <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                  <option>United States</option>
                  <option>Vietnam</option>
                  {/* Thêm các quốc gia khác nếu cần */}
                </select>
              </div>
            </div>

            {/* Save Changes Button */}
            <div className="flex justify-center">
              <Button className="bg-[#2dd4bf] mt-[20px]">Save Changes</Button>
            </div>
          </form>
        </div>
        {/* Right Info */}
        <div className="w-[30%] ">
          <div className="w-[100%] border-2 rounded-[2px] ">
            <div className="p-5">
              <h2 className="text-[1.3rem] font-semibold">Care about</h2>
              <div className="w-[100%] rounded-[10px]  bg-[#135cee12] mt-5 hover:cursor-pointer">
                <div className="p-[10px] flex justify-between">
                  <p className="font-semibold text-[0.8rem] text-[#135bee] text-center">
                    Campaign concerned
                  </p>
                  <p className="text-[0.8rem] text-center text-[#135bee] font-semibold">
                    12
                  </p>
                </div>
              </div>
              <div className="w-[100%] rounded-[10px]  bg-[#7222220f] mt-5 hover:cursor-pointer">
                <div className="p-[10px] flex justify-between">
                  <p className="text-[0.8rem] text-center text-[#c22424] font-semibold">
                    Favorite pets
                  </p>
                  <p className="text-[0.8rem] text-center text-[#c22424] font-semibold">
                    12
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] border-2 mt-10 rounded-[5px]">
            <div className="p-5">
              <h2 className="text-[1.3rem] font-semibold">Community active</h2>

              <div className="w-[100%] rounded-[10px]  bg-[#077e310d] mt-5 hover:cursor-pointer">
                <div className="p-[10px] flex justify-between">
                  <p className="text-[0.8rem] text-center text-[#077e31] font-semibold">
                    Participated events
                  </p>
                  <p className="text-[0.8rem] text-center text-[#077e31] font-semibold">
                    12
                  </p>
                </div>
              </div>
              <div className="w-[100%] rounded-[10px]  bg-[#0e87b011] mt-5 hover:cursor-pointer">
                <div className="p-[10px] flex justify-between">
                  <p className="text-[0.8rem] text-center text-[#0e88b0] font-semibold">
                    Events notification
                  </p>
                  <p className="text-[0.8rem] text-center text-[#0e88b0] font-semibold">
                    12
                  </p>
                </div>
              </div>
              <div className="w-[100%] rounded-[10px]  bg-[#cfa24911] mt-5 hover:cursor-pointer">
                <div className="p-[10px] flex justify-between">
                  <p className="text-[0.8rem] text-center text-[#cfa249] font-semibold">
                    Donated event
                  </p>
                  <p className="text-[0.8rem] text-center text-[#cfa249] font-semibold">
                    12
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Backdrop open={isPending} />
    </div>
  );
}
