import { useGameStore } from '../../store';
import { Dialog } from '../../components/dialog/Dialog';
import { Options } from '../../components/dialog/Options';
import { scenes } from '../../data/scenes';
import { useEffect, useState } from 'react';
//import man from '../../assets/man.webp';
//import scene1 from '../../assets/scene1.webp';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { Introduction } from '../../components/game/Introduction';
import { Ending } from '../../components/game/Ending';
import { IntroLevel } from '../../components/game/IntroLevel';
import { HealthIndicator } from '../../components/game/HealthIndicator';
//import { Modal } from '../../components/dialog/Modal';
import GrowthChart from '../../components/charts/GrowthChart';
import { Resume } from '../../components/game/Resume';
//import robot from '../../assets/robotsito-04.png';
import robotIncorrecto from '../../assets/robotsito-05.png';
import robotCorrecto from '../../assets/robotsito-06.png';

import { Counter } from '../../components/text/Counter';
import { ProgressBar } from '../../components/stats/ProgressBar';
import Typewriter from '../../components/text/Typewriter';
import BackgroundMusic from '../../components/game/BackgroundMusic';

interface ChangeSceneParams {
  isCorrect: boolean;
}

const GamePage = () => {
  const {
    level,
    isGameOver,
    stage,
    changeStage,
    incrementLevel,
    decrementLives,
    resetGame,
    balance,
    setGoal,
    setMoneyPerInstallation,
    setGameBalance,
    setReputation,
    setTrust,
    reputation,
    trust,
    goal,
  } = useGameStore();
  const [currentScene, setCurrentScene] = useState(scenes[level - 1]);
  const [currentOptions, setCurrentOptions] = useState<GameOptionI[]>([]);
  const [currentStep, setCurrentStep] = useState<
    'consequence' | 'impact' | 'additionalContext' | 'incorrectAnswer' | null
  >('consequence');
  const [showResume, setShowResumen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<GameOptionI | null>(
    null
  );
  const [showIntroLevel, setShowIntroLevel] = useState<boolean>(true);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [finishedAnimation, setFinishedAnimation] = useState(false);
  const [toggleMusic, setToggleMusic] = useState(false)

  const handleIntroLevel = () => {
    setShowIntroLevel(false);
    setTimeout(() => setFinishedAnimation(true), 200);
  };

  const handleShowOptions = () => {
    setShowOptions(true);
  };

  const handleOptionResult = () => {
    setCurrentStep(null);
    setSelectedOption(null);
    changeScene({ isCorrect: selectedOption!.isCorrect });
    setShowIntroLevel(true);
    setShowOptions(false);
    setShowQuestion(false);
    setShowResumen(false);
  };

  const handleOptionSelect = (option: GameOptionI) => {
    setSelectedOption(option);
    setTrust(option.trustResult);
    setReputation(option.reputationResult);
    setGameBalance(option.balance, option.invest);
    setCurrentStep('consequence');
    setShowResumen(true);
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
      setGoal(currentSceneData.goal);
      setMoneyPerInstallation(currentSceneData.moneyPerInstallation);
      setCurrentScene(currentSceneData);
      setCurrentOptions(currentSceneData.options);
    }
  }, [level, decrementLives, incrementLevel, isGameOver]);

  return (
    <main className='relative min-w-full min-h-screen flex flex-col justify-center w-full h-full '>
      <BackgroundMusic togglePlay={toggleMusic} />
      <div className='absolute inset-0 blur-sm bg-scene1  h-screen w-screen bg-contain bg-no-repeat object-cover'></div>
      {stage === 'introduction' && (
        <Introduction
          onStart={() => {
            setToggleMusic(true)
            changeStage('level');
          }}
        />
      )}
      {stage === 'level' && !isGameOver && (
        <>
          {showIntroLevel && (
            <IntroLevel title={currentScene.name} onClick={handleIntroLevel} />
          )}
          {/* <img
            className='absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center object-cover'
            src={scene1}
            alt='background'
          /> */}
          <div className=' w-full flex flex-col z-20 '>
            <div className='max-w-6xl items-center m-auto px-4 z-20   bg-slate-700 w-full rounded-xl flex justify-between p-2 md:p-4 border-2 border-slate-200'>
              <h2 className='font-bold text-center text-white '>
                {currentScene.name}
              </h2>
            </div>
            <div className='max-w-6xl m-auto flex justify-between items-center w-full px-6 py-2 bg-slate-700 border-2 rounded-xl'>
              <div className='text-white font-bold'>
                {' '}
                💰 $ {Intl.NumberFormat().format(balance)} COP{' '}
              </div>
              <HealthIndicator />
            </div>
            {/* <img
              className='absolute bottom-[90px] left-28 object-cover z-30'
              width={220}
              src={man}
              alt='character'
            /> */}

            <Dialog
              text={currentScene.introduction}
              question={currentScene.question}
              onNext={handleShowOptions}
              showQuestion={showQuestion}
              setShowQuestion={setShowQuestion}
              finishedAnimation={finishedAnimation}
            />
            {selectedOption && (
              <>
                {/* {currentStep === 'consequence' && (
                  <Modal
                    text={selectedOption.consequence}
                    onConfirm={() => {
                      setCurrentStep('impact');
                    }}
                  ></Modal>
                )}
                {currentStep === 'impact' && (
                  <Modal
                    text={selectedOption.impact}
                    onConfirm={() => {
                      setCurrentStep('additionalContext');
                    }}
                  >
                    <GrowthChart />{' '}
                  </Modal>
                )}
                {currentStep === 'additionalContext' && (
                  <Modal
                    text={selectedOption.additionalContext!}
                    onConfirm={() => {}}
                  />
                )} */}
                {showResume && (
                  <Resume
                    onConfirm={() => {
                      if (currentStep !== null) {
                        if (currentStep === 'consequence') {
                          setCurrentStep('impact');
                        } else if (currentStep === 'impact') {
                          setCurrentStep('additionalContext');
                        } else if (currentStep === 'additionalContext') {
                          if (!selectedOption.isCorrect) {
                            setCurrentStep('incorrectAnswer');
                          } else {
                            handleOptionResult();
                          }
                        } else {
                          handleOptionResult();
                        }
                      }
                    }}
                  >
                    <div className='font-bold '>
                      <div className='flex w-full mb-5'>
                        <img
                          src={
                            selectedOption.isCorrect
                              ? robotCorrecto
                              : robotIncorrecto
                          }
                          alt=''
                          className='w-32 h-32'
                        />
                        <div className='ml-12'>
                          {currentStep === 'consequence' && (
                            <Typewriter
                              text={selectedOption.consequence}
                              animationFinished={false}
                              delay={40}
                              onComplete={() => {}}
                            />
                          )}{' '}
                          {currentStep === 'impact' && (
                            <Typewriter
                              text={selectedOption.impact}
                              animationFinished={false}
                              delay={40}
                              onComplete={() => {}}
                            />
                          )}
                          {currentStep === 'additionalContext' && (
                            <Typewriter
                              text={selectedOption.additionalContext}
                              animationFinished={false}
                              delay={40}
                              onComplete={() => {}}
                            />
                          )}
                          {currentStep === 'incorrectAnswer' && (
                            <Typewriter
                              text={currentScene.incorrectQuestionMessage}
                              animationFinished={false}
                              delay={40}
                              onComplete={() => {}}
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <div className='flex flex-col items-center w-full px-4 '>
                          <div className=' flex w-full justify-between items-center animate-fade-right animate-ease-in'>
                            {' '}
                            <p>Paneles: </p>{' '}
                            <ProgressBar
                              max={goal}
                              value={selectedOption.numberPanels}
                              progress='ratio'
                              color='red'
                            />{' '}
                          </div>

                          <div className='flex w-full justify-between items-center'>
                            <p>Reputación : </p>
                            <ProgressBar
                              max={100}
                              value={reputation}
                              progress='percent'
                              color='red'
                            />{' '}
                          </div>
                          <div className='flex w-full justify-between items-center'>
                            <p>Confianza : </p>
                            <ProgressBar
                              max={100}
                              value={trust}
                              progress='percent'
                              color='red'
                            />{' '}
                          </div>
                          <div className='flex w-full justify-between items-center mb-4'>
                            <p>Ingresos:</p>
                            <div className='flex mr-4'>
                              <Counter
                                duration={4}
                                number={currentScene.moneyPerInstallation}
                              />{' '}
                              *{' '}
                              <Counter
                                duration={4}
                                number={selectedOption.numberPanels}
                              />
                            </div>
                            <Counter
                              duration={4}
                              number={selectedOption.balance}
                            />
                          </div>
                        </div>
                        <GrowthChart />
                      </div>
                    </div>
                  </Resume>
                )}
              </>
            )}
            {showOptions && (
              <Options
                options={currentOptions}
                onSelectOption={handleOptionSelect}
              />
            )}
          </div>
        </>
      )}

      {isGameOver && (
        <div className='flex flex-col items-center justify-center h-full text-center text-3xl text-white z-40 bg-slate-700 m-auto p-12 rounded-lg border-4 border-gray-300'>
          <h1>Game Over</h1>
          <button
            className='mt-4 p-2 bg-red-500 rounded text-white hover:bg-red-700'
            onClick={resetGame}
          >
            Reiniciar Juego
          </button>
        </div>
      )}
      {stage === 'ending' && !isGameOver && <Ending onRestart={resetGame} />}
    </main>
  );
};

export default GamePage;
