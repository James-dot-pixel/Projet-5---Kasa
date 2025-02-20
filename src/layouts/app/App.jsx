// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './app.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer.jsx';
import RouterComponent from '../../components/RouterComponent';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <RouterComponent />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
