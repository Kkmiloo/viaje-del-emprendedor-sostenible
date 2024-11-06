
import { create, StateCreator} from 'zustand'
import { devtools } from 'zustand/middleware';


type GameStage = 'introduction' | 'level' | 'ending';

const idealBalance = [ 800000, 1350000, 4700000, 6500000, 13200000, 27500000, 95600000, 290000000];

interface GameState {
  level: number;
  lives: number;
  isGameOver: boolean;
  stage: GameStage;
  balance: number;
  goal: number;
  installationTime: number;
  moneyPerInstallation: number;
  gameBalance: number[];
  idealGameBalance: number[];
  setGameBalance: (newBalance: number) => void;
  setGoal: (newGoal: number) => void;
  setInstallationTime: (newInstallationTime: number) => void;
  setMoneyPerInstallation: (newMoneyPerInstallation: number) => void;
  changeStage: (newStage: GameStage) => void;
  incrementLevel: () => void;
  decrementLives: () => void;
  resetGame: () => void;
  setBalance: (newBalance: number) => void;
}

const storeApi: StateCreator<GameState> = (set, get) => ({
  level: 1,
  lives: 3,
  isGameOver: false,
  stage: 'introduction',
  balance: 600000,
  goal: 5,
  installationTime: 2,
  moneyPerInstallation: 50000,
  gameBalance: [600000],
  idealGameBalance: [600000],
  setGameBalance: (newBalance) =>
    set((state) => ({
      gameBalance: [...state.gameBalance, get().balance + newBalance],
      idealGameBalance: [
        ...state.idealGameBalance,
        idealBalance[get().level - 1] ,
      ],
      balance: get().balance + newBalance,
    })),
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
    set({
      level: 1,
      lives: 3,
      isGameOver: false,
      stage: 'introduction',
      balance: 600000,
      gameBalance: [600000],
      idealGameBalance: [600000],
      goal: 5,
      installationTime: 2,
      moneyPerInstallation: 50000,
    }),
});

export const useGameStore = create<GameState>()(devtools(storeApi));