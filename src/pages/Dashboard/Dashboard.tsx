import React from "react";

// Third party
import { merge } from "lodash";
import { ApexOptions } from "apexcharts";
import { useTheme } from "@emotion/react";

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
        <ActiveCard />
        <ActiveCard />
        <ActiveCard />
      </div>
      <div className="chart-container">
        <div className="chart-download-container">
          <div className="chartcard-heading-container">
            <span className="chartcard-heading">Current Download</span>
          </div>
          <AppCurrentDownload data={CHART_DATA} options={chartOptions} />
        </div>
        <div className="app-area-chart-box">
          <AppAreaInstalled />
        </div>
      </div>
    </div>
  );
};
