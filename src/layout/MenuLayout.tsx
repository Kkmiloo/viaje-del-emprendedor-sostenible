import { motion } from 'framer-motion';
import { Menu } from '../components/menu/Menu';

export const MenuLayout = () => {
  return (
    <div className='flex flex-col h-screen chewy text-center bg-gradient-to-r from-slate-900 to-slate-700 overflow-hidden'>
      <motion.header
        className='p-4 pt-16'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.h1
          className='text-white text-5xl md:text-6xl font-bold'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          El Viaje del
          <br />
          <span className='text-emerald-400'>Emprendedor Sostenible</span>
        </motion.h1>
      </motion.header>

      <motion.main
        className='flex-grow text-2xl flex items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <Menu />
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

      {/* Elementos decorativos de fondo */}
      <motion.div
        className='absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className='absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500 rounded-full opacity-10 blur-3xl'></div>
        <div className='absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl'></div>
      </motion.div>
    </div>
  );
};
