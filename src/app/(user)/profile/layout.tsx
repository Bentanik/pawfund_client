"use client";
import AvatarProfile from "@/components/avatar-profile";
import { useAppSelector } from "@/stores/store";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const TabProfile = dynamic(() => import("@/app/(user)/profile/tab-profile"), {
  ssr: false,
});

export default function UserProfileLayout({ children }: LayoutProps) {
  const userState = useAppSelector((state) => state.userSlice);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative bg-[url('/images/profile.jpg')] bg-cover bg-center w-full h-[34vh] shadow-md flex flex-col items-start justify-center p-4">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div>
          <div className="relative z-10 w-9/12 p-20 ml-0">
            <div className="flex flex-col gap-y-4">
              <h1 className="text-white text-5xl font-bold">Profile</h1>
              <p className="text-white text-lg">
                Your profile reflects your journey and values, serving as a
                bridge that helps us connect and work together to create a
                better impact for the community.
              </p>
            </div>
          </div>
        </div>
        <div className="z-20 absolute left-[50%] translate-x-[-50%] -bottom-[40%] flex flex-col items-center gap-y-3">
          <AvatarProfile />
          <h2 className="text-center font-bold">
            {userState.user?.lastName} {userState.user?.firstName}
          </h2>
        </div>
      </div>
      <div className="mt-5 mb-2">
        <TabProfile />
      </div>
      <main className="px-20 mb-8">{children}</main>
    </div>
  );
}
