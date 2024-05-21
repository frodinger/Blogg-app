import React, { useState } from 'react';
import { useBlog, useUser } from '../context';

const BlogPost = ({ blog }) => {
  const { user } = useUser();
  const { updateBlog, deleteBlog, addComment } = useBlog();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [text, setText] = useState(blog.text);
  const [category, setCategory] = useState(blog.category);
  const [commentText, setCommentText] = useState('');

  const handleEdit = () => {
    updateBlog(blog.id, { title, text, category });
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteBlog(blog.id);
  };

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
        author: user.name,
        text: commentText
      };
      addComment(blog.id, newComment);
      setCommentText('');
    }
  };

  const categories = ['Trädgård', 'Renovering', 'Inredning'];

  return (
    <div className="max-w-lg py-3 px-3 bg-white shadow-md rounded-lg">
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="w-full p-2 border rounded mb-2"
          />
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded mb-2"
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
            className="w-full p-2 border rounded mb-2 overflow-y-auto"
          />
          <button onClick={handleEdit} className="bg-blue-500 text-white py-1 px-3 rounded mr-2">Spara</button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white py-1 px-3 rounded">Avbryt</button>
        </div>
      ) : (
        <div>
          <p className="text-sm text-gray-600">{blog.category}</p>
          <h2 className="font-serif text-2xl mt-2">{blog.title}</h2>
          <p className="text-sm text-gray-600">Av {blog.author}</p>
          <p className="font-sans text-base mt-2 overflow-y-auto max-h-[300px] overflow-x-hidden break-words">{blog.text}</p>
          {user && user.name === blog.author && (
            <div className="mt-4">
              <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white py-1 px-3 rounded mr-2">Redigera</button>
              <button onClick={handleDelete} className="bg-red-500 text-white py-1 px-3 rounded">Radera</button>
            </div>
          )}
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-1">Kommentarer:</h3>
            <div className='overflow-y-auto max-h-[100px] overflow-x-hidden break-words'>  
            {blog.comments && blog.comments.length > 0 ? (
              blog.comments.map((comment, index) => (
                <div key={index} className="comment py-2 border-b border-gray-200">
                  <p className="font-bold text-sm">{comment.author}:</p>
                  <p className="text-sm">{comment.text}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Inga kommentarer ännu.</p>
            )}
            </div>
            {user && (
              <div className="mt-4">
                <textarea 
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Skriv en kommentar"
                  className="w-full p-2 border rounded mb-2"
                />
                <button onClick={handleAddComment} className="bg-green-500 text-white py-1 px-3 rounded">Lägg till kommentar</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;