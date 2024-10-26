import { useGameStore } from '../../store';
import { Dialog } from '../../components/dialog/Dialog';
import { Options } from '../../components/dialog/Options';
import { scenes } from '../../data/scenes';
import { useEffect, useState } from 'react';
import man from '../../assets/man.webp';
import scene1 from '../../assets/scene1.webp';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { Introduction } from '../../components/dialog/Introduction'; 
import { Ending } from '../../components/dialog/Ending';

interface ChangeSceneParams {
  isCorrect: boolean;
}

const GamePage = () => {
  const {
    level,
    lives,
    isGameOver,
    stage,
    changeStage,
    incrementLevel,
    decrementLives,
    resetGame,
  } = useGameStore();
  const [currentScene, setCurrentScene] = useState(scenes[level - 1]);
  const [currentOptions, setCurrentOptions] = useState<GameOptionI[]>([]);
  const [currentStep, setCurrentStep] = useState<
    'consequence' | 'impact' | 'additionalContext' | null
  >(null);
  const [selectedOption, setSelectedOption] = useState<GameOptionI | null>(
    null
  );

  const handleOptionSelect = (option: GameOptionI) => {
    setSelectedOption(option);
    setCurrentStep('consequence');

    setTimeout(() => setCurrentStep('impact'), 2000);
    setTimeout(() => setCurrentStep('additionalContext'), 4000);
    setTimeout(() => {
      setCurrentStep(null);
      setSelectedOption(null);
      changeScene({ isCorrect: option.isCorrect });
    }, 6000);
  };

  const changeScene = ({ isCorrect }: ChangeSceneParams) => {
    if (!isCorrect) {
      decrementLives();
    }
    if (level < scenes.length) {
      incrementLevel();
    } else {
      changeStage('ending');
    }
  };

  useEffect(() => {
    if (isGameOver) return;

    const currentSceneData = scenes.find((scene) => scene.level === level);
    if (currentSceneData) {
      setCurrentScene(currentSceneData);
      setCurrentOptions(currentSceneData.options);
    }
  }, [level, decrementLives, incrementLevel, isGameOver]);

  // Renderización de acuerdo a la etapa del juego
  return (
    <main className='min-w-full min-h-screen bg-slate-400 flex flex-col'>
      {stage === 'introduction' && (
        <Introduction onStart={() => changeStage('level')} />
      )}
      {stage === 'level' && !isGameOver && (
        <>
          <div className='relative w-full flex-1'>
            <img
              className='absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center object-cover opacity-75'
              src={scene1}
              alt='background'
            />
            <div className='relative max-w-6xl m-auto px-4 z-20 text-2xl text-red-300 bg-stone-700'>
              <h1 className='font-bold text-gray-200 text-center'>
                {currentScene.name}
              </h1>
              <p>Numero de vidas: {lives}</p>
            </div>
            <img
              className='absolute bottom-[90px] left-28 object-cover z-30'
              width={220}
              src={man}
              alt='character'
            />
          </div>

          {selectedOption ? (
            <div className='z-40 text-white text-center p-4 bg-gray-800 h-72'>
              {currentStep === 'consequence' && (
                <p>Consecuencia: {selectedOption.consequence}</p>
              )}
              {currentStep === 'impact' && (
                <p>Impacto: {selectedOption.impact}</p>
              )}
              {currentStep === 'additionalContext' && (
                <p>Contexto adicional: {selectedOption.additionalContext}</p>
              )}
            </div>
          ) : (
            <Options
              options={currentOptions}
              onSelectOption={handleOptionSelect}
            />
          )}
          <Dialog text={currentScene.introduction} />
        </>
      )}
      {isGameOver && (
        <div className='flex flex-col items-center justify-center h-full text-center text-3xl text-white'>
          <h1>Game Over</h1>
          <button
            className='mt-4 p-2 bg-red-500 rounded text-white'
            onClick={resetGame}
          >
            Reiniciar Juego
          </button>
        </div>
      )}
      {stage === 'ending' && <Ending onRestart={resetGame} />}
    </main>
  );
};

export default GamePage;
