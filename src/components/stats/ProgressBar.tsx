import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  progress?: 'ratio' | 'percent' | 'value';
  label?: string;
}

export const ProgressBar = ({
  value,
  max,
  progress = 'ratio',
  label,
}: ProgressBarProps) => {
  const [progressValue, setProgressValue] = useState(0);

  // Función para determinar el color basado en el porcentaje
  const getColorByPercentage = (percentage: number) => {
    if (percentage < 25) return 'red';
    if (percentage < 50) return 'yellow';
    if (percentage < 75) return 'blue';
    return 'green';
  };

  // Calcular porcentaje
  const percentage = Math.min((value / max) * 100, 100);
  const color = getColorByPercentage(percentage);

  // Colores personalizados
  const colorVariants = {
    green: {
      bg: 'bg-green-100',
      bar: 'bg-green-500',
      text: 'text-green-700',
    },
    blue: {
      bg: 'bg-blue-100',
      bar: 'bg-blue-500',
      text: 'text-blue-700',
    },
    red: {
      bg: 'bg-red-100',
      bar: 'bg-red-500',
      text: 'text-red-700',
    },
    yellow: {
      bg: 'bg-yellow-100',
      bar: 'bg-yellow-500',
      text: 'text-yellow-700',
    },
  };

  // Animación de progreso
  useEffect(() => {
    const animationDuration = 800;
    const steps = 40;
    const intervalTime = animationDuration / steps;
    const increment = value / steps;

    const interval = setInterval(() => {
      setProgressValue((prev) => {
        const nextValue = Math.min(prev + increment, value);
        if (nextValue >= value) {
          clearInterval(interval);
        }
        return nextValue;
      });
    }, 40 + intervalTime);

    return () => clearInterval(interval);
  }, [value]);

  // Formatear valor según el tipo de progreso
  const formatValue = () => {
    switch (progress) {
      case 'percent':
        return `${Math.round(percentage)}%`;
      case 'value':
        return `${Math.round(progressValue)}/${max}`;
      default:
        return `${Math.round(progressValue)}/${max}`;
    }
  };

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center mb-2'>
        {label && (
          <span
            className={`font-semibold text-sm ${colorVariants[color].text}`}
          >
            {label}
          </span>
        )}
        <div className={`text-sm font-bold ${colorVariants[color].text}`}>
          {formatValue()}
        </div>
      </div>
      <div
        className={`
          w-full 
          h-4 
          rounded-full 
          overflow-hidden 
          ${colorVariants[color].bg}
          shadow-inner
        `}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${percentage}%`,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 20,
            },
          }}
          className={`
            h-full 
            ${colorVariants[color].bar} 
            rounded-full 
            shadow-md
            relative
            overflow-hidden
          `}
        >
          {/* Efecto de brillo */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{
              x: '100%',
              transition: {
                repeat: Infinity,
                duration: 2,
                ease: 'linear',
              },
            }}
            className='
              absolute 
              top-0 
              left-0 
              h-full 
              w-1/2 
              bg-white 
              bg-opacity-30 
              transform 
              skew-x-[30deg]
            '
          />
        </motion.div>
      </div>
    </div>
  );
};
