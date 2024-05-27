import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useBlog } from '../context/BlogContext';

const BlogPostForm = () => {
  const { blogs, setBlogs } = useBlog();
  const { user } = useUser();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: blogs.length + 1, title, author: user.name, text };
    setBlogs([...blogs, newPost]);
    setTitle('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a new blog post</h3>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Text" value={text} onChange={(e) => setText(e.target.value)} required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogPostForm;