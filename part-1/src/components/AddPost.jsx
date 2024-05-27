// src/components/AddPost.js
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useBlog } from '../context/BlogContext';
import { categories } from './Categories';

const AddPost = () => {
  const { addBlog } = useBlog();
  const { user } = useUser();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]); // Default category set to the first element of the array

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      addBlog(title, text, category, user);
    }
    setTitle('');
    setText('');
    setCategory(categories[0]); // Reset category to the default value after submission
  };

  return (
    <div>
      <h2 className="text-3xl font-serif font-medium mb-4">Skapa ett nytt inlägg</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <form onSubmit={handleSubmit} className="max-w-lg p-6 bg-white shadow-md rounded-lg">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Titel</label>
            <input 
              id="title"
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Titel"
              required 
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Kategori</label>
            <select 
              id="category"
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-gray-700 font-medium mb-2">Text</label>
            <textarea 
              id="text"
              value={text} 
              onChange={(e) => setText(e.target.value)} 
              placeholder="Text"
              required 
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="w-full bg-lime-700 text-white py-2 rounded hover:bg-lime-900">Skapa inlägg</button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;