import React from "react";
import ChildA from "./components/ChildA";
import { createContext } from "react";
import { useState } from "react";

//Step-1:- Create Context
const UserContext = createContext();
// Step-2:- Wrap all Child inside a Provider [Who wants to be a Consumer (To Consume Data)]
// Step-3:- Pass the Value to the Provider
// Step-4:- Consumer ke andar jaake Consume krlo (i.e, Value ko consume kro)

const App = () => {
  // Step:- Create the Value
  const [user, setUser] = useState({ name: "Alice Johnson", age: 24 });
  return (
    <>
      {/* Step-2:- Wrap all Child inside a Provider [Who wants to be a Consumer (To Consume Data)]      */}
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
};

export default App;

export { UserContext };
