import  { useEffect, useRef } from 'react';
import bgMusic from '../../assets/energetic-bgm.mp3';

interface BgMusicProps {
  togglePlay: boolean;
}

const BackgroundMusic = ({togglePlay}: BgMusicProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  //const [isPlaying, setIsPlaying] = useState(true); // Controla si la música está en reproducción

  useEffect(() => {
    if (audioRef.current && togglePlay) {
      audioRef.current.volume = 0.1; // Ajusta el volumen de la música
      audioRef.current.loop = true; // Reproduce en bucle
      audioRef.current.play(); // Comienza la reproducción
    }
  }, [togglePlay]);

  

  return (
    <div>
      <audio ref={audioRef} src={bgMusic} />
    </div>
  );
};

export default BackgroundMusic;
