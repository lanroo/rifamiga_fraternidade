import React from 'react';
import '../pages/styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">&copy; {new Date().getFullYear()} Rifa Amiga - Centro Espírita Fraternidade</p>
      {/* <p className="footer-text"> Site desenvolvido por <a href="https://www.linkedin.com/in/yladacs/" target="_blank" rel="noopener noreferrer">Lanna Almeida</a>. 
    Todos os direitos reservados.
  </p> */}
    </footer>
  );
};

export default Footer;
