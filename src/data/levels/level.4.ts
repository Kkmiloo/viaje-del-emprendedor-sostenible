import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Comprar 2 vehículos eléctricos pequeños por $800,000 COP cada uno.',
    consequence:
      'Pudiste realizar hasta 80 entregas diarias, pero no cumpliste con toda la demanda.',
    impact: 'Ingresos diarios de $800,000 COP.',
    additionalContext:
      'Aunque los vehículos eléctricos son más eficientes, no lograste cubrir la demanda completa, lo que afectó tu capacidad para ganar más clientes.',
    image: '/options/N4_A.png',
    isCorrect: true,
    numberPanels: 90,
    invest: 1600000,
    balance: 800000,
    trustResult: -10,
    reputationResult: -10,
  },
  {
    id: 2,
    text: 'Comprar 3 vehículos eléctricos pequeños por $800,000 COP cada uno',
    consequence:
      'Pudiste cubrir completamente la demanda de 120 entregas diarias, permitiendo que tu empresa se mantenga eficiente y sostenible.',
    impact: 'Ingresos diarios de $1,200,000 COP.',
    additionalContext:
      'La inversión fue mayor, pero aseguraste que tu empresa pueda manejar toda la demanda actual y estar lista para futuros incrementos.',
    image: '/options/N4_B.png',
    isCorrect: true,
    numberPanels: 120,
    invest: 2400000,
    balance: 1_200_000,
    trustResult: 20,
    reputationResult: 20,
  },
  {
    id: 3,
    text: 'Comprar 1 vehículo eléctrico pequeño por $800,000 COP.',
    consequence:
      'Pudiste realizar solo 40 entregas diarias, lo que no fue suficiente para cubrir la demanda de 120 entregas.',
    impact: 'Ingresos diarios de $400,000 COP.',
    additionalContext:
      'Al no cubrir la demanda mínima, afectaste la reputación de tu empresa, perdiendo contratos importantes.',
    image: '/options/N4_C.png',
    isCorrect: false,
    numberPanels: 40,
    invest: 800_000,
    balance: 400_000,
    trustResult: -20,
    reputationResult: -20,
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelFour: GameLevelI = {
  level: 4,
  name: 'Nivel 4: "Sostenibilidad sobre Cuatro Ruedas" - Sincelejo (Vehículos Eléctricos Pequeños)',
  introduction:
    'Tu empresa sigue creciendo y la demanda diaria ha aumentado a 120 entregas diarias. Las bicicletas y motocicletas ya no son suficientes para gestionar todas las entregas. Ahora necesitas vehículos eléctricos pequeños para cubrir más pedidos por día, seguir siendo sostenible y atender entregas de mayor volumen.',
  question:
    '¿Cuántos vehículos eléctricos pequeños comprarás para cumplir con la demanda?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incapacidad operativa". Solo pudiste realizar 40 entregas diarias, lo que no cubrió la demanda mínima de 120 entregas, afectando tu capacidad para mantener contratos importantes y generando pérdidas de reputación.`,
  goal: 120,
  installationTime: 2,
  moneyPerInstallation: 10000,
  image: '/l4.jpg'
};
