import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
export default function Notifications({ darkMode, margin }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip
        title="Notifications"
        arrow
        slots={{
          transition: Zoom,
        }}
      >
        <button
          className="px-2 hover:bg-neutral-200 rounded-full"
          onClick={handleClick}
        >
          <NotificationsIcon />
        </button>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ marginTop: margin, backgroundColor: "inherit" }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: `${darkMode ? "#262626" : "white"}`,
              color: `${darkMode ? "white" : "#262626"}`,
            },
          },
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
