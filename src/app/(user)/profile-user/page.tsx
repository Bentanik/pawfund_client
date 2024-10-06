import React from "react";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import ProfileUser from "./profile_user";

export const metadata: Metadata = {
    title: "About Us",
    description: "About us page for PawFund",
};
export default function ProfileUserPage() {
    return (
        <div>
            <ProfileUser />
        </div>
    );
}
