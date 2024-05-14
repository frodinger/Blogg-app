import React from 'react';
import { useBlog, useUser } from '../context';
import BlogPost from '../components/BlogPost';
import MyPosts from '../components/MyPosts';
import AddPost from '../components/AddPost';

const HomePage = () => {
  const { blogs } = useBlog();
  const { user } = useUser(); 

  return (
    <div>
      {user ? (
        <div>
          <AddPost />
          <MyPosts />
        </div>
      ) : (
        <p>Logga in för att skapa inlägg</p> // Annars visa ett meddelande
      )}
      <h1>Blog Posts</h1>
      {blogs.map((blog) => (
        <BlogPost key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default HomePage;