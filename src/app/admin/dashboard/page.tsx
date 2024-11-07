import React from 'react';
import AdminDashboard from '@/components/admin-dashboard';
import MultipleAreaChart from '@/components/chart/multiple-area';
import MultipleBarChart from '@/components/chart/multiple-bar';
import DoughnutChart from '@/components/chart/doughnut';
import UserTable from '@/components/user-table';

export default function Admin() {
    const incomeData = [18000, 51000, 60000, 38000, 88000, 50000, 40000, 52000, 88000, 80000, 60000, 70000];
   
    const othersData = [15000, 30000, 20000, 10000, 30000, 20000, 25000, 15000, 20000, 10000, 15000, 20000];
    const categories = [
        '25 January 2024',
        '26 January 2024',
        '27 January 2024',
        '28 January 2024',
        '29 January 2024',
        '30 January 2024',
        '31 January 2024',
        '1 February 2024',
        '2 February 2024',
        '3 February 2024',
        '4 February 2024',
        '5 February 2024'
    ];

    const totalIncome = incomeData.reduce((acc, value) => acc + value, 0);
  
    const totalOthers = othersData.reduce((acc, value) => acc + value, 0);
    const doughnutData = [totalIncome, totalOthers];

    const users = [
        { role: 'Administrator', amount: 1, percentage: 70 },
        { role: 'Staff', amount: 6, percentage: 40 },
        { role: 'Volunteer', amount: 5, percentage: 45 },
        { role: 'Adopt', amount: 4, percentage: 60 },
    ];

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
