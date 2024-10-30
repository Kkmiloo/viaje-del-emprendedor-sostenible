import { useState } from 'react';
import man from '../../assets/man.webp';

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
          ¡Es hora de demostrar tu visión, ingenio y liderazgo! En este
          emocionante viaje, tomarás el rol de un emprendedor ambicioso que ha
          decidido transformar el mundo con soluciones innovadoras en energía
          solar. Tu misión: construir desde cero una empresa que desarrolle
          tecnologías solares, aportando al crecimiento sostenible y rentable.
        </p>
      )}

      {currentDialogueIndex == 1 && (
        <p className='text-xl mb-8'>
          A lo largo del juego, te enfrentarás a decisiones clave que pondrán a
          prueba tu capacidad para tomar decisiones estratégicas, gestionar
          recursos y liderar equipos. Comenzarás solo, desarrollando prototipos
          de paneles solares desde tu hogar. Con cada elección, tu empresa
          crecerá, incorporando talento y expandiéndose a nuevos mercados.
        </p>
      )}

      {currentDialogueIndex == 2 && (
        <p className='text-xl mb-8'>
          Tu objetivo es claro: convertirte en el CEO de una empresa líder en
          energía solar, transformando hogares, empresas, y ciudades con energía
          limpia. ¿Estás listo para iluminar el futuro con tu visión?
        </p>
      )}
      {currentDialogueIndex == 3 && (
        <p className='text-xl mb-8 font-bold '>
          ¡Adelante, emprendedor! El futuro de la energía está en tus manos.
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

      <img
        className='absolute -bottom-36 -left-24 object-cover z-30'
        width={220}
        src={man}
        alt='character'
      />
    </div>
  );
};
