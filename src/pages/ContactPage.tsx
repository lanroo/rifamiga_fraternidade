import React from 'react';

const ContactPage: React.FC = () => {
  // Form submission handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // O processamento do formulário seria aqui
  };

  return (
    <div className="contact-container">
      <h1>Contato</h1>
      <p>Tem alguma pergunta ou precisa entrar em contato conosco? Envie-nos uma mensagem!</p>
      <form onSubmit={handleSubmit} action="mailto:yladacz@gmail.com" method="GET">
        <div className="input-group">
          <input type="text" name="name" placeholder="Seu nome" required />
        </div>
        <div className="input-group">
          <input type="email" name="email" placeholder="Seu e-mail" required />
        </div>
        <div className="input-group">
          <textarea name="message" placeholder="Sua mensagem" required></textarea>
        </div>
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  );
};

export default ContactPage;
