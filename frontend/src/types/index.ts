export type Question = {
    id: number;
    question: string;
    answer: string;
};

export type Category = {
    id: number;
    name: string;
    description: string;
    questions: Question[];
};