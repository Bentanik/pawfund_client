"use client";
import StaffHeader from '@/components/staff-header'
import StaffSidebar from '@/components/staff-sidebar';
import React from 'react'

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen">
            <StaffSidebar />
            <div className="flex flex-col flex-1">
                <StaffHeader />
                <main className="flex-1 p-4 overflow-auto bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    )
}
