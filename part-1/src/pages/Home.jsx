import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const { blogPosts } = useContext(BlogContext);
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div>
      <h1>Blogg</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>Av: {post.author}</p>
            <p>{post.text}</p>
            {isLoggedIn && <Link to={`/edit/${post.id}`}>Redigera inlägg</Link>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;