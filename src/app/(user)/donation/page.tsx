import React from "react";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Donation from "./donation";

export const metadata: Metadata = {
    title: "About Us",
    description: "About us page for PawFund",
};
export default function DonationPage() {
    return (
        <div>
            <Donation />
        </div>
    );
}
