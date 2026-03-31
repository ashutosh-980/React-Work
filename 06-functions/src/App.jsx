import React from "react";

const App = () => {
  const handleText = (val) => {
    console.log(val);
  };

  const handleButton = () => {
    console.log("Button is Clicked");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        onChange={function (elem) {
          handleText(elem.target.value);
        }}
        type="text"
        placeholder="Write here..."
        className="m-5 border-2 w-80 p-4 rounded-xl text-xl font-bold"
      />
      <br />

      <button
        onClick={handleButton}
        className="border-2 p-4 rounded-full text-md font-bold bg-blue-700 text-white"
      >
        Click ME
      </button>
    </div>
  );
};

export default App;
