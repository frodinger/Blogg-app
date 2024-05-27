import React, { useState, useContext } from 'react';
import { useBlog } from '../context/BlogContext';
import { AuthContext  } from '../context/AuthContext';
import BlogPost from '../components/BlogPost';
import AddPost from '../components/AddPost';
import MyPosts from '../components/MyPosts';
import { categories } from '../components/Categories';

const BlogPage = () => {
  const { blogs } = useBlog();
  const { currentUser } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredBlogs = blogs.filter((blog) =>
    selectedCategory ? blog.category === selectedCategory : true
  );

  return (
    <section className="py-8 px-4">
      {currentUser ? (
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
          className={`py-1 px-3 rounded ${
            selectedCategory === '' ? 'bg-lime-700 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-700 hover:text-gray-900'
          }`}
          onClick={() => setSelectedCategory('')}
        >
          Alla
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`py-1 px-3 rounded ${
              selectedCategory === cat ? 'bg-lime-700 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-700 hover:text-gray-900'
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