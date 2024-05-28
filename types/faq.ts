import { IBLog } from "./blog";

export interface IQuestion {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  question: string;
  answer: null;
  createdAt: string;
  updatedAt: string;
  link?: string;
  blog?: {
    data?: IBLog;
  };
}
