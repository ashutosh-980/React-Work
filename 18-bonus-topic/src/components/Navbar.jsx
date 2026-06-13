import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <p>{props.theme}</p>
      <button
        onClick={() =>
          props.setTheme(props.theme === "light" ? "dark" : "light")
        }
      >
        Click
      </button>
    </div>
  );
};

export default Navbar;
