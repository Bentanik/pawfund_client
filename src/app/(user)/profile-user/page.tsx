import React from "react";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import ProfileUser from "./profile_user";

export const metadata: Metadata = {
    title: "Profile User Page",
    description: "Profile User Pages for PawFund",
};
export default function ProfileUserPage() {
    return (
        <div>
            <ProfileUser />
        </div>
    );
}
