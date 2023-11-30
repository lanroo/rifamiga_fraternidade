import React from 'react';
import '../pages/styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">&copy; {new Date().getFullYear()} Rifa Amiga - Centro Espírita Fraternidade</p>
      <p className="footer-text">Todos os direitos reservados. - Ylanna.</p>
    </footer>
  );
};

export default Footer;
