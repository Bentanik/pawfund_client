import React from 'react';

interface User {
    role: string;
    amount: number;
    percentage: number;
}

interface UserTableProps {
    users: User[];
}

// Hàm xác định màu sắc cho thanh tiến trình dựa trên tỷ lệ phần trăm
const getColorByPercentage = (percentage: number): string => {
    if (percentage >= 70) return 'bg-green-500'; // Màu xanh cho >= 70%
    if (percentage >= 50) return 'bg-yellow-500'; // Màu vàng cho >= 50%
    if (percentage >= 30) return 'bg-orange-500'; // Màu cam cho >= 30%
    return 'bg-red-500'; // Màu đỏ cho < 30%
};

// Trong component UserTable
const UserTable: React.FC<UserTableProps> = ({ users }) => {
    return (
        <div className="flex flex-col h-full">
            <div className="rounded-t mb-0 px-0 border-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Users</h3>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto flex-1">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase font-semibold text-left border-r">
                                    Role
                                </th>
                                <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase font-semibold text-left border-r">
                                    Amount
                                </th>
                                <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase font-semibold text-left">
                                    
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="text-gray-700 dark:text-gray-100">
                                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{user.role}</th>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user.amount}</td>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2">{user.percentage}%</span>
                                            <div className="relative w-full">
                                                <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                                    <div style={{ width: `${user.percentage}%` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${getColorByPercentage(user.percentage)}`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default UserTable;
