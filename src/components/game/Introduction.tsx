import { useState } from 'react';
//import man from '../../assets/man.webp';

interface IntroductionProps {
  onStart: () => void;
}

export const Introduction = ({ onStart }: IntroductionProps) => {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const totalDialogues = 4;

  // Función para avanzar al siguiente diálogo
  const handleNextDialogue = () => {
    if (currentDialogueIndex < totalDialogues - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    }
  };

  return (
    <div className='relative flex flex-col items-center justify-between w-full max-w-6xl m-auto p-10 min-h-96 h-auto rounded-xl border-4 bg-gray-100'>
      <h1 className='text-5xl mb-4 chewy'>Bienvenido al Juego</h1>

      {currentDialogueIndex == 0 && (
        <p className='text-xl mb-8'>
          ¡Es hora de poner a prueba tu visión, ingenio y determinación! En este
          emocionante viaje, tomarás el papel de un emprendedor visionario que
          ha decidido cambiar el mundo con un enfoque innovador y sostenible. Tu
          misión: construir desde cero una empresa de logística y entregas, que
          no solo sea rentable, sino también ecológicamente responsable.
        </p>
      )}

      {currentDialogueIndex == 1 && (
        <p className='text-xl mb-8'>
          A lo largo del juego, te enfrentarás a desafíos empresariales que
          pondrán a prueba tus habilidades de liderazgo, toma de decisiones y
          gestión de recursos. Comenzarás con una pequeña flota de bicicletas en
          la vibrante ciudad de Sincelejo, y con cada decisión que tomes, tu
          empresa crecerá y se expandirá hacia nuevos mercados, utilizando
          siempre el transporte más adecuado para cada etapa del negocio.
        </p>
      )}

      {currentDialogueIndex == 2 && (
        <p className='text-xl mb-8'>
          Tu viaje comienza en Sincelejo, pero tu destino final es Coveñas,
          donde tendrás la oportunidad de liderar un negocio de exportación
          sostenible y transformar tu pequeña empresa en un gigante
          internacional.
        </p>
      )}
      {currentDialogueIndex == 3 && (
        <p className='text-xl mb-8 font-bold '>
          ¡Adelante, emprendedor! Tu éxito depende de tus decisiones. ¿Estás
          listo para cambiar el mundo con cada entrega?
        </p>
      )}

      {currentDialogueIndex < totalDialogues - 1 ? (
        <button
          onClick={handleNextDialogue}
          className='p-4 bg-slate-600 text-slate-50 rounded-lg hover:bg-slate-700 '
        >
          Continuar
        </button>
      ) : (
        <button
          className='p-4 bg-slate-600 text-slate-50 rounded-lg hover:bg-slate-700 '
          onClick={onStart}
        >
          ¡Comenzar Juego!
        </button>
      )}
    </div>
  );
};
