import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useUser } from './context';
import Navigation from './components/Navigation';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';

const App = () => {
  const { user } = useUser();

  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/blogg" element={<BlogPage />} />
      <Route path="/" element={<HomePage />} />        
    </Routes>
    
    </>
  );
};

export default App;

