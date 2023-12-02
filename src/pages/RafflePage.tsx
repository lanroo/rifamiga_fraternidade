import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles/RafflePage.css';

const RafflePage: React.FC = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<Set<number>>(new Set());

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
        className="unique-button" // Use a classe única aqui
        whileHover={{ scale: 1.05 }}
      >
        Escolher Números
      </motion.button>
    </div>
  );
};

export default RafflePage;
