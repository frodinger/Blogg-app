import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();
const BlogContext = createContext();

export const useUser = () => useContext(UserContext);
export const useBlog = () => useContext(BlogContext);

const loadFromLocalStorage = (key, defaultValue) => {
    const data = localStorage.getItem(key);
    try {
      if (data) {
        const parsedData = JSON.parse(data);
        if (Array.isArray(parsedData)) {
          // Kontrollera om kategorin saknas i fördefinierade blogginlägg
          const fixedData = parsedData.map(blog => ({ ...blog, category: blog.category || 'Okategoriserad' }));
          return fixedData;
        } else {
          console.error(`Data in localStorage for key '${key}' is not an array`);
        }
      }
    } catch (error) {
      console.error(`Error parsing data from localStorage for key '${key}':`, error);
    }
    return defaultValue;
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
    { id: 1, title: 'Trender inom Frontend-utveckling 2024', author: 'Jane Doe', text: 'Frontend-utveckling fortsätter att utvecklas snabbt, och 2024 ser ut att bli ett spännande år med flera nya trender. Här är några av de mest framstående: ...', category: 'Kategori 1' },
    { id: 2, title: 'Användarcentrerad Design för Bättre Upplevelser', author: 'Jane Doe', text: 'Att skapa en fantastisk användarupplevelse (UX) handlar om att sätta användaren i centrum för designprocessen. Här är några nyckelprinciper för användarcentrerad design: ...', category: 'Kategori 2' },
    { id: 3, title: 'Fördelar med React i Moderna Webbapplikationer', author: 'Alice Smith', text: 'React är ett av de mest populära JavaScript-biblioteken för att bygga användargränssnitt, och det är inte svårt att förstå varför. Här är några av de främsta fördelarna med att använda React: ...', category: 'Kategori 3' }
  ];

  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = loadFromLocalStorage('blogs', initialBlogs);
    console.log('Loaded blogs:', savedBlogs);
    return savedBlogs;
  });

  useEffect(() => {
    saveToLocalStorage('blogs', blogs);
  }, [blogs]);

  const addBlog = (title, text, category) => {
    const newBlog = {
      id: blogs.length ? blogs[blogs.length - 1].id + 1 : 1,
      title,
      author: 'Blogger', // Hardcoded for simplicity, assuming logged-in user
      text,
      category
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