"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import useUpdateMeetingTime from "@/app/staff/freetime/hooks/useUpdateMeetingTime";
import { Calendar } from "@/components/ui/calendar";
import DateTimePicker from "@/components/ui/datetime-picker";

interface MeetingData {
  meetingTime: string; // Chuyển thành string để lưu thời gian UTC
  numberOfStaffsFree: number;
}

export default function ManageData() {
  const { isPending, updateMeetingTimeApi } = useUpdateMeetingTime();
  const [data, setData] = useState<MeetingData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDateTime, setNewDateTime] = useState<Date | null>(null);
  const [newQuantity, setNewQuantity] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newData = [...data];
    const value = e.target.value;

    if (value === "") {
      newData[index].numberOfStaffsFree = 0; // Đặt giá trị 0 khi ô trống
    } else {
      const quantity = Number(value);
      if (!isNaN(quantity) && quantity >= 0 && quantity <= 99) {
        newData[index].numberOfStaffsFree = quantity; // Cập nhật số lượng
      }
    }

    setData(newData);
  };

  const increaseQuantity = (index: number) => {
    const newData = [...data];
    newData[index].numberOfStaffsFree += 1; // Tăng số lượng lên 1
    setData(newData);
  };

  const decreaseQuantity = (index: number) => {
    const newData = [...data];
    if (newData[index].numberOfStaffsFree > 0) {
      newData[index].numberOfStaffsFree -= 1; // Giảm số lượng xuống 1
    }
    setData(newData);
  };

  const handleAddTime = () => {
    if (selectedDate) {
      // Chuyển đổi selectedDate sang chuỗi UTC
      const meetingTimeString = selectedDate.toISOString(); // Chuyển sang ISO string (UTC)
      console.log("Selected Date: ", meetingTimeString);

      // Thêm mục mới vào data
      setData([...data, { meetingTime: meetingTimeString, numberOfStaffsFree: newQuantity }]);
    }

    // Reset modal state
    setIsModalOpen(false);
    setSelectedDate(null); // Reset selectedDate về null sau khi thêm
    setNewQuantity(1);
  };

  useEffect(() => {
    if (selectedDate) {
      console.log("Currently Selected Date and Time: ", selectedDate.toLocaleString());
    }
  }, [selectedDate]);

  const handleDelete = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleSubmit = async () => {
    if (data.length > 0) {
      console.log("Dữ liệu sẽ được gửi: ", data); // Xem dữ liệu trước khi gửi
      await updateMeetingTimeApi(data);
    } else {
      console.error("Không có dữ liệu để cập nhật");
    }
  };

  return (
    <div className="text-gray-900 bg-gray-100 font-open_sans">
      <h1 className="text-3xl mr-4 p-4 font-semibold">Manage Time</h1>
      <div className="flex px-4">
        <Button
          className="bg-teal-400 flex items-center"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="mr-2">
            <FaPlus />
          </div>
          Add Time
        </Button>
      </div>

      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <thead>
            <tr className="border-b bg-gray-300">
              <th className="text-left p-3 px-5">Ngày và Giờ</th>
              <th className="text-left p-3 px-5">Số lượng</th>
              <th className="p-3 px-5">Xóa</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 px-5">
                    {/* Sử dụng DateTimePicker để cho phép người dùng chỉnh sửa ngày giờ */}
                    <DateTimePicker
                      value={new Date(item.meetingTime)}
                      onChange={(date) => {
                        const newData = [...data];
                        newData[index].meetingTime = date ? date.toISOString() : "";
                        setData(newData);
                      }}
                    />
                  </td>
                  <td className="p-3 px-5 flex items-center">
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => decreaseQuantity(index)}
                        className="border-r p-2 text-black"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.numberOfStaffsFree}
                        onChange={(e) => handleQuantityChange(e, index)}
                        className="border-none p-2 w-20 text-center mx-0"
                        min="0"
                      />
                      <button
                        onClick={() => increaseQuantity(index)}
                        className="border-l p-2 text-black"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-3 px-5 text-center">
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaRegTrashCan />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center p-4 text-gray-500">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="crud-modal"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-600 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Add New Time
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setIsModalOpen(false)}
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
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form
                className="p-4 md:p-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddTime();
                }}
              >
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ngày và Giờ
                  </label>
                  <DateTimePicker
                    value={selectedDate === null ? undefined : selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                    }}
                  />
                  {selectedDate && (
                    <p className="mt-2 text-sm text-gray-600">
                      Đã chọn: {selectedDate.toLocaleString()}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Số lượng
                  </label>
                  <input
                    type="number"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(Number(e.target.value))}
                    min="1"
                    className="border p-2 w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center w-full rounded-lg border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Thêm
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <Button
        onClick={handleSubmit}
        disabled={isPending}
        className="bg-teal-400 flex items-center m-4"
      >
        Lưu
      </Button>
    </div>
  );
}
