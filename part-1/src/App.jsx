import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useUser } from './context';
import { UserProvider, BlogProvider } from './context';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddPost from './components/AddPost';

const App = () => {
  const { user } = useUser();

  return (
    <>
    <Navigation />
    <Routes>
    <Route path="/" element={<HomePage />} />
              
    </Routes>
    
    </>
  );
};

const AddPostPage = () => {
  const { user } = useUser();

  // Kontrollera om användaren är inloggad
  if (!user) {
    return <p>Logga in för att skapa inlägg</p>;
  } else {
    // Om användaren är inloggad, rendera "AddPost"-komponenten
    return <AddPost />;
  }

};

export default App;
