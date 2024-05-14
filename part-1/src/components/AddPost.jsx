import React, { useState } from 'react';
import { useBlog, useUser } from '../context';

const AddPost = () => {
  const { blogs, setBlogs } = useBlog();
  const { user } = useUser();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && text.trim()) {
      const newPost = {
        id: blogs.length + 1,
        title,
        author: user.name,
        text,
      };
      setBlogs([...blogs, newPost]);
      setTitle('');
      setText('');
    }
  };

  if (!user) {
    return <p>Logga in för att skapa inlägg</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;