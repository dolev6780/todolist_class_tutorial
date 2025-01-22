import React, { useState } from "react";
import AddTaskButton from "./AddTaskButton";
import { useNavigate, Link } from "react-router-dom";
import CircleAvatar from "./CircleAvatar";
import ToolTip from "./ToolTip";
export default function Bottombar({ handleModal, userName }) {
  const [toolTip, setToolTip] = useState(false);

  const handleToolTip = () => {
    setToolTip(!toolTip);
  }

  return (
    <div className="flex justify-center w-full">
      <div className="fixed bottom-0 p-2 bg-blue-600 w-full sm:max-w-96 rounded-t-full m-auto flex justify-between items-center">
        <div></div>
        <div className="relative left-6">
          <AddTaskButton handleModal={handleModal} />
        </div>
        {userName !== "" ? (
          <div className="relative right-4 text-white px-2 font-medium">
            <ToolTip toolTip={toolTip} text={userName}/>
            <div onMouseEnter={handleToolTip} onMouseLeave={handleToolTip}>
            <CircleAvatar unFirstLetter={userName?.substring(0,1).toUpperCase()}/>
            </div>
          </div>
        ) : (
          <Link to={"/authentication"}>
            <button className="relative right-4 text-white px-2 font-medium">
              sign in
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
