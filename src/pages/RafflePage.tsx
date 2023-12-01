import React, { useState } from 'react';

const RafflePage: React.FC = () => {
  const [selectedNumbers, setSelectedNumbers] = useState(new Set());

  const toggleNumber = (number: unknown) => {
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
      <h1>Escolha seus números da Sorte.</h1>
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
    </div>
  );
};

export default RafflePage;
