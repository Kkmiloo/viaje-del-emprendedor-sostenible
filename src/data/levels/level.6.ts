import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Comprar 2 camiones eléctricos por $2,500,000 COP cada uno.',
    consequence:
      'Pudiste cubrir 150 entregas diarias, pero no cumpliste con toda la demanda.',
    impact: 'Ingresos diarios de $1,500,000 COP.',
    additionalContext:
      'Lograste cubrir una parte significativa de las entregas, pero la falta de capacidad completa afectó tu posibilidad de captar más contratos.',
    image: '/options/N6_A.png',
    isCorrect: true,
    numberPanels: 300,
    invest: 1500000,
    balance: 30000000,
    trustResult: 20,
    reputationResult: 20,
  },
  {
    id: 2,
    text: 'Comprar 3 camiones eléctricos por $2,500,000 COP cada uno.',
    consequence:
      'Pudiste cubrir las 200 entregas diarias, manejando toda la logística en Sucre.',
    impact: 'Ingresos diarios de $2,000,000 COP.',
    additionalContext:
      'Aunque la inversión fue grande, pudiste cubrir toda la demanda interregional y consolidar tu presencia en todo el departamento.',
    image: '/options/N3_B.png',
    isCorrect: true,
    numberPanels: 240,
    invest: 2000000,
    balance: 24000000,
    trustResult: 10,
    reputationResult: -10,
  },
  {
    id: 3,
    text: 'Comprar 1 camión eléctrico por $2,500,000 COP.',
    consequence:
      'Pudiste realizar solo 100 entregas diarias, lo que no fue suficiente para cubrir la demanda de 200 entregas.',
    impact: 'Ingresos diarios de $1,000,000 COP.',
    additionalContext:
      'Al no cubrir la demanda mínima, afectaste la reputación de tu empresa en las regiones de Sucre.',
    image: '/options/N3_C.png',
    isCorrect: false,
    numberPanels: 150,
    invest: 0,
    balance: 15000000,
    trustResult: -20,
    reputationResult: -20,
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelSix: GameLevelI = {
  level: 6,
  name: 'Nivel 6: "Logística en Carretera" - Regiones de Sucre (Camiones Eléctricos)',
  introduction:
    'Tu empresa ha crecido lo suficiente como para manejar la logística interregional en todo el departamento de Sucre. Ahora tienes que gestionar 200 entregas diarias y necesitas camiones eléctricos para cubrir largas distancias y manejar grandes volúmenes de productos.',
  question:
    '¿Cuántos camiones eléctricos comprarás para manejar la logística en todo el departamento de Sucre?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incapacidad operativa". Al solo cubrir 100 entregas diarias, no pudiste cumplir con la demanda mínima de 200 entregas, lo que afectó tu capacidad para mantener contratos clave y expandir tu negocio interregionalmente.`,
  goal: 300,
  installationTime: 5,
  moneyPerInstallation: 100000,
};
