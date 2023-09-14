import { Outlet } from "react-router-dom";

// Internal imports
import "./MainLayout.css";
import { TopHeader, LeftNavBar } from "../";

export const MainLayout = () => {
  return (
    <>
      <main className="main-layout-container">
        <LeftNavBar />
        <div className="home">
          <TopHeader />
          <Outlet />
        </div>
      </main>
    </>
  );
};
