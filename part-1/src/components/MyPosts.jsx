import React from 'react';
import { useBlog, useUser } from '../context';
import BlogPost from './BlogPost';

const MyPosts = () => {
  const { blogs } = useBlog();
  const { user } = useUser();

  const myPosts = blogs.filter(blog => blog.author === user.name);

  return (
    <div>
      <h1>My Posts</h1>
      {myPosts.map((blog) => (
        <BlogPost key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default MyPosts;