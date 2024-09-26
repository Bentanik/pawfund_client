import { ReactNode } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface LayoutProps {
    children: ReactNode;
}

export default function UserProfileLayout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col  ">
            <div className="w-[100%] h-[250px] bg-[#2dd4bf] relative">
                <div className="w-32 h-32 overflow-hidden absolute left-[50%] translate-x-[-50%] bottom-[-25%] ">
                    <Image
                        src="/meo2.jpg"
                        alt="Avatar"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover rounded-full "
                    />
                </div>
            </div>
            <h2 className="mt-[90px] text-center font-bold">Lam Tan Phat</h2>
            <p className="pt-[10px] text-center text-sm/[15px] text-gray-400">
                Description about user
            </p>
            {/* Nội dung */}
            <main className="flex-grow">{children}</main>
        </div>
    );
}
