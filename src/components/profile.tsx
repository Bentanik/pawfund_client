import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Profile() {
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [privateAccount, setPrivateAccount] = useState(false);
    return (
        <div className="px-[10%]">
            {/* Nội dung cho Settings */}
            <div className="min-h-screen flex gap-[3%]">
                {/* Profile Form */}
                <div className="w-[70%] p-8 border-2 rounded-[5px]">
                    <h2 className="text-3xl font-semibold mb-8">
                        User profile
                    </h2>

                    <form>
                        {/* Username */}
                        <div className="mb-4">
                            <label className="block ">Username</label>
                            <input
                                type="text"
                                defaultValue="Ben Sherman"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                defaultValue="ben.sherman@gmail.com"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        {/* Current Password */}
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Current Password
                            </label>
                            <input
                                type="password"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        {/* New Password */}
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                New Password
                            </label>
                            <input
                                type="password"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        {/* Gender */}
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Gender
                            </label>
                            <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        {/* Birthday */}
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Birthday
                            </label>
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
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Country
                            </label>
                            <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                                <option>United States</option>
                                <option>Vietnam</option>
                                {/* Thêm các quốc gia khác nếu cần */}
                            </select>
                        </div>

                        {/* Save Changes Button */}
                        <div className="flex justify-center">
                            <Button className="bg-[#2dd4bf] mt-[20px]">
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </div>
                {/* Right Info */}
                <div className="w-[30%] ">
                    <div className="w-[100%] border-2 rounded-[2px] ">
                        <div className="p-5">
                            <h2 className="text-[1.3rem] font-semibold">
                                Care about
                            </h2>
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
                            <h2 className="text-[1.3rem] font-semibold">
                                Community active
                            </h2>

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
        </div>
    );
}
