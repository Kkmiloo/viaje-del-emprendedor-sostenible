import { Outlet } from 'react-router-dom';

export const GameLayout = () => {
  return (
    <div className='min-w-full min-h-screen backdrop-blur-lg  bg-slate-600  flex flex-col figtree'>
      <Outlet />
    </div>
  );
}
