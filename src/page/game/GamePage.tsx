import { Dialog } from '../../components/dialog/Dialog'; 
import { useGameStore } from '../../store'; 
import man from '../../assets/man.webp';
import scene1 from '../../assets/scene1.webp';
import { scenes } from '../../data/scenes';
import { useEffect, useState } from 'react';
import { Option, Options } from '../../components/dialog/Options';



const GamePage = () => {

  const level = useGameStore((state) => state.level);
  const lives = useGameStore((state) => state.lives);
  const decrementLives = useGameStore((state) => state.decrementLives);

  const [currentScene, setCurrentScene] = useState(scenes[level - 1]);
  const [currentOptions, setCurrentOptions] = useState<Option[]>([]);
  

  useEffect(() => {
    const filteredScene = scenes.filter((scene) => scene.level === level)[0];
    const dialogOptions = filteredScene.options.map((option) => ({ id: option.id, text: option.text, action: !option.isCorrect? ()=>{decrementLives()} : ()=>{alert('piola')}}));
    setCurrentScene(filteredScene);
    setCurrentOptions(dialogOptions);
  }, [level, decrementLives])

  return (
    <main className='min-w-full min-h-screen bg-slate-400 flex flex-col'>
      <div className='relative w-full flex-1'>
        <img
          className='absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center object-cover opacity-75'
          src={scene1}
          alt='background'
        />
        <div className='relative max-w-6xl m-auto px-4 z-20 text-2xl text-red-300 bg-stone-700'>
          <p className=''> Numero de vidas</p>
          <p>{lives} </p>
        </div>
        <img
          className='absolute bottom-[300px] left-28 object-cover z-30'
          width={220}
          src={man}
          alt='character'
        />
      </div>
      <div className='z-40'>
        <Options options={currentOptions} />
      </div>
      {/* Segundo div para el diálogo, que ocupa el espacio restante */}
      <div className='relative w-full flex-shrink-0 pb-2'>
        <Dialog text={currentScene.introduction} />
      </div>
    </main>
  );
}

export default GamePage;
