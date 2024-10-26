interface Options {
  id: number;
  text: string;
  consequence: string;
  impact: string;
  additionalContext?: string;
  isCorrect: boolean;
}

export interface GameLevel {
  level: number; // Número  del nivel
  name: string; // Nombre del nivel
  introduction: string; // Introducción narrativa del nivel
  question: string; // Array de preguntas para el nivel
  options: Options[];
  incorrectQuestionId: number; // ID de la pregunta que restará vida
}
