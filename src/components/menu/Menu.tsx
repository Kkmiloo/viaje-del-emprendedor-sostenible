import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className='  p-4 h-full text-white '>
      <ul className='flex flex-col max-w-6xl m-auto items-center gap-3'>
        <li className='w-80 '>
          <Link
            to='./jugar'
            className='shadow-sm shadow-white bg-slate-600 hover:bg-slate-700 w-full p-2 rounded-lg flex items-center justify-center '
          >
            Jugar
          </Link>
        </li>
        <li className='w-80'>
          <Link
            to='./tutorial'
            className='border w-full p-2 rounded-lg flex items-center justify-center '
          >
            Tutorial
          </Link>
        </li>
        <li className='w-80'>
          <Link
            to='./opciones'
            className='border w-full p-2 rounded-lg flex items-center justify-center '
          >
            Opciones
          </Link>
        </li>
      </ul>
    </nav>
  );
}
