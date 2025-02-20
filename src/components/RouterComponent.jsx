// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../layouts/home/Home.jsx';
import About from '../layouts/about/About.jsx';
import Housing from '../layouts/housing/Housing.jsx';
import ErrorPage from '../layouts/errorpage/ErrorPage.jsx';

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<Housing />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RouterComponent;
