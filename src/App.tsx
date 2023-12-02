import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import ReservarNumerosPage from './pages/ReservarNumerosPage'; 
import ComprarNumerosPage from './pages/ComprarNumerosPage'; 

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
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/reservar-numeros" element={<ReservarNumerosPage />} />
        <Route path="/comprar-numeros" element={<ComprarNumerosPage />} />
   
      </Routes>
    </Router>
  );
}

export default App;
