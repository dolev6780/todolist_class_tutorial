import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckIcon from '@mui/icons-material/Check';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import EditTaskModal from "./EditTaskModal";

export default function Todo({ task, setTaskCreated, taskCreated, docId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const deleteTask = async () => {
    await deleteDoc(doc(db, "users", docId, "tasks", `${task.id}`));
    setTaskCreated(!taskCreated);
    setIsOpen(false);
  };

  const handleCheck = async (e) => {
    e.stopPropagation(); 
    const docReF = doc(db, "tasks", `${task.id}`);
    await updateDoc(docReF, {
      completed: true,
    });
    setIsCompleted(true); 
  };

  const toggleDeleteModal = (e) => {
    e.stopPropagation(); 
    setIsOpen(!isOpen);
  };

  const toggleEditModal = () => {
    setOpenEditModal(!openEditModal);
  };

  return (
    <div>
      <div
        key={task.id}
        className={`text-start p-1 rounded-md shadow-md max-w-64 flex justify-between ${
          isCompleted ? "bg-green-300" : "bg-white"
        } cursor-pointer `}
        onClick={toggleEditModal}
      >
        <div>
          <h1 className="text-lg font-medium">{task.data.title}</h1>
          <p className="text-sm">{task.data.discription}</p>
          <button
            className="text-sm hover:bg-neutral-300 rounded-full p-1"
            onClick={handleCheck}
          >
            <CheckIcon />
          </button>
        </div>
        <div
          className="px-4 grid gap-y-2"
          onClick={(e) => e.stopPropagation()} // Prevent propagation for this section
        >
          <button
            className="text-sm hover:bg-neutral-300 rounded-full p-1"
            onClick={toggleDeleteModal}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
          <div className="max-w-xs bg-white rounded shadow-md p-10">
            <h1 className="text-center">
              Are you sure you want to delete this task?
            </h1>
            <div className="flex justify-center gap-x-10">
              <button
                className="bg-gradient-to-r from-blue-700 to-blue-500 mt-4 py-2 px-4 rounded-full hover:px-6 transition-all"
                onClick={deleteTask}
              >
                Yes
              </button>
              <button
                className="bg-gradient-to-r from-blue-700 to-blue-500 mt-4 py-2 px-4 rounded-full hover:px-6 transition-all"
                onClick={toggleDeleteModal}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Task Modal */}
      {openEditModal && (
        <EditTaskModal
          handleModal={toggleEditModal}
          task={task}
          docId={docId}
          setTaskCreated={setTaskCreated}
          taskCreated={taskCreated}
        />
      )}
    </div>
  );
}
