import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Comprar 2 camiones de largo alcance por $3,500,000 COP cada uno.',
    consequence:
      'Pudiste cubrir hasta 200 entregas diarias, pero no toda la demanda.',
    impact: 'Ingresos diarios de $2,000,000 COP.',
    additionalContext:
      'Lograste realizar una parte significativa de las entregas hacia los puertos internacionales, pero perdiste la oportunidad de asegurar contratos adicionales por no cubrir la demanda completa.',
    isCorrect: true,
    numberPanels: 200,
    invest: 7_000_000,
    balance: 2_000_000,
    image: '/options/N7_A.png',
    trustResult: 20,
    reputationResult: 20,
  },
  {
    id: 2,
    text: 'Comprar 3 camiones de largo alcance por $3,500,000 COP cada uno.',
    consequence:
      'Pudiste cubrir las 300 entregas diarias, asegurando que tu empresa pueda cumplir con las entregas hacia los puertos internacionales.',
    impact: 'Ingresos diarios de $3,000,000 COP',
    additionalContext:
      'La inversión fue considerable, pero lograste expandir tu operación y consolidar la logística de exportación desde Sucre hacia los puertos internacionales.',
    isCorrect: true,
    numberPanels: 300,
    invest: 10_500_000,
    balance: 3_000_000,
    image: '/options/N7_B.png',
    trustResult: -10,
    reputationResult: -10,
  },
  {
    id: 3,
    text: 'Comprar 1 camión de largo alcance por $3,500,000 COP.',
    consequence:
      'Pudiste realizar solo 100 entregas diarias, lo que no fue suficiente para cubrir la demanda de 300 entregas.',
    impact: 'Ingresos diarios de $1,000,000 COP',
    additionalContext:
      'No cubriste la demanda mínima y perdiste contratos clave para exportación, afectando la viabilidad de tu expansión internacional.',
    isCorrect: false,
    numberPanels: 100,
    invest: 3_500_000,
    balance: 1_000_000,
    image: '/options/N7_C.png',
    trustResult: -20,
    reputationResult: -20,
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelSeven: GameLevelI = {
  level: 7,
  name: 'Nivel 7: "Rutas Empresariales Internacionales" - Desde Sucre a Puertos Internacionales (Camiones de Largo Alcance)',
  introduction:
    'Tu empresa ha crecido a nivel regional, y ahora gestionas envíos hacia puertos clave del Caribe colombiano. La demanda diaria ha aumentado a 300 entregas diarias, y necesitas camiones de largo alcance que te permitan transportar productos desde las áreas de producción hasta los puertos internacionales. El objetivo es gestionar grandes volúmenes de productos para exportación.',
  question:
    '¿Cuántos camiones de largo alcance adquirirás para manejar las entregas hacia los puertos internacionales?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incapacidad operativa". Al cubrir solo 100 entregas diarias, no pudiste cumplir con la demanda de 300 entregas hacia los puertos, lo que resultó en la pérdida de contratos internacionales clave y afectó la expansión de tu empresa.`,
  goal: 300,
  installationTime: 5,
  moneyPerInstallation: 10_000,
};
