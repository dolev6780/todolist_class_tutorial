import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bottombar from "./components/Bottombar";
import { useState } from "react";
import Auth from "./pages/Auth";
function App() {
  const [show, setShow] = useState(false);

  const [showPassword, setShowPassword] = useState("password");

  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/authentication' element={<Auth/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
