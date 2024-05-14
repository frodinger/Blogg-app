import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context';

const Navigation = () => {
  const { user, login, logout } = useUser();

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      <div>
        {user ? (
          <>
            <span>Logged in as: {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;