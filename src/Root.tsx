import { Outlet } from "react-router-dom"


export const Root = () => {

  return (
    <main className='min-h-screen '>
      <Outlet />
    </main>
  );
}

