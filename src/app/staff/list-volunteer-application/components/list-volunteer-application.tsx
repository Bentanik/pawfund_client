"use client";

import { useState, useEffect, Fragment } from "react";
import PaginatedComponent from "@/components/paginated";
import useGetDataStaffVolunteerApplication from "@/app/staff/list-volunteer-application/hooks/getVolunteerApplication";
import useRejectAdoptApplication from "@/app/staff/list-volunteer-application/hooks/rejectVolunteerApplication";
import useApplyVolunteerApplication from "@/app/staff/list-volunteer-application/hooks/approvedVolunteerApplication";

import { Status } from "@/const/volunteer";
import RejectModal from "@/app/staff/list-volunteer-application/components/reject-application-modal";

import { Input } from "@/components/ui/input";
import Link from "next/link";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Backdrop } from "@/components/backdrop";
import useToast from "@/hooks/use-toast";

interface ListVolunteerApplication {
    eventActivityId: string;
}

export default function ListEventActivities({
    eventActivityId,
}: ListVolunteerApplication) {
    const [name, setName] = useState<string>("");
    const [status, setStatus] = useState<
        REQUEST.VolunteerApplicationStatus | undefined
    >();
    const [isAscCreatedDate, setIsAscCreatedDate] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1);
    const [data, setData] = useState<API.VolunteerApplication[]>([]);
    const [applicationId, setApplicationId] = useState("");
    const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
    const [isRejectOutsideType, setIsRejectOutsideType] = useState(false);
    const { addToast } = useToast();

    const { isPending: isRejecting, rejectVolunteerApplicationApi } =
        useRejectAdoptApplication();

    const { isPending: isApplying, applyVolunteerApplicationApi } =
        useApplyVolunteerApplication();

    const { getVolunteerApplicationApi } =
        useGetDataStaffVolunteerApplication();

    const handleRequestClose = () => {
        setIsRejectModalOpen(false);
        setApplicationId("");
    };

    const getListApprovedEventsActivity = async (
        id: string,
        pageIndex: number
    ) => {
        const res = await getVolunteerApplicationApi({
            id: id,
            pageIndex: pageIndex,
            pageSize: 3,
            status: status,
            isAscCreatedDate: isAscCreatedDate,
        });
        setData(res?.value.data.items || []); // Set to empty array if data is undefined
        setTotalPage(res?.value.data.totalPages || 1); // Set total pages
    };

    useEffect(() => {
        if (eventActivityId) {
            getListApprovedEventsActivity(eventActivityId, currentPage);
        }
    }, [eventActivityId, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        getListApprovedEventsActivity(eventActivityId, page);
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleOpenRejectModal = (id: string, isOutside = false) => {
        setApplicationId(id);
        setIsRejectModalOpen(true);
        setIsRejectOutsideType(isOutside);
    };

    const handleGetData = (page: number) => {
        getListApprovedEventsActivity(eventActivityId, page);
    };

    const handleReject = async (data: { detailId: string; reason: string }) => {
        const res = await rejectVolunteerApplicationApi({
            detailId: data.detailId,
            reason: data.reason,
        });
        if (res?.isSuccess) {
            addToast({
                type: "success",
                description: "Change successfully",
            });
            getListApprovedEventsActivity(eventActivityId, currentPage);
        }
    };

    const handleApprove = async (id: string) => {
        const res = await applyVolunteerApplicationApi({
            detailId: id,
        });
        if (res?.isSuccess) {
            addToast({
                type: "success",
                description: "Change successfully",
            });
            getListApprovedEventsActivity(eventActivityId, currentPage);
        }
    };

    useEffect(() => {
        if (currentPage !== 1) {
            handleGetData(1);
            setCurrentPage(1);
        } else handleGetData(currentPage);
    }, [name, status, isAscCreatedDate]);

    return (
        <div className="w-full p-4 ">
            <h1 className="text-2xl font-semibold">Volunteer applications</h1>

            {data?.length > 0 ? (
                <Fragment>
                    <div className="flex flex-wrap">
                        {data?.map((item) => {
                            return (
                                <div
                                    key={item?.id}
                                    className="flex flex-col justify-between mt-4 mr-4 h-[230px] w-[30%] bg-white p-6 rounded-lg shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <div className="flex-grow">
                                        <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            {item?.account.firstName}
                                        </h5>

                                        <div className="space-y-2">
                                            <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                                                <span className="font-medium">
                                                    Description:
                                                </span>{" "}
                                                {item?.description}
                                            </p>
                                            <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                                                <span className="font-medium">
                                                    Email:
                                                </span>{" "}
                                                {item?.account.email}
                                            </p>
                                            <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                                                <span className="font-medium">
                                                    Status:
                                                </span>{" "}
                                                {
                                                    Status?.find(
                                                        (x) =>
                                                            x.id ===
                                                            item?.status
                                                    )?.value
                                                }
                                            </p>
                                            {item?.status === Status[2].id && (
                                                <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                                                    <span className="font-medium">
                                                        Reason:
                                                    </span>{" "}
                                                    {item?.reasonReject}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    {item?.status === Status[0].id && (
                                        <div className="mt-4 flex justify-center space-x-3">
                                            <button
                                                onClick={() =>
                                                    handleApprove(item?.id)
                                                }
                                                className="flex-1 px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleOpenRejectModal(
                                                        item?.id
                                                    )
                                                }
                                                className="flex-1 px-4 py-2 text-sm font-medium bg-red-600 text-white rounded-lg shadow hover:bg-red-700 focus:outline-none"
                                            >
                                                Reject
                                            </button>

                                            <RejectModal
                                                isOpen={isRejectModalOpen}
                                                onRequestClose={
                                                    handleRequestClose
                                                }
                                                onSubmit={handleReject}
                                                detailId={applicationId}
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    {/* Body */}

                    <div className="my-10">
                        <div className="mt-5">
                            <PaginatedComponent
                                totalPages={totalPage}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </Fragment>
            ) : (
                <h2 className="text-center mt-[100px] text-[1.5rem]">
                    No result
                </h2>
            )}
            <Backdrop open={isApplying} />
            <Backdrop open={isRejecting} />
        </div>
    );
}
