import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context';

const Navigation = () => {
  const { user, login, logout } = useUser();

  return (
    <nav>
      <ul>
        <h1>Blogg</h1>
        <li><Link to="/">Home</Link></li>
      </ul>
      <div>
        {user ? (
          <>
            <span>{user.name}</span>
            <button onClick={logout}>Logga ut</button>
          </>
        ) : (
          <button onClick={login}>Logga in</button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;