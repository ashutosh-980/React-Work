import React from "react";

const Card = (props) => {
  return (
    <div id="innerContainer">
      <input
        type="text"
        placeholder="Enter any text here..."
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      />
      <p>
        The value of Input Text inside {props.title} child component is :-{" "}
        {props.name}
      </p>
    </div>
  );
};

export default Card;
