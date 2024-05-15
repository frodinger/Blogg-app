import React, { useState } from 'react';
import { useBlog } from '../context';

const AddPost = () => {
  const { addBlog } = useBlog();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Kategori 1'); // Default category

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && text) {
      addBlog(title, text, category);
      setTitle('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Lägg till inlägg</h2>
      <input 
        type="text" 
        placeholder="Titel" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Kategori 1">Kategori 1</option>
        <option value="Kategori 2">Kategori 2</option>
        <option value="Kategori 3">Kategori 3</option>
      </select>
      <textarea 
        placeholder="Text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button type="submit">Skapa inlägg</button>
    </form>
  );
};

export default AddPost;