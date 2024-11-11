import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Comprar 2 bicicletas de alta gama por $250,000 COP cada una.',
    consequence:
      'Pudiste realizar hasta 40 entregas diarias, pero no cubriste toda la demanda.',
    impact: 'Ingresos diarios de $400,000 COP.',
    additionalContext:
      'Pudiste mejorar la eficiencia, pero perdiste oportunidades de nuevos contratos por no cubrir toda la demanda.',
    isCorrect: true,
    numberPanels: 40,
    invest: 500000,
    image: '/options/N1_A.png',
    balance: 400000,
    trustResult: -5,
    reputationResult: -10,
  },
  {
    id: 2,
    text: 'Comprar 3 bicicletas de alta gama por $250,000 COP cada una.',
    consequence:
      'Pudiste realizar hasta 60 entregas diarias, cubriendo la demanda actual y aceptando nuevos pedidos.',
    impact: 'Ingresos diarios de $600,000 COP.',
    additionalContext:
      'Invertiste más, pero aseguraste la capacidad para cubrir toda la demanda y tener espacio para crecer.',
    isCorrect: true,
    numberPanels: 60,
    invest: 750000,
    image: '/options/N1_B.png',
    balance: 600000,
    trustResult: 20,
    reputationResult: 20,
  },
  {
    id: 3,
    text: 'Comprar 1 bicicleta de alta gama por $250,000 COP.',
    consequence:
      'Pudiste realizar solo 20 entregas diarias, lo que no fue suficiente para cumplir con la demanda de 50 entregas diarias.',
    impact: 'Ingresos diarios de $200,000 COP.',
    additionalContext:
      'Al no cubrir la demanda mínima, perdiste contratos y tu reputación en el mercado.',
    isCorrect: false,
    numberPanels: 20,
    invest: 250000,
    image: '/options/N2_C.png',
    balance: 200000,
    trustResult: -10,
    reputationResult: -20,
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelTwo: GameLevelI = {
  level: 2,
  name: 'Nivel 2: "Expansión con Pedales" - Sincelejo (Bicicletas de Alta Gama)',
  introduction:
    'Tu empresa ha crecido, y ahora la demanda es de 50 entregas diarias, generando $10,000 COP por entrega. Las bicicletas de alta gama son más eficientes y permiten realizar más entregas diarias sin desgastarse tan rápido. Tienes que decidir cuántas comprar.',
  question: '¿Cuántas bicicletas de alta gama comprarás?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incapacidad operativa". No pudiste cumplir con la demanda de 50 entregas diarias, lo que afectó tu reputación y resultó en la pérdida de contratos clave para tu negocio.`,
  goal: 50,
  installationTime: 0.4,
  moneyPerInstallation: 10000,
};
