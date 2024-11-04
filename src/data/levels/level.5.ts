import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Contratar a 2 gerentes de proyectos por $400,000 COP cada uno, quienes gestionarán los equipos de instalación.',
    consequence:
      'Pudiste cumplir con todas las 100 instalaciones en los edificios comerciales.',
    impact: 'Ingresos de $15,000,000 COP.',
    additionalContext:
      'Aunque la inversión en gerentes fue alta, la capacidad organizativa que añadieron permitió cumplir con el proyecto sin problemas.',
    isCorrect: true,
  },
  {
    id: 2,
    text: 'Subcontratar a una empresa de logística para que gestione el proyecto por $1,000,000 COP.',
    consequence:
      'Lograste realizar 80 instalaciones en los edificios comerciales, pero no cubriste toda la demanda.',
    impact: 'Ingresos de $12,000,000 COP.',
    additionalContext:
      'Subcontrataste la logística, lo que te permitió avanzar rápidamente, pero no cumpliste completamente con el proyecto.',
    isCorrect: true,
  },
  {
    id: 3,
    text: 'Intentar gestionar el proyecto con tu equipo actual, sin contratar personal adicional.',
    consequence:
      'Pudiste realizar solo 50 instalaciones, lo que no fue suficiente para cumplir con el contrato.',
    impact: 'Ingresos de $7,500,000 COP.',
    additionalContext:
      'Perdiste futuras oportunidades de contratos comerciales debido a la incapacidad de cumplir con toda la demanda.',
    isCorrect: false,
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelFive: GameLevelI = {
  level: 5,
  name: 'Nivel 5: "Logística Solar" - Instalación en Edificios Comerciales',
  introduction:
    'Tu empresa ha sido seleccionada para un contrato de 100 instalaciones solares en edificios comerciales. Este proyecto es más complejo que las viviendas residenciales y cada instalación genera $150,000 COP. Para cumplir con este proyecto, necesitas gestionar la logística y contratar personal especializado.',
  question:
    '¿Cómo gestionarás la logística y el personal necesario para cumplir con este proyecto?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "mala gestión logística". Al solo completar 50 instalaciones, no cumpliste con el contrato, afectando tu reputación con los grandes clientes comerciales.`,
  goal: 100,
  installationTime: 6,
  moneyPerInstallation: 150000
};
