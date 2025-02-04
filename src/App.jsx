// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/app.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterComponent from './components/RouterComponent';

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
