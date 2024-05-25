import { IService } from "./service";
import { IThumbnail, SizeThumbnail, Data as DataThumbnail } from "./thumbnail";
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
  services?: Service;
  shortDescription?: string;
  client?: {
    name?: string;
  };
  year: string;
}

export interface Formats {
  small: SizeThumbnail;
  thumbnail: SizeThumbnail;
}
export interface Gallery {
  data: DataThumbnail[];
}

export interface Service {
  data: IService[];
}
