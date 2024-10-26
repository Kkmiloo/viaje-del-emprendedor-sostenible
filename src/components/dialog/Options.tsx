interface Option {
  id: number;
  text: string;
  action: () => void;
}

interface OptionsProps {
  options: Option[];
}

export const Options = ({ options }: OptionsProps) => {
  return (
    <div className="flex flex-col p-2 bg-slate-200 max-w-6xl m-auto rounded-xl mb-10 ">
      {options.map((option) => (
        <button
          key={option.id}
          className="p-2 hover:bg-slate-400 bg-slate-300 rounded-md m-1"
          onClick={option.action}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};
