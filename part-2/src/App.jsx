import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

const App = () => {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />        
        <Route path="/blogg" element={<BlogPage />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
    </>
  );
};

export default App;
