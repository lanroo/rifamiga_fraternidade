import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/CadastroPage.css';
import LoginPage from './LoginPage';



import FloatingNumbers from '../components/FloattingNumbers';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
     
        </Routes>
      </Router>
    );
  }
  
const CadastroPage: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [errors, setErrors] = useState({ nome: '', email: '', senha: '', confirmarSenha: '' });
  
    const validateEmail = (email: string) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email.toLowerCase());
    };
  
    const validatePassword = (senha: string) => {
      return senha.length >= 6 && /\d/.test(senha) && /[a-zA-Z]/.test(senha);
    };
  
    const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNome(e.target.value);
 
    };
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      setErrors({ ...errors, email: validateEmail(e.target.value) ? '' : 'E-mail inválido.' });
    };
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSenha(e.target.value);
      setErrors({ ...errors, senha: validatePassword(e.target.value) ? '' : 'Senha inválida. Deve conter pelo menos 6 caracteres, incluindo números e letras.' });
    };
  
    const handleConfirmarSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmarSenha(e.target.value);
      setErrors({ ...errors, confirmarSenha: e.target.value === senha ? '' : 'As senhas não coincidem.' });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
 
    };
  
    return (
      <>
        <FloatingNumbers />
        <motion.div
          className="cadastro-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={handleNomeChange}
              />
              {errors.nome && <p className="error">{errors.nome}</p>}
            </div>
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
            <div className="input-container">
              <input
                type="password"
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChange={handleConfirmarSenhaChange}
              />
              {errors.confirmarSenha && <p className="error">{errors.confirmarSenha}</p>}
            </div>
            <motion.button
              type="submit"
              className="button-cadastro"
              whileHover={{ scale: 1.05 }}
            >
              Cadastrar
            </motion.button>
            <div className="login-options">
              <a href="/login">Já tem conta? Entre aqui</a>
            </div>
          </form>
        </motion.div>
      </>
    );
  };
  
  export default CadastroPage;