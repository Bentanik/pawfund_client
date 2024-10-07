import React from "react";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "Profile User Page",
    description: "Profile User Pages for PawFund",
};

const ProfileUser = dynamic(() => import('@/app/(user)/profile-user/profile_user'), { ssr: false });

export default function ProfileUserPage() {
    return (
        <div>
            <ProfileUser />
        </div>
    );
}
