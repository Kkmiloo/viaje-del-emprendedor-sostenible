import { motion, AnimatePresence } from 'framer-motion';
import {
  ExclamationTriangleIcon,
  LightBulbIcon,
  BackwardIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';

interface GameOverProps {
  onRestart: () => void;
  score: number;
  bestScore: number;
}

const LessonLearned = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <motion.div
    className='flex items-center space-x-4 bg-red-50 p-4 rounded-lg shadow-md border border-red-200'
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className='w-12 h-12 text-red-500' />
    <div>
      <h3 className='font-bold text-xl text-gray-800'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  </motion.div>
);

export const GameOver = ({ onRestart }: GameOverProps) => {
  const lessons = [
    {
      icon: ExclamationTriangleIcon,
      title: 'Riesgo Empresarial',
      description:
        'Cada decisión tiene consecuencias. Analiza cuidadosamente antes de actuar.',
    },
    {
      icon: ChartBarIcon,
      title: 'Gestión Financiera',
      description: 'Mantén un equilibrio entre inversión, gastos y ingresos.',
    },
    {
      icon: LightBulbIcon,
      title: 'Adaptabilidad',
      description:
        'La flexibilidad y la capacidad de aprender de los errores son clave en el emprendimiento.',
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 z-50 flex items-center justify-center bg-red-100/80 backdrop-blur-sm overflow-y-auto p-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className='bg-white rounded-2xl shadow-2xl max-w-6xl w-full p-8 relative'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Título */}
          <motion.h1
            className='text-4xl font-extrabold mb-6 text-red-800 text-center'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Fin del Camino, Emprendedor
          </motion.h1>

          {/* Mensaje de Game Over */}
          <motion.div
            className='space-y-4 mb-8 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.p
              className='text-2xl text-gray-700 font-semibold'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Tu empresa ha llegado a su límite financiero.
            </motion.p>
            <motion.p
              className='text-xl text-gray-600'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              A veces, el camino del emprendimiento está lleno de desafíos
              inesperados.
            </motion.p>
          </motion.div>

          {/* Estadísticas */}

          {/* Lecciones Aprendidas */}
          <motion.div
            className='grid md:grid-cols-3 gap-6 mb-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {lessons.map((lesson, index) => (
              <LessonLearned key={index} {...lesson} />
            ))}
          </motion.div>

          {/* Mensaje Motivacional */}
          <motion.p
            className='text-lg italic text-gray-600 mb-8 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            "El fracaso no es el final, es una oportunidad para comenzar de
            nuevo con más sabiduría."
          </motion.p>

          {/* Botón de Reinicio */}
          <motion.div
            className='flex justify-center'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <button
              className='px-8 py-4 bg-red-500 text-white rounded-full text-xl font-bold hover:bg-red-600 transition-all shadow-lg flex items-center space-x-2'
              onClick={onRestart}
            >
              <BackwardIcon className='w-6 h-6' />
              <span>Intentar de Nuevo</span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameOver;
