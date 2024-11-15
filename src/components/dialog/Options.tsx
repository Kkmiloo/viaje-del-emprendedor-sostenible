import { motion } from 'framer-motion';
import { GameOptionI } from '../../interfaces/gameOption.interface';

interface OptionsProps {
  options: GameOptionI[];
  onSelectOption: (option: GameOptionI) => void;
}

export const Options = ({ options, onSelectOption }: OptionsProps) => {
  const optionLetters = ['A)', 'B)', 'C)'];

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 text-justify  bg-slate-100 rounded-xl max-w-6xl mx-auto third-step'
    >
      {options.map((option) => (
        <motion.div
          key={option.id}
          layout
          whileHover={{
            scale: 1.03,
            boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
            transition: {
              duration: 0.3,
              type: 'spring',
              stiffness: 300,
            },
          }}
          whileTap={{ scale: 0.97 }}
          className='relative'
        >
          <div
            onClick={() => onSelectOption(option)}
            className='
              cursor-pointer 
              bg-white 
              rounded-xl 
              overflow-hidden 
              shadow-md 
              hover:shadow-lg 
              transition-shadow 
              duration-300 
              border-2 
              border-transparent 
              hover:border-blue-500
              flex 
              flex-col 
              h-full
              
            '
          >
            {/* Imagen con overlay */}
            <div className='relative w-full h-28 md:h-48 overflow-hidden'>
              <motion.img
                src={option.image}
                alt={option.text}
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className='
                  absolute 
                  inset-0 
                  w-full 
                  h-full 
                  object-contain 
                  transition-transform 
                  duration-300
                  
                '
              />
              {/* Letra de opción superpuesta */}
              <div
                className='
                absolute 
                top-2 
                left-2 
                bg-blue-500/80 
                text-white 
                px-3 
                py-1 
                rounded-full
                text-xl 
                md:text-2xl 
                font-bold
              '
              >
                {optionLetters[option.id - 1]}
              </div>
            </div>

            {/* Contenido de texto */}
            <div
              className='
              p-4 
              flex 
              flex-col 
              justify-between 
              flex-grow
            '
            >
              <p
                className='
                
                text-base md:text-lg 
                font-semibold 
                text-gray-800 
                mb-2
                line-clamp-3
              '
              >
                {option.text}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
