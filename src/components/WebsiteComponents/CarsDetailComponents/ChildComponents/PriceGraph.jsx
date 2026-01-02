import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const PriceGraph = () => {
  const chartData = {
    labels: ["$15.0K", "$15.0K", "$15.0K", "$15.0K", "$15.0K"],
    datasets: [
      {
        label: "Price",
        data: [18000, 20000, 17500, 17500, 18500],
        backgroundColor: "rgba(139, 92, 246, 0.1)",
        borderColor: "#4F46E5",
        pointBackgroundColor: "#4F46E5",
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 7,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value) => `$${(value / 1000).toFixed(1)}0K`,
          font: {
            size: 10,
            family: "Poppins",
          },
        },
        grid: {
          drawBorder: false,
          color: "#f0f0f0",
        },
      },
      x: {
        ticks: {
          font: {
            size: 10,
            family: "Poppins",
          },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    layout: {
      padding: 10,
    },
  };

  return (
    <div className="pt-40 sm:pt-80 px-4 sm:px-0">
      <div className="border rounded-2xl p-5 bg-white space-y-3  w-full max-w-2xl mx-auto shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h3 className="text-black font-semibold">Price History</h3>
          <div className="text-xs text-right leading-snug text-black">
            Listed <span className="font-semibold">35</span> days ago. <br />
            <span className="font-semibold text-green-600">$966</span> total
            price reduction!
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 pt-2">
          <div className="h-40 sm:h-48">
            <Line data={chartData} options={chartOptions} />
          </div>
          <div className="text-xs text-center mt-2 text-gray-500 flex justify-between px-4">
            <span>Avg. market price</span>
            <span>Avg. market price range</span>
          </div>
        </div>

        <div className="text-xs text-black pt-2">
          <div className="flex justify-between border-b py-1">
            <span>3/04/25</span>
            <span className="font-medium">Listed</span>
            <span>$31,866</span>
          </div>
          <div className="flex justify-between border-b py-1">
            <span>3/10/25</span>
            <span className="text-red-600">- $366</span>
            <span>$35,500</span>
          </div>
          <div className="flex justify-between py-1">
            <span>3/04/25</span>
            <span className="text-red-600">- $600</span>
            <span>$30,900</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceGraph;
