import React, { useState } from "react";
import axios from "axios";

const AxiosAPI = () => {
  const [todo, setTodo] = useState([]);

  const getTodo = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    console.log(response.data);
    setTodo(response.data);
  };

  return (
    <div>
      <button onClick={getTodo}>Get Todo</button>
      <div>
        <h1>Todo Tasks Title</h1>
        {todo.map((elem, idx) => {
          return (
            <h2 key={idx}>
              <span>{idx + 1}.</span> {elem.title}
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default AxiosAPI;
