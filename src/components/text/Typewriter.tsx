import { useEffect, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterProps {
  text: string;
  delay?: number;
  animationFinished?: boolean;
  onComplete?: () => void;
  highlightColor?: string;
  className?: string;
  width?: string; // Ancho opcional para control de línea
}

const Typewriter = ({
  text,
  delay = 30,
  animationFinished = false,
  onComplete,
  highlightColor = 'blue',
  className = '',
  width = 'auto', // Ancho por defecto
}: TypewriterProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState<(JSX.Element | string)[]>([]);

  // Palabras clave configurables
  const keywords = useMemo(
    () => [
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
    ],
    []
  );

  // Función para dividir texto en palabras sin cortar
  const splitTextWithoutCuttingWords = useCallback(
    (fullText: string) => {
      const words: (JSX.Element | string)[] = [];
      const textParts = fullText.split(/\s+/);

      textParts.forEach((part, index) => {
        // Buscar si la palabra es una palabra clave
        const keywordMatch = keywords.find((kw) => kw === part);

        if (keywordMatch) {
          // Si es una palabra clave, resaltarla
          words.push(
            <motion.span
              key={`keyword-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                color: highlightColor,
                fontWeight: 'bold',
                display: 'inline-block',
              }}
            >
              {keywordMatch}
            </motion.span>
          );

          // Añadir espacio después de la palabra clave
          if (index < textParts.length - 1) {
            words.push('\u00A0');
          }
        } else {
          // Si no es palabra clave, añadir normalmente
          words.push(part);

          // Añadir espacio después de la palabra
          if (index < textParts.length - 1) {
            words.push('\u00A0');
          }
        }
      });

      return words;
    },
    [keywords, highlightColor]
  );

  // Calcular texto completo con resaltado
  const fullText = useMemo(() => {
    return splitTextWithoutCuttingWords(text);
  }, [text, splitTextWithoutCuttingWords]);

  // Efecto para mostrar texto completo
  useEffect(() => {
    if (animationFinished) {
      setDisplayText(fullText);
      onComplete?.();
    }
  }, [animationFinished, fullText, onComplete]);

  // Lógica de animación por letra
  useEffect(() => {
    if (animationFinished || currentIndex >= fullText.length) {
      onComplete?.();
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => [...prev, fullText[currentIndex]]);
      setCurrentIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, fullText, animationFinished, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={className}
      style={{
        width: width,
        wordBreak: 'keep-all', // Evitar corte de palabras
        overflowWrap: 'normal', // Mantener palabras completas
        display: 'inline-block',
      }}
    >
      <AnimatePresence>
        {displayText.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'inline-block',
              whiteSpace: 'pre-wrap',
            }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Typewriter;
