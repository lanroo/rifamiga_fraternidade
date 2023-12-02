import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../components/images/banner1.png';
import './styles/HomePage.css'
import FloatingNumbers from '../components/FloattingNumbers'; 

const HomePage = () => {
  return (
    <>
      <FloatingNumbers /> 
      <div className="image-container" style={{ position: 'relative' }}>
        <img src={image1} alt="Slide 1" style={{ width: '100%' }} />
        <div className="content-container" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2>Quer ganhar o prêmio do nosso bingo?</h2>
          <p>Escolha os seus números da sorte</p>
          <Link to="/raffles">
             <button className="button-bingo">Escolher Números </button>
          </Link>

        </div>
      </div>
    </>
  );
};

export default HomePage;
