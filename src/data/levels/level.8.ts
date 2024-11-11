import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { shuffleOptions } from '../../utils/randomizeOptions';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Comprar 2 camiones eléctricos y alquilar un barco pequeño (total $5,000,000 COP).',
    consequence:
      'Consecuencias: Pudiste realizar 350 entregas diarias hacia el puerto, pero no cubriste toda la demanda de exportaciones.',
    impact:
      'Ingresos diarios de $5,250,000 COP (350 entregas diarias x $15,000 COP por entrega).',
    additionalContext:
      'Lograste gestionar parte de la exportación, pero perdiste oportunidades de contratos internacionales más grandes por no cubrir la demanda completa.',
    isCorrect: true,
    numberPanels: 350,
    invest: 5_000_000,
    balance: 5_250_000,
    image: '/options/N8_A.png',
    trustResult: -10,
    reputationResult: -10,
  },
  {
    id: 2,
    text: 'Comprar 3 camiones eléctricos y alquilar un barco grande (total $7,500,000 COP).',
    consequence:
      'Pudiste cubrir toda la demanda de 500 entregas diarias, asegurando que tu empresa pueda manejar las exportaciones sin problemas.',
    impact:
      'Ingresos diarios de $7,500,000 COP (500 entregas diarias x $15,000 COP por entrega).',
    additionalContext:
      'La inversión fue mayor, pero lograste manejar todas las entregas y consolidar tu operación de exportación en Coveñas, asegurando la expansión global de tu empresa.',
    isCorrect: true,
    numberPanels: 500,
    invest: 7_500_000,
    balance: 7_500_000,
    image: '/options/N3_B.png',
    trustResult: 20,
    reputationResult: 20,
  },
  {
    id: 3,
    text: 'Comprar 1 camión eléctrico y alquilar un barco pequeño (total $2,500,000 COP).',
    consequence:
      'Pudiste realizar solo 200 entregas diarias, lo que no fue suficiente para cumplir con la demanda de 500 entregas.',
    impact: 'Ingresos diarios de $3,000,000 COP.',
    additionalContext:
      'No cubriste la demanda mínima, afectando tu reputación en los mercados internacionales y perdiendo contratos clave.',
    isCorrect: false,
    balance: 3_000_000,
    invest: 2_500_000,
    numberPanels: 200,
    image: '/options/N3_C.png',
    trustResult: -20,
    reputationResult: -20,
  },
];

const randomizedOptions = shuffleOptions(options);

const incorrectQuestionId = options.find(
  (option) => option.isCorrect === false
)!.id;

export const levelEight: GameLevelI = {
  level: 8,
  name: 'Nivel 8: "Coveñas, la Última Frontera" - Exportación desde Coveñas (Barcos y Camiones Eléctricos)',
  introduction:
    'Has alcanzado el nivel más alto de tu expansión. Ahora gestionas la exportación internacional desde el puerto de Coveñas, uno de los más importantes del Caribe colombiano. Necesitas coordinar el transporte terrestre con camiones eléctricos y el transporte marítimo utilizando barcos de carga sostenibles. La demanda diaria ha aumentado a 500 entregas, y cada entrega genera $15,000 COP debido al valor de las exportaciones.',
  question:
    '¿Cómo gestionarás las entregas hacia el puerto de Coveñas y su exportación internacional?',

  options: randomizedOptions,
  incorrectQuestionId: incorrectQuestionId,
  incorrectQuestionMessage: `perdiste una vida por "incapacidad operativa". Al cubrir solo 200 entregas diarias, no pudiste cumplir con la demanda de 500 entregas, lo que resultó en la pérdida de contratos internacionales clave y afectó tu expansión global.`,
  goal: 500,
  installationTime: 10,
  moneyPerInstallation: 15_000,
};
