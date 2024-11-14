import Joyride, { CallBackProps, STATUS } from 'react-joyride';
import { Dialog } from '../dialog/Dialog';
import { GameHeader } from './GameHeader';
import { GameLevelI } from '../../interfaces/gameLevel.interface';
import { GameOptionI } from '../../interfaces/gameOption.interface';
import { Options } from '../dialog/Options';

const options: GameOptionI[] = [
  {
    id: 1,
    text: 'Comprar X artículos por $Y COP cada uno (total $Z COP)',
    consequence:
      'Pudiste realizar hasta 40 entregas diarias, pero no cubriste toda la demanda.',
    impact: 'Ingresos diarios de $400,000 COP.',
    additionalContext:
      'Pudiste mejorar la eficiencia, pero perdiste oportunidades de nuevos contratos por no cubrir toda la demanda.',
    isCorrect: true,
    numberPanels: 40,
    invest: 500000,
    image: '/options/N1_A.png',
    balance: 400000,
    trustResult: -5,
    reputationResult: -10,
  },
  {
    id: 2,
    text: 'Invertir en una suscripción de X meses a un servicio por $Y COP mensual (total $Z COP).',
    consequence:
      'Pudiste realizar hasta 60 entregas diarias, cubriendo la demanda actual y aceptando nuevos pedidos.',
    impact: 'Ingresos diarios de $600,000 COP.',
    additionalContext:
      'Invertiste más, pero aseguraste la capacidad para cubrir toda la demanda y tener espacio para crecer.',
    isCorrect: true,
    numberPanels: 60,
    invest: 750000,
    image: '/options/N1_B.png',
    balance: 600000,
    trustResult: 20,
    reputationResult: 20,
  },
  {
    id: 3,
    text: 'Adquirir un paquete de X unidades por un precio total de $Y COP.',
    consequence:
      'Pudiste realizar solo 20 entregas diarias, lo que no fue suficiente para cumplir con la demanda de 50 entregas diarias.',
    impact: 'Ingresos diarios de $200,000 COP.',
    additionalContext:
      'Al no cubrir la demanda mínima, perdiste contratos y tu reputación en el mercado.',
    isCorrect: false,
    numberPanels: 20,
    invest: 250000,
    image: '/options/N1_C.png',
    balance: 200000,
    trustResult: -10,
    reputationResult: -20,
  },
];
const test: GameLevelI = {
  level: 2,
  name: 'Nivel 0: "Tutorial"',
  introduction:
    'Tu empresa ha crecido, y ahora la demanda es de 50 entregas diarias, generando $10,000 COP por entrega. Las bicicletas de alta gama son más eficientes y permiten realizar más entregas diarias sin desgastarse tan rápido. Tienes que decidir cuántas comprar.',
  question: '¿Cuántas bicicletas de alta gama comprarás?',

  options: options,
  incorrectQuestionId: 1,
  incorrectQuestionMessage: `perdiste una vida por "incapacidad operativa". No pudiste cumplir con la demanda de 50 entregas diarias, lo que afectó tu reputación y resultó en la pérdida de contratos clave para tu negocio.`,
  goal: 50,
  installationTime: 0.4,
  moneyPerInstallation: 10000,
};

const steps = [
  {
    target: '.my-first-step',
    content:
      '¡Bienvenido! Esta es tu barra de vida. Tienes 3 vidas, así que cuídalas bien para seguir avanzando en el juego.',
    disableBeacon: true,
  },
  {
    target: '.my-second-step',
    content: 'Aquí está tu dinero. Asegúrate de gestionarlo sabiamente.',
  },
  {
    target: '.third-step',
    content:
      'Estas son las opciones disponibles para responder a la pregunta. Elige la que mejor se adapte a tu estrategia.',
  },
];

interface TutorialProps {
  onFinish: () => void;
}

export const Tutorial = ({ onFinish }: TutorialProps) => {
  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;

    // Verifica si el tutorial ha terminado o se ha saltado
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      onFinish(); // Llama a la función onFinish
    }
  };

  return (
    <div className=' w-full flex flex-col z-20 '>
      <Joyride
        run={true}
        steps={steps}
        showSkipButton
        continuous
        callback={handleJoyrideCallback} // Agrega el callback aquí
        locale={
          {
            back: 'Atrás',
            close: 'Cerrar',
            last: 'Finalizar',
            next: 'Siguiente',
            skip: 'Saltar tutorial',
          }
        }
      />
      <GameHeader balance={333333} currentScene={test} />
      <Dialog text='Hola' onNext={() => {}} />
      <Options options={options} onSelectOption={ ()=> {}} />
    </div>
  );
};
