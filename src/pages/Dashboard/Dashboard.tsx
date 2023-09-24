import React from "react";
import "./Dashboard.css";
import { dashCarousel, downloadData } from "../../db";
import {
  ActiveCard,
  AppDetails,
  Carousel,
  CircularChart,
  LineChart,
  TopAuthor,
  TopInstalled,
  WelcomeUser,
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
        <CircularChart data={downloadData} />
        <LineChart />
      </div>
      <div className="country-author">
        <TopInstalled />
        <TopInstalled />
        <div className="app-details">
          <AppDetails percentage={38} totalCount={10000}/>
        </div>
      </div>
    </div>
  );
};
