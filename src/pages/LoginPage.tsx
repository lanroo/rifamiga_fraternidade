import React, { useState } from 'react';
import './styles/LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // testando
    console.log(`Login com email: ${email} e senha: ${senha}`);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <button type="submit" className="button-login">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
