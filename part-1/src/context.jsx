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
  const initialBlogs = [
    { id: 1, title: 'Första inlägget', author: 'Jane Doe', text: 'Detta är mitt första inlägg.' },
    { id: 2, title: 'Andra inlägget', author: 'Jane Doe', text: 'Detta är mitt andra inlägg.' },
    { id: 3, title: 'Tredje inlägget', author: 'Alice Smith', text: 'Detta är mitt tredje inlägg.' }
  ];

  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = loadFromLocalStorage('blogs', initialBlogs);
    console.log('Loaded blogs:', savedBlogs);
    return savedBlogs;
  });

  useEffect(() => {
    saveToLocalStorage('blogs', blogs);
  }, [blogs]);

  const addBlog = (title, text) => {
    const newBlog = {
      id: blogs.length ? blogs[blogs.length - 1].id + 1 : 1,
      title,
      author: 'Blogger', // Hardcoded for simplicity, assuming logged-in user
      text
    };
    setBlogs([...blogs, newBlog]);
  };

  const updateBlog = (id, updatedBlog) => {
    setBlogs(blogs.map(blog => (blog.id === id ? { ...blog, ...updatedBlog } : blog)));
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};