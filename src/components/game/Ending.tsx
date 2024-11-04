interface EndingProps {
  onRestart: () => void;
}

export const Ending = ({ onRestart }: EndingProps) => (
  <div className='flex flex-col items-center justify-center  p-6  px-8  text-justify border-4 border-slate-700 rounded-xl max-w-6xl m-auto bg-gray-200 h-fit z-40'>
    <h1 className='text-3xl font-bold mb-4'>¡Felicidades, CEO Solar!</h1>
    <p className='text-xl mb-8'>
      Has completado Energy Empire: El Ascenso Solar, llevando tu empresa desde
      un pequeño proyecto local hasta la creación de un imperio global de
      energía solar. A lo largo de este viaje, tomaste decisiones clave sobre la
      gestión de equipos, expansión internacional y operaciones logísticas,
      demostrando tu capacidad para liderar un negocio sostenible en el mundo
      moderno. Recuerda que las habilidades que desarrollaste en este juego,
      como la gestión de recursos, la toma de decisiones estratégicas, y la
      adaptación a mercados internacionales, son esenciales para el éxito en la
      vida real. ¡Sigue tomando decisiones inteligentes y llevando la energía
      solar a nuevas alturas!
    </p>

    <p className='text-xl mb-8 font-bold'>
      ¡Gracias por jugar, CEO Solar! Tu éxito solo acaba de empezar.
    </p>
    <button
      className='p-4 bg-green-500 text-white rounded-md'
      onClick={onRestart}
    >
      Jugar de Nuevo
    </button>
  </div>
);
