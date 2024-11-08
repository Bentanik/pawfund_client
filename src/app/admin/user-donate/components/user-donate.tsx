"use client";
import React, { useState, useEffect } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { CiSearch } from "react-icons/ci";
import useGetAllListUser from "@/app/admin/manageuser/hooks/getAllListUser";
import { PaymentMethods } from "@/const/donate";
import useToast from "@/hooks/use-toast";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import useGetAllListUserDonate from "../hooks/getListUserDonate";

export default function ManageUserDonate() {
    const { getAllListUserDonateApi, isPending } = useGetAllListUserDonate();
    const [blockedUsers, setBlockedUsers] = useState<boolean[]>([]);
    const [search, setSearch] = useState("");
    const [usersPerPage, setUsersPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [users, setUsers] = useState<any[]>([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const { addToast } = useToast();

    useEffect(() => {
        const fetchUsers = async () => {
            const params = {
                pageIndex: currentPage,
                pageSize: usersPerPage,
                items: [],
                totalCount: 0,
                totalPages: 0,
                hasNextPage: false,
                hasPreviousPage: false
            };
            const response = await getAllListUserDonateApi(params);
            if (response && response.value?.data.items) {
                setUsers(response.value.data.items);
                setTotalUsers(response.value.data.totalCount || 0);
                setBlockedUsers(Array(response.value.data.items.length).fill(false));
            }
        };
        fetchUsers();
    }, [currentPage, usersPerPage]);

    const totalPages = Math.ceil(totalUsers / usersPerPage);


    const filteredUsers = users.filter(user => {
        const firstName = user.account.firstName || "";
        return firstName.toLowerCase().includes(search.toLowerCase());
    });

    const changePage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="text-gray-900 bg-gray-100 font-open_sans">
            <h1 className="text-3xl mr-4 p-4 font-semibold">Users Donate</h1>
            <div className="p-4 flex justify-between items-center">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by name..."
                        className="p-2 pr-10 border border-gray-400 rounded w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                    <CiSearch className="absolute right-3 text-xl text-gray-500" />
                </div>

                <div>
                    <label htmlFor="usersPerPage" className="mr-2">
                        Users per page:
                    </label>
                    <select
                        id="usersPerPage"
                        value={usersPerPage}
                        onChange={(e) => {
                            setUsersPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                        className="p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >
                        {[5, 10, 15, 20].map((number) => (
                            <option key={number} value={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <thead>
                        <tr className="border-b bg-gray-300">
                            <th className="text-left p-3 px-5"></th>
                            <th className="text-left p-3 px-5">Name</th>
                            <th className="text-left p-3 px-5">Amount</th>
                            <th className="text-left p-3 px-5">Payment Method</th>
                            <th className="text-left p-3 px-5">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user, index) => {
                                console.log('User:', user);
                                return (
                                    <tr key={user.id} className={`border-b hover:bg-orange-100`}>
                                        <td className="p-3 px-5 flex items-center">
                                            <img
                                                src={user.account.cropAvatarUrl || 'default_avatar.png'}
                                                className="w-10 h-10 rounded-full mr-2"
                                            />
                                        </td>
                                        <td className="p-3 px-5">{user.account.firstName}</td>
                                        <td className="p-3 px-5">{user.amount}</td>
                                        <td className="p-3 px-5">
                                            {PaymentMethods.find((method) => method.id === user.paymentMethodId)?.value || "Unknown"}
                                        </td>
                                        <td className="p-3 px-5">
                                            {user.createdDate ? new Date(user.createdDate).toLocaleDateString() : "No date available"}
                                        </td>

                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center p-4 text-gray-500">No users found.</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
            <div className="flex justify-center items-center mb-4">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (currentPage > 1) {
                                        changePage(currentPage - 1);
                                    }
                                }}
                            />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, pageIndex) => (
                            <PaginationItem key={pageIndex}>
                                <PaginationLink
                                    href="#"
                                    isActive={currentPage === pageIndex + 1}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        changePage(pageIndex + 1);
                                    }}
                                >
                                    {pageIndex + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (currentPage < totalPages) {
                                        changePage(currentPage + 1);
                                    }
                                }}
                            />
                        </PaginationItem>

                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
