import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const loadFromLocalStorage = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => loadFromLocalStorage('user', null));

  const login = () => {
    const loggedInUser = { name: 'Lola Fritz' };
    setUser(loggedInUser);
    saveToLocalStorage('user', loggedInUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};