
import { create, StateCreator} from 'zustand'

interface GameState {
  lives: number;
  level: number;
  decrementLives: () => void;
  resetLives: () => void;
}

const storeApi: StateCreator<GameState> = (set) => ({
  lives: 3,
  level: 1,
  decrementLives: () =>
    set((state) => ({ lives: state.lives > 0 ? state.lives - 1 : 0 })),
  resetLives: () => set({ lives: 3 }),
});

export const useGameStore = create<GameState>(storeApi)