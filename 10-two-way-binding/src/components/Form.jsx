import React, { useState } from "react";

const Form = () => {
  //Makes States to handle input field in form and to binds with it to 'Initial Value (i.e, text)'
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted by :-", text);
    setText("");
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="border-3 p-4 w-100 h-100 m-auto mt-20 rounded-3xl bg-gray-200">
      <h2 className="text-center mb-4 font-bold text-3xl">Registration Form</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5"
      >
        <input
          type="text"
          placeholder="Enter your name"
          className="w-80 font-bold border-3 p-2 rounded-2xl"
          value={text} //Binds the inital state(i.e, text) to this input field
          onChange={handleText} //Sets the value in input field
        />
        <button
          type="submit"
          className="w-40 border-2 font-bold bg-blue-600 rounded-2xl p-1 text-white border-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
