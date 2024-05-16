import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context';

const Navigation = () => {
  const { user, login, logout } = useUser();

  return (
    <nav>
        <li className='list-none text-lime-700 text-lg font-serif font-semibold'><Link to="/">Hemma Glädje</Link></li>
        <div className='flex flex-row'>
          <ul className='flex flex-row'>
            <li><Link to="/">Hem</Link></li>
            <li><Link to="/blogg">Blogg</Link></li>
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
        </div>
    </nav>
  );
};

export default Navigation;