import React, { useState } from 'react';
import { useBlog, useUser } from '../context';

const BlogPost = ({ blog }) => {
    const { user } = useUser();
    const { updateBlog, deleteBlog } = useBlog();
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(blog.title);
    const [text, setText] = useState(blog.text);
    const [category, setCategory] = useState(blog.category || 'Okategoriserad'); // Standard category if not defined
  
    const handleEdit = () => {
      updateBlog(blog.id, { title, text, category }); // Include category when updating
      setIsEditing(false);
    };
  
    const handleDelete = () => {
      deleteBlog(blog.id);
    };
  
    return (
      <div>
        {isEditing ? (
          <div>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
            <textarea 
              value={text} 
              onChange={(e) => setText(e.target.value)} 
            />
            <input 
              type="text" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} // Handle category change
            />
            <button onClick={handleEdit}>Spara</button>
            <button onClick={() => setIsEditing(false)}>Avbryt</button>
          </div>
        ) : (
          <div>
            <h2>{blog.title}</h2>
            <p>{category}</p> {/* Render category */}
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
