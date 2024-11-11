import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Comprar 2 motocicletas por $500,000 COP cada una.',
    consequence:
      'Pudiste realizar hasta 60 entregas diarias, pero no cumpliste toda la demanda.',
    impact: 'Ingresos diarios de $600,000 COP.',
    additionalContext:
      'Aunque las motocicletas fueron más eficientes que las bicicletas, no pudiste cubrir toda la demanda de entregas.',
    image: '/options/N3_A.png',
    isCorrect: true,
    numberPanels: 60,
    invest: 1000000,
    balance: 600000,
    trustResult: -10,
    reputationResult: -10,
  },
  {
    id: 2,
    text: 'Comprar 3 motocicletas por $500,000 COP cada una.',
    consequence:
      'Pudiste cubrir toda la demanda de 80 entregas diarias, permitiendo que tu empresa siguiera creciendo.',
    impact: 'Ingresos diarios de $800,000 COP.',
    additionalContext:
      'Invertiste más, pero aseguraste el cumplimiento de la demanda actual y preparaste tu negocio para seguir creciendo.',
    image: '/options/N3_B.png',
    numberPanels: 80,
    invest: 1500000,
    isCorrect: true,
    balance: 800000,
    trustResult: 20,
    reputationResult: 20,
  },
  {
    id: 3,
    text: 'Comprar 1 motocicleta por $500,000 COP.',
    consequence:
      'Pudiste realizar solo 30 entregas diarias, lo que no fue suficiente para cumplir con la demanda.',
    impact: 'Ingresos diarios de $300,000 COP.',
    additionalContext:
      'No cumpliste con la demanda mínima y eso afectó tu reputación en el mercado.',
    image: '/options/N3_C.png',
    numberPanels: 30,
    invest: 500000,
    isCorrect: false,
    balance: 300000,
    trustResult: -20,
    reputationResult: -20,
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelThree: GameLevelI = {
  level: 3,
  name: 'Nivel 3: "Creciendo la Operación" - Nuevas Oportunidades de Contratos',
  introduction:
    'Tu empresa ha crecido rápidamente y necesitas un medio de transporte más eficiente. Ahora la demanda es de 80 entregas diarias. Cada entrega te genera $10,000 COP, pero necesitas motocicletas para cubrir las distancias más largas dentro de Sincelejo y realizar más entregas por día.',
  question: '¿Cuántas motocicletas comprarás?',
  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incapacidad operativa". Solo pudiste realizar 30 entregas diarias, lo que no cubrió la demanda mínima de 80 entregas, afectando tu capacidad para mantener contratos importantes.`,
  goal: 80,
  installationTime: 4.8,
  moneyPerInstallation: 10000,
};
