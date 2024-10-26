import { Dialog } from '../../components/dialog/Dialog';
import { useGameStore } from '../../store';
import man from '../../assets/man.webp';
import scene1 from '../../assets/scene1.webp';
import { scenes } from '../../data/scenes';
import { useEffect, useState } from 'react';
import { Options } from '../../components/dialog/Options';
import { GameOptionI } from '../../interfaces/gameOption.interface';

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
  const [currentOptions, setCurrentOptions] = useState<GameOptionI[]>([]);

  const [currentStep, setCurrentStep] = useState<
    'consequence' | 'impact' | 'additionalContext' | null
  >(null);
  const [selectedOption, setSelectedOption] = useState<GameOptionI | null>(
    null
  );

  const handleOptionSelect = (option: GameOptionI) => {
    setSelectedOption(option); // Guardar la opción seleccionada
    setCurrentStep('consequence'); // Iniciar con 'consequence'

    // Cambiar entre cada paso
    setTimeout(() => setCurrentStep('impact'), 2000); 
    setTimeout(() => setCurrentStep('additionalContext'), 4000);
    setTimeout(() => {
      setCurrentStep(null); 
      setSelectedOption(null);
      changeScene({ isCorrect: option.isCorrect }); // Pasar al siguiente nivel
    }, 6000); 
  };

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
      const dialogOptions = currentSceneData.options;

      // Actualiza el estado de la escena y las opciones
      setCurrentScene(currentSceneData);
      setCurrentOptions(dialogOptions);
    }
  }, [level, decrementLives, changeLevel, isGameOver]);

  return (
    <main className='min-w-full min-h-screen bg-slate-400 flex flex-col'>
      {isGameOver ? (
        <div className='flex flex-col items-center justify-center h-full text-center text-3xl text-white'>
          <h1>Game Over</h1>
          <button
            className='mt-4 p-2 bg-red-500 rounded text-white'
            onClick={resetGame}
          >
            Reiniciar Juego
          </button>
        </div>
      ) : (
        <>
          <div className='relative w-full flex-1'>
            {/* Escena y Vidas */}
            <img
              className='absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center object-cover opacity-75'
              src={scene1}
              alt='background'
            />
            <div className='relative max-w-6xl m-auto px-4 z-20 text-2xl text-red-300 bg-stone-700'>
              <h1 className='font-bold text-gray-200 text-center'>{scenes[level - 1].name}</h1>
              <p>Numero de vidas</p>
              <p>{lives}</p>
            </div>
            <img
              className='absolute bottom-[90px] left-28 object-cover z-30'
              width={220}
              src={man}
              alt='character'
            />
          </div>

          {/* Contenido Condicional: Consecuencia, Impacto, Contexto */}
          {selectedOption ? (
            <div className='z-40 text-white text-center p-4 bg-gray-800 h-72'>
              {currentStep === 'consequence' && (
                <>
                  <p className='text-xl font-bold'> Consecuencia : </p>
                  <p>{selectedOption.consequence}</p>
                </>
              )}
              {currentStep === 'impact' && (
                <>
                  <p className='text-xl font-bold'> Impacto : </p>
                  <p>{selectedOption.impact}</p>
                </>
              )}
              {currentStep === 'additionalContext' && (
                <>
                  <p className='text-xl font-bold'> Contexto : </p>
                  <p>{selectedOption.additionalContext}</p>
                </>
              )}
            </div>
          ) : (
            <div className='z-40'>
              <Options
                options={currentOptions}
                onSelectOption={handleOptionSelect}
              />
            </div>
          )}

          <div className='relative w-full flex-shrink-0 pb-2'>
            <Dialog text={currentScene.introduction} />
          </div>
        </>
      )}
    </main>
  );
};

export default GamePage;
