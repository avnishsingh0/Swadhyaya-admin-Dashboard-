import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./CircularChart.css";
interface DownloadData {
  totalDownloads: number;
  android: number;
  ios: number;
}

interface DownloadChartProps {
  data: DownloadData;
}
export const CircularChart: React.FC<DownloadChartProps> = ({ data }) => {
  const chartData = {
    labels: ["Android", "iOS"],
    datasets: [
      {
        data: [data.android, data.ios],
        backgroundColor: ["#FF5733", "#33FF57"], // Two different colors
        hoverBackgroundColor: ["#FF5733", "#33FF57"],
        borderWidth: 0, // Remove border
      },
    ],
  };
  const options = {
    cutout: "95%", // Adjust the size of the white gap
  };
  
  return (
    <div className="circular-chart-container">
      <div className="circular-chart-top">
        <span className="chart-downloads">Current Downloads</span>
      </div>
      <div>
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};
