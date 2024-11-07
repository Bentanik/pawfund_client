'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dùng dynamic import cho ReactApexChart
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface MultipleAreaChartProps {
    incomeData: number[];
    categories: string[];
}

const MultipleAreaChart: React.FC<MultipleAreaChartProps> = ({ incomeData, categories }) => {
    const [timeframe, setTimeframe] = useState<string>('Total');
    const [chartData, setChartData] = useState<{ options: any; series: any[] }>({ options: {}, series: [] });

    useEffect(() => {
        // Lọc dữ liệu và categories theo timeframe
        const filteredIncomeData = filterData(incomeData, timeframe);
        const filteredCategories = filterCategories(categories, timeframe);

        const options = {
            chart: {
                height: 300,
                type: 'area',
                toolbar: { show: false },
                zoom: { enabled: false },
            },
            legend: { show: false },
            dataLabels: { enabled: false },
            stroke: { curve: 'smooth', width: 2 },
            grid: { strokeDashArray: 2 },
            fill: {
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 1,
                    opacityFrom: 0.1,
                    opacityTo: 0.8,
                },
            },
            xaxis: {
                type: 'category',
                categories: filteredCategories,
                labels: {
                    style: {
                        colors: '#9ca3af',
                        fontSize: '13px',
                        fontFamily: 'Inter, ui-sans-serif',
                        fontWeight: 400,
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#9ca3af',
                        fontSize: '13px',
                        fontFamily: 'Inter, ui-sans-serif',
                        fontWeight: 400,
                    },
                    formatter: (value: number) => (value >= 1000 ? `${value / 1000}k` : value),
                },
            },
            tooltip: {
                x: { format: 'MMMM yyyy' },
                y: {
                    formatter: (value: number) => `$${value >= 1000 ? `${value / 1000}k` : value}`,
                },
            },
        };

        
        setChartData({
            options,
            series: [
                {
                    name: 'Income',
                    data: filteredIncomeData, 
                },
            ],
        });
    }, [incomeData, categories, timeframe]);

    const filterData = (data: number[], timeframe: string): number[] => {
        switch (timeframe) {
            case 'Month':
                return data.slice(-12); 
            default:
                return data; 
        }
    };

    const filterCategories = (categories: string[], timeframe: string): string[] => {
        switch (timeframe) {
            case 'Month':
                return categories.slice(-12); // Lấy 12 tháng gần nhất
            default:
                return categories; // Trả về toàn bộ categories nếu không phải "Month"
        }
    };

    return (
        <div>
            <div className="flex justify-end mb-4">
                <div className="py-2 px-3 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-gray-300 focus:border-gray-300">
                    <span>Year</span>
                </div>
            </div>
            <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={300} />
        </div>
    );
};

export default MultipleAreaChart;
