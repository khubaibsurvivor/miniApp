import React, { useState, createContext } from "react";
import context from "./context";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <context.Provider value={{ user, setUser }}>
      {children}
    </context.Provider>
  );
};

export default UserContextProvider;
