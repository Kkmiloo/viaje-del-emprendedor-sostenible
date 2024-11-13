import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  PlayIcon,
} from '@heroicons/react/24/solid';

const menuItems = [
  {
    to: './jugar',
    label: 'Jugar',
    icon: PlayIcon,
    bgColor: 'bg-emerald-500 hover:bg-emerald-600',
    textColor: 'text-white',
  }
];

export const Menu = () => {
  return (
    <motion.nav
      className='p-4 h-full text-white'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ul className='flex flex-col max-w-6xl m-auto items-center gap-6'>
        {menuItems.map((item, index) => (
          <motion.li
            key={item.to}
            className='w-80'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
            }}
          >
            <Link
              to={item.to}
              className={`
                ${item.bgColor} ${item.textColor}
                w-full p-3 rounded-xl flex items-center justify-center 
                space-x-3 shadow-lg transform transition-all 
                hover:scale-105 hover:shadow-xl
              `}
            >
              <item.icon className='w-6 h-6' />
              <span className='font-semibold text-lg'>{item.label}</span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};
