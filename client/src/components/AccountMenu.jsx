import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Fade from "@mui/material/Fade";
import CircleAvatar from "./CircleAvatar";
export default function AccountMenu({ toolTipUserName, darkMode }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip
          title={toolTipUserName}
          slots={{
            transition: Fade,
          }}
        >
          <div className="" onClick={handleClick}>
            <CircleAvatar
              unFirstLetter={toolTipUserName?.substring(0, 1).toUpperCase()}
              size={"w-8"}
            />
          </div>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              backgroundColor: `${darkMode ? "#262626" : "white"}`,
              color: `${darkMode ? "white" : "#262626"}`,
              overflow: "visible",
              width: 200,
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "inherit",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="grid justify-center gap-y-1">
          <div className="flex justify-center">
            <CircleAvatar
              unFirstLetter={toolTipUserName?.substring(0, 1).toUpperCase()}
              size={"w-12 text-2xl"}
            />
          </div>
          <p className="text-xl font-bold">{toolTipUserName}</p>
        </div>

        <Divider
          sx={{
            backgroundColor: `${darkMode ? "white" : "#262626"}`,
            margin: 2,
          }}
        />
        <MenuItem>
          <ListItemIcon sx={{ color: `${darkMode ? "white" : "#262626"}` }}>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon sx={{ color: `${darkMode ? "white" : "#262626"}` }}>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
