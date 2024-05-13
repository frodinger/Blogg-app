import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { UserContext } from '../context/UserContext';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { addPost } = useContext(BlogContext);
  const { isLoggedIn, currentUser } = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      text,
      author: currentUser, // Använd namnet på den inloggade användaren som författare
    };
    addPost(newPost);
    history.push('/');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Lägg till nytt inlägg</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Titel:</label>
              <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <label htmlFor="text">Text:</label>
              <textarea id="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <button type="submit">Lägg till inlägg</button>
          </form>
        </div>
      ) : (
        <p>Du måste vara inloggad för att lägga till ett inlägg.</p>
      )}
    </div>
  );
}

export default AddPost;
