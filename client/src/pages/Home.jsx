import React, { useEffect, useState } from "react";
import CreateTaskModal from "../components/CreateTaskModal";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import Todo from "../components/Todo";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Bottombar from "../components/Bottombar";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskCreated, setTaskCreated] = useState(false);
  const [name, setName] = useState("");
  const [docId, setDocId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const getUser = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            const userRef = query(
              collection(db, "users"),
              where("email", "==", user.email)
            );
            const querySnapshot = await getDocs(userRef);
            querySnapshot.forEach((doc) => {
              setName(doc.data().name);
              setDocId(doc.id);
            });
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        } else {
          setName("");
          setDocId("");
        }
      });
    };

    getUser();
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      if (!docId) return;
      try {
        const tasksRef = collection(db, "users", docId, "tasks");
        const querySnapshot = await getDocs(tasksRef);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [docId, taskCreated]);

  return (
    <div className="w-full">
      <div className="grid grid-flow-col w-full mt-10 px-10">
        <div className="col-span-1 grid gap-4 ">
          <h1>To do</h1>
          {tasks.map((task) => (
            <Todo
              key={task.id}
              task={task}
              setTaskCreated={setTaskCreated}
              taskCreated={taskCreated}
              docId={docId}
            />
          ))}
        </div>
        {/* <div className="col-span-1 grid gap-4 ">
          <h1>Complete</h1>
        </div> */}
      </div>
      <div className={`${isOpen ? "" : "hidden"}`}>
        <CreateTaskModal
          handleModal={handleModal}
          setTaskCreated={setTaskCreated}
          taskCreated={taskCreated}
          docId={docId}
        />
      </div>
      <Bottombar handleModal={handleModal} userName={name} />
    </div>
  );
}
