import React from "react";
import { Line } from "react-chartjs-2";
import './LineChart.css'
import { genderDownloads } from "../../db";
const options = {
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Number of Downloads",
      },
    },
  },
};
export const LineChart = () => {
  return (
    <div className="line-chart-container">
      <Line data={genderDownloads} options={options} />
    </div>
  );
};
