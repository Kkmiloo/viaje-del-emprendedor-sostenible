import { motion, AnimatePresence } from 'framer-motion';
import {
  TrophyIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  LightBulbIcon,
} from '@heroicons/react/24/solid';


interface EndingProps {
  onRestart: () => void;
}

const AchievementStep = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <motion.div
    className='flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md'
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className='w-12 h-12 text-green-500' />
    <div>
      <h3 className='font-bold text-xl text-gray-800'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  </motion.div>
);

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
        className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm overflow-y-auto p-4 border'
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
            className='text-4xl font-extrabold mb-6 text-emerald-800 text-center'
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
              'Has completado un viaje extraordinario, transformando tu pequeña empresa local en un modelo de logística internacional.',
              'A lo largo de este desafío, demostraste visión estratégica, resiliencia y capacidad de adaptación.',
              'Cada decisión te acercó más a tu meta, superando obstáculos y optimizando recursos.',
            ].map((text, index) => (
              <motion.p
                key={index}
                className='text-xl text-gray-700'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Grid de Logros */}
          <motion.div
            className='grid md:grid-cols-2 gap-6 mb-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {achievements.map((achievement, index) => (
              <AchievementStep key={index} {...achievement} />
            ))}
          </motion.div>

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
