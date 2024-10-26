
import { create, StateCreator} from 'zustand'

interface GameState {
  level: number;
  lives: number;
  isGameOver: boolean;
  decrementLives: () => void;
  changeLevel: (newLevel: number) => void;
  resetGame: () => void;
}

const storeApi: StateCreator<GameState> = (set) => ({
  level: 1,
  lives: 3,
  isGameOver: false,
  decrementLives: () =>
    set((state) => {
      const newLives = state.lives - 1;
      return {
        lives: newLives,
        isGameOver: newLives <= 0, 
      };
    }),
  changeLevel: (newLevel) => set({ level: newLevel }),
  resetGame: () => set({ level: 1, lives: 3, isGameOver: false }),
});

export const useGameStore = create<GameState>(storeApi)