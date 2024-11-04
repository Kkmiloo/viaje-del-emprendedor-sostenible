import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Contratar a 3 instaladores adicionales por $200,000 COP cada uno, permitiendo cumplir con la demanda.',
    consequence:
      'Pudiste instalar todos los paneles en 100 hogares, cumpliendo con el proyecto.',
    impact: 'Ingresos de $7,500,000 COP.',
    additionalContext:
      'Invertiste en más personal, asegurando el cumplimiento del proyecto y mejorando tu reputación.',
    isCorrect: true,
    balance: 7500000
  },
  {
    id: 2,
    text: 'Comprar herramientas avanzadas para mejorar la productividad de tu equipo actual.',
    consequence:
      'Pudiste instalar 80 paneles, lo que fue suficiente para satisfacer la mayor parte del contrato.',
    impact: 'Ingresos de $6,000,000 COP.',
    additionalContext:
      'Aunque no cumpliste completamente con el proyecto, mantuviste tu reputación relativamente intacta.',
    isCorrect: true,
    balance: 6000000
  },
  {
    id: 3,
    text: 'Intentar gestionar el proyecto con tu equipo actual, sin contratar ni mejorar herramientas.',
    consequence:
      'Solo pudiste instalar 50 paneles, lo que no fue suficiente para cumplir con el proyecto.',
    impact: 'Ingresos de $3,750,000 COP.',
    additionalContext:
      'Perdiste futuras oportunidades de proyectos municipales por no cumplir con el contrato.',
    isCorrect: false,
    balance: 3750000
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelFour: GameLevelI = {
  level: 4,
  name: 'Nivel 4: "Expansión a Proyectos Municipales" - Energía Solar para la Comunidad',
  introduction:
    'Tu empresa ha crecido lo suficiente como para comenzar a realizar proyectos municipales. El gobierno local te ha contratado para instalar paneles solares en 100 hogares, y cada instalación generará $75,000 COP. Este es un proyecto grande que requerirá contratar más personal.',
  question: '¿Qué estrategia adoptarás para gestionar este proyecto?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incumplimiento de contrato". Solo instalaste 50 paneles, lo que no fue suficiente para cumplir con el contrato.`,
  goal: 100,
  installationTime: 2,
  moneyPerInstallation: 75000
};
