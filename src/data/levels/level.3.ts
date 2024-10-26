import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Contratar a 2 instaladores por $300,000 COP cada uno, permitiendo cumplir con la demanda.',
    consequence:
      'Pudiste cubrir las 50 instalaciones en 30 días, cumpliendo con el contrato.',
    impact: 'Ingresos de $5,000,000 COP (50 instalaciones x $100,000 COP).',
    additionalContext:
      'Invertiste más en personal, pero aseguraste la entrega del proyecto y obtuviste nuevas oportunidades.',
    isCorrect: true,
  },
  {
    id: 2,
    text: 'Subcontratar una empresa externa por $800,000 COP, ayudándote a cumplir con el plazo.',
    consequence:
      'Pudiste cubrir las 50 instalaciones, pero tus márgenes fueron más bajos.',
    impact: 'Ingresos de $4,200,000 COP (menos el costo de subcontratación).',
    additionalContext:
      'Cumpliste con el contrato, pero tus ganancias fueron reducidas.',
    isCorrect: true,
  },
  {
    id: 3,
    text: 'Intentar gestionar el contrato con tu equipo actual, sin aumentar la capacidad.',
    consequence: 'Solo pudiste instalar 30 paneles, incumpliendo el contrato.',
    impact: 'Ingresos de $3,000,000 COP (30 instalaciones x $100,000 COP).',
    additionalContext:
      'Perdiste oportunidades futuras por no cumplir con el contrato.',
    isCorrect: false,
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
    'Tu empresa ha ganado popularidad y ahora tienes la oportunidad de instalar paneles solares en empresas comerciales. La demanda es mayor, con contratos que requieren 50 instalaciones en 30 días. Cada instalación comercial te generará $100,000 COP.',
  question: '¿Cómo gestionarás este contrato de mayor escala?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
};
