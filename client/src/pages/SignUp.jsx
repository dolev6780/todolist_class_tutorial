import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { addDoc, collection, doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
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
      if (docRef) {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            // setMsg("Sign up successfully", name)
            // setOpenSnackbar(true);
            setTimeout(() => {
              navigate("/");
            }, 5000);
          })
          .catch(async (error) => {
            await deleteDoc(doc(db, "users", docRef.id));
            // setMsg("something went wrong try again")
            // setOpenSnackbar(true);
          });
      }
    } catch (error) {
      // setMsg("user not created");
      // setOpenSnackbar(true);
    }
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
        <div className="w-1/2 border border-black h-[90vh] ">
          <h1 className="text-5xl  font-bold py-4">Create An Account</h1>
          <div className="mt-4 border w-[70%] m-auto h-[80%] relative">
            <div className="grid justify-center gap-10">
              <h1 className="text-4xl mt-2">Sign Up</h1>
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
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              </div>
              <button className="bg-white rounded-md py-1">
                Sign with Google
              </button>
              <p className="py-4 absolute bottom-0 text-center w-full">
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
      </div>
    </div>
  );
}
