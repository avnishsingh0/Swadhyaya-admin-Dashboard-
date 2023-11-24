import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import React from "react";

interface IconifyProps {
  icon: string; // Change the type for the icon parameter to string
  width?: number; // Optional width property
  height?: number; // Optional height property
  sx?: React.CSSProperties; // Optional style property
}

const Iconify: React.FC<IconifyProps> = ({
  icon,
  width,
  height,
  sx,
  ...other
}: IconifyProps) => {
  const iconStyle: React.CSSProperties = {
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
    display: "inline-block",
    ...sx,
  };

  return (
    <Box component="span" sx={iconStyle} {...other}>
      <Icon icon={icon} />
    </Box>
  );
};

export default Iconify;
