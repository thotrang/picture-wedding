import { IThumbnail } from "./thumbnail";

export interface IClient {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  createdAt: string;
  updatedAt: string;
  thumbnail?: IThumbnail;
}
