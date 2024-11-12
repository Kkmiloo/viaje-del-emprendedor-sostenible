import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RocketLaunchIcon,
  MapIcon,
  LightBulbIcon,
  PlayIcon,
  BellAlertIcon
} from '@heroicons/react/24/solid';

interface IntroductionProps {
  onStart: () => void;
}

const DialogueContent = [
  {
    title: '¡Bienvenidos al juego!',
    text: '¡Es hora de poner a prueba tu visión, ingenio y determinación! En este emocionante viaje, tomarás el papel de un emprendedor visionario que ha decidido cambiar el mundo con un enfoque innovador y sostenible.',
    icon: RocketLaunchIcon,
    color: 'text-emerald-600',
  },
  {
    title: 'Tu Misión',
    text: 'Construir desde cero una empresa de logística y entregas, que no solo sea rentable, sino también ecológicamente responsable',
    icon: BellAlertIcon,
    color: 'text-red-600',
  },
  {
    title: 'Desafíos',
    text: 'A lo largo del juego, te enfrentarás a desafíos empresariales que pondrán a prueba tus habilidades de liderazgo, toma de decisiones y gestión de recursos. Comenzarás con una pequeña flota de bicicletas en la vibrante ciudad de Sincelejo, y con cada decisión que tomes, tu empresa crecerá y se expandirá hacia nuevos mercados, utilizando siempre el transporte más adecuado para cada etapa del negocio.',
    icon: MapIcon,
    color: 'text-blue-600',
  },
  {
    title: '¿Dónde inicias?',
    text: 'Tu viaje comienza en Sincelejo, pero tu destino final es Coveñas, donde tendrás la oportunidad de liderar un negocio de exportación sostenible y transformar tu pequeña empresa en un gigante internacional.',
    icon: LightBulbIcon,
    color: 'text-yellow-600',
  },
];

export const Introduction = ({ onStart }: IntroductionProps) => {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

  const handleNextDialogue = () => {
    if (currentDialogueIndex < DialogueContent.length) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    }
  };

  return (
    <motion.div
      className='relative flex flex-col items-center w-full max-w-4xl m-auto p-10  h-auto rounded-2xl bg-gradient-to-br from-white to-gray-100 shadow-2xl border-4 border-gray-200'
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode='wait'>
        {currentDialogueIndex < DialogueContent.length ? (
          <>
            <motion.h1
              className='text-5xl mb-6 text-center font-extrabold text-gray-800 chewy'
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
             {DialogueContent[currentDialogueIndex].title}
            </motion.h1>
            <motion.div
              key={currentDialogueIndex}
              className='flex flex-col items-center text-justify '
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={`mb-6 ${DialogueContent[currentDialogueIndex].color}`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                {(() => {
                  const CurrentIcon =
                    DialogueContent[currentDialogueIndex].icon;
                  return <CurrentIcon className='w-20 h-20 mx-auto' />;
                })()}
              </motion.div>

              <p className='text-xl mb-8 text-gray-700 max-w-3xl'>
                {DialogueContent[currentDialogueIndex].text}
              </p>

              <motion.button
                onClick={handleNextDialogue}
                className='px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-all flex items-center space-x-2'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Continuar</span>
                <PlayIcon className='w-5 h-5' />
              </motion.button>
            </motion.div>
          </>
        ) : (
          <>
            <motion.h1
              className='text-5xl mb-6 text-center font-extrabold text-gray-800 chewy'
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Tu Viaje Emprendedor Comienza Aquí
            </motion.h1>
            <motion.div
              className='flex flex-col items-center text-center'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-xl  mb-8 font-bold text-gray-800'>
                ¡Adelante, emprendedor! Tu éxito depende de tus decisiones.
                ¿Estás listo para cambiar el mundo con cada entrega?
              </p>

              <motion.button
                className='px-10 py-4 bg-emerald-600 text-white rounded-full text-xl font-bold hover:bg-emerald-700 transition-all flex items-center space-x-2'
                onClick={onStart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>¡Comenzar Aventura!</span>
                <RocketLaunchIcon className='w-6 h-6' />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
