import React from "react";
import './ActiveCard.scss'
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import theme from "../../theme";
import { fNumber } from "../../utils/formatNumber";
const data = [11, 25, 22, 85, 95];

export const ActiveCard = () => {
  const maxDataValue = Math.max(...data);
  const chartOptions: ApexOptions = {
    colors: [theme.palette.primary.main],
    chart: { sparkline: { enabled: true } },
    plotOptions: { bar: { columnWidth: "68%", borderRadius: 2 } },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (val: number) => fNumber(val),
        title: { formatter: () => "" },
      },
      marker: { show: false },
    },
  };
  return (
    <div className="active-card">
      <div className="card-details">
        <h6 className="card-heading">Total Active Users</h6>
        <div className="percent-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="active-card-svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <path
                d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75H5Z"
                opacity=".5"
              ></path>
              <path
                fillRule="evenodd"
                d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057Z"
                clipRule="evenodd"
              ></path>
            </g>
          </svg>
          <div className="percent-text">+2.6%</div>
        </div>
        <h3 className="card-price">18,765</h3>
      </div>
      <div>
      <ReactApexChart
        type="bar"
        series={[{ data: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26] }]}
        options={chartOptions}  
        width={60}
        height={36}
      />
      </div>
    </div>
  );
};
