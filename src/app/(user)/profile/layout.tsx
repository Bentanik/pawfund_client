"use client";
import AvatarProfile from "@/components/avatar-profile";
import { useAppSelector } from "@/stores/store";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function UserProfileLayout({ children }: LayoutProps) {
  const userState = useAppSelector((state) => state.userSlice);

  return (
    <div className="min-h-screen flex flex-col gap-y-10 bg-zinc-100">
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

      {/* Nội dung */}
      <main className="flex-grow">{children}</main>
      {/* <UpdateAvatarProfilePopup open={true} onClose={() => {}} /> */}
    </div>
  );
}
