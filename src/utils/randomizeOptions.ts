import { GameOptionI } from "../interfaces/gameOption.interface";

export const shuffleOptions = (options: GameOptionI[]) => {
 const randomizedOptions = [...options]
      .sort(() => Math.random() - 0.5) 
      .map((option, index) => ({
        ...option,
        id: index + 1, 
      }));

    return randomizedOptions;
} 