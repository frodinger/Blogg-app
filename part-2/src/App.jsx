import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import MyPostsPage from './pages/MyPostsPage';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import PrivateRoutes from './components/PrivateRoutes';

const App = () => {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />        
        <Route path="/blogg" element={<BlogPage />} />
        <Route element={<PrivateRoutes />}>
            <Route path="/minsida" element={<MyPostsPage />} />
          </Route>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
    </>
  );
};

export default App;
