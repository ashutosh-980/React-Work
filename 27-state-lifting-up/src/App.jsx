import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  // For State Lifting Up :- Parent Component should do these things 
  // (1) Create State
  // (2) Manage State 
  // (3) Change State
  // (4) Sabhi Child mein State ko sync krwadunga
  const [name, setName] = useState("");
  return (
    <div id="container">
      <Card title="Card-1" name={name} setName={setName} />
      <Card title="Card-2" name={name} setName={setName} />
      <p style={{color: "white"}}>Inside the Parent Component :- {name} </p>
    </div>
  );
};

export default App;
