import React from "react";

const FetchAPI = () => {
  // API Calls using Fetch
  const todo = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    const data = await response.json();

    console.log(data);
  };

  return (
    <div>
      <button onClick={todo}>Get Data</button>
    </div>
  );
};

export default FetchAPI;
