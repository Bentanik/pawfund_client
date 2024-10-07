'use client';
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// Tải component ReactApexChart chỉ trên client-side
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Định nghĩa kiểu cho props
interface ChartData {
  income: number[];
  outcome: number[];
}

interface MultipleBarChartProps {
  data: ChartData;
}

const MultipleBarChart: React.FC<MultipleBarChartProps> = ({ data }) => {
  const [chartOptions, setChartOptions] = useState<any>(null);
  const [timeframe, setTimeframe] = useState<string>("Total");

  useEffect(() => {
    // Lọc dữ liệu dựa trên `timeframe`
    const filteredIncome = filterData(data.income, timeframe);
    const filteredOutcome = filterData(data.outcome, timeframe);
    const filteredCategories = filterCategories(timeframe);

    // Cấu hình cho biểu đồ
    const options = {
      chart: {
        type: 'bar',
        height: 300,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      series: [
        {
          name: 'Income',
          data: filteredIncome,
        },
        {
          name: 'Outcome',
          data: filteredOutcome,
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '16px',
          borderRadius: 0,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 8,
        colors: ['transparent'],
      },
      xaxis: {
        categories: filteredCategories,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: '#9ca3af',
            fontSize: '13px',
            fontFamily: 'Inter, ui-sans-serif',
            fontWeight: 400,
          },
          offsetX: -2,
        },
      },
      yaxis: {
        labels: {
          align: 'left',
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
        y: {
          formatter: (value: number) => `$${value >= 1000 ? `${value / 1000}k` : value}`,
        },
      },
    };

    // Cập nhật state với options
    setChartOptions(options);
  }, [data, timeframe]);

  // Hàm để lọc dữ liệu dựa trên `timeframe`
  const filterData = (data: number[], timeframe: string): number[] => {
    switch (timeframe) {
      case 'Day':
        return data.slice(-1); // Lấy dữ liệu của ngày gần nhất
      case 'Week':
        return data.slice(-7); // Lấy dữ liệu của 7 ngày gần nhất
      case 'Month':
        return data.slice(-30); // Lấy dữ liệu của 30 ngày gần nhất
      default:
        return data; // Total: Lấy toàn bộ dữ liệu
    }
  };

  // Hàm để lọc danh mục (tháng) dựa trên `timeframe`
  const filterCategories = (timeframe: string): string[] => {
    const allCategories = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    switch (timeframe) {
      case 'Day':
        return allCategories.slice(-1); // Lấy ngày gần nhất
      case 'Week':
        return allCategories.slice(-7); // Lấy 7 ngày gần nhất
      case 'Month':
        return allCategories.slice(-30); // Lấy 30 ngày gần nhất
      default:
        return allCategories; // Total: Lấy toàn bộ danh mục
    }
  };

  // Kiểm tra xem chartOptions đã được set hay chưa
  if (!chartOptions) return null;

  return (
    <div>
      {/* Dropdown chọn khoảng thời gian */}
      <div className="flex justify-end mb-4">
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="py-2 px-3 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-gray-300 focus:border-gray-300"
        >
          <option value="Day">Day</option>
          <option value="Week">Week</option>
          <option value="Month">Month</option>
          
        </select>
      </div>
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" height={300} />
    </div>
  );
};

export default MultipleBarChart;
