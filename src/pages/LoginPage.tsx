import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './styles/LoginPage.css';
import FloatingNumbers from '../components/FloattingNumbers'; 
     
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({ email: '', senha: '' });

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  const validatePassword = (senha: string) => {
    return senha.length >= 6 && /\d/.test(senha) && /[a-zA-Z]/.test(senha);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: validateEmail(e.target.value) ? '' : 'E-mail inválido.' });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
    setErrors({ ...errors, senha: validatePassword(e.target.value) ? '' : 'Senha inválida. Deve conter pelo menos 6 caracteres, incluindo números e letras.' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!errors.email && !errors.senha) {
      console.log(`Login com email: ${email} e senha: ${senha}`);
      //  login
    }
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
        <h1>Área Privativa</h1>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input 
              type="email" 
              placeholder="E-mail" 
              value={email} 
              onChange={handleEmailChange} 
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-container">
            <input 
              type="password" 
              placeholder="Senha" 
              value={senha} 
              onChange={handlePasswordChange} 
            />
            {errors.senha && <p className="error">{errors.senha}</p>}
          </div>
          <motion.button
            type="submit"
            className="button-login"
            whileHover={{ scale: 1.05 }} 
          >
            Entrar
        </motion.button>
        <div className="login-options">
      <Link to="/esqueceu-senha">Esqueceu a senha?</Link>
      <div className="signup-prompt">
        <p>Não tem conta?</p>
        <Link to="/cadastro">Fazer cadastro agora</Link>
      </div>
       </div>
        </form>
      </motion.div>
    </>
  );
};

export default LoginPage;
