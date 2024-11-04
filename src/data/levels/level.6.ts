import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Contratar a 3 gerentes de ciudad por $500,000 COP cada uno para gestionar los proyectos en cada ubicación.',
    consequence:
      'Pudiste realizar todas las 300 instalaciones, cubriendo el contrato nacional.',
    impact: 'Ingresos de $30,000,000 COP.',
    additionalContext:
      'Aunque la inversión en gerentes fue alta, lograste cumplir con todo el contrato y asegurar futuras oportunidades en cada ciudad.',
    isCorrect: true,
    balance: 30000000,
  },
  {
    id: 2,
    text: 'Subcontratar una empresa nacional de logística por $2,000,000 COP para gestionar los proyectos en las 3 ciudades.',
    consequence:
      'Lograste completar 240 instalaciones, pero no cubriste toda la demanda.',
    impact: 'Ingresos de $24,000,000 COP.',
    additionalContext:
      'La subcontratación te ayudó a cumplir con la mayor parte del proyecto, pero tu margen de beneficio fue menor y perdiste algunas oportunidades futuras.',
    isCorrect: true,
    balance: 24000000
  },
  {
    id: 3,
    text: 'Gestionar el proyecto nacional con tu equipo actual, sin contratar ni subcontratar ayuda.',
    consequence:
      'Solo pudiste realizar 150 instalaciones, lo que no fue suficiente para cumplir con el contrato.',
    impact: 'Ingresos de $15,000,000 COP.',
    additionalContext:
      'Perdiste la oportunidad de expandirte a nivel nacional y tu reputación en otras ciudades se vio afectada.',
    isCorrect: false,
    balance: 15000000
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelSix: GameLevelI = {
  level: 6,
  name: 'Nivel 6: "Expansión Nacional" - Proyectos Solares en Múltiples Ciudades',
  introduction:
    'Tu empresa se ha expandido lo suficiente como para realizar proyectos en 3 ciudades diferentes. La demanda es alta: 300 instalaciones en total, repartidas entre las ciudades de Bogotá, Medellín y Cali. Cada instalación genera $100,000 COP, pero la logística y la gestión de equipos se vuelven más complejas.',
  question:
    '¿Cómo gestionarás la expansión nacional y el cumplimiento de este gran contrato?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "mala planificación de expansión". Al solo completar 150 instalaciones, no cumpliste con el contrato nacional, afectando tu capacidad de seguir expandiéndote.`,
  goal: 300,
  installationTime: 5,
  moneyPerInstallation: 100000
};
