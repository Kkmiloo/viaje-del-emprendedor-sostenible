import { Outlet } from "react-router-dom"
import BackgroundMusic from "./components/game/BackgroundMusic";


export const Root = () => {

  return (
    <main className='min-h-screen '>
      <BackgroundMusic />
      <Outlet />
    </main>
  );
}

