import React, { useState } from 'react';
import { useBlog, useUser } from '../context';
import BlogPost from '../components/BlogPost';
import AddPost from '../components/AddPost';
import MyPosts from '../components/MyPosts';

const BlogPage = () => {
  const { blogs } = useBlog();
  const { user } = useUser();
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Trädgård', 'Renovering', 'Inredning'];

  const filteredBlogs = blogs.filter((blog) => 
    selectedCategory ? blog.category === selectedCategory : true
  );

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
        <button onClick={() => setSelectedCategory('')}>Alla</button>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>
      {filteredBlogs.map((blog) => (
        <BlogPost key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogPage;
