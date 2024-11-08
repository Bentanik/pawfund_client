import React from 'react'
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Admin from './components/dashboard';



export const metadata: Metadata = {
    title: "Dashboard Admin",
    description: "Dashboard admin page for PawFund",
};
export default function AboutUsPage() {
    return (
        <div>
            <Admin />
        </div>
    )
}