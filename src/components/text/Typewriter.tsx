import { useEffect, useState, useMemo } from 'react';

interface TypewriterProps {
  text: string;
  delay: number;
  animationFinished: boolean;
  onComplete: () => void;
}

const highlightKeywords = (text: string, keywords: string[]) => {
  // Crear una expresión regular que busque las palabras clave
  const keywordPattern = keywords
    .sort((a, b) => b.length - a.length) // Ordenar de más largo a más corto
    .map(
      (keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escapar caracteres especiales
    )
    .join('|');

  const regex = new RegExp(`(${keywordPattern})`, 'gi');

  // Dividir y resaltar
  return text.split(regex).map((part, index) => {
    const isKeyword = keywords.some(
      (keyword) => keyword.toLowerCase() === part.toLowerCase()
    );

    return isKeyword ? (
      <span
        key={index}
        style={{
          color: '#3b82f6',
          fontWeight: 'bold',
        }}
      >
        {part}
      </span>
    ) : (
      part
    );
  });
};

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
 
  useEffect(() => {
    // Resetear si el texto cambia
    setDisplayText([]);
  }, [text]);

  useEffect(() => {
    // Si la animación ya terminó, mostrar texto completo
    if (animationFinished) {
      setDisplayText(highlightKeywords(text, keywords));
      onComplete();
      return;
    }

    // Animación de escritura
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        const currentText = text.slice(0, currentIndex + 1);
        setDisplayText(highlightKeywords(currentText, keywords));
        currentIndex++;
      } else {
        clearInterval(timer);
        onComplete();
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay, animationFinished, keywords, onComplete]);

  return <span>{displayText}</span>;
};

export default Typewriter;
