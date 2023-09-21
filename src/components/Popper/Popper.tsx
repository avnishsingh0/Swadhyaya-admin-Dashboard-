import React, { useEffect } from "react";
import "./Popper.scss";
import { HeaderPopperWrapperProps } from "./popper.type";

export const Popper: React.FC<HeaderPopperWrapperProps> = ({
  onClose,
  handleClickOutside,
  children,
  className,
}) => {
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return <div className={`popper-container ${className}`}>{children}</div>;
};
