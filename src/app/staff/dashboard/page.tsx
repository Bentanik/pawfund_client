import React from 'react';
import StaffDashboard from '@/components/staff-dashboard';
import MultipleAreaChart from '@/components/chart/multiple-area';
import MultipleBarChart from '@/components/chart/multiple-bar';

export default function Admin() {
    const incomeData = [18000, 51000, 60000, 38000, 88000, 50000, 40000, 52000, 88000, 80000, 60000, 70000];
    const outcomeData = [27000, 38000, 60000, 77000, 40000, 50000, 49000, 29000, 42000, 27000, 42000, 50000];
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

    return (
        <div className="flex flex-col">
            <StaffDashboard />
            <div className="flex justify-between mt-6 flex-row px-6">
                {/* Khung cho MultipleAreaChart */}
                <div className="flex-1 mr-4 border border-gray-300 rounded-lg p-4 bg-white shadow">
                    <MultipleAreaChart incomeData={incomeData} outcomeData={outcomeData} categories={categories} />
                </div>
                {/* Khung cho MultipleBarChart */}
                <div className="flex-1 ml-4 border border-gray-300 rounded-lg p-4 bg-white shadow">
                    <MultipleBarChart data={{ income: incomeData, outcome: outcomeData }} />
                </div>
            </div>
        </div>
    );
}
