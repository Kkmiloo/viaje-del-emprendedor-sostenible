
import { Menu } from '../components/menu/Menu';

export const MenuLayout = () => {
  return (
    <div className='flex flex-col h-screen chewy text-center bg-gradient-to-r from-slate-900 to-slate-700 pt-32'>
      <header className='p-4'>
        <h1 className=' text-white text-5xl'>
          El Viaje del Emprendedor Sostenible
        </h1>
      </header>

      <main className='flex-grow text-2xl'>
        <Menu />
      </main>

      <footer className=' text-white p-4 text-center '>
        <p>&copy; 2024 El Viaje del Emprendedor Sostenible</p>
      </footer>
    </div>
  );
}
