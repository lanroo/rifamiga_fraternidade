
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingNumbers = () => {
  const generateRandomNumber = () => {
    return {
      id: Math.random(),
      number: Math.floor(Math.random() * 20),
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      animateX: Math.random() * window.innerWidth,
      animateY: Math.random() * window.innerHeight,
      delay: Math.random() * 5,
    };
  };

  const numbers = Array.from({ length: 10}, generateRandomNumber);

  return (
    <AnimatePresence>
      {numbers.map((item) => (
        <motion.span
          key={item.id}
          initial={{ x: item.initialX, y: item.initialY, opacity: 0 }}
          animate={{
            x: item.animateX,
            y: item.animateY,
            opacity: [0, 0.5, 0.5, 0],
            scale: [1, 1, 1, 0]
          }}
          exit={{ opacity: 0 }}
          transition={{

            duration: 5,
            delay: item.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
          }}
          style={{
            position: 'fixed',
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.7)',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          {item.number}
        </motion.span>
      ))}
    </AnimatePresence>
  );
};

export default FloatingNumbers;