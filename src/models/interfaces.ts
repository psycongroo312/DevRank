export interface Question {
    id: number;
    text: string;
    options: string[];
    correctIndex: number;
    difficulty?: 'easy' | 'medium' | 'hard'; 
  };