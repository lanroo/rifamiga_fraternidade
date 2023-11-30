import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/Header.css'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className={`menu-hamburguer ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={isMenuOpen ? 'nav-active' : ''}>
        <div className={`nav-links ${isMenuOpen ? 'close' : ''}`}>
          {/* Links que aparecem apenas quando o menu está aberto */}
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/raffles" onClick={toggleMenu}>Rifas</Link>
          <Link to="/about" onClick={toggleMenu}>Sobre</Link>
          <Link to="/contact" onClick={toggleMenu}>Contato</Link>
        </div>
        <div className={`login-button ${isMenuOpen ? 'show' : ''}`}>
         
          <Link to="/login" onClick={toggleMenu}>
            <button>Login</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
