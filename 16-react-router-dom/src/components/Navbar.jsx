import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 text-2xl bg-blue-500 fixed w-full">
      <h2>Navbar</h2>
      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Products</Link>
      </div>
    </div>
  );
};

export default Navbar;
