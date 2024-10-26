import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className='bg-gray-800 text-white p-4 h-full '>
      <ul className='flex flex-col max-w-6xl m-auto'>
        <li>
          <Link to='./jugar' className='hover:text-yellow-400'>
            Jugar
          </Link>
        </li>
        <li>
          <Link to='./tutorial' className='hover:text-yellow-400'>
            Tutorial
          </Link>
        </li>
        <li>
          <Link to='./opciones' className='hover:text-yellow-400'>
            Opciones
          </Link>
        </li>
      </ul>
    </nav>
  );
}
