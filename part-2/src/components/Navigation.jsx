import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { signOutUser } from '../Firebase/authFunctions';

const Navigation = () => {
  const { currentUser, userLoggedIn } = useContext(AuthContext);
  const location = useLocation();

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lime-800 text-lg font-serif font-semibold"><Link to="/">Hemma Glädje</Link></h1>
        <ul className="flex space-x-4 text-black">
          <li className='hover:text-lime-800'>
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Hem
            </Link>
          </li>
          <li className='hover:text-lime-800'>
            <Link
              to="/blogg"
              className={`nav-link ${location.pathname === '/blogg' ? 'active' : ''}`}
            >
              Blogg
            </Link>
          </li>
          <li className='hover:text-lime-800'>
            <Link
              to="/minsida"
              className={`nav-link ${location.pathname === '/minsida' ? 'active' : ''}`}
            >
              Min Sida
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          {userLoggedIn ? (
            <>
              <span className="text-black mr-4">{currentUser.email}</span>
              <button onClick={signOutUser} className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded">Logga ut</button>
            </>
          ) : (
            <Link to="/login">
            <button className="bg-lime-700 hover:bg-lime-900 text-white py-1 px-3 rounded">Logga in</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
