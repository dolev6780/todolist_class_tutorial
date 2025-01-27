import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sign({ setEmail, setPassword, handleSignup}) {
  const navigate = useNavigate();


  return (
    <div>
      <h1 className="text-5xl  font-bold py-4">Create An Account</h1>
      <div className="flex justify-center mt-20">
        <div className="grid justify-center gap-10">
          <div className="grid gap-4">
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
              className="bg-white rounded-md py-1 w-32 ml-auto "
              onClick={handleSignup}
            >
              Continue
            </button>
          </div>
          <button className="bg-white rounded-md py-1">Sign with Google</button>
          <p className="absolute bottom-0">
            Already Signed?
            <span
              onClick={() => {
                navigate("/signin");
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
