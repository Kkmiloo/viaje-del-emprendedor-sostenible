import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Comprar herramientas de instalación más avanzadas por $200,000 COP, mejorando tu eficiencia.',
    consequence:
      'Pudiste realizar 16 instalaciones diarias, pero no cubriste toda la demanda.',
    impact:
      'Ingresos diarios de $800,000 COP (16 instalaciones x $50,000 COP).',
    additionalContext:
      'Mejoraste la eficiencia, pero aún perdiste contratos debido a la incapacidad de cubrir toda la demanda.',
    isCorrect: true,
    image: '🛠️'
  },
  {
    id: 2,
    text: 'Contratar a un asistente por $150,000 COP, permitiendo cumplir con toda la demanda.',
    consequence:
      'Pudiste realizar las 20 instalaciones diarias, cubriendo toda la demanda y mejorando tu reputación.',
    impact:
      'Ingresos diarios de $1,000,000 COP (20 instalaciones x $50,000 COP).',
    additionalContext:
      'Invertiste en talento, asegurando el crecimiento de la empresa.',
    isCorrect: true,
    image: '👨‍🏭'
  },
  {
    id: 3,
    text: 'Comprar paneles adicionales, pero sin contratar más personal.',
    consequence:
      'Pudiste realizar solo 12 instalaciones diarias, lo que no fue suficiente.',
    impact:
      'Ingresos diarios de $600,000 COP (12 instalaciones x $50,000 COP).',
    additionalContext:
      'No cumpliste con la demanda mínima, afectando tu reputación.',
    isCorrect: false,
    image: '🔲'
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelTwo: GameLevelI = {
  level: 2,
  name: 'Nivel 2: "Expansión Solar" - Aumentando la Capacidad de Instalación',
  introduction:
    'Tu empresa ha crecido, y ahora la demanda es de 20 instalaciones diarias. Cada instalación sigue generando $50,000 COP. Tienes que contratar más empleados o mejorar tu equipo para cumplir con la demanda.',
  question:
    '¿Cómo ampliarás tu capacidad para cumplir con la nueva demanda de instalaciones solares?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incapacidad operativa". Solo lograste realizar 12 instalaciones, afectando gravemente tu reputación`,
};
