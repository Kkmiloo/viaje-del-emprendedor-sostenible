interface GameLevelProps {
  level: number;
  onLevelComplete: () => void;
}

export const GameLevel = ({ level, onLevelComplete }: GameLevelProps) => {

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-slate-400'>
      <h1 className='text-3xl font-bold mb-4'>Nivel {level}</h1>
      {/* Aquí iría el contenido de las preguntas y opciones */}
      <button
        className='p-4 bg-blue-500 text-white rounded-md mt-8'
        onClick={onLevelComplete}
      >
        Completar Nivel
      </button>
    </div>
  );
};
