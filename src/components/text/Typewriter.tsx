import { useEffect, useState, useMemo } from 'react';
import { ReactTyped } from 'react-typed';

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

  const highlightKeywords = (text: string) => {
    const keywordPattern = keywords
      .sort((a, b) => b.length - a.length) // Ordenar de más largo a más corto
      .map(
        (keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escapar caracteres especiales
      )
      .join('|');

    const regex = new RegExp(`(${keywordPattern})`, 'gi');

    return text.split(regex).map((part, index) => {
      const isKeyword = keywords.some(
        (keyword) => keyword.toLowerCase() === part.toLowerCase()
      );

      return isKeyword ? (
        <span key={index} style={{ color: '#3b82f6', fontWeight: 'bold' }}>
          {part}
        </span>
      ) : (
        part
      );
    });
  };

  useEffect(() => {
    if (animationFinished) {
      setDisplayText(highlightKeywords(text));
      onComplete();
    }
  }, [animationFinished, text, onComplete]);

  return (
    <div>
      { animationFinished ? (
        <div>{displayText}</div>
      ) : ( <ReactTyped
        strings={[text]}
        typeSpeed={delay}
        onComplete={() => {
          setDisplayText(highlightKeywords(text)); // Resaltar después de completar
          onComplete();
        }}
        loop={false}
        style={{ whiteSpace: 'pre-wrap' }} // Mantener el formato
      />)
     }
    </div>
  );
};

export default Typewriter;
