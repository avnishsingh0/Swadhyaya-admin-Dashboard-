import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Import react Icon
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { PiDotOutlineFill } from "react-icons/pi";

// Internal components & assests
import logo from "../../resources/swadhyaya-logo.png";
import { LeftMenuItems } from "../../Constants/LeftMenuItems";

// Context
import { GlobalContextData } from "../../context";

// Style
import "./LeftNavBar.scss";

export const LeftNavBar = () => {
  const [menuItems, setMenuItems] = useState([...LeftMenuItems]);
  const { state, dispatch } = useContext(GlobalContextData);
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();

  const handleOpenMenuItem = (index: number, openStatus: boolean) => {
    const data = [...menuItems];
    data.forEach((item, i) => {
      item.openStatus = i === index ? !item.openStatus : false;
    });
    setMenuItems(data);
    if (!openStatus) {
      if (
        data[index].child.length > 0 &&
        data[index].child.every((childitem) => childitem.routeInfo !== pathName)
      ) {
        navigate(data[index].child[0].routeInfo);
      }
    }
  };

  const handleCloseAllMenus = () => {
    const data = menuItems.map((item) => ({ ...item, openStatus: false }));
    setMenuItems(data);
  };

  return (
    <nav
      className={`sidebar ${state.openSidebar ? "" : "close"}`}
      onMouseLeave={!state.openSidebar ? handleCloseAllMenus : undefined}
    >
      <header className="sidebar-header">
        <div className="image-text">
          {state.openSidebar ? (
            <span className="image hide-logo">
              <img
                src={logo}
                alt="Logo"
                height={44}
                className="sidebar-header-img"
              />
            </span>
          ) : (
            <span className="image">
              <img
                className="sidebar-header-img"
                src="https://demo.smart-school.in/uploads/school_content/admin_small_logo/1.png?1694754095"
                alt=" Logo"
              />
            </span>
          )}
          <span className="image mobile-view-logo">
            <img
              src="https://demo.smart-school.in/uploads/school_content/admin_small_logo/1.png?1694754095"
              alt=" Logo"
              height={44}
              className="sidebar-header-img"
            />
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

      <div className={`menu-bar ${state.openSidebar ? "" : "close-menu-bar"}`}>
        <div>
          <ul>
            <li
              className={`nav-link
              ${pathName === "/dashboard" ? "parent-box" : ""}
             ${!state.openSidebar ? "closed-nav-link" : ""}`}
            >
              <Link
                to="/dashboard"
                className={`left-section-text-color  ${
                  !state.openSidebar ? "closed-text" : ""
                }`}
              >
                <span
                  className={`parent-icon${
                    pathName === "/dashboard"
                      ? " parent-icon selected-icon"
                      : ""
                  }`}
                  style={{
                    WebkitMask:
                      'url("https://minimals.cc/assets/icons/navbar/ic_dashboard.svg") center center / contain no-repeat',
                  }}
                ></span>
                <span
                  className={`${
                    pathName === "/dashboard" ? "parent-box-text" : ""
                  }`}
                >
                  Dashboard
                </span>
              </Link>
            </li>
            <li
              className={`nav-link
              ${pathName === "/e-commerce" ? "parent-box" : ""}
             ${!state.openSidebar ? "closed-nav-link" : ""}`}
            >
              <Link
                to="/e-commerce"
                className={`left-section-text-color  ${
                  !state.openSidebar ? "closed-text" : ""
                }`}
              >
                <span
                  className={`parent-icon${
                    pathName === "/e-commerce"
                      ? " parent-icon selected-icon"
                      : ""
                  }`}
                  style={{  
                    WebkitMask:
                      'url("https://minimals.cc/assets/icons/navbar/ic_ecommerce.svg") center center / contain no-repeat',
                  }}
                ></span>
                <span
                  className={`${
                    pathName === "/e-commerce" ? "parent-box-text" : ""
                  }`}
                >
                  E-Commerce
                </span>
              </Link>
            </li>
            {menuItems.map((item, index) => {
              const isParentSelected = item.child.some(
                (childitem) => childitem.routeInfo === pathName
              );
              return (
                <div key={index + "" + item}>
                  <li
                    className={`nav-link ${
                      isParentSelected ? "parent-box" : ""
                    } ${!state.openSidebar ? "closed-nav-link" : ""}`}
                    onClick={() => {
                      if (state.openSidebar) {
                        handleOpenMenuItem(index, false);
                      }
                    }}
                    onMouseEnter={() => {
                      if (!state.openSidebar) {
                        handleOpenMenuItem(index, true);
                      }
                    }}
                  >
                    <Link
                      to="#"
                      className={`left-section-text-color ${
                        isParentSelected ? "parent-box-text" : ""
                      } ${!state.openSidebar ? "closed-text" : ""}`}
                    >
                      <span
                        className={`${
                          isParentSelected
                            ? "parent-icon selected-icon"
                            : "parent-icon"
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
                  {item.openStatus && (
                    <div className={!state.openSidebar ? "child-content" : ""}>
                      {item.child.map((childitem, index) => {
                        return (
                          <li
                            className="nav-link-child"
                            key={index + "" + childitem}
                          >
                            <Link
                              to={childitem.routeInfo}
                              className={"nav-link-child"}
                            >
                              <PiDotOutlineFill
                                className={`child-icon ${
                                  childitem.routeInfo === pathName
                                    ? "child-select-icon"
                                    : ""
                                }`}
                              />
                              <span
                                className={`child-text ${
                                  childitem.routeInfo === pathName
                                    ? "child-select-text"
                                    : ""
                                }`}
                              >
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
