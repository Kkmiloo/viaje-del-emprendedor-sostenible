import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay: number;
  infinite: boolean;
}

const Typewriter = ({ text, delay, infinite }: TypewriterProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState<(JSX.Element | string)[]>([]);

  // Define las palabras clave a resaltar
  const keywords = ['COP', 'horas', 'panel', '$50,000'];

  useEffect(() => {
    let timeout: number;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        // Verifica si el texto en la posición actual coincide con alguna palabra clave
        const remainingText = text.slice(currentIndex);
        const keyword = keywords.find((kw) => remainingText.startsWith(kw));

        if (keyword) {
          // Agrega la palabra clave completa como un span con estilo
          setDisplayText((prevText) => [
            ...prevText,
            <span
              style={{ color: 'blue', fontWeight: 'bold' }}
              key={currentIndex}
            >
              {keyword}
            </span>,
          ]);
          setCurrentIndex((prevIndex) => prevIndex + keyword.length); // Salta la palabra clave
        } else {
          // Agrega la siguiente letra
          setDisplayText((prevText) => [...prevText, text[currentIndex]]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }, delay);
    } else if (infinite) {
      // Reinicia el efecto si es infinito
      setCurrentIndex(0);
      setDisplayText([]);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{displayText}</span>;
};

export default Typewriter;
