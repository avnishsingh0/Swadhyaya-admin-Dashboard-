import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

// Import react Icon
import { AiOutlineRight } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

// Context
import { GlobalContextData } from "../../context/";

// Style
import "./LeftNavBar.css";

export const LeftNavBar = () => {
  const { state, dispatch } = useContext(GlobalContextData);
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <nav className={`sidebar ${state.openSidebar ? "" : "close"}`}>
      <header>
        <div className="image-text">
          {state.openSidebar ? (
            <span className="image img-margin hide-logo">Swadhyaya</span>
          ) : (
            <span className="image">Swadhyaya</span>
          )}
          <span className="image mobile-view-logo">Swadhyaya</span>
        </div>

        <div
          className="toggle"
          onClick={() =>
            dispatch({
              type: "OPEN_CLOSE_SIDE_BAR",
              payload: !state.openSidebar,
            })
          }
        >
          <AiOutlineRight />
        </div>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link ">
              <Link
                to="/dashboard"
                className={`left-section-text-color ${
                  pathName === "/dashboard" ? "selected-link" : ""
                }`}
              >
                <RxDashboard className="icon" />
                <span className="text nav-text">Overview</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/dummy"
                className={`left-section-text-color ${
                  pathName === "/dummy" ? "selected-link" : ""
                }`}
              >
                <IoPeopleOutline className="icon" />
                <span className="text nav-text">Dummy</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
