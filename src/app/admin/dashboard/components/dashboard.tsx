'use client';
import React, { useEffect, useState } from 'react';
import AdminDashboard from '@/components/admin-dashboard';
import MultipleAreaChart from '@/components/chart/multiple-area';
import UserTable from '@/components/user-table';
import useGetDashboardAdmin from '@/app/admin/dashboard/hooks/useGetDashboardAdmin';

export default function Admin() {
    const { isPending, getDashboardAdminApi } = useGetDashboardAdmin();
    const [dashboardData, setDashboardData] = useState<API.DashboardData | null>(null);
    const [year, setYear] = useState(new Date().getFullYear());
    useEffect(() => {
        if (!dashboardData) {
            const fetchData = async () => {
                const data = await getDashboardAdminApi({ year });  
                if (data) {
                    setDashboardData(data.value.data);  // Lưu dữ liệu trả về vào state
                }
            };

            fetchData();
        }
    }, [getDashboardAdminApi, dashboardData]); 

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (!dashboardData) {
        return <div>No data available</div>;
    }

    
    const incomeData = dashboardData.listDonationInYear || [];
    const totalIncome = incomeData.reduce((acc, value) => acc + value, 0);
    const categories = dashboardData.listMonths || [];

   
    const users = (dashboardData.listFiveUsersDonated || []).map(user => ({
        imageUrl: user.imageUrl,
        email: user.email,
        amount: user.amount,
        percentage: user.percentage,
    }));

    return (
        <div className="flex flex-col">
            <AdminDashboard />
            <div className="grid grid-cols-12 gap-8 mt-6 px-6">
                <div className="col-span-6 border border-gray-300 rounded-lg p-4 bg-white shadow">
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Income Distribution</h3>
                    <MultipleAreaChart incomeData={incomeData} categories={categories} />
                </div>
                <div className="col-span-6 border border-gray-300 rounded-lg p-4 bg-white shadow h-[80%]">
                    <UserTable users={users} />
                </div>
            </div>
        </div>
    );
}
