
import './options.css';

export interface Option {
  id: number;
  text: string;
  action: () => void;
}

interface OptionsProps {
  options: Option[];
}

export const Options = ({ options }: OptionsProps) => {
  return (
    <div className="dialog-options">
      {options.map((option) => (
        <button
          key={option.id}
          className="dialog-option"
          onClick={option.action}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};
