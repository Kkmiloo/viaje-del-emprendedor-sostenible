interface IntroductionProps {
  onStart: () => void;
}

export const Introduction = ({ onStart }: IntroductionProps) => (
  <div className='flex flex-col items-center justify-center min-h-screen bg-slate-400 max-w-6xl m-auto'>
    <h1 className='text-3xl font-bold mb-4'>Bienvenido al Juego</h1>
    <p className='text-xl mb-8'>
      ¡Es hora de demostrar tu visión, ingenio y liderazgo! En este emocionante
      viaje, tomarás el rol de un emprendedor ambicioso que ha decidido
      transformar el mundo con soluciones innovadoras en energía solar. Tu
      misión: construir desde cero una empresa que desarrolle tecnologías
      solares, aportando al crecimiento sostenible y rentable. A lo largo del
      juego, te enfrentarás a decisiones clave que pondrán a prueba tu capacidad
      para tomar decisiones estratégicas, gestionar recursos y liderar equipos.
      Comenzarás solo, desarrollando prototipos de paneles solares desde tu
      hogar. Con cada elección, tu empresa crecerá, incorporando talento y
      expandiéndose a nuevos mercados. Tu objetivo es claro: convertirte en el
      CEO de una empresa líder en energía solar, transformando hogares,
      empresas, y ciudades con energía limpia. ¿Estás listo para iluminar el
      futuro con tu visión?
    </p>

    <p className='text-xl mb-8 font-bold'>
      ¡Adelante, emprendedor! El futuro de la energía está en tus manos.
    </p>
    <button className='p-4 bg-blue-500 text-white rounded-md' onClick={onStart}>
      Comenzar
    </button>
  </div>
);
