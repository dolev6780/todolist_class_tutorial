import React, { useEffect, useState } from "react";
import CreateTaskModal from "../components/CreateTaskModal";
import Bottombar from "../components/Bottombar";
import NavBar from "../components/NavBar";

export default function Home({ setDarkMode, darkMode }) {
  const [tasks, setTasks] = useState([]);
  const [taskCreated, setTaskCreated] = useState(false);
  const [name, setName] = useState("");
  const [docId, setDocId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [extraNavBarIsOpenTop, setExtraNavBarIsOpenTop] = useState(false);
  const [extraNavBarIsOpenBottom, setExtraNavBarIsOpenBottom] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="w-full dark:bg-neutral-800 h-screen dark:text-white transition-all">
      <NavBar
        userName={name}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        setExtraNavBarIsOpen={setExtraNavBarIsOpenTop}
        setIsSidebarOpen={setIsSidebarOpen}
        extraNavBarIsOpen={extraNavBarIsOpenTop}
        isSidebarOpen={isSidebarOpen}
      />
      <div className={`relative w-[100%-16rem] h-full ${isSidebarOpen ? "md:ml-64" : "0rem"} ${extraNavBarIsOpenTop ? "pt-32" : "pt-16"} transition-all ${extraNavBarIsOpenBottom ? "pb-32" : ""}`}>
        <div className="grid grid-cols-4 gap-2 h-full">
          <div className="bg-green-300 col-span-4 md:col-span-3 p-4 text-left">Main Content</div>
          <div className="bg-blue-300 col-span-1 p-4 hidden md:block">Sidebar Content</div>
        </div>
        {isOpen && (
          <CreateTaskModal
            handleModal={handleModal}
            setTaskCreated={setTaskCreated}
            taskCreated={taskCreated}
            docId={docId}
          />
        )}
      </div>
      <Bottombar handleModal={handleModal} userName={name} darkMode={darkMode} extraNavBarIsOpen={extraNavBarIsOpenBottom} setExtraNavBarIsOpen={setExtraNavBarIsOpenBottom}/>
    </div>
  );
}
