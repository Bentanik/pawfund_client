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
import useApplyAdoptApplication from "./hooks/useApplyAdoptApplication";
import useRejectAdoptApplication from "./hooks/useRejectAdoptApplication";
import RejectModal from "@/components/reject-application-modal";
import useCompleteAdoption from "./hooks/useCompleteAdoption";
import useRejectOutsideAdoption from "./hooks/useRejectOutsideAdoption";
import { StatusAdoptApplciation } from "@/const/adopt";

export default function StaffApplication() {
    const { isPending, getAllApplicationByStaffApi } =
        useGetApplicationByStaff();
    const { isPending: isApplying, applyAdoptApplicationApi } =
        useApplyAdoptApplication();
    const { isPending: isRejecting, rejectAdoptApplicationApi } =
        useRejectAdoptApplication();
    const { isPending: isCompleting, completeAdoptionApi } =
        useCompleteAdoption();
    const { isPending: isOutsiding, rejectOutsideAdoptionApi } =
        useRejectOutsideAdoption();
    const [applications, setApplications] = useState<API.ResponseData>();
    const [totalItems, setTotalItems] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
    const [isRejectOutsideType, setIsRejectOutsideType] = useState(false);
    const [applicationId, setApplicationId] = useState("");

    const pageSize = 10;
    const isAscCreatedDate = false;

    const fetchApplications = async (pageNumber: number) => {
        const params: any = {
            pageIndex: pageNumber,
            pageSize,
            isAscCreatedDate,
        };

        if (selectedStatus !== "all") {
            params.status = selectedStatus;
        }

        const res = await getAllApplicationByStaffApi(params);

        if (res && res.value) {
            setApplications(res.value.data);
            const totalCount = res.value.data.totalCount || 0;
            setTotalItems(totalCount);
            setTotalPages(Math.ceil(totalCount / pageSize));
        }
    };

    useEffect(() => {
        fetchApplications(currentPage);
    }, [currentPage, selectedStatus]);

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleStatusChange = (status: string) => {
        setSelectedStatus(status);
        setCurrentPage(1);
    };

    const handleOpenRejectModal = (id: string, isOutside = false) => {
        setApplicationId(id);
        setIsRejectModalOpen(true);
        setIsRejectOutsideType(isOutside);
    };

    const handleRequestClose = () => {
        setIsRejectModalOpen(false);
        setApplicationId("");
    };

    const handleReject = async (data: {
        adoptId: string;
        reasonReject: string;
    }) => {
        const api = isRejectOutsideType
            ? rejectOutsideAdoptionApi
            : rejectAdoptApplicationApi;
        const res = await api({
            adoptId: data.adoptId,
            reasonReject: data.reasonReject,
        });

        if (res && res.isSuccess) {
            fetchApplications(currentPage);
        } else {
            console.error(
                "Từ chối không thành công:",
                res?.error || "Không có thông tin"
            );
        }
        handleRequestClose();
    };

    const handleApprove = async (applicationId: string) => {
        const res = await applyAdoptApplicationApi({ Id: applicationId });
        if (res && res.isSuccess) {
            fetchApplications(currentPage);
        } else {
            console.error(
                "Phê duyệt không thành công:",
                res?.error || "Không có thông tin"
            );
        }
    };

    const handleComplete = async (applicationId: string) => {
        const res = await completeAdoptionApi({ Id: applicationId });
        if (res && res.isSuccess) {
            fetchApplications(currentPage);
        } else {
            console.error(
                "Phê duyệt không thành công:",
                res?.error || "Không có thông tin"
            );
        }
    };

    const handleRejectOutside = async (data: {
        adoptId: string;
        reasonReject: string;
    }) => {
        const res = await rejectOutsideAdoptionApi({
            adoptId: data.adoptId,
            reasonReject: data.reasonReject,
        });

        if (res && res.isSuccess) {
            fetchApplications(currentPage);
        } else {
            console.error(
                "Từ chối không thành công:",
                res?.error || "Không có thông tin"
            );
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
                className="flex flex-col justify-between h-full w-full bg-white p-6 rounded-lg shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
            >
                <div className="flex-grow">
                    <a href="#">
                        <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {app.application.description}
                        </h5>
                    </a>
                    <div className="space-y-2">
                        <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                            <span className="font-medium">Sex:</span>{" "}
                            {app.application.cat.sex}
                        </p>
                        <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                            <span className="font-medium">Name:</span>{" "}
                            {app.application.cat.name}
                        </p>
                        <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                            <span className="font-medium">Status:</span>{" "}
                            {StatusAdoptApplciation?.find(
                                (item) => item?.id === app.application.status
                            )?.value ?? "N/A"}
                        </p>
                        <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                            Meeting Date:{" "}
                            {app.application.meetingDate
                                ? new Date(
                                      app.application.meetingDate
                                  ).toLocaleString()
                                : "Not Scheduled"}
                        </p>
                        {(app.application.status ===
                            StatusAdoptApplciation[1].id ||
                            app.application.status ===
                                StatusAdoptApplciation[4].id) && (
                            <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                                <span className="font-medium">Reason:</span>{" "}
                                {app.application.reasonReject}
                            </p>
                        )}
                    </div>
                </div>

                {app.application.status === StatusAdoptApplciation[0].id && (
                    <div className="mt-4 flex justify-center space-x-3">
                        <button
                            onClick={() => handleApprove(app.application.id)}
                            className="flex-1 px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none"
                        >
                            Approve
                        </button>
                        <button
                            className="flex-1 px-4 py-2 text-sm font-medium bg-red-600 text-white rounded-lg shadow hover:bg-red-700 focus:outline-none"
                            onClick={() =>
                                handleOpenRejectModal(app.application.id)
                            }
                        >
                            Reject
                        </button>

                        <RejectModal
                            isOpen={isRejectModalOpen}
                            onRequestClose={handleRequestClose}
                            onSubmit={handleReject}
                            adoptId={applicationId}
                        />
                    </div>
                )}
                {app.application.status === StatusAdoptApplciation[2].id &&
                    app.application.meetingDate && (
                        <div className="mt-4 flex flex-col justify-center space-y-2">
                            <button
                                className="flex-1 h-10 px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none"
                                onClick={() =>
                                    handleComplete(app.application.id)
                                }
                            >
                                Completed
                            </button>
                            <button
                                className="flex-1 h-10 px-4 py-2 text-sm font-medium bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700 focus:outline-none"
                                onClick={() =>
                                    handleOpenRejectModal(app.application.id)
                                } // Hoặc một hàm khác cho Reject Outside
                            >
                                Reject Outside
                            </button>

                            <RejectModal
                                isOpen={isRejectModalOpen}
                                onRequestClose={handleRequestClose}
                                onSubmit={handleRejectOutside}
                                adoptId={applicationId}
                            />
                        </div>
                    )}
            </div>
        ));
    };

    return (
        <div className="p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-4 flex space-x-2">
                <button
                    onClick={() => handleStatusChange("all")}
                    className={`px-4 py-2 rounded-md ${
                        selectedStatus === "all"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => handleStatusChange("0")}
                    className={`px-4 py-2 rounded-md ${
                        selectedStatus === "0"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    Pending
                </button>
                <button
                    onClick={() => handleStatusChange("1")}
                    className={`px-4 py-2 rounded-md ${
                        selectedStatus === "1"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    Approved
                </button>
                <button
                    onClick={() => handleStatusChange("2")}
                    className={`px-4 py-2 rounded-md ${
                        selectedStatus === "2"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    Complete
                </button>
                <button
                    onClick={() => handleStatusChange("3")}
                    className={`px-4 py-2 rounded-md ${
                        selectedStatus === "3"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    Rejected Outside
                </button>
                <button
                    onClick={() => handleStatusChange("-1")}
                    className={`px-4 py-2 rounded-md ${
                        selectedStatus === "-1"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    Rejected
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {renderApplications()}
            </div>

            <Pagination className="mt-5">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(currentPage - 1);
                            }}
                            className={
                                currentPage === 1
                                    ? "pointer-events-none opacity-50"
                                    : ""
                            }
                        />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(index + 1);
                                }}
                                className={
                                    index + 1 === currentPage ? "active" : ""
                                }
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(currentPage + 1);
                            }}
                            className={
                                currentPage === totalPages
                                    ? "pointer-events-none opacity-50"
                                    : ""
                            }
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
