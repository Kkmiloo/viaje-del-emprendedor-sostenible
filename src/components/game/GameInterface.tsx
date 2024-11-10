import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Tipos para tipado estático
interface Question {
  text: string;
  options: string[];
  correctAnswer: number;
}

interface GameState {
  money: number;
  lives: number;
  currentQuestion: Question;
  questionIndex: number;
}

const GameInterface: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    money: 1000,
    lives: 3,
    currentQuestion: {
      text: '¿Cuál es la capital de Francia?',
      options: ['Madrid', 'París', 'Roma', 'Berlín'],
      correctAnswer: 1,
    },
    questionIndex: 0,
  });

  const handleAnswer = (selectedOption: number) => {
    const isCorrect =
      selectedOption === gameState.currentQuestion.correctAnswer;

    if (!isCorrect) {
      setGameState((prev) => ({
        ...prev,
        lives: prev.lives - 1,
        money: prev.money - 200,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        money: prev.money + 500,
      }));
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className='bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-md p-6'
      >
        {/* Barra de estado superior */}
        <div className='flex justify-between mb-4'>
          <div className='flex items-center space-x-2'>
            <span>💰</span>
            <span className='font-bold'>${gameState.money}</span>
          </div>
          <div className='flex items-center space-x-2'>
            {[...Array(gameState.lives)].map((_, i) => (
              <span key={i} className='text-2xl'>
                ❤️
              </span>
            ))}
          </div>
        </div>

        {/* Personaje */}
        <div className='flex justify-center mb-4'>
          <motion.div
            animate={{
              y: [0, -10, 0],
              transition: {
                repeat: Infinity,
                duration: 1.5,
              },
            }}
            className='w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-6xl'
          >
            🤔
          </motion.div>
        </div>

        {/* Texto de la pregunta */}
        <div className='text-center mb-6'>
          <h2 className='text-xl font-semibold mb-4'>
            {gameState.currentQuestion.text}
          </h2>
        </div>

        {/* Opciones de respuesta */}
        <div className='space-y-3'>
          {gameState.currentQuestion.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAnswer(index)}
              className='w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors'
            >
              {option}
            </motion.button>
          ))}
        </div>

        {/* Pie de página */}
        <div className='mt-6 text-center text-sm text-gray-600'>
          Pregunta {gameState.questionIndex + 1}
        </div>
      </motion.div>
    </div>
  );
};

export default GameInterface;
