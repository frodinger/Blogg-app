import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useBlog } from '../context/BlogContext';
import BlogPost from './BlogPost';

const MyPosts = () => {
  const { currentUser } = useContext(AuthContext);
  const { blogs } = useBlog();

  // Filtrera användarens inlägg
  const myPosts = blogs.filter(blog => blog.author === currentUser.email);

  return (
    <div>
      <h1 className='text-3xl font-serif font-medium mt-4 mb-4'>Mina Blogginlägg</h1>
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
