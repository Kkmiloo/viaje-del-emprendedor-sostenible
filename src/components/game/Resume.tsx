import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface ResumeProps {
  onConfirm: () => void;
  children?: ReactNode;
  title?: string;
}

export const Resume = ({
  onConfirm,
  children,
  title = 'Resumen',
}: ResumeProps) => {
  // Variantes de animación para un efecto más suave
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  // Manejador de teclado para accesibilidad
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onConfirm();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 flex items-center justify-center z-50 p-4'
        onClick={onConfirm}
        role='dialog'
        aria-modal='true'
        tabIndex={-1}
      >
        {/* Overlay con efecto de desenfoque */}
        <motion.div
          initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
          animate={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
          className='absolute inset-0 backdrop-blur-sm'
        />

        {/* Contenedor del modal */}
        <motion.div
          variants={modalVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          onClick={(e) => e.stopPropagation()}
          className='
            relative 
            bg-white 
            rounded-2xl 
            shadow-2xl 
            w-full 
            max-w-4xl 
            max-h-[90vh] 
            overflow-y-auto 
            border-4 
            border-gray-200
          '
          role='document'
          onKeyDown={handleKeyDown}
        >
          {/* Cabecera */}
          <div
            className='
            bg-gradient-to-r 
            from-slate-700 
            to-slate-800 
            text-white 
            p-4 
            rounded-t-xl
          '
          >
            <h2 className='text-xl font-bold text-center flex items-center justify-between'>
              {title}
              <button
                onClick={onConfirm}
                className='
                  hover:bg-slate-600 
                  rounded-full 
                  p-2 
                  transition-colors
                '
                aria-label='Cerrar'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </h2>
          </div>

          {/* Contenido */}
          <div className='p-6 max-h-[70vh] overflow-y-auto'>{children}</div>

          {/* Indicador de más contenido */}
          <motion.div
            animate={{
              y: [0, 10, 0],
              transition: {
                repeat: Infinity,
                duration: 1.5,
              },
            }}
            className='
              absolute 
              bottom-4 
              left-1/2 
              transform 
              -translate-x-1/2
              text-gray-500
            '
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 512 298.04'
              fill='currentColor'
            >
              <path
                fillRule='nonzero'
                d='M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z'
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
