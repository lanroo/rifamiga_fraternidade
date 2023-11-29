import React from 'react';
import '../pages/styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">&copy; {new Date().getFullYear()} Rifaqui</p>
      <p className="footer-text">Todos os direitos reservados. - Create By Ylanna.</p>
    </footer>
  );
};

export default Footer;
