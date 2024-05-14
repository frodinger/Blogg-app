import React from 'react';
import { useBlog, useUser } from '../context';
import BlogPost from '../components/BlogPost';
import MyPosts from '../components/MyPosts';
import AddPost from '../components/AddPost';

const HomePage = () => {
  const { blogs } = useBlog();
  const { user } = useUser(); 

  console.log('blogs', blogs);

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
      {blogs.map((blog, index) => (
        <BlogPost key={index} blog={blog} />
      ))}
    </div>
  );
};

export default HomePage;