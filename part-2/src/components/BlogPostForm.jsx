import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useBlog } from '../context/BlogContext';
import { categories } from './Categories';

const BlogPostForm = () => {
  const { blogs, addBlog } = useBlog();
  const { currentUser } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]); // Default to the first category

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      const newPost = {
        id: blogs.length + 1,
        title,
        author: currentUser.email,
        text,
        category,
        comments: []
      };
      addBlog(newPost);
      setTitle('');
      setText('');
      setCategory(categories[0]);
    } else {
      alert('Du måste vara inloggad för att skapa ett blogginlägg.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Skapa ett nytt blogginlägg</h3>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titel</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Kategori</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
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
        <label htmlFor="text" className="block text-sm font-medium text-gray-700">Text</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="w-full p-2 border rounded"
        ></textarea>
      </div>
      <button type="submit" className="bg-lime-700 hover:bg-lime-900 text-white py-1 px-3 rounded">Skicka</button>
    </form>
  );
};

export default BlogPostForm;
