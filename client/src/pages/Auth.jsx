import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SnackBar from "../components/SnackBar";

export default function Auth() {
  const [goTo, setGoTo] = useState("signin");
  const [msg, setMsg] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  return (
    <div className="w-full h-full">
      <div className="sm:flex md:max-w-[600px] justify-center bg-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-xl w-[80%]">
        <div className="w-full grid items-center h-full text-white mt-10">
          <div className="text-2xl mt-4 font-bold">
            <h1>Hello,</h1>
            <h1>Welcome!</h1>
          </div>
          <div className="font-medium">
            <p>some text</p>
          </div>
        </div>
        {/* Sign */}
        <div className="w-full bg-neutral-800 rounded-2xl">
          {goTo.match("signin") ? (
            <div>
              <SignIn setGoTo={setGoTo} setOpenSnackbar={setOpenSnackbar} setMsg={setMsg}/>
            </div>
          ) : (
            <div>
              <SignUp setGoTo={setGoTo} setOpenSnackbar={setOpenSnackbar} setMsg={setMsg}/>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0">
      {openSnackbar ? <SnackBar msg={msg} setMsg={setMsg} openSnackbar={openSnackbar} setOpenSnackbar={setOpenSnackbar}/> : null}
      </div>
    </div>
  );
}
