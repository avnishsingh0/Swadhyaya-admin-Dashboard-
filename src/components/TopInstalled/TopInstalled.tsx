import React from "react";
import "./TopInstalled.scss";
import { InstalledList } from "./InstalledList";

export const TopInstalled = () => {
  return (
    <div className="top-installed-container">
      <div className="installed-header">
        <span>Top Installed Countries</span>
      </div>
      <div className="installed-list">
        <InstalledList />
        <InstalledList />
        <InstalledList />
        <InstalledList />
        <InstalledList />
      </div>
    </div>
  );
};
