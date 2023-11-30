import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles/LoginPage.css';
import FloatingNumbers from '../components/FloattingNumbers'; 

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Login com email: ${email} e senha: ${senha}`);
  };

  return (
    <>
      <FloatingNumbers /> 
      <motion.div
        className="login-container"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
      >
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </div>
          <motion.button
            type="submit"
            className="button-login"
            whileHover={{ scale: 1.05 }} 
          >
            Entrar
          </motion.button>
        </form>
      </motion.div>
    </>
  );
};

export default LoginPage;
