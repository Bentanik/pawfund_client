"use client";
import React, { useEffect, useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import useGetApplicationByStaff from "./hooks/useGetApplicationByStaff";

export default function StaffApplication() {
    const { isPending, getAllApplicationByStaffApi } = useGetApplicationByStaff();
    const [applications, setApplications] = useState<API.ResponseData>();
    const [totalItems, setTotalItems] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedStatus, setSelectedStatus] = useState<number | null>(null); // Trạng thái đã chọn là số

    const pageSize = 10; 
    const isAscCreatedDate = false; 

    const fetchApplications = async (pageNumber: number) => {
        const res = await getAllApplicationByStaffApi({
            pageIndex: pageNumber,
            pageSize,
            isAscCreatedDate,
            status: selectedStatus ?? undefined, 
        });

        if (res && res.value) {
            setApplications(res.value.data);
            const totalCount = res.value.data.totalCount || 0;
            setTotalItems(totalCount);
            setTotalPages(Math.ceil(totalCount / pageSize));
        }
    };

    useEffect(() => {
        fetchApplications(currentPage);
    }, [currentPage, selectedStatus]); // Cập nhật khi selectedStatus thay đổi

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleStatusChange = (status: number | null) => {
        setSelectedStatus(status);
        setCurrentPage(1); // Reset về trang 1 khi thay đổi trạng thái
    };

    const renderApplications = () => {
        if (isPending) {
            return <p>Loading...</p>;
        }

        if (!applications || applications.items.length === 0) {
            return <p>No applications found.</p>;
        }

        return applications.items.map((app) => (
            <div
                key={app.application.id}
                className="flex flex-col justify-between h-full bg-white p-5 rounded-lg shadow-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600"
            >
                <div className="flex-grow">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {app.application.description}
                        </h5>
                    </a>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                        Sex: {app.application.cat.sex}
                    </p>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                        Name: {app.application.cat.name}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Status: {app.application.status ?? "N/A"} {/* Hiển thị trạng thái trả về từ BE */}
                    </p>
                </div>
            </div>
        ));
    };

    return (
        <div className="p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {/* Các tab trạng thái */}
            <div className="mb-4 flex space-x-2">
                <button
                    onClick={() => handleStatusChange(null)}
                    className={`px-4 py-2 rounded-md ${selectedStatus === null ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    All
                </button>
                <button
                    onClick={() => handleStatusChange(0)}
                    className={`px-4 py-2 rounded-md ${selectedStatus === 0 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    Pending
                </button>
                <button
                    onClick={() => handleStatusChange(1)}
                    className={`px-4 py-2 rounded-md ${selectedStatus === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    Approved
                </button>
                <button
                    onClick={() => handleStatusChange(2)}
                    className={`px-4 py-2 rounded-md ${selectedStatus === 2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    Approved Outside
                </button>
                <button
                    onClick={() => handleStatusChange(3)}
                    className={`px-4 py-2 rounded-md ${selectedStatus === 3 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    Rejected Outside
                </button>
                <button
                    onClick={() => handleStatusChange(-1)}
                    className={`px-4 py-2 rounded-md ${selectedStatus === -1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    Rejected
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {renderApplications()}
            </div>
            {/* Phân trang */}
            <Pagination className="mt-5">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                        />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href="#"
                                onClick={(e) => { e.preventDefault(); handlePageChange(index + 1); }}
                                className={index + 1 === currentPage ? "active" : ""}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
