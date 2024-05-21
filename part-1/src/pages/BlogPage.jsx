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
    <section className="py-8 px-4">
      {user ? (
        <div>
          <AddPost />
          <MyPosts />
        </div>
      ) : (
        <p className="text-gray-600">Logga in för att skapa inlägg</p>
      )}
      <h1 className="text-3xl font-serif font-medium mt-8 mb-4">Blogginlägg</h1>
      <div className="flex space-x-4 mb-4">
        <button
          className={`py-2 px-4 rounded-lg ${
            selectedCategory === '' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setSelectedCategory('')}
        >
          Alla
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`py-2 px-4 rounded-lg ${
              selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBlogs.map((blog) => (
          <BlogPost key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
