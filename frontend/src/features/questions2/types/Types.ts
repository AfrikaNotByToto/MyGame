export type Question = {
  id: number;
  topic_id: number;
  question: string;
  answer:string;
  price: number;
};
export type State = {
  questions: Question[]
};
