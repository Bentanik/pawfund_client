import React from "react";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Profile User Page",
  description: "Profile User Pages for PawFund",
};

const TabProfile = dynamic(() => import("@/app/(user)/profile/tab-profile"), {
  ssr: false,
});

export default function ProfileUserPage() {
  return (
    <div>
      <TabProfile />
    </div>
  );
}
