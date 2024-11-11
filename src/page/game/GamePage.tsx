import { useGameStore } from '../../store';
import { Dialog } from '../../components/dialog/Dialog';
import { Options } from '../../components/dialog/Options';
import { scenes } from '../../data/scenes';
import { useEffect, useState } from 'react';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { Introduction } from '../../components/game/Introduction';
import { Ending } from '../../components/game/Ending';
import { IntroLevel } from '../../components/game/IntroLevel';
//import { HealthIndicator } from '../../components/game/HealthIndicator';
// import GrowthChart from '../../components/charts/GrowthChart';
//import { Resume } from '../../components/game/Resume';
// import { Counter } from '../../components/text/Counter';
// import { ProgressBar } from '../../components/stats/ProgressBar';
// import Typewriter from '../../components/text/Typewriter';
import BackgroundMusic from '../../components/game/BackgroundMusic';
import { ResultSummary } from '../../components/game/ResultSummary';
import GameOver from '../../components/game/GameOver';
import { GameHeader } from '../../components/game/GameHeader';

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
  const [showIntroText, setShowIntroText] = useState(false);
  const [finishedAnimationResume, setFinishedAnimationResume] = useState(false);

  const [toggleMusic, setToggleMusic] = useState(false);

  const handleIntroLevel = () => {
    setShowIntroLevel(false);
    setTimeout(() => setShowIntroText(true), 200);
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
    setShowIntroText(false);
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
      <div className='absolute inset-0 blur-md bg-scene1   bg-cover  bg-no-repeat object-fill'></div>
      {stage === 'introduction' && (
        <Introduction
          onStart={() => {
            setToggleMusic(true);
            changeStage('level');
          }}
        />
      )}
      {stage === 'level' && !isGameOver && (
        <>
          {/* <GameInterface></GameInterface> */}
          {showIntroLevel && (
            <IntroLevel title={currentScene.name} onClick={handleIntroLevel} />
          )}
          {/* <img
            className='absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center object-cover'
            src={scene1}
            alt='background'
          /> */}
          <div className=' w-full flex flex-col z-20 '>
            <GameHeader balance={balance} currentScene={currentScene} />
            <Dialog
              text={currentScene.introduction}
              question={currentScene.question}
              onNext={handleShowOptions}
              showQuestion={showQuestion}
              setShowQuestion={setShowQuestion}
              showIntroText={showIntroText}
            />
            {selectedOption && (
              <>
                {showResume && (
                  <ResultSummary
                    onConfirm={() => {
                      if (!finishedAnimationResume) {
                        setFinishedAnimationResume(true);
                        return;
                      } else if (currentStep !== null) {
                        setFinishedAnimationResume(false);
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
                    currentScene={currentScene}
                    currentStep={currentStep}
                    finishedAnimationResume={finishedAnimationResume}
                    goal={goal}
                    reputation={reputation}
                    selectedOption={selectedOption}
                    trust={trust}
                    setFinishedAnimationResume={() =>
                      setFinishedAnimationResume(true)
                    }
                  />
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
        <GameOver onRestart={resetGame} bestScore={12} score={12} />
      )}

      {stage === 'ending' && !isGameOver &&  <Ending onRestart={resetGame} />}
    </main>
  );
};

export default GamePage;
