import React from 'react';
import './styles/AboutPage.css'; 

const AboutPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="heading">Sobre o Rifaqui</h1>
      <p className="paragraph">
        Bem-vindo à nossa plataforma de Bingo Fraterno, criada com o objetivo de apoiar o centro espírita na realização de bingos beneficentes. Nossa missão é arrecadar fundos para ajudar a manter e expandir as atividades e projetos da casa espírita, contribuindo para o bem-estar e a caridade na comunidade.
        <br /><br />
        Como uma organização sem fins lucrativos, estamos comprometidos em proporcionar um ambiente seguro e divertido para todos os participantes. Cada evento de bingo é uma oportunidade de união, solidariedade e alegria, onde todos os recursos arrecadados são destinados a causas nobres e essenciais.
        <br /><br />
        Participe dos nossos bingos fraternos e ajude-nos a fazer a diferença!
      </p>
    </div>
  );
};
  
export default AboutPage;
