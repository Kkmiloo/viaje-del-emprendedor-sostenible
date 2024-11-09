import { useGameStore } from "../../store"

export const HealthIndicator = () => {
  const { lives } = useGameStore();
  const totalLives = 3;

  return (
    <div className='bg-gray-300 flex items-center px-4 md:px-16 rounded-md md:py-1 space-x-1'>
      {[...Array(totalLives)].map((_, index) => (
        <span
          key={index}
          className={index < lives ? 'text-orange-500' : 'text-gray-500'}
        >
          {index < lives ? '🧡' : '🖤'}
        </span>
      ))}
    </div>
  );
};