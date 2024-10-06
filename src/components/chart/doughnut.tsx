'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dùng dynamic import cho ReactApexChart
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface DoughnutChartProps {
    data: number[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
    const [chartData, setChartData] = useState<{ options: any; series: any[] }>({ options: {}, series: [] });

    useEffect(() => {
        const options = {
            chart: {
                type: 'donut',
                height: 300,
            },
            labels: ['Income', 'Outcome', 'Orthers'],
            legend: {
                position: 'bottom',
            },
            dataLabels: {
                enabled: true,
                formatter: (val: number) => `${val.toFixed(1)}%`,
            },
            colors: ['#1f77b4', '#ff7f0e', '#e5e7eb'],
            stroke: {
                width: 2,
                colors: ['#fff'],
            },
            tooltip: {
                y: {
                    formatter: (value: number) => `$${value >= 1000 ? `${value / 1000}k` : value}`,
                },
            },
        };

        setChartData({
            options,
            series: data,
        });
    }, [data]);

    return (
        <div>
            <ReactApexChart options={chartData.options} series={chartData.series} type="donut" height={300} />
        </div>
    );
};

export default DoughnutChart;
