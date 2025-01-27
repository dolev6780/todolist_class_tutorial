import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useEffect, useState } from "react";
import Intro from "./pages/Intro";
import ProtectedRoute from "./hooks/ProtectedRoute";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="App transition-all">
      
      <Router>
          <Routes>
            <Route path='/' element={<ProtectedRoute element={<Home setDarkMode={setDarkMode} darkMode={darkMode}/>}/>}/>
            <Route path='/intro' element={<Intro/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin' element={<SignIn/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
