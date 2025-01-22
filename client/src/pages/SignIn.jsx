import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
export default function SignIn({ setGoTo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="w-full bg-neutral-800 rounded-2xl">
      <div className="mt-10">
        <h1 className="text-2xl text-white font-bold py-4">Sign In</h1>
        <div className="grid gap-4 justify-center mt-4 text-white">
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
          <button className="bg-blue-600 rounded-md py-1 w-32 ml-auto text-white"
          onClick={handleSignIn}
          >
            Sign In
          </button>
          <p className="text-white py-4">
            Not signed yet?
            <span
              onClick={() => {
                setGoTo("signup");
              }}
              className="hover:underline cursor-pointer ml-1"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
