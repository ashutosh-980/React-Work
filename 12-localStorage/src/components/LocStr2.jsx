import React from "react";

const LocStr2 = () => {
  const userData = {
    name: "Aman Mishra",
    age: 18,
    dob: "06/12/2008",
    city: "New Delhi",
    qualification: "Bachelor in Technology",
    branch: "Computer Science Engineering",
    specialization: "Internet of Things"
  };

  // To store data in localStorage
  localStorage.setItem("data", JSON.stringify(userData));

  // To get data from localStorage
  const user = JSON.parse(localStorage.getItem("data"));
  console.log(user);

  // We don't want to remove or clear data from localStorage using .removeItem() and .clear()

  return (
    <div>
      <h2>Users Datails</h2>
      <h4>Name :- {user.name}</h4>
      <h4>Age :- {user.age}</h4>
      <h4>Date of Birth :- {user.dob}</h4>
      <h4>City :- {user.city}</h4>
      <h4>Qualification :- {user.qualification}</h4>
      <h4>Branch :- {user.branch}</h4>
      <h4>Specializtion :- {user.specialization}</h4>
    </div>
  );
};

export default LocStr2;
