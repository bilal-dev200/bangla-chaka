import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Market Value',
      data: [20000, 19800, 19600, 19400, 19200, 19000],
      borderColor: '#4B5563',
      backgroundColor: '#4B5563',
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBorderColor: '#fff',
      tension: 0.3,
    },
    {
      label: 'Instant Offer',
      data: [16500, 16200, 15900, 15600, 15300, 15000],
      borderColor: '#EB0102',
      backgroundColor: '#EB0102',
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBorderColor: '#fff',
      tension: 0.3,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#ffffff',
      borderColor: '#E5E7EB',
      borderWidth: 1,
      cornerRadius: 10,
      titleColor: '#9CA3AF',
      bodyColor: '#111827',
      padding: 10,
      titleFont: { size: 12, weight: 'normal' },
      bodyFont: { size: 16, weight: 'bold' },
      callbacks: {
        title: (tooltipItems) => {
          const label = tooltipItems[0].label;
          return `January 16`; // Static title for mock, dynamic label could be used
        },
        label: (tooltipItem) => `$${tooltipItem.raw.toLocaleString()}`,
      },
    },
  },
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    y: {
      beginAtZero: false,
      ticks: {
        callback: (value) => `$${(value / 1000).toFixed(1)}K`,
        color: '#4B5563',
        font: {
          size: 12,
        },
      },
      grid: {
        color: '#E5E7EB',
        drawBorder: false,
      },
    },
    x: {
      ticks: {
        color: '#4B5563',
        font: {
          size: 12,
        },
      },
      grid: {
        display: false,
      },
    },
  },
};

export default function GarageChart() {
  return (
    <div className="w-full">
      {/* Dropdown */}
      <div className="mb-4">
        <select className="w-full border border-black rounded-lg px-4 py-2 text-sm text-gray-700">
          <option>Market & instant offer values</option>
        </select>
      </div>

      {/* Time Filters */}
      <div className="flex justify-center my-5">
        <div className="flex gap-10 items-center mb-2 text-sm font-medium text-gray-600">
          <span className="cursor-pointer">Forcast</span>
          <span className="cursor-pointer">All</span>
          <span className="cursor-pointer">1yr</span>
          <span className="px-2 py-1 rounded-md bg-[#EB0102] text-white">6mo</span>
          <span className="cursor-pointer">3mo</span>
        </div>
      </div>

      {/* Chart */}
      <div className="border border-black rounded-2xl p-4 bg-white h-[350px]">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
