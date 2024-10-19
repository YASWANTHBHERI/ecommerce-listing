import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListingPage from '../src/pages/ProductListingPage';
import ThankYouPage from './pages/ThankYouPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="/thank-you/:productName" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

export default App;
