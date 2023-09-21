import { useState } from "react";
// Internal components
import "./TopHeader.scss";
import { IoMdNotifications } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { Popper } from "../Popper";
export const TopHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (!target.closest(".user-popper")) {
      setShowDropdown(false);
    }
  };
  const handleUser = () => {
    setShowDropdown((prevState) => !prevState);
  };
  return (
    <>
      <header className="top-header">
        <div className="right-container">
          <div className="icon-container">
            <img
              src="https://cdn4.iconfinder.com/data/icons/world-flags-12/512/Untitled-2-19-64.png"
              alt=""
              className="flag"
            />
          </div>
          <div className="icon-container">
            <MdLightMode />
          </div>
          <div className="icon-container">
            <IoMdNotifications />
            <span className="notification-count">4</span>
          </div>
          <div className="icon-container">
            <FiSettings className="setting-icon" />
          </div>

          <div
            className={`icon-container ${showDropdown ? "active-color" : ""}`}
            onClick={() => setShowDropdown(true)}
          >
            <FaRegCircleUser />
          </div>
        </div>
        {showDropdown && (
          <Popper
            onClose={handleUser}
            handleClickOutside={handleOutsideClick}
            className="user-popper"
          >
            <div className="name-email">
              <h6 className="user-name">Avnish Kumar</h6>
              <p className="user-email">avnishbdp@gmail.com</p>
            </div>
            <hr className="popper-hr-line" />
            <div className="user-profile-opt">
              <li className="user-opt">Home</li>
              <li className="user-opt">Profile</li>
              <li className="user-opt">Settings</li>
            </div>
            <hr className="popper-hr-line" />
            <li className="logout">Logout</li>
          </Popper>
        )}
      </header>
    </>
  );
};
