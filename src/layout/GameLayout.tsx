import { Outlet } from 'react-router-dom';

export const GameLayout = () => {
  return (
    <div className='min-w-full min-h-screen game-bg-dots flex flex-col figtree'>
      <Outlet />
    </div>
  );
}
