"use client";
import React, { useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { CiSearch } from "react-icons/ci";

export default function ManageUser() {
    const totalUsers = 20; // Tổng số người dùng
    const [blockedUsers, setBlockedUsers] = useState(Array(totalUsers).fill(false));
    const [search, setSearch] = useState("");
    const [usersPerPage, setUsersPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    // Hàm để chuyển đổi trạng thái block/unblock
    const toggleBlock = (index: number) => {
        setBlockedUsers((prev) =>
            prev.map((blocked, i) => (i === index ? !blocked : blocked))
        );
    };

    // Tính toán số trang
    const totalPages = Math.ceil(totalUsers / usersPerPage);

    // Tính toán chỉ mục bắt đầu và kết thúc của người dùng trong trang hiện tại
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;

    // Dữ liệu người dùng giả lập với tên và email khác nhau
    const users = [
        { name: "Nguyễn Văn A", email: "nguyenvana@example.com", role: "User" },
        { name: "Trần Thị B", email: "tranthib@example.com", role: "User" },
        { name: "Lê Văn C", email: "levanc@example.com", role: "User" },
        { name: "Phạm Thị D", email: "phamthid@example.com", role: "User" },
        { name: "Nguyễn Thị E", email: "nguyenthie@example.com", role: "User" },
        { name: "Đỗ Văn F", email: "dovanf@example.com", role: "User" },
        { name: "Bùi Thị G", email: "buithig@example.com", role: "User" },
        { name: "Vũ Văn H", email: "vuvanh@example.com", role: "User" },
        { name: "Nguyễn Văn I", email: "nguyenvani@example.com", role: "User" },
        { name: "Trần Thị J", email: "tranthij@example.com", role: "User" },
        { name: "Lê Văn K", email: "levank@example.com", role: "User" },
        { name: "Phạm Thị L", email: "phamthil@example.com", role: "User" },
        { name: "Nguyễn Thị M", email: "nguyenthim@example.com", role: "User" },
        { name: "Đỗ Văn N", email: "dovanN@example.com", role: "User" },
        { name: "Bùi Thị O", email: "buitho@example.com", role: "User" },
        { name: "Vũ Văn P", email: "vuvap@example.com", role: "User" },
        { name: "Nguyễn Văn Q", email: "nguyenvanq@example.com", role: "User" },
        { name: "Trần Thị R", email: "tranthir@example.com", role: "User" },
        { name: "Lê Văn S", email: "levans@example.com", role: "User" },
        { name: "Phạm Thị T", email: "phamthit@example.com", role: "User" },
    ];

    // Lọc và cắt dữ liệu người dùng dựa trên tìm kiếm và trang hiện tại
    const filteredUsers = users
        .filter(user => {
            return (
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase()) ||
                user.role.toLowerCase().includes(search.toLowerCase())
            );
        });

    // Điều chỉnh chỉ số bắt đầu và kết thúc dựa trên số lượng người dùng sau khi lọc
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    // Hàm để chuyển trang
    const changePage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="text-gray-900 bg-gray-100 font-open_sans">
            <h1 className="text-3xl mr-4 p-4 font-semibold">Manage User</h1>
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
                            setCurrentPage(1); // Reset về trang 1 khi thay đổi số lượng người dùng mỗi trang
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
                            <th className="text-left p-3 px-5">Name</th>
                            <th className="text-left p-3 px-5">Email</th>
                            <th className="text-left p-3 px-5">Role</th>
                            <th className="text-right p-3 px-12">Feature</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedUsers.length > 0 ? (
                            paginatedUsers.map((user, index) => (
                                <tr key={index + startIndex} className={`border-b hover:bg-orange-100`}>
                                    <td className="p-3 px-5">{user.name}</td>
                                    <td className="p-3 px-5">{user.email}</td>
                                    <td className="p-3 px-5">{user.role}</td>
                                    <td className="p-3 px-5 text-right">
                                        <button
                                            type="button"
                                            className={`text-base ${blockedUsers[startIndex + index] ? 'text-green-500 border-green-500' : 'text-red-500 border-red-500'} border py-1 px-2 rounded-full focus:outline-none focus:shadow-outline w-24 bg-transparent font-semibold`}
                                            onClick={() => toggleBlock(startIndex + index)}
                                        >
                                            {blockedUsers[startIndex + index] ? 'Unblock' : 'Block'}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center p-4 text-gray-500">No users found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Phân trang mới */}
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
