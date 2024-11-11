import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Comprar 2 bicicletas por $150,000 COP cada una (total $300,000 COP)',
    consequence:
      'Pudiste realizar justo las 20 entregas diarias, pero no tuviste capacidad para atender nuevos pedidos.',
    impact:
      'Ingresos diarios de $200,000 COP (20 entregas x $10,000 COP por entrega).',
    additionalContext:
      'Pudiste cumplir con la demanda mínima, pero no tuviste capacidad para crecer con nuevos clientes.',
    isCorrect: true,
    numberPanels: 20,
    invest: 300000,
    image: '/options/N1_A.png',
    balance: 200000,
    trustResult: 10,
    reputationResult: 10,
  },
  {
    id: 2,
    text: 'Comprar 3 bicicletas por $150,000 COP cada una (total $450,000 COP).',
    consequence:
      'Pudiste realizar hasta 30 entregas diarias, cubriendo la demanda actual y aceptando nuevos pedidos.',
    impact: 'Ingresos diarios de $300,000 COP (30 entregas diarias).',
    additionalContext:
      'Invertiste más, pero tuviste capacidad para aceptar nuevos pedidos y expandir tu negocio.',
    isCorrect: true,
    numberPanels: 30,
    invest: 450000,
    image: '/options/N1_B.png',
    balance: 300000,
    trustResult: -10,
    reputationResult: -10,
  },
  {
    id: 3,
    text: 'Comprar solo 1 bicicleta por $150,000 COP.',
    consequence:
      'Solo pudiste realizar 10 entregas diarias, lo que significa que no cumpliste con la demanda mínima de 20 entregas.',
    impact: 'Ingresos diarios de $100,000 COP.',
    additionalContext:
      'No pudiste cumplir con la demanda mínima de entregas, afectando negativamente tu reputación y las posibilidades de obtener nuevos contratos.',
    isCorrect: false,
    numberPanels: 3,
    invest: 150000,
    image: '/options/N1_C.png',
    balance: 100000,
    trustResult: -20,
    reputationResult: -10,
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelOne: GameLevelI = {
  level: 1,
  name: 'Nivel 1: "El Comienzo Sobre Ruedas" - Sincelejo (Bicicletas)',
  introduction:
    'Has lanzado tu empresa de entregas sostenibles en Sincelejo. Según un estudio de mercado, hay una demanda de 20 entregas diarias, y cada entrega te genera $10,000 COP. Tienes un límite de 8 horas diarias para completar las entregas. Cada bicicleta puede realizar 10 entregas por día.',
  question: '¿Cuántas bicicletas comprarás para cubrir la demanda?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incapacidad operativa". Al tener solo 1 bicicleta, no pudiste realizar las 20 entregas diarias requeridas, lo que afectó tu reputación y resultó en la pérdida de oportunidades de crecimiento.`,
  goal: 20,
  installationTime: 2,
  moneyPerInstallation: 10000,
};
