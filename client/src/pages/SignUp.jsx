import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { addDoc, collection, doc, deleteDoc } from "firebase/firestore";
import {useNavigate} from 'react-router-dom';
export default function SignUp({ setGoTo, setOpenSnackbar, setMsg }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState();

  const navigate = useNavigate();


  const handleSignUp = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        name: name,
      });
      if(docRef){
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          setMsg("Sign up successfully", name)
          setOpenSnackbar(true);
          setTimeout(() => {
            navigate('/');
          }, 5000);
        })
        .catch( async (error) => {
          await deleteDoc(doc(db, "users", docRef.id));
          setMsg("something went wrong try again")
          setOpenSnackbar(true);
        });
      }
    } catch (error) {
      setMsg("user not created");
      setOpenSnackbar(true);
    }
  };

  return (
    <div className="w-full bg-neutral-800 rounded-2xl">
      <div className="mt-10">
        <h1 className="text-2xl text-white font-bold py-4">Sign Up</h1>
        <div className="grid gap-4 justify-center mt-4 text-white">
          <input
            type="text"
            placeholder="Name"
            className="bg-inherit border rounded-md py-1 px-2"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email Address"
            className="bg-inherit border rounded-md py-1 px-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password"
            className="bg-inherit border rounded-md py-1 px-2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="bg-blue-600 rounded-md py-1 w-32 ml-auto text-white"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <p className="text-white py-4">
            Already Signed?
            <span
              onClick={() => {
                setGoTo("signin");
              }}
              className="hover:underline cursor-pointer ml-1"
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    
    </div>
  );
}
