import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
);

const Charts = () => {
    const [tab, setTab] = useState(1);
    // Sample data for pie chart (employee work distribution)
    const pieData = {
        labels: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'David Brown'],
        datasets: [
            {
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    'rgba(99, 102, 241, 0.8)',
                    'rgba(168, 85, 247, 0.8)',
                    'rgba(236, 72, 153, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                ],
                borderColor: [
                    'rgba(99, 102, 241, 1)',
                    'rgba(168, 85, 247, 1)',
                    'rgba(236, 72, 153, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(245, 158, 11, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Sample data for bar chart (project progress)
    const barData = {
        labels: ['Project Alpha', 'Project Beta', 'Project Gamma', 'Project Delta'],
        datasets: [
            {
                label: 'Completed Tasks',
                data: [75, 60, 45, 90],
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
                borderColor: 'rgba(16, 185, 129, 1)',
                borderWidth: 1,
            },
            {
                label: 'Incomplete Tasks',
                data: [25, 40, 55, 10],
                backgroundColor: 'rgba(239, 68, 68, 0.8)',
                borderColor: 'rgba(239, 68, 68, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#E5E7EB',
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#E5E7EB',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
            },
            x: {
                ticks: {
                    color: '#E5E7EB',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
            },
        },
    };

    const tabList = ["Board", "List", "Dashboard"];

    return (
        <div className="p-6">
            <div className="flex-1 h-screen overflow-y-auto">
                <div className="sticky top-0 z-20 bg-[#232b3e] border-b border-[#333] px-8 pt-6 pb-2 rounded-t-xl">
                    <div className="flex space-x-8">
                        {tabList.map((label, idx) => (
                        <button
                        key={label}
                        className={`uppercase tracking-wide pb-2 text-sm font-semibold ${
                            tab === idx
                            ? "text-[#b388ff] border-b-2 border-[#b388ff]"
                            : "text-gray-400 border-b-2 border-transparent"
                        }`}
                        onClick={() => setTab(idx)}
                        >
                        {label}
                        </button>
                    ))}
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pie Chart */}
                    <div className="bg-[#2a2f4a] rounded-xl p-6 shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-300 mb-4">Employee Work Distribution</h2>
                        <div className="h-56 md:h-64">
                            <Pie data={pieData} options={options} />
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="bg-[#2a2f4a] rounded-xl p-6 shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-300 mb-4">Project Progress</h2>
                        <div className="h-80">
                            <Bar data={barData} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts; 