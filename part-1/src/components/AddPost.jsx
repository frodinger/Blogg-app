import React, { useState } from 'react';
import { useBlog, useUser } from '../context';

const AddPost = () => {
  const { addBlog } = useBlog();
  const { user } = useUser();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Trädgård');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      addBlog(title, text, category, user);
    }
    setTitle('');
    setText('');
    setCategory('Trädgård');
  };

  const categories = ['Trädgård', 'Renovering', 'Inredning'];

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Titel"
        required 
      />
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Text"
        required 
      />
      <button type="submit">Lägg till inlägg</button>
    </form>
  );
};

export default AddPost;