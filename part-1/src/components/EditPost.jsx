import React, { useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { UserContext } from '../context/UserContext';

const EditPost = () => {
  const { id } = useParams();
  const { blogPosts, editPost } = useContext(BlogContext);
  const { isLoggedIn, currentUser } = useContext(UserContext);
  const post = blogPosts.find(post => post.id === parseInt(id));
  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.text);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.author === currentUser) {
      const updatedPost = {
        ...post,
        title,
        text,
      };
      editPost(updatedPost);
      history.push('/');
    } else {
      console.log('Du kan bara redigera dina egna inlägg.');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Redigera inlägg</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Titel:</label>
              <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <label htmlFor="text">Text:</label>
              <textarea id="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <button type="submit">Uppdatera inlägg</button>
          </form>
        </div>
      ) : (
        <p>Du måste vara inloggad för att redigera ett inlägg.</p>
      )}
    </div>
  );
}

export default EditPost;
