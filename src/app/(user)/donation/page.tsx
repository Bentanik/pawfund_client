import React from "react";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Donation from "./components/donation";

export const metadata: Metadata = {
    title: "Donation",
    description: "Page Donate for PawFund",
};
export default function DonationPage() {
    return (
        <div>
            <Donation />
        </div>
    );
}
