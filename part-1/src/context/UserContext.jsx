import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Antag att användaren inte är inloggad som standard

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
