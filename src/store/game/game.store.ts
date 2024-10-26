
import { create, StateCreator} from 'zustand'

type GameStage = 'introduction' | 'level' | 'ending';
interface GameState {
  level: number;
  lives: number;
  isGameOver: boolean;
  stage: GameStage;
  changeStage: (newStage: GameStage) => void;
  incrementLevel: () => void;
  decrementLives: () => void;
  resetGame: () => void;
}

const storeApi: StateCreator<GameState> = (set) => ({
  level: 1,
  lives: 3,
  isGameOver: false,
  stage: 'introduction',
  changeStage: (newStage) => set({ stage: newStage }),
  incrementLevel: () => set((state) => ({ level: state.level + 1 })),
  decrementLives: () =>
    set((state) => {
      const newLives = state.lives - 1;
      return {
        lives: newLives,
        isGameOver: newLives <= 0,
      };
    }),
  resetGame: () =>
    set({ level: 1, lives: 3, isGameOver: false, stage: 'introduction' }),
});

export const useGameStore = create<GameState>(storeApi)