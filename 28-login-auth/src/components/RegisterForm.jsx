import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //   Create a Function to Clear All the Input Fields
  const clearInputFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  //   Create a 'handleRegister' function for Form
  const handleRegister = async (e) => {
    e.preventDefault();

    // To Confirm Password Must have 6 Digit Length
    if (password.length < 6) {
      alert("Password must have 6 digit length.");
      console.log("Password must have 6 digit length.");
      return;
    }

    // Confirm Password Functionality (Firebase Does Not Provide Confirm Password Fuctionality)
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      console.log("Password must match.");
      return;
    }

    // Add Firebase Authentication to add users in Firebase Console
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      //   EXTRA:- To See User's Name on the Console , but it does not show on "Firebase Authentication Console (i.e, on "Users")"
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      const user = userCredential.user;

      //   To Console the User's Info
      console.log(user);
      console.log("User Registered Successfully!!!");
      console.log("User Name :- ", userCredential.user.displayName);
      console.log("UID:- ", user.uid);
      console.log("Email:- ", user.email);

      //   To Create the Collection of Registered Users in Firestore
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          name: name,
          email: user.email,
        });
      }

      //   To Clear the Input's Fields
      clearInputFields();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-90 border-2 border-indigo-600 flex-col px-5 py-2 rounded-xl">
      <h2 className="text-4xl text-blue-700 italic font-bold mb-4 cursor-pointer">
        Registration Form
      </h2>
      <form onSubmit={handleRegister}>
        <div className="flex flex-col mb-2 italic">
          <label htmlFor="name" className="text-xl font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            required
            className="border px-1 py-1 rounded-md text-sm focus:border-indigo-400 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div className="flex flex-col mt-4 mb-2 italic">
          <label
            htmlFor="confirm-password"
            className="text-xl font-semibold mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            id="confirm-password"
            required
            className="border px-1 py-1 rounded-md text-sm focus:border-indigo-400 focus:outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center mt-4 italic">
          <button
            type="submit"
            className="border px-5 py-2 font-medium text-md rounded-xl bg-blue-600 text-white cursor-pointer transition-transform hover:scale-110 hover:bg-blue-800 duration-300 ease-in"
          >
            Register
          </button>
        </div>
        <div className="mt-4 mb-2">
          <h4 className="text-sm italic font-medium">
            Already have an account ?{" "}
            <Link to="/" className="text-blue-600">
              Login
            </Link>
          </h4>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
