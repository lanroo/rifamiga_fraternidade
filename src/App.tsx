import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';

// Styles  
import './pages/styles/HomePage.css';
import './pages/styles/RafflePage.css';
import './pages/styles/AboutPage.css';
import './pages/styles/ContactPage.css';
import './pages/styles/LoginPage.css';
import './App.css';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
