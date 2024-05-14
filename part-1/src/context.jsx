import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();
const BlogContext = createContext();

export const useUser = () => useContext(UserContext);
export const useBlog = () => useContext(BlogContext);

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
    const loggedInUser = { name: 'Blogger' };
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

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(() => loadFromLocalStorage('blogs', [
    { id: 1, title: 'Sample Post', author: 'Jane Doe', text: 'This is a sample post.' }
  ]));

  useEffect(() => {
    saveToLocalStorage('blogs', blogs);
  }, [blogs]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};