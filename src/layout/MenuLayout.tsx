import { motion } from 'framer-motion';
import { Menu } from '../components/menu/Menu';

export const MenuLayout = () => {
  return (
    <div className='flex flex-col h-screen chewy text-center overflow-hidden'>
      <div className='absolute inset-0 blur-md bg-scene2 bg-cover bg-no-repeat object-fill'></div>

      <motion.main
        className='flex-grow flex items-center justify-center z-50'
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <div className='bg-black bg-opacity-70 p-6 rounded-lg max-w-md w-full flex flex-col items-center justify-center'>
          <motion.header
            className='p-4  z-40'
            initial={{ opacity: 1, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.h1
              className='text-white text-3xl md:text-5xl font-bold'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              El Viaje del
              <br />
              <span className='text-emerald-400'>Emprendedor Sostenible</span>
            </motion.h1>
          </motion.header>
          <Menu />
        </div>
      </motion.main>

      <motion.footer
        className='text-white p-4 text-center'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className='max-w-xl mx-auto'>
          <p className='text-sm text-gray-300'>
            &copy; 2024 El Viaje del Emprendedor Sostenible
          </p>
          <motion.div
            className='mt-2 flex justify-center space-x-4 text-xs text-gray-400'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a href='#' className='hover:text-emerald-300 transition-colors'>
              Política de Privacidad
            </a>
            <span>|</span>
            <a href='#' className='hover:text-emerald-300 transition-colors'>
              Términos de Uso
            </a>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};
