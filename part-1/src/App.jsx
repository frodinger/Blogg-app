import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useUser } from './context';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {
  const { user } = useUser();

  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />        
    </Routes>
    
    </>
  );
};

export default App;
