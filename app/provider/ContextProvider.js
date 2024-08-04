"use client";
const { createContext } = require("react");
export const Context = createContext();

import React from "react";

const ContextProvider = ({ children }) => {
  const employee = {
    name: "Mehedi",
  };
  return (
    <div>
      <Context.Provider value={employee}>{children} </Context.Provider>
    </div>
  );
};

export default ContextProvider;
