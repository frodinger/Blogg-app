import React from 'react';
import { useBlog, useUser } from '../context';

const BlogPost = ({ blog }) => {
  const { blogs, setBlogs } = useBlog();
  const { user } = useUser();

  const handleDelete = () => {
    setBlogs(blogs.filter(b => b.id !== blog.id));
  };

  const handleEdit = () => {
    const newTitle = prompt('Enter new title:', blog.title);
    const newText = prompt('Enter new text:', blog.text);
    if (newTitle && newText) {
      setBlogs(blogs.map(b => b.id === blog.id ? { ...b, title: newTitle, text: newText } : b));
    }
  };

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>by {blog.author}</p>
      <p>{blog.text}</p>
      {user && blog.author === user.name && (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default BlogPost;