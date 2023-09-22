import React from "react";
import "./Dashboard.css";
import { dashCarousel, downloadData } from "../../db";
import { Carousel, CircularChart, WelcomeUser } from "../../components";
import { ActiveCard } from "../../components/ActiveCard";
import { LineChart } from "../../components/LineChart";

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
        <CircularChart data={downloadData} />
        {/* <LineChart /> */}
      </div>
    </div>
  );
};
