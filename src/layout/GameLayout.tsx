import { Outlet } from 'react-router-dom';

export const GameLayout = () => {
  return (
    <div className='min-w-full min-h-screen bg-slate-400 flex flex-col'>   
          <Outlet />
      </div>
  );
}
