import { ResultItem } from "./ResultItem";

export interface ResultItemWrapper {
  result: ResultItem;
  status: 'planned' | 'pending' | 'success' | 'error';
  order: number;
  delay?: number;
  timeout?: number;
}
