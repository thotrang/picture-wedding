

import { IService } from "./service";
import { ITag } from "./tags";
import { IThumbnail } from "./thumbnail";

export interface IBLog {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  title?: string;
  content?: string;
  thumbnail?: IThumbnail;
  topic?: string;
  service?: {
    data: IService
  };
  tags: {
    data: ITag[]
  }
}
