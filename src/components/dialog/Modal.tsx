
interface ModalProps{
    text: string;
    onConfirm: () => void;
}

export const Modal = ({text, onConfirm}:ModalProps) => {
  return (
    <div onClick={onConfirm} className="cursor-pointer">
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='modal-overlay absolute inset-0 bg-gray-500 opacity-50'></div>
        <div className='modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto'>
          <div className='modal-content py-4 text-left px-6 min-h-40'>
            <p className='text-black'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
