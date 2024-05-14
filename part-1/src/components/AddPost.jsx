import React, { useState } from 'react';
import { useBlog } from '../context';

const AddPost = () => {
  const { addBlog } = useBlog();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && text) {
      addBlog(title, text);
      setTitle('');
      setText('');
    }
  };

  return (
    <div>
      <h2>Add New Post</h2>
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
        ></textarea>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;