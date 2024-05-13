import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { UserContext } from '../context/UserContext';

const PostDetail = () => {
  const { id } = useParams();
  const { blogPosts } = useContext(BlogContext);
  const { isLoggedIn } = useContext(UserContext);
  const post = blogPosts.find(post => post.id === parseInt(id));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Av: {post.author}</p>
      <p>{post.text}</p>
      {isLoggedIn && <Link to={`/edit/${id}`}>Redigera inlägg</Link>}
    </div>
  );
}

export default PostDetail;
