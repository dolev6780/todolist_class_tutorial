import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SnackBar from "../components/SnackBar";

export default function Auth() {
  const [msg, setMsg] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  return (
    <div className="w-full h-screen p-10 bg-blue-600">
      <div className="h-full grid grid-flow-col shadow-lg shadow-black border">
        <div className="border w-full">
          <h1 className="text-2xl text-white">Welcome Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            eligendi, voluptates rerum, totam quibusdam nisi exercitationem
            voluptatum dicta tempora, rem autem deserunt aut quos nesciunt ipsam
            magni est quod alias.
          </p>
        </div>
        <div className="border w-full">
          <h1>asd</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            nobis praesentium ipsam, magni et ea hic temporibus eum perferendis
            veritatis iusto odio. Quae, dolore optio! Tempora similique dolores
            alias accusamus.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0">
        {openSnackbar ? (
          <SnackBar
            msg={msg}
            setMsg={setMsg}
            openSnackbar={openSnackbar}
            setOpenSnackbar={setOpenSnackbar}
          />
        ) : null}
      </div>
    </div>
  );
}
