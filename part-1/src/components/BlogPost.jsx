import React, { useState } from 'react';
import { useBlog, useUser } from '../context';

const BlogPost = ({ blog }) => {
  const { user } = useUser();
  const { updateBlog, deleteBlog } = useBlog();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [text, setText] = useState(blog.text);
  const [category, setCategory] = useState(blog.category);

  const handleEdit = () => {
    updateBlog(blog.id, { title, text, category });
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteBlog(blog.id);
  };

  const categories = ['Kategori 1', 'Kategori 2', 'Kategori 3'];

  return (
    <div>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
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
          />
          <button onClick={handleEdit}>Spara</button>
          <button onClick={() => setIsEditing(false)}>Avbryt</button>
        </div>
      ) : (
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.category}</p>
          <p>Av {blog.author}</p>
          <p>{blog.text}</p>
          {user && user.name === blog.author && (
            <div>
              <button onClick={() => setIsEditing(true)}>Redigera</button>
              <button onClick={handleDelete}>Radera</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogPost;