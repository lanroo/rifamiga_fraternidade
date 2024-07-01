import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './styles/RafflePage.css';

const RafflePage: React.FC = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<Set<number>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');
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
    if (selectedNumbers.size === 0) {
      setError('Por favor, escolha pelo menos 1 número para continuar');
    } else {
      setError('');
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setError('');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const selectedNumbersToString = () => {
    return Array.from(selectedNumbers).sort((a, b) => a - b).join(', ');
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
    <div className="raffle-container">
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
      {error && <p className="error-message">{error}</p>}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="close-button" onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="selected-numbers-list">
              <p>Números Escolhidos: {selectedNumbersToString()}</p>
            </div>
            <h3>Digite seu nome</h3>
            <input type="text" value={userName} onChange={handleNameChange} />
            <div className="modal-actions">
              <motion.button
                className="button-reservar"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  handleCloseModal();
                  navigate('/reservar-numeros');
                }}
              >
                Reservar Números
              </motion.button>
              <motion.button
                className="button-comprar"
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
