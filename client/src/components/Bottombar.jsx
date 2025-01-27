import React, { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchIcon from "@mui/icons-material/Search";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { motion } from "framer-motion";
import Search from "./Search";
import WorkSpaces from "./WorkSpaces";
import Help from "./Help";
import AddMembers from "./AddMembers";
import Notifications from "./Notifications";

export default function Bottombar({ handleModal, userName, darkMode, extraNavBarIsOpen, setExtraNavBarIsOpen }) {
  const [component, setCopmonent] = useState("");

  const showComponent = () => {
    switch (component) {
      case "search":
        return <Search />;
      case "workspaces":
        return <WorkSpaces />;

      default:
        break;
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white transition-all p-4 fixed flex gap-x-2 items-center justify-evenly w-full bottom-0 border-t dark:border-neutral-900 dark:shadow-inner md:hidden">
      <Tooltip
        title="Workspaces"
        arrow
        slots={{
          transition: Zoom,
        }}
      >
        <button
          className="px-2 hover:bg-neutral-200 rounded-full "
          onClick={() => {
            setCopmonent("workspaces");
            setExtraNavBarIsOpen(true);
          }}
        >
          <GridViewIcon />
        </button>
      </Tooltip>
      <Notifications darkMode={darkMode} margin={-6} />
      <Help darkMode={darkMode} />
      <AddMembers darkMode={darkMode} />
      <Tooltip
        title="Search"
        arrow
        slots={{
          transition: Zoom,
        }}
      >
        <button
          className="px-2 hover:bg-neutral-200 rounded-full"
          onClick={() => {
            setCopmonent("search");
            setExtraNavBarIsOpen(true);
          }}
        >
          <SearchIcon />
        </button>
      </Tooltip>
      <motion.div
        className=" p-2 px-4 bg-white text-neutral-800 dark:bg-neutral-800 dark:text-white absolute w-full flex justify-between "
        style={{}}
        animate={{
          y: extraNavBarIsOpen ? -47 : 100,
        }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <button
          onClick={() => {
            setExtraNavBarIsOpen(false);
          }}
        >
          X
        </button>
        {showComponent()}
      </motion.div>
    </div>
  );
}
