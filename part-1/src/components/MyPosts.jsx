import React from 'react';
import { useBlog, useUser } from '../context';
import BlogPost from './BlogPost';

const MyPosts = () => {
  const { blogs } = useBlog();
  const { user } = useUser();

  // Filtrera användarens inlägg
  const myPosts = blogs.filter(blog => blog.author === user.name);

  return (
    <div>
      <h2>Mina Blogginlägg</h2>
      <div className='flex flex-wrap'>
      {myPosts.length > 0 ? (
        myPosts.map((blog, index) => (
          <BlogPost key={index} blog={blog} />
        ))
      ) : (
        <p>Du har inte skapat några blogginlägg än</p>
      )}
      </div>
    </div>
  );
};

export default MyPosts;