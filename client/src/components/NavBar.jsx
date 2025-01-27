import React, { useEffect, useRef, useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { motion } from "framer-motion";
import Search from "./Search";
import WorkSpaces from "./WorkSpaces";
import Help from "./Help";
import AccountMenu from "./AccountMenu";
import AddMembers from "./AddMembers";
import Notifications from "./Notifications";
import DarkModeSwitch from "./DarkModeSwitch";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function NavBar({ userName, setDarkMode, darkMode, setExtraNavBarIsOpen, setIsSidebarOpen, extraNavBarIsOpen, isSidebarOpen }) {
  const [component, setComponent] = useState("");

  const sidebarRef = useRef(null);

  const toolTipUserName = userName
    ? userName.substring(0, 1).toUpperCase() + userName.substring(1)
    : "undefined";

  const showComponent = () => {
    switch (component) {
      case "search":
        return <Search />;
      case "workspaces":
        return <WorkSpaces />;
      default:
        return null;
    }
  };

  const sidebarMenuItems = [
    { icon: <DashboardIcon />, label: "Dashboard", action: () => {} },
    { icon: <GridViewIcon />, label: "Workspaces", action: () => setComponent("workspaces") },
    { icon: <SettingsIcon />, label: "Settings", action: () => {} },
    { icon: <LogoutIcon />, label: "Logout", action: () => {} },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isSidebarOpen, setIsSidebarOpen]);

  return (
    <nav className="bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white transition-all fixed w-full z-10">
      <div
        className={`flex items-center justify-between p-2 px-4 border-b z-10 relative ${
          extraNavBarIsOpen ? "shadow-none" : "shadow"
        } ${
          darkMode
            ? "border-b-neutral-900 shadow-neutral-800"
            : "border-neutral-200"
        } transition-all`}
      >
        <div className="flex items-center gap-x-2 transition-all">
          <Tooltip
            title="Menu"
            arrow
            slots={{
              transition: Zoom,
            }}
          >
            <button
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
             <MenuIcon />
            </button>
          </Tooltip>
          <Tooltip
            title="Home"
            arrow
            slots={{
              transition: Zoom,
            }}
          >
            <h1 className="cursor-pointer">Sunday</h1>
          </Tooltip>
          <DarkModeSwitch setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
        <div className="flex gap-x-2">
          <div className="md:flex gap-x-2 items-center hidden">
            <Tooltip
              title="Workspaces"
              arrow
              slots={{
                transition: Zoom,
              }}
            >
              <button
                className={`px-2 hover:${
                  darkMode ? "bg-neutral-700" : "bg-neutral-200"
                } rounded-full`}
                onClick={() => {
                  setComponent("workspaces");
                  setExtraNavBarIsOpen(true);
                }}
              >
                <GridViewIcon />
              </button>
            </Tooltip>
            <Notifications darkMode={darkMode} margin={2.5} />
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
                className={`px-2 hover:${
                  darkMode ? "bg-neutral-700" : "bg-neutral-200"
                } rounded-full`}
                onClick={() => {
                  setComponent("search");
                  setExtraNavBarIsOpen(true);
                }}
              >
                <SearchIcon />
              </button>
            </Tooltip>
          </div>
          <AccountMenu toolTipUserName={toolTipUserName} darkMode={darkMode} />
        </div>
      </div>
      {extraNavBarIsOpen && (
        <motion.div
          className="border-b p-2 px-4 bg-white text-neutral-800 dark:bg-neutral-800 dark:text-white shadow-md w-full flex justify-between dark:border-none"
          animate={{
            y: 0,
            opacity: 1,
          }}
          initial={{
            y: -150,
            opacity: 0,
          }}
          exit={{
            y: -150,
            opacity: 0,
          }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <button
            onClick={() => {
              setExtraNavBarIsOpen(false);
            }}
            className={`hover:${
              darkMode ? "bg-neutral-700" : "bg-neutral-200"
            } rounded-full px-2`}
          >
            X
          </button>
          {showComponent()}
        </motion.div>
      )}
      <motion.div
        ref={sidebarRef}
        className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-neutral-800 shadow-lg z-20"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: isSidebarOpen ? 0 : -300, opacity: isSidebarOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="p-4 text-lg font-bold">Menu</div>
        <div className="flex flex-col gap-2 p-4">
          {sidebarMenuItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700"
              onClick={item.action}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        <button className="absolute right-4 bottom-4" onClick={()=>{setIsSidebarOpen(false)}}><ArrowBackIosIcon/></button>
      </motion.div>
    </nav>
  );
}
