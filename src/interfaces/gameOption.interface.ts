



export interface GameOptionI {
  id: number;
  text: string;
  consequence: string;
  impact: string;
  additionalContext: string;
  image?: string;
  isCorrect: boolean;
  numberPanels: number;
  invest: number;
  balance: number;
  trustResult: number;
  reputationResult: number;
}
