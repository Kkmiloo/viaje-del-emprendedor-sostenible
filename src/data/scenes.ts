import { GameLevel } from '../interfaces/gameLevel.interface';

export const scenes: GameLevel[] = [
  {
    level: 1,
    name: 'Nivel 1: "Los Primeros Rayos" - Desarrollo de Prototipos Iniciales',
    introduction:
      'Has lanzado tu empresa de energía solar desde tu hogar. Tienes una demanda inicial para instalar paneles solares en 5 casas locales. Cada instalación te genera $50,000 COP. Tienes un límite de 8 horas diarias para completar las instalaciones, y cada instalación de panel solar toma 2 horas.',
    question:
      '¿Qué estrategia usarás para cubrir la demanda inicial de instalaciones de paneles solares?',
    options: [
      {
        id: 1,
        text: 'Comprar herramientas avanzadas de instalación para acelerar el proceso',
        consequence:
          'Pudiste realizar 4 de las 5 instalaciones. No lograste cumplir completamente con la demanda.',
        impact: 'Ingresos de $200,000 COP (4 instalaciones x $50,000 COP).',
        additionalContext:
          'Mejoraste la velocidad de instalación, pero algunos clientes quedaron insatisfechos',
        isCorrect: true,
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
      },
    ],
    incorrectQuestionId: 3,
  },
];
