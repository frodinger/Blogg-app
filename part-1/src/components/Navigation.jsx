import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../context';

const Navigation = () => {
  const { user, login, logout } = useUser();
  const location = useLocation();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-serif font-semibold"><Link to="/">Hemma Glädje</Link></h1>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link
              to="/"
              className={`hover:text-gray-300 ${location.pathname === '/' ? 'text-gray-300' : ''}`}
            >
              Hem
            </Link>
          </li>
          <li>
            <Link
              to="/blogg"
              className={`hover:text-gray-300 ${location.pathname === '/blogg' ? 'text-gray-300' : ''}`}
            >
              Blogg
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          {user ? (
            <>
              <span className="text-white mr-4">{user.name}</span>
              <button onClick={logout} className="bg-red-500 text-white py-1 px-3 rounded">Logga ut</button>
            </>
          ) : (
            <button onClick={login} className="bg-blue-500 text-white py-1 px-3 rounded">Logga in</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
