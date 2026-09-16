import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("LoggedIn Successfully!!!");
      console.log("LoggedIn Successfully!!!");
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-90 border-2 border-indigo-600 flex-col px-5 py-2 rounded-xl">
      <h2 className="text-4xl text-blue-700 italic font-bold mb-4 cursor-pointer">
        Login Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-2 italic">
          <label htmlFor="user-email" className="text-xl font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="user-email"
            required
            className="border px-1 py-1 rounded-md text-sm focus:border-indigo-400 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-4 mb-2 italic">
          <label htmlFor="password" className="text-xl font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            required
            className="border px-1 py-1 rounded-md text-sm focus:border-indigo-400 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center mt-4 italic">
          <button
            type="submit"
            className="border px-5 py-2 font-medium text-md rounded-xl bg-blue-600 text-white cursor-pointer transition-transform hover:scale-110 hover:bg-blue-800 duration-300 ease-in"
          >
            Login
          </button>
        </div>
        <div className="mt-4 mb-2">
          <h4 className="text-sm italic font-medium">
            Don't have an account ?{" "}
            <Link to="/register" className="text-blue-600">
              Register
            </Link>
          </h4>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
