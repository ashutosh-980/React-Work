import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="container">
      <Card name="Aman Mishra" age={22} img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      <Card name="Ankit Jha" age={29} img="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      
      <Card name="Vikas Thakur" age={29} img="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      
    </div>
    

  );
};

export default App;
