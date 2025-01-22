import React, { useState } from "react";
import { LinearGradient } from "react-text-gradients";
import CloseIcon from "@mui/icons-material/Close";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
export default function CreateTaskModal({
  handleModal,
  setTaskCreated,
  taskCreated,
  docId
}) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDiscription, setTaskDiscription] = useState("");
  const createTask = async () => {
    try {
      const docRef = await addDoc(collection(db, "users", docId, "tasks"), {
        title: taskTitle,
        discription: taskDiscription,
        completed: false
      });
      setTaskCreated(!taskCreated);
      handleModal();
    } catch (error) {
      console.error("task not created", error);
    }
  };
  return (
    <div className="bg-black bg-opacity-80 absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xs  bg-white text-white rounded shadow-md py-10">
        <button
          className="text-black absolute top-2 right-4 hover:rotate-180 transition-all duration-700"
          onClick={handleModal}
        >
          <CloseIcon />
        </button>
        <h2 className="text-black text-2xl font-bold">
          {" "}
          <LinearGradient gradient={["to left", "#1d4ed8 ,#3b82f6"]}>
            Create Task
          </LinearGradient>
        </h2>
        <div className="mt-10 flex flex-col px-10 gap-2">
          <input
            className="bg-inherit border border-blue-700 py-2 rounded-xl px-2 placeholder:text-gray-500 focus:outline-none focus:bg-gradient-to-r focus:from-blue-700 focus:to-blue-500 focus:text-white focus:placeholder:text-white transition-all text-black"
            type="text"
            placeholder="Task title"
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
          />
          <input
            className="bg-inherit border border-blue-700 py-2 rounded-xl px-2 placeholder:text-gray-500 focus:outline-none focus:bg-gradient-to-r focus:from-blue-700 focus:to-blue-500 focus:text-white focus:placeholder:text-white transition-all text-black"
            type="text"
            placeholder="Task description"
            onChange={(e) => {
              setTaskDiscription(e.target.value);
            }}
          />
        </div>
        <button
          className="bg-gradient-to-r from-blue-700 to-blue-500 mt-4 py-2 px-4 rounded-full hover:px-6 transition-all"
          onClick={createTask}
        >
          Create task
        </button>
      </div>
    </div>
  );
}
