import CardInterface from "./CardInterface";

export default interface ColumnInterface {
  id: number;
  label: string;
  cards: CardInterface[];
  terms: any[];
}
