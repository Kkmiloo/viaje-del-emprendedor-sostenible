import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Comprar herramientas avanzadas de instalación para acelerar el proceso',
    consequence:
      'Pudiste realizar 4 de las 5 instalaciones. No lograste cumplir completamente con la demanda.',
    impact: 'Ingresos de $200,000 COP (4 instalaciones x $50,000 COP).',
    additionalContext:
      'Mejoraste la velocidad de instalación, pero algunos clientes quedaron insatisfechos',
    isCorrect: true,
    image: '🪛',
    balance: 200000,
  },
  {
    id: 2,
    text: 'Contratar un ayudante por $100,000 COP para completar más instalaciones.',
    consequence:
      'Pudiste completar las 5 instalaciones en un día, cumpliendo con la demanda.',
    impact: 'Ingresos de $250,000 COP (5 instalaciones x $50,000 COP).',
    additionalContext:
      'Lograste satisfacer a todos los clientes y mejorar tu reputación.',
    isCorrect: true,
    image: '👷‍♂️',
    balance: 250000
  },
  {
    id: 3,
    text: 'Intentar realizar las instalaciones tú solo, sin adquirir nuevas herramientas.',
    consequence:
      'Solo lograste completar 3 instalaciones, no cumpliendo con la demanda mínima.',
    impact: 'Ingresos de $150,000 COP (3 instalaciones x $50,000 COP).',
    additionalContext:
      'Al no cumplir con la demanda mínima, afectaste tu reputación en el mercado local.',
    isCorrect: false,
    image: '💪',
    balance: 150000
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelOne: GameLevelI = {
  level: 1,
  name: 'Nivel 1: "Los Primeros Rayos" - Desarrollo de Prototipos Iniciales',
  introduction:
    'Has lanzado tu empresa de energía solar desde tu hogar. Tienes una demanda inicial para instalar paneles solares en 5 casas locales. Cada instalación te genera $50,000 COP. Tienes un límite de 8 horas diarias para completar las instalaciones, y cada instalación de panel solar toma 2 horas.',
  question:
    '¿Qué estrategia usarás para cubrir la demanda inicial de instalaciones de paneles solares?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incapacidad operativa". Solo pudiste realizar 3 instalaciones, lo que no cubrió las 5 instalaciones requeridas, afectando tu reputación y perdiendo futuros contratos.`,
  goal: 5,
  installationTime: 2,
  moneyPerInstallation: 50000
};
