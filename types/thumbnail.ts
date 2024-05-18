export interface IThumbnail {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: Provider_metadata;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  small: SizeThumbnail;
  medium: SizeThumbnail;
  thumbnail: SizeThumbnail;
}

export interface SizeThumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: Provider_metadata;
}

export interface Provider_metadata {
  public_id: string;
  resource_type: string;
}
