import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ marginTop: '30px', padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
      <p>&copy; {new Date().getFullYear()} Rifaqui</p>
      <p>Todos os direitos reservados. - Create By.</p>
    </footer>
  );
};

export default Footer;
