import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

type GameStage = 'introduction' | 'level' | 'ending';

// const idealBalance = [
//   600000, 1350000, 4700000, 6500000, 13200000, 27500000, 95600000, 290000000,
// ];

// const idealInvest = [
//   200000, 300000, 700000, 1000000, 2000000, 4000000, 6000000, 10000000,
// ];

// const competitionAdjustment = (reputation, trust) => {
//   const reputationFactor = reputation / 100; // Normaliza en un rango de 0 a 1
//   const trustFactor = trust / 100; // Normaliza en un rango de 0 a 1
//   return 1 + (reputationFactor + trustFactor - 1) * 0.1; // Ajuste pequeño, entre 0.9 y 1.1
// };

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
  reputation: number;
  trust: number;
  setReputation: (newReputation: number) => void;
  setTrust: (newTrust: number) => void;
  setGameBalance: (newBalance: number, inversion: number) => void;
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
  reputation: 100,
  trust: 100,
  setGameBalance: (newBalance, invest) =>
    set((state) => {
      const levelInvest = get().balance - invest;
      const finalBalance = levelInvest + newBalance;

      // Obtener los valores actuales de confianza y reputación
      const { trust, reputation } = get();

      // Calcular el factor de ajuste dinámico
      const adjustmentFactor = 1 - ((trust + reputation) / 200) * 0.2; // Ajuste entre 0.9 y 1.0

      // Calcular el balance ideal y la inversión ideal de la competencia
      const idealGameInvest =
        state.idealGameBalance[state.idealGameBalance.length - 1] -
        invest * adjustmentFactor;
      const competitionBalance =
        idealGameInvest + newBalance * adjustmentFactor;

      return {
        gameBalance: [...state.gameBalance, levelInvest, finalBalance],
        idealGameBalance: [
          ...state.idealGameBalance,
          idealGameInvest,
          competitionBalance,
        ],
        balance: get().balance + newBalance,
      };
    }),
  setReputation: (newReputation) =>
    set({ reputation: Math.min(get().reputation + newReputation, 100) }),
  setTrust: (newTrust) => set({ trust: Math.min(get().trust + newTrust, 100) }),
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
      reputation: 100,
      trust: 100,
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
