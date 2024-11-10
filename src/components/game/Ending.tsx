interface EndingProps {
  onRestart: () => void;
}

export const Ending = ({ onRestart }: EndingProps) => (
  <div className='flex flex-col items-center justify-center  p-6  px-8  text-justify border-4 border-slate-700 rounded-xl max-w-6xl m-auto bg-gray-200 h-fit z-40'>
    <h1 className='text-3xl font-bold mb-4'>¡Felicidades, Emprendedor!</h1>
    <p className='text-xl mb-8'>
      Has completado "El Viaje del Emprendedor Sostenible" y transformado tu
      pequeña empresa local en un gigante de la logística internacional. A lo
      largo de este viaje, enfrentaste decisiones difíciles, gestionaste
      recursos, superaste obstáculos y lograste expandir tu operación desde
      Sincelejo hasta el puerto internacional de Coveñas. ¡Tu éxito es el
      resultado de tu visión y capacidad estratégica!
    </p>

    <p className='text-xl mb-8 font-bold'>
      En cada nivel, estuviste al mando de aspectos administrativos clave, como
      la gestión de recursos financieros, la toma de decisiones operativas, el
      manejo de la logística empresarial, y la optimización del transporte
      acorde al crecimiento de tu empresa. Estos son pilares esenciales en
      cualquier negocio real, y el haber navegado por estos desafíos te ha
      preparado para enfrentar situaciones similares en tu propio camino
      empresarial.
    </p>

    <p className='text-xl mb-8 font-bold'>
      Recuerda que, en el mundo real, estas habilidades son cruciales para
      crecer y adaptarse en un mercado competitivo. Planificar bien tus
      recursos, tomar decisiones informadas, y mantener siempre una mentalidad
      de crecimiento y sostenibilidad, te llevará lejos.
    </p>
    <p>
      ¡Gracias por jugar, emprendedor! Sigue tomando decisiones inteligentes y
      haciendo la diferencia, dentro y fuera del juego. ¡Tu éxito en el mundo
      real está depende de ti!
    </p>
    <button
      className='p-4 bg-green-500 text-white rounded-md'
      onClick={onRestart}
    >
      Jugar de Nuevo
    </button>
  </div>
);
