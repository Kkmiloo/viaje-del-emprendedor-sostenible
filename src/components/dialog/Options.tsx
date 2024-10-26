import { GameOptionI } from '../../interfaces/gameOption.interface';


interface OptionsProps {
  options: GameOptionI[];
  onSelectOption: (option: GameOptionI) => void;
}

export const Options = ({ options, onSelectOption }: OptionsProps) => {
  const handleOnClick = (option: GameOptionI) => {


    onSelectOption(option); // Llama `onSelectOption` con el tipo `GameOptionI`
  };

  return (
    <div className='flex flex-col p-2 bg-slate-200 m-auto rounded-xl mb-10 z-50'>
      {options.map((option) => (
        <button
          key={option.id}
          className='p-2 hover:bg-slate-400 bg-slate-300 rounded-md m-1'
          onClick={() => handleOnClick(option)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};
