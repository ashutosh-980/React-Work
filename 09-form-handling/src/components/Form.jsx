import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="border-3 p-4 w-[400px] h-[400px] m-auto mt-20 rounded-3xl bg-gray-200">
      <h2 className="text-center mb-4 font-bold text-3xl">Registration Form</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5"
      >
        <input
          type="text"
          placeholder="Enter your name"
          className="w-80 font-bold border-3 p-2 rounded-2xl"
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
