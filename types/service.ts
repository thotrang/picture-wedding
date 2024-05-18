import { IThumbnail } from "./thumbnail";

export interface IService {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  description: string;
  highlight: Highlight;
  createdAt: string;
  updatedAt: string;
  thumbnail?: IThumbnail;
}

export interface Highlight {
  description: string[];
}
