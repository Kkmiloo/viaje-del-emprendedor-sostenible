import { GameOptionI } from '../../interfaces/gameOption.interface';

interface OptionsProps {
  options: GameOptionI[];
  onSelectOption: (option: GameOptionI) => void;
}

export const Options = ({ options, onSelectOption }: OptionsProps) => {
  
  const optionLetters = ['A)', 'B)', 'C)']
  
  const handleOnClick = (option: GameOptionI) => {
    onSelectOption(option);
  };

  return (
    <div className='animate-jump-in animate-duration-[1500ms] animate-ease-out flex md:flex-row  flex-col items-center justify-center gap-3 p-2 bg-slate-200 m-auto rounded-xl z-40 max-w-6xl'>
      {options.map((option) => (
        <div
          key={option.id}
          className='shadow-lg relative p-2 px-4 flex  flex-col align-middle justify-center text-lg font-medium md:w-1/3 w-full bg-slate-600 text-slate-50 rounded-lg cursor-pointer hover:bg-slate-700 m-1 md:h-48 h-36 hover:animate-wiggle animate-infinite animate-ease-in'
          onClick={() => handleOnClick(option)}
        >
          <p className='absolute md:text-[90px] text-7xl right-0 -top-5  md:-top-14  text-justify'>
            {option.image}
          </p>

          <div className='flex items-center'>
            <p className='text-7xl md:text-8xl chewy ml-2'>
              {' '}
              {optionLetters[option.id - 1]}{' '}
            </p>
            {/* <img src={option.image} alt={option.text} className='w-32 h-32' /> */}
            <p className='ml-6 mt-2'>{option.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
