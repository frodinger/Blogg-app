import React, { useState } from 'react';
import { useBlog, useUser } from '../context';
import BlogPost from '../components/BlogPost';
import MyPosts from '../components/MyPosts';
import AddPost from '../components/AddPost';

const HomePage = () => {
  const { blogs } = useBlog();
  const { user } = useUser();
  const [selectedCategory, setSelectedCategory] = useState('Alla');

  const filteredBlogs = selectedCategory === 'Alla'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div>
      {user ? (
        <div>
          <AddPost />
          <MyPosts />
        </div>
      ) : (
        <p>Logga in för att skapa inlägg</p>
      )}
      <h1>Blogginlägg</h1>
      <div>
        <button onClick={() => setSelectedCategory('Alla')}>Alla</button>
        <button onClick={() => setSelectedCategory('Kategori 1')}>Kategori 1</button>
        <button onClick={() => setSelectedCategory('Kategori 2')}>Kategori 2</button>
        <button onClick={() => setSelectedCategory('Kategori 3')}>Kategori 3</button>
      </div>
      {filteredBlogs.map((blog) => ( // Remove index from key
        <BlogPost key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default HomePage;