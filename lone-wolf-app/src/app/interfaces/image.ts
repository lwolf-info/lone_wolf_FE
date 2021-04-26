export interface IImage {
  name: string;
  url: string;
  mime: string;
  alternativeText: string;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      name: string;
      url: string;
      width: number;
      height: number;
    }
  };
}
