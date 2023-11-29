import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div>
      <h1>Contato</h1>
      <p>Tem alguma pergunta ou precisa entrar em contato conosco? Envie-nos uma mensagem!</p>
      <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <textarea placeholder="Sua mensagem"></textarea>
        <button type="submit">Enviar Mensagem</button>
      </form>
      
    </div>
  );
};

export default ContactPage;
