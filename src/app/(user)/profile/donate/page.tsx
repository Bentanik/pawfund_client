import React from "react";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import DonateComponent from "@/app/(user)/profile/donate/components/donate-component";

export const metadata: Metadata = {
  title: "Donate User Page",
  description: "Donate User Pages for PawFund",
};

export default function UserDonatePage() {
  return (
    <div>
      <DonateComponent />
    </div>
  );
}
