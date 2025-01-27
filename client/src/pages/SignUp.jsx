import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { addDoc, collection, doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Sign from "./signupDisplays/Sign";
import CreateProfile from "./signupDisplays/CreateProfile";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignDisplay, setShowSignDisplay] = useState("sign");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [role, setRole] = useState("");

  const switchSignDisplay = () => {
    switch (showSignDisplay) {
      case "sign":
        return (
          <Sign
            setEmail={setEmail}
            setPassword={setPassword}
            handleSignUp={handleSignUp}
          />
        );

      case "createProfile":
        return (
          <CreateProfile
            setFName={setFName}
            setLName={setLName}
            setRole={setRole}
            createProfile={createProfile}
          />
        );

      default:
        break;
    }
  };

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      if (!email || !password) {
        alert("invalid emaill or password");
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          console.log("in");
          setShowSignDisplay("createProfile");
          // setMsg("Sign up successfully", name)
          // setOpenSnackbar(true);
        })
        .catch(async (error) => {
          // setMsg("something went wrong try again")
          // setOpenSnackbar(true);
        });
    } catch (error) {
      // setMsg("user not created");
      // setOpenSnackbar(true);
    }
  };

  const createProfile = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        firstname: fName,
        lastname: lName,
        role: role ? role : "",
        createAt: new Date()
      });
    } catch (error) {}
  };

  return (
    <div className="w-full bg-blue-600 h-screen p-10">
      <div className="flex shadow shadow-black">
        {/* right */}
        <div className="w-1/2 border border-black order-last">
          <h1>Welcome Page</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            deserunt velit, veritatis facilis temporibus consectetur itaque
            minima labore maiores est eius, molestiae necessitatibus ex dolorem
            distinctio molestias amet voluptate atque!
          </p>
        </div>
        {/* left */}
        <div className="w-1/2 border border-black h-[90vh] relative ">
          {switchSignDisplay()}
        </div>
      </div>
    </div>
  );
}
