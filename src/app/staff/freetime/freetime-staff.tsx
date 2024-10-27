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
import useGetMeetingTimeByStaff from "./hooks/useGetMeetingTimeByStaff";

interface MeetingData {
  meetingTime: string;
  numberOfStaffsFree: number;
}

export default function ManageData() {
  const { isPending, updateMeetingTimeApi } = useUpdateMeetingTime();

  const meetingTime = useGetMeetingTimeByStaff();

  const [data, setData] = useState<MeetingData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuantity, setNewQuantity] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);

  useEffect(() => {
    const fetchMeetingTimes = async () => {
      const data = await meetingTime.getMeetingTimeByStaffApi();
      if (data) {
        console.log("data", data)
        setData(data);

      }
    };

    fetchMeetingTimes();
  }, []);

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
      const meetingTimeString = selectedDate; // Chuyển sang ISO string (UTC)
      console.log("Selected Date: ", meetingTimeString);

      // Thêm mục mới vào data
      const newData = [...data, { meetingTime: meetingTimeString, numberOfStaffsFree: newQuantity }];

      // Sắp xếp data theo meetingTime tăng dần
      newData.sort((a, b) => new Date(a.meetingTime).getTime() - new Date(b.meetingTime).getTime());

      setData(newData);
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
    closeModalDelete();
  };

  const handleSubmit = async () => {
    if (data.length > 0) {
      console.log("Dữ liệu sẽ được gửi: ", data); // Xem dữ liệu trước khi gửi
      await updateMeetingTimeApi(data);
    } else {
      console.error("Không có dữ liệu để cập nhật");
    }
  };

  const openModalDelete = () => {
    setIsModalOpenDelete(true);
  };

  // Hàm đóng modal
  const closeModalDelete = () => {
    setIsModalOpenDelete(false);
  };

  const formatMeetingTime = (meetingTime: string): string => {
    const date = new Date(meetingTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0"); // Sử dụng getHours() để lấy giờ địa phương
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Sử dụng getMinutes() để lấy phút địa phương

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const renderListTime = () => {
    return <>
      {(
        data?.map((item, index) => (
          <tr key={index} className="border-b">
            <td className="p-3 px-5">
              {/* Sử dụng DateTimePicker để cho phép người dùng chỉnh sửa ngày giờ */}
              {/* <DateTimePicker
                value={new Date(item.meetingTime)}
                onChange={(date) => {
                  const newData = [...data];
                  newData[index].meetingTime = date ? date.toISOString() : "";
                  setData(newData);
                }}
              /> */}
              <input type="datetime-local"
                value={item.meetingTime ? item.meetingTime.slice(0, 16) : ""}
                onChange={(e) => {
                  const newData = [...data];
                  const newMeetingTime = e.target.value;
                  newData[index].meetingTime = newMeetingTime;
                  setData(newData);
                }} />
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
                onClick={openModalDelete}
                className="text-red-500 hover:text-red-700"
              >
                <FaRegTrashCan />
              </button>
              {isModalOpenDelete && (
                <div className="fixed inset-0 bg-black bg-opacity-20 z-40" onClick={closeModalDelete}></div>
              )}
              {isModalOpenDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto transform translate-x-32">
                  <div className="relative p-4 w-full max-w-md flex">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button
                        onClick={closeModalDelete}
                        className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
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
                        <span className="sr-only">Đóng modal</span>
                      </button>
                      <div className="p-4 text-center">
                        <svg
                          className="mx-auto mb-4 text-gray-400 w-12 h-12"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete this information?</h3>
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
                        >
                          Yes, I am sure.
                        </button>
                        <button
                          onClick={closeModalDelete}
                          className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                        >
                          No, cancel.
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </td>
          </tr>
        ))
      )}
    </>
  }

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
          Add New Time
        </Button>
      </div>

      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <thead>
            <tr className="border-b bg-gray-300">
              <th className="text-left p-3 px-5">Date and Time</th>
              <th className="text-left p-3 px-5">Quantity</th>
              <th className="p-3 px-5">Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* : (
            <tr>
              <td colSpan={3} className="text-center p-4 text-gray-500">
                No data available.
              </td>
            </tr>
            )} */}
            {renderListTime()}
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
                  <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    Date and time
                  </label>
                  {/* <DateTimePicker
                    value={selectedDate === null ? undefined : selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                    }}
                  /> */}
                  <input type="datetime-local"
                    value={selectedDate === null ? "" : selectedDate.toLocaleString().slice(0, 16)}
                    onChange={(e) => {
                      const newMeetingTime = e.target.value;
                      setSelectedDate(newMeetingTime);
                    }} />
                  {selectedDate && (
                    <p className="mt-2 text-sm text-gray-600">
                      Đã chọn: {selectedDate}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    Quantity
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
                  Add New Time
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end px-2"><Button
        onClick={handleSubmit}
        disabled={isPending}
        className="bg-teal-400 flex items-center"
      >
        Submit
      </Button></div>
    </div>
  );
}
