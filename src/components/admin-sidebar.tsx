"use client";
import React from 'react'
import Link from 'next/link';

export default function AdminSidebar() {
    return (
        <aside className="w-64 bg-gray-900 text-white">
            <div className="p-4">
                <h2 className="text-lg font-bold p-2">Menu</h2>
                <ul>
                    <li>
                        <Link href="/admin" className="block p-2 hover:bg-gray-700">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/admin/users" className="block p-2 hover:bg-gray-700">Quản lý User</Link>
                    </li>
                    <li>
                        <Link href="/admin/pets" className="block p-2 hover:bg-gray-700">Quản lý Pet</Link>
                    </li>
                    <li>
                        <Link href="/admin/branches" className="block p-2 hover:bg-gray-700">Quản lý Chi Nhánh</Link>
                    </li>
                    <li>
                        <Link href="/admin/adoptions" className="block p-2 hover:bg-gray-700">Quản lý Nhận Nuôi</Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
