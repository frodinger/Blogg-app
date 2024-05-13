import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [blogPosts, setBlogPosts] = useState([
    { id: 1, title: 'Exempel inlägg 1', text: 'Det här är ett exempel på ett blogginlägg.', author: 'Jane Doe' },
    { id: 2, title: 'Exempel inlägg 2', text: 'Det här är ett annat exempel på ett blogginlägg.', author: 'John Smith' },
  ]);

  const addPost = (newPost) => {
    setBlogPosts([...blogPosts, { ...newPost, id: Math.random() }]);
  };

  const editPost = (updatedPost) => {
    setBlogPosts(blogPosts.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addPost, editPost }}>
      {props.children}
    </BlogContext.Provider>
  );
}

export default BlogContextProvider;
