import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './styles/RafflePage.css';

const RafflePage: React.FC = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<Set<number>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const toggleNumber = (number: number) => {
    setSelectedNumbers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(number)) {
        newSet.delete(number);
      } else {
        newSet.add(number);
      }
      return newSet;
    });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  return (
    <div>
      <h3 id='numbers-text'>Escolha seus números da Sorte.</h3>
      <div className="bingo-board">
        {Array.from({ length: 75 }, (_, i) => i + 1).map((number) => (
          <div
            key={number}
            className={`bingo-number ${selectedNumbers.has(number) ? 'selected' : ''}`}
            onClick={() => toggleNumber(number)}
          >
            {number < 10 ? `0${number}` : number}
          </div>
        ))}
      </div>
      <motion.button
        type="submit"
        className="unique-button" 
        whileHover={{ scale: 1.05 }}
        onClick={handleOpenModal}
      >
        Escolher Números
      </motion.button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="close-button" onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <h3>Digite seu nome</h3>
            <input type="text" value={userName} onChange={handleNameChange} />
            <div className="modal-actions">
            <motion.button
  className="button-reservar" // Classe separada para o botão "Reservar Números"
  whileHover={{ scale: 1.05 }}
  onClick={() => {
    handleCloseModal();
    navigate('/reservar-numeros');
  }}
>
  Reservar Números
</motion.button>

<motion.button
  className="button-comprar" // Classe separada para o botão "Comprar Números"
  whileHover={{ scale: 1.05 }}
  onClick={() => {
    handleCloseModal();
    navigate('/comprar-numeros');
  }}
>
  Comprar Números
</motion.button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RafflePage;
