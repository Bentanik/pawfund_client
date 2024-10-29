"use client";
import React, { useState } from "react";
import Modal from "react-modal";

interface AdoptionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: any;
}

const AdoptionModal: React.FC<AdoptionModalProps> = ({
  isOpen,
  onRequestClose,
  onSubmit,
}) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Gửi yêu cầu tạo đơn nhận nuôi
    console.log("Adoption request submitted with description:", description);

    // Gọi hàm onSubmit với dữ liệu mô tả
    onSubmit({
      description: description,
    });

    // Reset lại mô tả sau khi tạo đơn
    setDescription("");

    // Đóng modal
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Modal"
      className="bg-white rounded-lg shadow dark:bg-gray-700 p-6 mx-auto mt-20 max-w-md w-full"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      {/* Modal header */}
      <div className="flex items-center justify-between p-4 md:p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Create adopt application
        </h3>
        <button
          type="button"
          onClick={onRequestClose}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>

      {/* Modal body */}
      <form className="p-4 md:p-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 mb-4 grid-cols-1">
          <div className="col-span-1">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Please write content to adopt"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create
        </button>
      </form>
    </Modal>
  );
};

export default AdoptionModal;
