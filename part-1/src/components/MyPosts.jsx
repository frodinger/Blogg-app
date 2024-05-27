import React from 'react';
import { useUser } from '../context/UserContext';
import { useBlog } from '../context/BlogContext';
import BlogPost from './BlogPost';

const MyPosts = () => {
  const { blogs } = useBlog();
  const { user } = useUser();

  // Filtrera användarens inlägg
  const myPosts = blogs.filter(blog => blog.author === user.name);

  return (
    <div>
      <h1 className='text-3xl font-serif font-medium mb-4'>Mina Blogginlägg</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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