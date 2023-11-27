import React from "react";

// Internal imports
import "./Dashboard.css";
import { dashCarousel } from "../../db";
import {
  Carousel,
  WelcomeUser,
  ActiveCard,
  AppAreaInstalled,
  AppCurrentDownload,
} from "../../components";

export const Dashboard = () => {

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
