// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Housing from '../pages/Housing';
import ErrorPage from '../pages/ErrorPage';

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<Housing />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RouterComponent;
