import { motion, AnimatePresence } from 'framer-motion';
import {
  TrophyIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  LightBulbIcon,
} from '@heroicons/react/24/solid';
import AchievementCarousel from '../text/ArchievementCarousel';


interface EndingProps {
  onRestart: () => void;
}


export const Ending = ({ onRestart }: EndingProps) => {
  const achievements = [
    {
      icon: TrophyIcon,
      title: 'Expansión Logística',
      description:
        'Transformaste tu operación local en un modelo de logística internacional.',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Crecimiento Estratégico',
      description:
        'Superaste obstáculos y escalaste tu negocio desde Sincelejo hasta Coveñas.',
    },
    {
      icon: CheckCircleIcon,
      title: 'Gestión Empresarial',
      description:
        'Dominaste aspectos clave de administración y toma de decisiones.',
    },
    {
      icon: LightBulbIcon,
      title: 'Mentalidad Emprendedora',
      description:
        'Desarrollaste habilidades cruciales para el éxito empresarial real.',
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className=' inset-0 z-50 flex items-center text-base justify-center overflow-y-auto p-4'
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
            className='md:text-4xl text-2xl font-extrabold mb-6 text-emerald-800 text-center'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ¡Felicidades, Emprendedor Sostenible!
          </motion.h1>

          {/* Párrafos de introducción */}
          <motion.div
            className='space-y-4 mb-8 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[
              'Has completado un viaje extraordinario, transformando tu pequeña empresa local en un modelo de logística internacional. A lo largo de este desafío, demostraste visión estratégica, resiliencia y capacidad de adaptación.',
            ].map((text, index) => (
              <motion.p
                key={index}
                className='md:text-xl text-base text-justify text-gray-700'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Grid de Logros */}
          <motion.h2
            className='text-3xl font-bold md:mb-3 mb-6 mt-0  text-center text-green-500'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} // Añadido text-center
          >
            Logros
          </motion.h2>

          <div className='mb-10'>
            <AchievementCarousel achievements={achievements} />
          </div>

          {/* Cita motivacional */}
          <motion.p
            className='text-lg italic text-gray-600 mb-8 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            "El verdadero éxito no es llegar, sino seguir creciendo. Cada
            desafío es una oportunidad para aprender y transformarte."
          </motion.p>

          {/* Botón de reinicio */}
          <motion.div
            className='flex justify-center'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <button
              className='px-8 py-4 bg-emerald-500 text-white rounded-full text-xl font-bold hover:bg-emerald-600 transition-all shadow-lg'
              onClick={onRestart}
            >
              Reiniciar Viaje
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Ending;
