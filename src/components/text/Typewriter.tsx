import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay: number;
  animationFinished: boolean; // Nueva prop
  onComplete: () => void; // Callback para indicar que terminó la animación
}

const Typewriter = ({
  text,
  delay,
  animationFinished,
  onComplete,
}: TypewriterProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState<(JSX.Element | string)[]>([]);

  const keywords = [
    'COP',
    '8 horas',
    '5 casas locales',
    '5 instalaciones diarias',
    '20 instalaciones diarias',
    '50 instalaciones en 30 días',
    '100 hogares',
    '300 instalaciones',
    '$50,000',
    '$75,000',
    '$100,000',
    '$200,000',
    '$300,000',
  ];

  // Mostrar el texto completo si `animationFinished` es verdadero
  useEffect(() => {
    if (animationFinished) {
      const fullText = text.split('').map((char, index) => {
        const remainingText = text.slice(index);
        const keyword = keywords.find((kw) => remainingText.startsWith(kw));
        if (keyword) {
          return (
            <span style={{ color: 'blue', fontWeight: 'bold' }} key={index}>
              {keyword}
            </span>
          );
        }
        return char;
      });
      setDisplayText(fullText);
      onComplete(); // Llama a la función cuando la animación termina
    }
  }, [animationFinished, text]);

  // Lógica de animación por letra si `animationFinished` es falso
  useEffect(() => {
    if (animationFinished || currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      const remainingText = text.slice(currentIndex);
      const keyword = keywords.find((kw) => remainingText.startsWith(kw));

      if (keyword) {
        setDisplayText((prev) => [
          ...prev,
          <span
            style={{ color: 'blue', fontWeight: 'bold' }}
            key={currentIndex}
          >
            {keyword}
          </span>,
        ]);
        setCurrentIndex(currentIndex + keyword.length);
      } else {
        setDisplayText((prev) => [...prev, text[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text, animationFinished]);

  return <span>{displayText}</span>;
};

export default Typewriter;
