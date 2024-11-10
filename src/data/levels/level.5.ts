import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Comprar 2 vehículos eléctricos grandes por $1,500,000 COP cada uno.',
    consequence:
      'Pudiste realizar hasta 100 entregas diarias, pero no cubriste toda la demanda.',
    impact: 'Ingresos diarios de $1,000,000 COP.',
    additionalContext:
      'Aunque lograste cubrir una parte significativa de la demanda, perdiste oportunidades de contratos adicionales por no cubrir el 100% de las entregas.',
    image: '/options/N5_A.png',
    isCorrect: true,
    numberPanels: 100,
    invest: 800000,
    balance: 15000000,
    trustResult: 20,
    reputationResult: 20,
  },
  {
    id: 2,
    text: 'Comprar 3 vehículos eléctricos grandes por $1,500,000 COP cada uno.',
    consequence:
      'Pudiste cubrir completamente la demanda de 150 entregas diarias, permitiendo que tu empresa siga creciendo.',
    impact: 'Ingresos diarios de $1,500,000 COP.',
    additionalContext:
      'Aunque la inversión fue grande, lograste cubrir la demanda total y aseguraste el crecimiento futuro de tu empresa en los municipios cercanos.',
    image: '/options/N3_B.png',
    isCorrect: true,
    numberPanels: 80,
    invest: 1000000,
    balance: 12000000,
    trustResult: 10,
    reputationResult: -10,
  },
  {
    id: 3,
    text: 'Comprar 1 vehículo eléctrico grande por $1,500,000 COP.',
    consequence:
      'Pudiste realizar solo 50 entregas diarias, lo que no fue suficiente para cubrir la demanda de 150 entregas.',
    impact: 'Ingresos diarios de $500,000 COP.',
    additionalContext:
      'Al no cubrir la demanda mínima, afectaste la reputación de tu empresa en los municipios cercanos, lo que resultó en la pérdida de contratos.',
    image: '/options/N3_C.png',
    isCorrect: false,
    invest: 0,
    numberPanels: 50,
    balance: 7500000,
    trustResult: -20,
    reputationResult: -20,
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelFive: GameLevelI = {
  level: 5,
  name: 'Nivel 5: "Tránsito hacia la Eficiencia" - Sincelejo y Municipios Cercanos (Vehículos Eléctricos Grandes)',
  introduction:
    'Tu empresa ha comenzado a expandirse fuera de Sincelejo y hacia municipios cercanos, lo que significa que necesitas cubrir distancias más largas y manejar cargas más grandes. Ahora, la demanda diaria es de 150 entregas, lo que requiere vehículos eléctricos grandes para maximizar la eficiencia y la sostenibilidad.',
  question:
    '¿Cuántos vehículos eléctricos grandes comprarás para cumplir con la demanda en los municipios cercanos?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incapacidad operativa". Al solo cubrir 50 entregas diarias, no pudiste cumplir con la demanda mínima de 150 entregas, afectando gravemente tu reputación y capacidad de obtener contratos importantes en los municipios cercanos.`,
  goal: 100,
  installationTime: 6,
  moneyPerInstallation: 150000,
};
