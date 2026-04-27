import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-cyan-600 px-3 py-2 gap-10 font-bold text-xs">
      <button
        onClick={() => navigate("/")}
        className="bg-amber-600 py-1 px-2 rounded-md cursor-pointer"
      >
        Return To Home
      </button>
      <button
        onClick={() => navigate(-1)}
        className="bg-amber-600 py-1 px-2 rounded-md cursor-pointer"
      >
        Back
      </button>
      <button
        onClick={() => navigate(+1)}
        className="bg-amber-600 py-1 px-2 rounded-md cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
