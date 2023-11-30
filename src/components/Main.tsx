// Main.tsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage'; 
import RafflePage from '../pages/RafflePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../pages/LoginPage';

const Main: React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/raffles" element={<RafflePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
