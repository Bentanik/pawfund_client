import React from 'react'
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import ManageUser from './components/manage-user';

export const metadata: Metadata = {
    title: "Manage Users",
    description: "Manage Users page for PawFund",
};
export default function AboutUsPage() {
    return (
        <div>
            <ManageUser />
        </div>
    )
}
