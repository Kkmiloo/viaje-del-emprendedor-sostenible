import { useEffect, useState, useMemo } from 'react';

interface TypewriterProps {
  text: string;
  delay: number;
  animationFinished: boolean;
  onComplete: () => void;
}

const Typewriter = ({
  text,
  delay,
  animationFinished,
  onComplete,
}: TypewriterProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState<(JSX.Element | string)[]>([]);
  const keywords = useMemo(
    () => [
      'Sincelejo',
      'Coveñas',
      '20 entregas diarias',
      '$10,000 COP',
      '10 entregas por dia',
      '"incapacidad operativa"',
      '50 entregas diarias',
      '80 entregas diarias',
      '30 entregas diarias',
      '40 entregas diarias',
      '120 entregas diarias',
      '150 entregas diarias',
      '100 entregas diarias',
      '300 entregas',
      '300 entregas diarias',
      '500 entregas',
      'vehículos eléctricos grandes',
      '200 entregas diarias',
      'camiones eléctricos',
      '100 entregas diarias',
      '200 entregas',
      'camiones de largo alcance',
      'barcos de carga sostenibles',
    ],
    []
  );

  // Usar `useMemo` para calcular `fullText` solo una vez
  const fullText = useMemo(() => {
    const result = [];
    let i = 0;

    while (i < text.length) {
      const remainingText = text.slice(i);
      const keyword = keywords.find((kw) => remainingText.startsWith(kw));

      if (keyword) {
        result.push(
          <span style={{ color: '#3b82f6', fontWeight: 'bold' }} key={i}>
            {keyword}
          </span>
        );
        i += keyword.length;
      } else {
        result.push(text[i]);
        i += 1;
      }
    }

    return result;
  }, [text, keywords]);

  // Mostrar el texto completo si `animationFinished` es verdadero
  useEffect(() => {
    if (animationFinished) {
      setDisplayText(fullText);
      onComplete(); // Llama a la función cuando la animación termina
    }
  }, [animationFinished, onComplete]);

  // Lógica de animación por letra si `animationFinished` es falso
  useEffect(() => {
    if (animationFinished || currentIndex >= fullText.length) {
      onComplete();
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => [...prev, fullText[currentIndex]]);
      setCurrentIndex(currentIndex + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, fullText, animationFinished]);

  return <span>{displayText}</span>;
};

export default Typewriter;
