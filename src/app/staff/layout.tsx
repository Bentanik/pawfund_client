import StaffHeader from "@/components/staff-header";
import StaffSidebar from "@/components/staff-sidebar";
import React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <StaffSidebar />
      <div className="flex flex-col flex-1 px-8 overflow-y-auto">
        <StaffHeader />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
