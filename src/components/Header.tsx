import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

import '../pages/styles/Header.css'; // css importação estilos
const Header: React.FC = () => {
  return (
    <header>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/raffles">Rifas</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/login">
            <button>Login</button>
        </Link>
        </nav>
    </header>
  );
};

export default Header;
