import DonationSuccess from "@/app/donationsuccess/donation-success";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thank you donation",
    description: "Thank you donation",
};

export default function DonationSuccessPage() {
    return (
        <div>
            <DonationSuccess />
        </div>
    );
}
