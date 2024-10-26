import { Dialog } from '../../components/dialog/Dialog';
import { useGameStore } from '../../store';
import man from '../../assets/man.webp';
import scene1 from '../../assets/scene1.webp';
import { scenes } from '../../data/scenes';
import { useEffect, useState } from 'react';
import { Options } from '../../components/dialog/Options';

interface ChangeSceneParams {
  isCorrect: boolean;
}
const GamePage = () => {
  const level = useGameStore((state) => state.level);
  const lives = useGameStore((state) => state.lives);
  const isGameOver = useGameStore((state) => state.isGameOver);
  const decrementLives = useGameStore((state) => state.decrementLives);
  const changeLevel = useGameStore((state) => state.changeLevel);
  const resetGame = useGameStore((state) => state.resetGame);

  const [currentScene, setCurrentScene] = useState(scenes[level - 1]);
  const [currentOptions, setCurrentOptions] = useState<
    { id: number; text: string; action: () => void }[]
  >([]);

  const changeScene = ({ isCorrect }: ChangeSceneParams) => {
    if (!isCorrect) {
      decrementLives();
    }

    // Solo cambia el nivel si hay un siguiente nivel disponible
    if (level < scenes.length) {
      changeLevel(level + 1);
    }
  };

  useEffect(() => {
    if (isGameOver) {
      return; // Detener la ejecución si el juego ha terminado
    }

    // Encuentra la escena actual por nivel
    const currentSceneData = scenes.find((scene) => scene.level === level);

    if (currentSceneData) {
      // Mapea las opciones de diálogo para incluir la función `changeScene`
      const dialogOptions = currentSceneData.options.map((option) => ({
        id: option.id,
        text: option.text,
        action: () => changeScene({ isCorrect: option.isCorrect }),
      }));

      // Actualiza el estado de la escena y las opciones
      setCurrentScene(currentSceneData);
      setCurrentOptions(dialogOptions);
    }
  }, [level, decrementLives, changeLevel, isGameOver]);

  const handleResetGame = () => {
    resetGame(); // Reinicia el juego
  };

  return (
    <main className='min-w-full min-h-screen bg-slate-400 flex flex-col'>
      {isGameOver ? (
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <h1 className='text-4xl text-red-500'>Game Over</h1>
          <button
            onClick={handleResetGame}
            className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
          >
            Reiniciar Juego
          </button>
        </div>
      ) : (
        <>
          <div className='relative w-full flex-1'>
            <img
              className='absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center object-cover opacity-75'
              src={scene1}
              alt='background'
            />
            <div className='relative max-w-6xl m-auto px-4 z-20 text-2xl text-red-300 bg-stone-700'>
              <p className=''>Numero de vidas</p>
              <p>{lives}</p>
              <h1>{scenes[level - 1].name}</h1>
            </div>
            <img
              className='absolute bottom-[300px] left-28 object-cover z-30'
              width={220}
              src={man}
              alt='character'
            />
          </div>
          <div className='z-40'>
            <Options options={currentOptions} />
          </div>
          <div className='relative w-full flex-shrink-0 pb-2'>
            <Dialog text={currentScene.introduction} />
          </div>
        </>
      )}
    </main>
  );
};

export default GamePage;
