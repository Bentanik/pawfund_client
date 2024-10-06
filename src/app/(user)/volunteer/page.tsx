import React from 'react'
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Volunteers from "./volunteer";

export const metadata: Metadata = {
    title: "Volunteer",
    description: "Volunteer page for PawFund",
};
export default function AboutUsPage() {
    return (
        <div>
            <Volunteers />
        </div>
    )
}
