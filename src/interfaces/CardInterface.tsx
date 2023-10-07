export default interface CardInterface {
  id: number;
  question: string;
  answer: string;
  column: number;
  selected: boolean;
  tid: number;
  moveCard?: (direction: string) => void;
}
