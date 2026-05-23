import { Link } from "react-router-dom";
import { Button, MenuItem } from "@mui/material";

const buttonSx = {
  mx: 1,
  color: "white",
  display: "block",
};

export const DesktopMenuItem = ({ item, onClick }) => {
  return (
    <Link
      to={item.path || "#"}
      key={item.label}
      style={{ textDecoration: "none" }}
      onClick={(e) => {
        if (item.action === "logout") {
          e.preventDefault();
          onClick(item);
        }
      }}
    >
      <Button sx={buttonSx}>{item.label}</Button>
    </Link>
  );
};

export const MobileMenuItem = ({ item, onClick, onClose }) => {
  const handleClick = () => {
    onClick(item);
    if (item.action !== "logout") {
      onClose();
    }
  };

  return (
    <MenuItem key={item.label} onClick={handleClick}>
      {item.action === "logout" ? (
        <span style={{ cursor: "pointer" }}>{item.label}</span>
      ) : (
        <Link
          to={item.path}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {item.label}
        </Link>
      )}
    </MenuItem>
  );
};
