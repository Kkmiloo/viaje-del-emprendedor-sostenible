import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Contratar a un equipo internacional de expertos en plantas solares por $10,000,000 COP.',
    consequence:
      'Pudiste realizar las 500 instalaciones, cumpliendo con el contrato internacional.',
    impact: 'Ingresos de $300,000,000 COP.',
    additionalContext:
      'La inversión fue alta, pero aseguraste el éxito del proyecto y consolidaste tu empresa como líder global.',
    isCorrect: true,
  },
  {
    id: 2,
    text: 'Subcontratar la instalación a una empresa local por $15,000,000 COP.',
    consequence:
      'Pudiste realizar 800 instalaciones, pero no cubriste toda la demanda.',
    impact: 'Ingresos de $240,000,000 COP.',
    additionalContext:
      'Subcontrataste la mayor parte del trabajo, pero no lograste consolidar tu reputación como líder global',
    isCorrect: true,
  },
  {
    id: 3,
    text: 'Intentar gestionar el proyecto sin contratar más expertos.',
    consequence:
      'Solo pudiste realizar 500 instalaciones, lo que no fue suficiente para cumplir con el mega proyecto.',
    impact: 'Ingresos de $150,000,000 COP.',
    additionalContext:
      'No cumpliste con el contrato, afectando tu reputación global y perdiendo la oportunidad de consolidar tu imperio solar.',
    isCorrect: false,
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelEight: GameLevelI = {
  level: 8,
  name: 'Nivel 8: "Consolidación del Imperio Solar" - Mega Proyecto Solar en Sudamérica',
  introduction:
    'Has llegado al nivel más alto de tu carrera. Tu empresa ha sido seleccionada para un mega proyecto solar en Chile. Este contrato involucra la instalación de 1,000 paneles solares en una planta solar gigante. Cada instalación generará $300,000 COP, y necesitas gestionar cuidadosamente la logística y el talento necesario.',
  question:
    '¿Cómo gestionarás este mega proyecto y consolidarás tu empresa como líder global en energía solar?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incapacidad operativa en mega proyectos". Solo realizaste 500 instalaciones, lo que no cumplió con el mega proyecto y afectó tu posición en el mercado global.`,
};
