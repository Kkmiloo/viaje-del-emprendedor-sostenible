import { useState, useRef, useEffect } from 'react';

interface DialogProps {
  text: string;
}


export const Dialog = ({ text }: DialogProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState<string[]>([]);


  // Función para dividir el texto en partes según el tamaño del contenedor
  const paginateText = (text: string, charsPerPage: number) => {
    const words = text.split(' ');
    let currentPageText = '';
    const result: string[] = [];

    words.forEach((word) => {
      // Si agregar la palabra excede el límite, empuja la página actual
      if (currentPageText.length + word.length <= charsPerPage) {
        currentPageText += word + ' ';
      } else {
        result.push(currentPageText.trim());
        currentPageText = word + ' '; // Inicia una nueva página
      }
    });

    // Empuja la última página si queda texto
    if (currentPageText) {
      result.push(currentPageText.trim());
    }

    return result;
  };

  // Efecto para calcular el tamaño del contenedor y paginar el texto
  useEffect(() => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const containerWidth = containerRef.current.clientWidth;

      // Estimación del número de caracteres por línea y página
      const charsPerLine = Math.floor(containerWidth / 15); // Aproximado, depende del tamaño de la fuente
      const linesPerPage = Math.floor(containerHeight / 20); // Aproximado, depende de la altura de línea
      const charsPerPage = charsPerLine * linesPerPage;

      // Divide el texto en páginas basadas en el tamaño del contenedor
      const textPages = paginateText(text, charsPerPage);
      setPages(textPages);
    }
  }, [text]);

  // Función para avanzar a la siguiente página del diálogo
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='opacity-95  p-4 px-10 md:py-4 rounded-xl border-4 absolute bg-yellow-900 text-white text-lg bottom-5 md:bottom-10 max-h-56 md:max-h-64 h-[300px] w-full md:max-w-[calc(100%-18rem)] max-w-[calc(100%-2rem)] mx-8 md:mx-36'>
      <div ref={containerRef} className='h-full overflow-auto'>
        <p>{pages[currentPage]}</p>
        {currentPage < pages.length - 1 && (
          <button
            className='absolute bottom-2 right-2 bg-white text-yellow-900 px-4 py-2 rounded'
            onClick={handleNext}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};
