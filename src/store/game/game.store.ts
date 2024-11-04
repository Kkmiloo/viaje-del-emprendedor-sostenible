
import { create, StateCreator} from 'zustand'
import { devtools } from 'zustand/middleware';


type GameStage = 'introduction' | 'level' | 'ending';
interface GameState {
  level: number;
  lives: number;
  isGameOver: boolean;
  stage: GameStage;
  balance: number;
  goal: number;
  installationTime: number;
  moneyPerInstallation: number;
  setGoal: (newGoal: number) => void;
  setInstallationTime: (newInstallationTime: number) => void;
  setMoneyPerInstallation: (newMoneyPerInstallation: number) => void;
  changeStage: (newStage: GameStage) => void;
  incrementLevel: () => void;
  decrementLives: () => void;
  resetGame: () => void;
  setBalance: (newBalance: number) => void;
}

const storeApi: StateCreator<GameState> = (
  set
) => ({
  level: 1,
  lives: 3,
  isGameOver: false,
  stage: 'introduction',
  balance: 100000,
  goal: 5,
  installationTime: 2,
  moneyPerInstallation: 50000,
  setGoal: (newGoal) => set({ goal: newGoal }),
  setInstallationTime: (newInstallationTime) =>
    set({ installationTime: newInstallationTime }),
  setMoneyPerInstallation: (newMoneyPerInstallation) =>
    set({ moneyPerInstallation: newMoneyPerInstallation }),
  setBalance: (newBalance) => set({ balance: newBalance }),
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

export const useGameStore = create<GameState>()(devtools(storeApi));