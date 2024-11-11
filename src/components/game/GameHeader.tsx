import { motion } from 'framer-motion';
import { BanknotesIcon, MapIcon } from '@heroicons/react/24/solid';
import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { HealthIndicator } from './HealthIndicator';

interface GameHeaderProps {
  currentScene: GameLevelI;
  balance: number;
}   

export const GameHeader = ({ currentScene, balance }:GameHeaderProps) => {
  return (
    <div className='space-y-4'>
      {/* Escena Actual */}
      <motion.div
        className='max-w-6xl items-center m-auto px-4 z-20 bg-slate-700 w-full rounded-xl flex justify-between p-2 md:p-4 border-2 border-slate-200'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex items-center space-x-3'>
          <MapIcon className='w-6 h-6 text-emerald-400' />
          <h2 className='font-bold text-center text-white text-lg !mt-0'>
            {currentScene.name}
          </h2>
        </div>
      </motion.div>

      {/* Balance y Salud */}
      <motion.div
        className='max-w-6xl !mt-0 m-auto flex justify-between items-center w-full px-6 py-3 bg-slate-700 border-2 rounded-xl'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Balance */}
        <motion.div
          className='flex items-center space-x-2'
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <BanknotesIcon className='w-6 h-6 text-emerald-400' />
          <span className='text-white font-bold'>
            $ {Intl.NumberFormat('es-CO').format(balance)} COP
          </span>
        </motion.div>

        {/* Indicador de Salud */}
        <HealthIndicator />
      </motion.div>
    </div>
  );
};

