import React from "react";

// Third party
import { merge } from "lodash";
import { ApexOptions } from "apexcharts";

// Internal imports
import "./Dashboard.css";
import { dashCarousel } from "../../db";
import {
  Carousel,
  WelcomeUser,
  ActiveCard,
  AppAreaInstalled,
  AppCurrentDownload,
  BaseOptionChart,
} from "../../components";
import { fNumber } from "../../utils/formatNumber";

const CHART_DATA = [12244, 53345, 44313, 78343];

// This 'CHART_AREA_DATA' array is for the area install download data.
const CHART_AREA_DATA = [
  {
    year: 2019,
    data: [
      { name: "Asia", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
      { name: "America", data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
    ],
  },
  {
    year: 2020,
    data: [
      { name: "Asia", data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
      { name: "America", data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
    ],
  },
];

export const Dashboard = () => {
  // This 'cartOption' function is for the current download styles and props.
  const chartOptions = merge(BaseOptionChart(), {
    colors: ["#ff2f30", "#ffc006", "#00b8d9", "#ff5530"],
    labels: ["Mac", "Window", "iOS", "Android"],
    legend: {
      horizontalAlign: "center",
      floating: true,
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName: string | number) => fNumber(seriesName),
        title: {
          formatter: (seriesName: any) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "89%",
          labels: {
            value: {
              formatter: (val: string | number) => fNumber(val),
            },
            total: {
              formatter: (w: { globals: { seriesTotals: any[] } }) => {
                const sum = w.globals.seriesTotals.reduce(
                  (a: any, b: any) => a + b,
                  0
                );
                return fNumber(sum);
              },
            },
          },
        },
      },
    },
  }) as ApexOptions;

  return (
    <div className="dashboard-container">
      <div className="dashboard-top-section">
        <WelcomeUser />
        <Carousel items={dashCarousel} />
      </div>
      <div className="active-card-container">
        <ActiveCard
          title="Total Active Users"
          percentChange="+2.6%"
          cardPrice="18,765"
          seriesData={[20, 41, 63, 33, 28, 35, 50, 46, 11, 26]}
        />
        <ActiveCard
          title="Total Installed"
          percentChange="+0.2%"
          cardPrice="4,876"
          seriesData={[40, 35, 80, 20, 56, 86, 54, 44, 99, 35]}
        />
        <ActiveCard
          title="Total Downloads"
          percentChange="-0.1%"
          cardPrice="678"
          seriesData={[33, 88, 110, 44, 99, 66, 77, 11, 66, 44]}
        />
      </div>
      <div className="chart-container">
        <div className="chart-download-container">
          <div className="chartcard-heading-container">
            <span className="chartcard-heading">Current Download</span>
          </div>
          <AppCurrentDownload data={CHART_DATA} options={chartOptions} />
        </div>
        <div className="app-area-chart-box">
          <AppAreaInstalled chartData={CHART_AREA_DATA} defaultSeries={2019} />
        </div>
      </div>
    </div>
  );
};
