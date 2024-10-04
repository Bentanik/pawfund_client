"use client";
import AdminHeader from '@/components/admin-header'
import AdminSidebar from '@/components/admin-sidebar'
import React from 'react'

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen">
            <AdminSidebar />
            <div className="flex flex-col flex-1">
                <AdminHeader />
                <main className="flex-1 p-4 overflow-auto bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    )
}