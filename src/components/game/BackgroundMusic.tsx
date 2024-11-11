import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';
import bgMusic from '../../assets/energetic-bgm.mp3';

interface BgMusicProps {
  initialVolume?: number;
  togglePlay: boolean;
}

const BackgroundMusic: React.FC<BgMusicProps> = ({
  initialVolume = 0.1,
  togglePlay,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(initialVolume);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.volume = isPlaying ? volume : 0;
      audioElement.loop = true;

      if (isPlaying) {
        audioElement.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying, volume]);

  useEffect(() => {
    setIsPlaying(togglePlay);
  }, [togglePlay]);
  const toggleMute = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className='fixed top-4 right-4 z-50 flex items-center space-x-2'>
      <motion.div
        className='bg-white/20 backdrop-blur-md rounded-full w-10 h-10 p-2'
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.button
          onClick={toggleMute}
          className='focus:outline-none'
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? (
            <SpeakerWaveIcon className='w-6 h-6 text-white' />
          ) : (
            <SpeakerXMarkIcon className='w-6 h-6 text-white/50' />
          )}
        </motion.button>
      </motion.div>

      {isPlaying && (
        <motion.input
          type='range'
          min='0'
          max='1'
          step='0.1'
          value={volume}
          onChange={handleVolumeChange}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='w-24 h-2 bg-white/30 rounded-full appearance-none'
        />
      )}

      <audio ref={audioRef} src={bgMusic} loop />
    </div>
  );
};

export default BackgroundMusic;
