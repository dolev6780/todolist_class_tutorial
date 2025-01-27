import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import HelpIcon from "@mui/icons-material/Help";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

export default function Help({darkMode}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350, backgroundColor: `${darkMode ? "#262626" : "white"}`, color: `${darkMode ? "white" : "#262626"}`, height:"100%" }} role="presentation" onClick={toggleDrawer(false)}>
    <h1 className="text-center text-2xl">Help</h1>
    </Box>
  );

  return (
    <div className="">
      <Tooltip
        title="Help"
        arrow
        slots={{
          transition: Zoom,
        }}
      >
        <button
          onClick={toggleDrawer(true)}
          className="px-2 hover:bg-neutral-200 rounded-full"
        >
          <HelpIcon />
        </button>
      </Tooltip>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right" onClick={(e)=>{e.stopPropagation()}}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
