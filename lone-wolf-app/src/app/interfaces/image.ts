interface IImageFormat {
  name: string;
  url: string;
  width: number;
  height: number;
  mime: string;
}

export interface IImage {
  name: string;
  url: string;
  mime: string;
  alternativeText: string;
  width: number;
  height: number;
  formats: {
    thumbnail: IImageFormat;
    large: IImageFormat;
    medium: IImageFormat;
    small: IImageFormat;
    xsmall: IImage;
  };
}
