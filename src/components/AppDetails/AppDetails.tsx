import React from "react";
import "./AppDetails.scss";

interface AppDetailsProps {
  percentage: number;
  totalCount: number;
}
export const AppDetails = ({ percentage, totalCount }: AppDetailsProps) => {
  const filledPercentage = Math.min(percentage, 100);
  const emptyPercentage = 100 - filledPercentage;
  return (
    <div className="app-details-container">
      <div className="app-percentage">
        <div
          className="circle-fill"
          style={{ transform: `rotate(${(filledPercentage / 100) * 360}deg)` }}
        ></div>
        <div className="circle-empty"></div>
        <div className="circle-text">{`${filledPercentage}%`}</div>
      </div>
      <div className="app-count">
        <div className="total-count">{totalCount}</div>
        <div className="conversion-text">Conversion</div>
      </div>
    </div>
  );
};
