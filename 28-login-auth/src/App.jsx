import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";

const App = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <Routes>
        <Route path="/" element={user ? navigate("/Home") : <LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
