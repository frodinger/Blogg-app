import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const { isLoggedIn, currentUser, login, logout } = useContext(UserContext);

  const handleLogin = () => {
    if (!isLoggedIn) {
      login('John Smith'); // Hårdkodad användare
    } else {
      logout();
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hem</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <Link to="/add">Lägg till inlägg</Link>
          </li>
        ) : null}
        <li>
          {isLoggedIn ? (
            <p>Inloggad som: {currentUser}</p>
          ) : (
            <button onClick={handleLogin}>{isLoggedIn ? 'Logga ut' : 'Logga in'}</button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
