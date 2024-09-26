"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const currentPath = usePathname();
console.log("aa",currentPath)
    return (
        <header className="flex items-center justify-between px-12 py-8 bg-white shadow">
            <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-10" />
                <h1 className="text-2xl font-bold ml-2">CAT ADOPTION FOUNDATION inc</h1>
            </div>
            <nav className="flex items-center space-x-6 mr-10">
                <Link
                    href="/"
                    className={`text-gray-600 ${currentPath === '/' ? 'text-teal-400' : 'hover:text-teal-400'}`}
                >
                    Home
                </Link>
                <Link
                    href="/aboutus"
                    className={`text-gray-600 ${currentPath === '/aboutus' ? 'text-teal-400' : 'text-gray-600 hover:text-teal-400'}`}
                >
                    About Us
                </Link>

                <Link
                    href="/adopt"
                    className={`text-gray-600 ${currentPath === '/adopt' ? 'text-teal-400' : 'hover:text-teal-400'}`}
                >
                    Adopt
                </Link>
                <Link
                    href="/volunteer"
                    className={`text-gray-600 ${currentPath === '/volunteer' ? 'text-teal-400' : 'hover:text-teal-400'}`}
                >
                    Volunteer
                </Link>
                <Button variant="outline" className="text-gray-600 bg-teal-400">Donate</Button>
                <Link
                    href="/newandevent"
                    className={`text-gray-600 ${currentPath === '/newandevent' ? 'text-teal-400' : 'hover:text-teal-400'}`}
                >
                    News and Events
                </Link>
                <Link
                    href="/sponsors"
                    className={`text-gray-600 ${currentPath === '/sponsors' ? 'text-teal-400' : 'hover:text-teal-400'}`}
                >
                    Sponsors
                </Link>
                <Link
                    href="/login"
                    className={`text-gray-600 ${currentPath === '/sponsors' ? 'text-teal-400' : 'hover:text-teal-400'}`}
                >
                    Login
                </Link>
            </nav>
        </header>
    );
};

export default Header;
