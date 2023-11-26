import React from "react";
import "./Dashboard.css";
import { useTheme } from "@mui/material/styles";

import { dashCarousel, downloadData } from "../../db";
import { Carousel,  WelcomeUser } from "../../components";
import { ActiveCard } from "../../components/ActiveCard";
import { AppCurrentDownload } from "../../components/Charts/AppCurrentDownload";
import { AppAreaInstalled } from "../../components/Charts/AppAreaInstalled";

export const Dashboard = () => {
  const theme = useTheme();

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
        <div className="circular-chart-box">
          <AppCurrentDownload />
        </div>
        <div className="app-area-chart-box">
          <AppAreaInstalled />
        </div>
      </div>
    </div>
  );
};
