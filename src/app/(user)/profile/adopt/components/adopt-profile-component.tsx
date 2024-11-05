"use client";
import React, { Fragment, useEffect, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useUpdateAdoptApplication from "@/app/(user)/profile/adopt/hooks/useUpdateAdoptApplication";
import useGetApplicationByAdopter from "@/app/(user)/profile/adopt/hooks/useGetApplicationByAdopter";
import Link from "next/link";
import { StatusAdoptApplciation } from "@/const/adopt";

export default function AdoptApplication() {
  const { isPending: isFetching, getAllApplicationByAdopterApi } =
    useGetApplicationByAdopter();
  const { isPending, updateAdoptApplicationApi } = useUpdateAdoptApplication(); // Khởi tạo hook cập nhật
  const [applications, setApplications] = useState<API.ResponseData>();
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [editingAppId, setEditingAppId] = useState<string | null>(null);
  const [newDescription, setNewDescription] = useState("");

  const pageSize = 10;
  const isAscCreatedDate = false;

  const fetchApplications = async (pageNumber: number) => {
    const res = await getAllApplicationByAdopterApi({
      pageIndex: pageNumber,
      pageSize,
      isAscCreatedDate,
      status: selectedStatus,
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
  }, [currentPage, selectedStatus]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleUpdateClick = (appId: string, currentDescription: string) => {
    setEditingAppId(appId);
    setNewDescription(currentDescription);
  };

  const handleDescriptionChange = async (appId: string) => {
    // Gọi API để cập nhật mô tả
    const updateData = { adoptId: appId, description: newDescription }; // Tạo dữ liệu cần cập nhật
    const result = await updateAdoptApplicationApi(updateData); // Gọi hàm từ hook

    if (result) {
      // Nếu cập nhật thành công
      setEditingAppId(null);
      setNewDescription("");
      fetchApplications(currentPage); // Tải lại danh sách ứng dụng
    }
  };

  const renderApplications = () => {
    if (isFetching || isPending) {
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
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {app.application.description}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Sex: {app.application.cat.sex}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Name: {app.application.cat.name}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Status: {app.application.status}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Meeting Date:{" "}
            {app.application.meetingDate
              ? new Date(app.application.meetingDate).toLocaleString()
              : "Not Scheduled"}
          </p>
        </div>
        {editingAppId === app.application.id ? (
          <div className="flex flex-col">
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="border p-2 rounded mb-2"
              placeholder="Edit description"
            />
            <button
              onClick={() => handleDescriptionChange(app.application.id)}
              className="w-16 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-teal-400 rounded-lg hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 mt-auto"
            >
              Save
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between">
              {!app.application.meetingDate &&
                app.application.status === StatusAdoptApplciation[0].id && (
                  <button
                    onClick={() =>
                      handleUpdateClick(
                        app.application.id,
                        app.application.description
                      )
                    }
                    className="w-20 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-teal-400 rounded-lg hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 mt-auto"
                  >
                    Update
                  </button>
                )}
              {/* Hiển thị nút View Meeting Time nếu status là Approved */}
              {app.application.status === StatusAdoptApplciation[2].id &&
                !app.application.meetingDate && (
                  <Link href={`/choosemeetingtime/${app.application.id}`}>
                    <button className="w-24 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-teal-400 rounded-lg hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                      View Time
                    </button>
                  </Link>
                )}
            </div>
          </>
        )}
      </div>
    ));
  };

  return (
    <div className="p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* Bộ lọc trạng thái */}
      <div className="flex flex-col gap-y-2 w-full mb-4">
        <label className="text-base text-[#6f6f6f]">Status</label>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full border-2 border-gray-500">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {StatusAdoptApplciation?.map((item, index) => {
              return (
                <SelectItem key={index} value={item.id.toString()}>
                  {item.value}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderApplications()}
      </div>
      {/* Phân trang */}
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
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
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
                className={index + 1 === currentPage ? "active" : ""}
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
