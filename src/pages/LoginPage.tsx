import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingNumbers from '../components/FloattingNumbers';
import './styles/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({ email: '', senha: '' });

  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  const validatePassword = (senha: string): boolean => {
    return senha.length >= 6 && /\d/.test(senha) && /[a-zA-Z]/.test(senha);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: validateEmail(e.target.value) ? '' : 'E-mail inválido.' });
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSenha(e.target.value);
    setErrors({ ...errors, senha: validatePassword(e.target.value) ? '' : 'Senha inválida. Deve conter pelo menos 6 caracteres, incluindo números e letras.' });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateEmail(email) && validatePassword(senha)) {
      console.log(`Login com email: ${email} e senha: ${senha}`);
    } else {
      console.log('Falha no login. Verifique os erros.');
    }
  };

  return (
    <>
      <FloatingNumbers />
      <motion.div className="login-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Login</h1>
        {/* <h2 className='login-texting'>Login</h2> */}
        <form onSubmit={handleSubmit}>
        <div className="login-input-container">
            <input
              className="login-input"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && <p className="login-error">{errors.email}</p>}
          </div>
          <div className="login-input-container">
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={handlePasswordChange}
              className="login-input-senha"
            />
            {errors.senha && <p className="login-error">{errors.senha}</p>}
          </div>
          <motion.button
            type="submit"
            className="login-button"
            whileHover={{ scale: 1.05 }}
          >
            Entrar
          </motion.button>
          <div className="login-options">
            <Link to="/esqueceu-senha" className="login-link-esqueceu-senha">Esqueceu a senha?</Link>
            <div className="login-signup-prompt">
              <span className="login-prompt-text">Não tem conta?</span>
              <Link to="/cadastro" className="login-link-cadastro">Fazer cadastro agora</Link>
            </div>
          </div>
        </form>
      </motion.div>
    </>
  );
}

export default LoginPage;
