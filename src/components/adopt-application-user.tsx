"use client";
import React, { useEffect, useState } from "react";
import useGetApplicationByAdopter from "@/app/(user)/profile/hooks/useGetApplicationByAdopter";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export default function AdoptApplication() {
    const { isPending, getAllApplicationByAdopterApi } = useGetApplicationByAdopter();
    const [applications, setApplications] = useState<API.ResponseData>();
    const [totalItems, setTotalItems] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 10; 
    const isAscCreatedDate = false; 

    const fetchApplications = async (pageNumber: number) => {
        const res = await getAllApplicationByAdopterApi({
            pageIndex: pageNumber,
            pageSize,
            isAscCreatedDate,
            
        });

        if (res && res.value) {
            setApplications(res.value.data);
            const totalCount = res.value.data.totalCount || 0;
            setTotalItems(totalCount);
            setTotalPages(Math.ceil(totalCount / pageSize));
        }
        console.log("data", res);
    };

    useEffect(() => {
        fetchApplications(currentPage);
    }, [currentPage]);

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
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
                <div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {app.application.description}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Sex: {app.application.cat.sex}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Name: {app.application.cat.name}
                    </p>
                </div>
                <a
                    href="#"
                    className="w-32 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-teal-400 rounded-lg hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 mt-auto"
                >
                    Update
                </a>
            </div>
        ));
    };

    return (
        <div className="p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
