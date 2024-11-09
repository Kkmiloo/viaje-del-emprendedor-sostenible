interface ResumeProps{
    onConfirm: () => void;
    children?: JSX.Element | JSX.Element[] | string
}


export const Resume = ({onConfirm,children}: ResumeProps) => {
  return (
    <div  onClick={onConfirm} className='cursor-pointer '>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='modal-overlay absolute inset-0 bg-gray-500 opacity-50'></div>
        <div className='animate-fade-right animate-duration-[500ms] animate-ease-in modal-container border-4  bg-white w-11/12 md:max-w-3xl mx-auto rounded-xl shadow-lg z-50 overflow-y-auto'>
          <div className="w-full bg-slate-700 p-2">
            <h2 className="text-white font-bold text-xl text-center"> Resumen</h2>
          </div>
          <div className='modal-content py-4 text-left px-6 min-h-40'>
            <div className='mt-4'>{children}</div>
          </div>
          <div className='animate-bounce w-full animate-duration-[1000ms]'>
            <svg
              className='m-auto '
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 512 298.04'
              fill='#334155'
            >
              <path
                fillRule='nonzero'
                d='M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
