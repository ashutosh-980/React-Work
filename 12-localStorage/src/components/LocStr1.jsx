import React from "react";

const LocStr1 = () => {
  // Basic Introduction of Local storage

  // (A) To store data
  localStorage.setItem("name", "Alice");

  // (B) To get data
  let data = localStorage.getItem("name");

  // (C) To remove data
  localStorage.removeItem("name");

  // (D) To clear all data from localStorage
  localStorage.clear();

  return <div>{data}</div>;
};

export default LocStr1;
