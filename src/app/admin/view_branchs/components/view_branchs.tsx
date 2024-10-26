"use client";

import React from "react";

// Dữ liệu mẫu
const data: Payment[] = [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reuv4",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com",
    },
    {
        id: "derv1ws0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kma53ae",
        amount: 874,
        status: "success",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqecj4p",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com",
    },
];

// Kiểu dữ liệu Payment
export type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};

export default function PaymentTable() {
    return (
        <div className="w-full p-4">
            {/* Header */}
            <div className="grid grid-cols-5 bg-blue-100 text-gray-800 font-semibold rounded-t-lg">
                <div className="p-4">Name</div>
                <div className="p-4">Email</div>
                <div className="p-4 ">Number Home</div>
                <div className="p-4 ">District</div>
                <div className="p-4 ">Province</div>
            </div>

            {/* Body */}
            <div className="border border-gray-300 rounded-b-lg">
                {data.length > 0 ? (
                    data.map((payment) => (
                        <div
                            key={payment.id}
                            className="grid grid-cols-5 hover:bg-gray-50 transition-colors"
                        >
                            <div className="p-4 capitalize">
                                {payment.status}
                            </div>
                            <div className="p-4 lowercase">{payment.email}</div>
                            <div className="p-4">
                                {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                }).format(payment.amount)}
                            </div>
                            <div className="p-4 lowercase">{payment.email}</div>
                            <div className="p-4 lowercase">{payment.email}</div>
                        </div>
                    ))
                ) : (
                    <div className="p-4 text-center">Không có kết quả nào.</div>
                )}
            </div>
        </div>
    );
}
