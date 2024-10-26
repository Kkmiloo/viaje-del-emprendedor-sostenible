
import { Menu } from '../components/menu/Menu';

export const MenuLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <header className='bg-yellow-900 p-4'>
        <h1 className='text-white text-3xl'>Energy Empire: El Ascenso Solar</h1>
      </header>

      <main className='flex-grow bg-gray-400'>
        <Menu />
        {/* Aquí iría el contenido principal del juego */}
      </main>

      <footer className='bg-gray-800 text-white p-4 text-center'>
        <p>&copy; 2024 Energy Empire: El Ascenso Solar</p>
      </footer>
    </div>
  );
}
