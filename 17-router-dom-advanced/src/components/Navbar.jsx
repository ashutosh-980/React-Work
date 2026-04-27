import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-cyan-800 px-3 py-2  w-full">
      <h2 className="text-md font-bold">Navbar</h2>
      <div className="flex gap-8">
        <Link className="text-md font-bold" to="/">
          Home
        </Link>
        <Link className="text-md font-bold" to="/about">
          About
        </Link>
        <Link className="text-md font-bold" to="/courses">
          Courses
        </Link>
        <Link className="text-md font-bold" to="/product">
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
