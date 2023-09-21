import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Import react Icon
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { PiDotOutlineFill } from "react-icons/pi";

// Internal components & assests
import logo from "../../resources/swadhyaya-logo.png";
import { LeftMenuItems } from "../../Constants/LeftMenuItems";

// Context
import { GlobalContextData } from "../../context";

// Style
import "./LeftNavBar.css";

export const LeftNavBar = () => {
  const [status, setStatus] = useState<boolean>(true);
  const [menuItems, setMenuItems] = useState([...LeftMenuItems]);
  const { state, dispatch } = useContext(GlobalContextData);
  const location = useLocation();
  const pathName = location.pathname;

  const handleOpenMenuItem = (index: number) => {
    const data = [...menuItems];
    data[index].openStatus = !data[index].openStatus;
    setMenuItems(data);
    setStatus(data[index].openStatus);
  };
  return (
    <nav className={`sidebar ${state.openSidebar ? "" : "close"}`}>
      <header>
        <div className="image-text">
          {state.openSidebar ? (
            <span className="image img-margin hide-logo">
              <img src={logo} alt="Logo" height={44} />
            </span>
          ) : (
            <span className="image">
              <img
                src="https://demo.smart-school.in/uploads/school_content/admin_small_logo/1.png?1694754095"
                alt=" Logo"
              />
            </span>
          )}
          <span className="image mobile-view-logo">
            <img src={logo} alt=" Logo" height={44} />
          </span>
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
            <li className="nav-link">
              <Link
                to="/dashboard"
                className={`left-section-text-color ${
                  pathName === "/dashboard" ? "selected-link" : ""
                }`}
              >
                <span
                  className={`icon${
                    pathName === "/dashboard" ? " icon selected-icon" : ""
                  }`}
                  style={{
                    WebkitMask:
                      'url("https://minimals.cc/assets/icons/navbar/ic_dashboard.svg") center center / contain no-repeat',
                  }}
                ></span>
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link
                to="/e-commerce"
                className={`left-section-text-color ${
                  pathName === "/e-commerce" ? "selected-link" : ""
                }`}
              >
                <span
                  className={`icon${
                    pathName === "/e-commerce" ? " icon selected-icon" : ""
                  }`}
                  style={{
                    WebkitMask:
                      'url("https://minimals.cc/assets/icons/navbar/ic_ecommerce.svg") center center / contain no-repeat',
                  }}
                ></span>
                <span className="text nav-text">E-Commerce</span>
              </Link>
            </li>
            {menuItems.map((item, index) => {
              console.log(item);
              return (
                <div key={index + "" + item}>
                  <li
                    className="nav-link"
                    onClick={() => handleOpenMenuItem(index)}
                  >
                    <Link
                      to="#"
                      className={`left-section-text-color ${
                        pathName === "/dashboard"
                      }`}
                    >
                      <span
                        className={`icon${
                          pathName === "#" ? " icon selected-icon" : ""
                        }`}
                        style={{
                          WebkitMask: `${item.icon}`,
                        }}
                      ></span>
                      <span className="text nav-text">{item.name}</span>
                      <span
                        className={
                          state.openSidebar ? "open-icon" : "hide-icon"
                        }
                      >
                        {item.openStatus ? (
                          <AiOutlineDown />
                        ) : (
                          <AiOutlineRight />
                        )}
                      </span>
                    </Link>
                  </li>

                  {status && item.openStatus && (
                    <div className={item.openStatus ? "child-content" : ""}>
                      {item.child.map((childitem, index) => {
                        return (
                          <li className="nav-link" key={index + "" + childitem}>
                            <Link
                              to={childitem.routeInfo}
                              className={`left-section-text-color ${
                                pathName === `${childitem.routeInfo}`
                                  ? "selected-link"
                                  : ""
                              }`}
                            >
                              <PiDotOutlineFill className="child-icon" />
                              <span className="child-text">
                                {childitem.name}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
