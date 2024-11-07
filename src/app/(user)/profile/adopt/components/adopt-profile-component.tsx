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
import AdoptionModal from "@/components/adoptionmodal";
import UpdateAdoptionModal from "@/components/updateadoptionmodal";

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
  const [isModalOpen, setIsModalOpen] = useState(false); // State để kiểm tra modal có mở hay không
  const [selectedApplication, setSelectedApplication] = useState<any>(null); // Lưu t

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

  const handleUpdateClick = (applicationId: string, description: string) => {
    setSelectedApplication({
      id: applicationId,
      description: description,
    });
    setIsModalOpen(true); // Mở modal khi người dùng nhấn Update
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Đóng modal khi người dùng hủy
  };

  const handleSubmit = async (data: any) => {
    console.log("Adoption request submitted with description:", data.description);
    // Gọi API để cập nhật mô tả ứng dụng
    const result = await updateAdoptApplicationApi({
      adoptId: selectedApplication.id,
      description: data.description,
    });

    if (result) {
      // Nếu cập nhật thành công
      setIsModalOpen(false); // Đóng modal sau khi submit thành công
      fetchApplications(currentPage); // Lấy lại dữ liệu sau khi cập nhật thành công
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
        className="flex flex-col justify-between h-full bg-white p-5 rounded-lg shadow-md border border-gray-200 dark:bg-gray-700 dark:border-gray-600"
      >
        <div>
          <img
            src={app.application.cat.imageUrl}
            alt="Application Image"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Description: {app.application.description}
          </p>
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
        <>
          <div className="flex justify-between">
            {!app.application.meetingDate &&
              app.application.status === StatusAdoptApplciation[0].id && (
                <button
                  onClick={() =>
                    handleUpdateClick(app.application.id, app.application.description)
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
          {/* Modal hiển thị khi nhấn Update */}
          {isModalOpen && selectedApplication && (
            <UpdateAdoptionModal
              isOpen={isModalOpen}
              onRequestClose={handleModalClose}
              onSubmit={handleSubmit}
            />
          )}
        </>
      </div>
    ));
  };

  return (
    <div className="basis-[58%] py-5 border-1 border-gray-300 rounded-2xl bg-white shadow-box-shadown">
      {/* Bộ lọc trạng thái */}
      <div className="flex flex-col gap-y-6 px-8">
        <header className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Adopt Applications</h2>
        </header>
        <div className="flex flex-col gap-y-2 w-1/4 mb-4">
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
