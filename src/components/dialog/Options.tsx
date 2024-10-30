import { GameOptionI } from '../../interfaces/gameOption.interface';

interface OptionsProps {
  options: GameOptionI[];
  onSelectOption: (option: GameOptionI) => void;
}

export const Options = ({ options, onSelectOption }: OptionsProps) => {
  const handleOnClick = (option: GameOptionI) => {
    onSelectOption(option);
  };

  return (
    <div className='flex p-2 bg-slate-200 m-auto rounded-xl mb-10 z-40 max-w-6xl'>
      {options.map((option) => (
        <button
          key={option.id}
          className='p-2 hover:bg-slate-400 bg-slate-300 rounded-md m-1 h-48 hover:animate-wiggle animate-infinite animate-ease-in'
          onClick={() => handleOnClick(option)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};
