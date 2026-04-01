import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({ name: "Alice", age: 21 });

  const changeUser = () => {

    // Destructuring user to use their value into newUser
    const newUser = {...user};

    // Change user's name
    newUser.name = 'Aman';

    // Change user's age
    newUser.age = 22;

    // Set new value 
    setUser(newUser);
  }

  return (
    <div>
      <h1>{user.name} is {user.age} years old.</h1>
      <button onClick={changeUser} className="w-26 h-8 border-2 border-none p-4 font-bold rounded-md bg-gray-700 cursor-pointer text-white text-3xl flex justify-center items-center">Click</button>
    </div>
  );
};

export default App;
