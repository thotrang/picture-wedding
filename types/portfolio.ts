import { IThumbnail, SizeThumbnail } from "./thumbnail";
export interface IPortfolio {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  title?: string;
  description?: null;
  thumbnail?: IThumbnail;
  gallery?: Gallery;
  service?: Service;
}

export interface Formats {
  small: SizeThumbnail;
  thumbnail: SizeThumbnail;
}
export interface Gallery {
  data: null;
}

export interface Service {
  data: null;
}
