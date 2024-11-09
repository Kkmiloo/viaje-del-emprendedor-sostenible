import { useEffect, useState } from 'react';
import { Progress, SemanticCOLORS } from 'semantic-ui-react';

interface ProgressBarProps {
  value: number;
  max: number;
    color: SemanticCOLORS;
    progress: 'ratio' | 'percent' | 'value' | undefined;
}
export const ProgressBar = ({
  value,
  max,
  color,
  progress = 'ratio',
}: ProgressBarProps) => {
   const [progressValue, setProgressValue] = useState(0);

   useEffect(() => {
     const animationDuration = 400; // Duración total de la animación en milisegundos
     const steps = 50; // Número de pasos en los que se dividirá la animación
     const intervalTime = animationDuration / steps; // Tiempo entre cada incremento
     const increment = value / steps; // Tamaño del incremento en cada paso

     const interval = setInterval(() => {
       setProgressValue((prev) => {
         const nextValue =   Math.min(prev + increment, value);
         if (nextValue >= value) {
           clearInterval(interval);
         }
         return nextValue;
       });
     }, 40+intervalTime);

     return () => clearInterval(interval);
   }, [value]);

  return (
    <Progress
      value={Math.round(progressValue)}
      total={max}
      color={color}
      progress={progress}
      indicating
      className='w-3/4'
    />
    
  );
};