import { motion } from 'framer-motion';
import { Counter } from '../text/Counter';
import { ProgressBar } from '../stats/ProgressBar';
import GrowthChart from '../charts/GrowthChart';
import Typewriter from '../text/Typewriter';
import robotIncorrecto from '../../assets/robotsito-05.png';
import robotCorrecto from '../../assets/robotsito-06.png';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { GameLevelI } from '../../interfaces/gameLevel.interface';

interface ResultSummaryProps {
  selectedOption: GameOptionI;
  currentStep: string | null;
  currentScene: GameLevelI;
  goal: number;
  reputation: number;
  trust: number;
  finishedAnimationResume: boolean;
  setFinishedAnimationResume: () => void;
  onConfirm: () => void;
}

export const ResultSummary = ({
  selectedOption,
  currentStep,
  currentScene,
  goal,
  reputation,
  trust,
  finishedAnimationResume,
  setFinishedAnimationResume,
  onConfirm,
}: ResultSummaryProps) => {
  // Determinar la imagen del robot y el color del tema
  const robotImage = selectedOption.isCorrect ? robotCorrecto : robotIncorrecto;
  const themeColor = selectedOption.isCorrect ? 'green' : 'red';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 flex items-center justify-center  bg-black/50 backdrop-blur-sm'
      onClick={onConfirm}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className='bg-white w-11/12 max-w-4xl rounded-2xl h-11/12 shadow-2xl '
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera */}
        <div
          className={`bg-${themeColor}-600 text-white p-4 flex justify-between items-center bg-slate-700`}
        >
          <h2 className={`text-xl font-bold text-white`}>Resumen</h2>
        </div>

        {/* Contenido Principal */}
        <div className='p-6 '>
          <div
            className='flex items-center mb-6 bg-gray-100 rounded-xl p-4 cursor-pointer relative'
            onClick={onConfirm}
          >
            <motion.img
              src={robotImage}
              alt='Resultado'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='md:w-40 md:h-40 w-24 h-24 mr-6 object-contain'
            />
            <>
              <div className='flex-grow text-justify pb-6'>
                <div
                  className={`text-${themeColor}-600 font-bold text-xl mb-2 `}
                >
                  {selectedOption.isCorrect ? 'Correcto' : 'Incorrecto'}
                </div>
                {currentStep === 'consequence' && (
                  <Typewriter
                    text={selectedOption.consequence}
                    animationFinished={finishedAnimationResume}
                    delay={40}
                    onComplete={() => {
                      setFinishedAnimationResume();
                    }}
                  />
                )}{' '}
                {currentStep === 'impact' && (
                  <Typewriter
                    text={selectedOption.impact}
                    animationFinished={finishedAnimationResume}
                    delay={40}
                    onComplete={() => {
                      setFinishedAnimationResume();
                    }}
                  />
                )}{' '}
                {currentStep === 'additionalContext' && (
                  <Typewriter
                    text={selectedOption.additionalContext}
                    animationFinished={finishedAnimationResume}
                    delay={40}
                    onComplete={() => {
                      setFinishedAnimationResume();
                    }}
                  />
                )}{' '}
                {currentStep === 'incorrectAnswer' && (
                  <Typewriter
                    text={currentScene.incorrectQuestionMessage}
                    animationFinished={finishedAnimationResume}
                    delay={40}
                    onComplete={() => {
                      setFinishedAnimationResume();
                    }}
                  />
                )}
              </div>
            </>
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                y: [0, -5, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className='absolute bottom-2 right-3 text-sm text-gray-500 italic flex items-center'
            >
              <span>Haz click para continuar</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z'
                  clipRule='evenodd'
                />
              </svg>
            </motion.div>
          </div>

          {/* Métricas */}
          <div className='space-y-4'>
            <MetricRow
              label='Paneles'
              max={goal}
              value={selectedOption.numberPanels}
              progressType='ratio'
            />
            <MetricRow
              label='Reputación'
              max={100}
              value={reputation}
              progressType='percent'
            />
            <MetricRow
              label='Confianza'
              max={100}
              value={trust}
              progressType='percent'
            />

            {/* Sección de Ingresos */}
            <motion.div
              className='bg-gray-100 rounded-xl p-4 flex justify-between items-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className='font-semibold text-gray-700'>Ingresos</span>
              <div className='flex items-center space-x-2'>
                <div className='flex items-center'>
                  <Counter
                    duration={4}
                    number={currentScene.moneyPerInstallation}
                  />
                  <span className='mx-2'>x</span>
                  <Counter duration={4} number={selectedOption.numberPanels} />
                </div>
                <motion.div
                  className={`font-bold text-${themeColor}-600 text-xl`}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  <Counter duration={4} number={selectedOption.balance} />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Gráfico de Crecimiento */}
          <motion.div
            className='mt-6 max-h-80 h-auto flex justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <GrowthChart />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Componente de fila de métrica reutilizable

interface MetricRowProps {
  label: string;
  max: number;
  value: number;
  progressType: 'percent' | 'ratio';
}

const MetricRow = ({ label, max, value, progressType }: MetricRowProps) => (
  <motion.div
    className='flex items-center space-x-4'
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <span className='font-semibold text-gray-700 w-24'>{label}</span>
    <ProgressBar max={max} value={value} progress={progressType} />
  </motion.div>
);
