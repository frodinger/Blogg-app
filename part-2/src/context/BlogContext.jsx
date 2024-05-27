import React, { createContext, useState, useEffect, useContext } from 'react';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

const loadFromLocalStorage = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  if (data) {
    const parsedData = JSON.parse(data);
    if (Array.isArray(parsedData)) {
      return parsedData.map(blog => ({
        ...blog,
        category: blog.category || 'Okategoriserad',
        comments: blog.comments || []
      }));
    }
    console.error(`Data in localStorage for key '${key}' is not an array`);
    return defaultValue;
  }
  return defaultValue;
};

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const BlogProvider = ({ children }) => {
  const initialBlogs = [
    {
      id: 1,
      title: 'Skapa din drömträdgård med enkla tips och tricks',
      author: 'Isabella Andersson',
      text: 'Att ha en vacker och välskött trädgård behöver inte vara komplicerat eller dyrt...',
      category: 'Trädgård',
      comments: []
    },
    {
      id: 2,
      title: 'Renovera ditt hem med stil: Tips för att lyckas med ditt projekt',
      author: 'Liam Lundgren',
      text: 'Att renovera sitt hem kan vara både spännande och utmanande...',
      category: 'Renovering',
      comments: []
    },
    {
      id: 3,
      title: 'Skapa en harmonisk inredning med färg och mönster',
      author: 'Sofia Petrovici',
      text: 'Att inreda sitt hem handlar inte bara om att välja möbler och accessoarer...',
      category: 'Inredning',
      comments: []
    }
  ];

  const [blogs, setBlogs] = useState(() => loadFromLocalStorage('blogs', initialBlogs));

  useEffect(() => {
    saveToLocalStorage('blogs', blogs);
  }, [blogs]);

  const addBlog = (title, text, category, user) => {
    const newBlog = {
      id: blogs.length ? blogs[blogs.length - 1].id + 1 : 1,
      title,
      author: user.email,
      text,
      category,
      comments: []
    };
    setBlogs([...blogs, newBlog]);
  };

  const updateBlog = (id, updatedBlog) => {
    setBlogs(blogs.map(blog => (blog.id === id ? { ...blog, ...updatedBlog } : blog)));
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const addComment = (blogId, comment) => {
    setBlogs(blogs.map(blog => {
      if (blog.id === blogId) {
        return { ...blog, comments: [...blog.comments, comment] };
      }
      return blog;
    }));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog, addComment }}>
      {children}
    </BlogContext.Provider>
  );
};
