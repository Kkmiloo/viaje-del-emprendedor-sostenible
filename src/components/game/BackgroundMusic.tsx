import  { useEffect, useRef, useState } from 'react';
import bgMusic from '../../assets/energetic-bgm.mp3';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Controla si la música está en reproducción

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Ajusta el volumen de la música
      audioRef.current.loop = true; // Reproduce en bucle
      audioRef.current.play(); // Comienza la reproducción
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.volume = 0;
      } else {
        audioRef.current.volume = 0.3;
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className=''>
      <audio ref={audioRef} src={bgMusic} />
      <button onClick={togglePlay}>
        {isPlaying ? 'Pausar música' : 'Reproducir música'}
      </button>
    </div>
  );
};

export default BackgroundMusic;
