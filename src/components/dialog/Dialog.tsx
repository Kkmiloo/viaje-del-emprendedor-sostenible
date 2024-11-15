import {  useState } from 'react';
//import man from '../../assets/man.webp';
import robot from '../../assets/robotsito-04.png';
import robotQuestion from '../../assets/robotsito-07.png';

import Typewriter from '../text/Typewriter';
import { useGameStore } from '../../store';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface DialogProps {
  text: string;
  question?: string;
  showQuestion?: boolean;
  setShowQuestion?: (showQuestion: boolean) => void;
  showIntroText?: boolean;
  onNext: () => void;
}
export const Dialog = ({
  text,
  question,
  onNext,
  showQuestion,
  setShowQuestion,
  showIntroText,
}: DialogProps) => {
  //const containerRef = useRef<HTMLDivElement>(null);

  const [animationFinished, setAnimationFinished] = useState(false);
  const [animationFinishedIntro, setAnimationFinishedIntro] = useState(false);

  const { goal, moneyPerInstallation } = useGameStore();

  const handleNext = () => {

    if (!animationFinished || !animationFinishedIntro) {
      setAnimationFinished(true);
      setAnimationFinishedIntro(true);
    } else if (question) {
      if (setShowQuestion) setShowQuestion(true);
      setAnimationFinished(false);
      setAnimationFinishedIntro(false);

      onNext();
    }
  };

  return (
    <motion.div
      className={`
        ${!showQuestion ? 'cursor-pointer' : ''} 
        py-6 px-6 md:py-10 text-gray-800 text-xl text-justify font-medium 
        rounded-xl border-4 bg-white md:h-[220px] w-full h-auto 
        max-w-6xl min-h-44 md:min-h-40 m-auto z-20
      `}
      onClick={handleNext}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className='h-full flex flex-col justify-between'>
        <div
          className={`flex h-full ${
            showQuestion && question ? 'items-start' : ''
          }`}
        >
          {/* Robot Image */}
          <motion.img
            src={showQuestion ? robotQuestion : robot}
            className='max-w-28 max-h-28 md:max-w-36 md:max-h-36  rounded-xl p-2'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Dialog Content */}
          <div
            className={`
              flex h-full ml-3 md:ml-8 w-full text-base md:text-xl
              ${showQuestion ? 'justify-start' : 'justify-between flex-col '}
            `}
          >
            {/* Intro Text */}
            {!showQuestion && (
              <div className='text-justify'>
                {showIntroText && (
                  <Typewriter
                    text={text}
                    delay={50}
                    animationFinished={animationFinishedIntro}
                    onComplete={() => setAnimationFinishedIntro(true)}
                  />
                )}
              </div>
            )}

            {/* Question Section */}
            {showQuestion && question && (
              <div className='flex flex-col md:flex-row gap-4'>
                {/* Goal and Money Info */}
                <motion.div
                  className='flex md:flex-col gap-1 border  w-full px-3 h-fit md:w-fit mb-2 p-1 md:p-4 bg-white shadow-md text-base md:text-xl rounded-lg'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <h2 className='font-bold text-xl border-b border-slate-400 mr-2 pb-2 mb-0 md:mb-2'>
                    Objetivo
                  </h2>
                  <div className='flex items-center mb-2'>
                    <span className='text-red-600 text-xl mr-2'>🏁</span>
                    <p className='text-lg'>{goal}</p>
                  </div>
                  <div className='flex items-center'>
                    <span className='text-green-600 text-xl mr-2'>💸</span>
                    <p className='text-lg'>
                      {Intl.NumberFormat('es-CO').format(moneyPerInstallation)}
                    </p>
                  </div>
                </motion.div>

                {/* Question Text */}
                <div className='ml-4'>
                  <Typewriter
                    text={question}
                    delay={50}
                    animationFinished={animationFinished}
                    onComplete={() => setAnimationFinished(true)}
                  />
                </div>
              </div>
            )}

            {/* Continue Indicator */}
            {!showQuestion && (
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 1.5,
                  },
                }}
                className='mr-6 transform flex items-center justify-center text-gray-500'
              >
                <ChevronDownIcon className='w-8 h-8' />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
